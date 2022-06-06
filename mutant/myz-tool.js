dieGlyphs = {
    "base": ["☣<sup>1</sup>", "2️", "3️", "4️", "5️", "☢<sup>6</sup>"],
    "skill": ["1️", "2️", "3️", "4️", "5️", "☢<sup>6</sup>"],
    "gear": ["✴<sup>1</sup>", "2️", "3️", "4️", "5️", "☢<sup>6</sup>"],
    "negative": ["1️", "2️", "3️", "4️", "5️", "☢<sup>6</sup>"],
    "other": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"]
}

function getModifiedStat(statId) {
    var stat = getValueById(statId, "stat");
    var trauma = getValueById(statId, "trauma");
    return Math.max(0, stat - trauma);
}

function rollOne() {
    return Math.floor(Math.random() * 6) + 1;
}

function sortDescending(array) {
    array.sort(function (a, b) { return b - a });
}

function roll(numDice) {
    dice = [];
    diceString = "";
    for (var i = 0; i < numDice; i++) {
        die = rollOne();
        dice.push(die);
    }

    return dice
}

function rollAll(base, skill, gear, other) {
    result = {
        "base": roll(base),
        "skill": skill >= 0 ? roll(skill) : [],
        "gear": roll(gear),
        "negative": skill < 0 ? roll(-skill) : [],
        "other": roll(other),
        "rerollable": true
    }
    return result;
}

function addDieGraphic(number, dieType) {
    var dieGraphic = $('<span class="die"></span>').html(dieGlyphs[dieType][number - 1]).addClass("die-" + dieType);
    $("#roll").append(dieGraphic);
}

function addAllDiceGraphicsForOneType(dice, dieType) {
    for (var i = 0; i < dice.length; i++) {
        addDieGraphic(dice[i], dieType)
    }
}

function displayResult(result, clear) {
    if (clear) {
        $("#roll").empty();
        addAllDiceGraphicsForOneType(result.base, "base");
        addAllDiceGraphicsForOneType(result.skill, "skill");
        addAllDiceGraphicsForOneType(result.gear, "gear");
        addAllDiceGraphicsForOneType(result.negative, "negative");
        addAllDiceGraphicsForOneType(result.other, "other");
        $("#roll").append($("<span></span>"));

        $("#rerollButton").prop("disabled", !result.rerollable)
    }
}

function rollAndDisplay(base, skill, gear, other) {
    var result = rollAll(base, skill, gear, other);
    displayResult(result, true);
    window.lastRoll = result;
}

function rerollAndDisplay() {
    var result = reroll(window.lastRoll);
    displayResult(result, true);
}

function rerollByDieType(dice, dieType) {
    newDice = []
    for (var i = 0; i < dice.length; i++) {
        oldDie = dice[i];
        if ((dieType === "base" && (oldDie === 1 || oldDie === 6))
            || (dieType === "skill" && oldDie === 6)
            || (dieType === "gear" && (oldDie === 1 || oldDie === 6))
        ) {
            newDice.push(oldDie);
        } else {
            newDice.push(rollOne());
        }
    }
    sortDescending(newDice);
    return newDice;
}

function reroll(previousResult) {
    return {
        "base": rerollByDieType(previousResult.base, "base"),
        "skill": rerollByDieType(previousResult.skill, "skill"),
        "gear": rerollByDieType(previousResult.gear, "gear"),
        "negative": rerollByDieType(previousResult.negative, "negative"),
        "other": rerollByDieType(previousResult.other, "other"),
        "rerollable": false
    };
}

function getValueById(valueId, prefix) {
    if (valueId) {
        var parsedValue = parseInt($("#" + prefix + "-" + valueId).val());
        return isNaN(parsedValue) ? 0 : parsedValue;
    }
    return 0;
}

function getStatValue(statId) {
    return getModifiedStat(statId);
}

function getSkillValue(skillId) {
    return getValueById(skillId, "skill");
}

function getGearValue(gearId) {
    return getValueById(gearId, "gear");
}

function getCharName() {
    return getQuery()["char"];
}

function saveOneField(fieldId, charName) {
    var value = $(fieldId).val();
    var itemName = "myz-tool" + fieldId;
    if (charName) {
        itemName += ("[" + charName + "]");
    }
    window.localStorage.setItem(itemName, value);
}

function saveData() {
    var charName = getCharName();
    $(".saved").each(function (i) {
        saveOneField("#" + $(this).attr("id"), charName);
    });
}

function loadOneField(fieldId, charName) {
    var itemName = "myz-tool" + fieldId;
    if (charName) {
        itemName += ("[" + charName + "]");
    }
    var value = window.localStorage.getItem(itemName);
    $(fieldId).val(value);
}

function loadData() {
    var charName = getCharName();
    $(".saved").each(function (i) {
        loadOneField("#" + $(this).attr("id"), charName);
    });
}

function setAdHoc(stat, skill, gear, modifier) {
    $("#stat-adhoc").val(stat);
    $("#skill-adhoc").val(skill);
    $("#gear-adhoc").val(gear);
    $("#modifier-adhoc").val(modifier);
}

function rollAdHoc() {
    var statValue = getStatValue("adhoc");
    var skillValue = getSkillValue("adhoc");
    var gearValue = getGearValue("adhoc");
    var modifier = getValueById("adhoc", "modifier");
    rollAndDisplay(statValue, skillValue + modifier, gearValue, 0);
}

function getQuery() {
    var rawQuery = window.location.search;
    var output = {}
    if (rawQuery.startsWith("?")) {
        var items = rawQuery.substring(1).split(";");
        for (var i = 0; i < items.length; i++) {
            var keyValue = items[i].split("=");
            output[keyValue[0]] = keyValue[1];
        }
    }
    return output;
}

$(document).ready(function () {
    $("button.roll-stat").click(function () {
        var statValue = getStatValue($(this).attr("data-stat"));
        var modifier = getValueById("stat", "modifier");

        setAdHoc(statValue, 0, 0, modifier);
        rollAdHoc();
    });

    $("button.roll-skill").click(function () {
        var statValue = getStatValue($(this).attr("data-stat"));
        var skillValue = getSkillValue($(this).attr("data-skill"));
        var modifier = getValueById("skill", "modifier");

        setAdHoc(statValue, skillValue, 0, modifier);
        rollAdHoc();
    });

    $("button.roll-special-skill").click(function () {
        var selectedSkill = $(this).attr("data-skill");
        var statId = $("#skill-" + selectedSkill + "-name").children("option:selected").attr("data-stat");
        var statValue = getStatValue(statId);
        var skillValue = getSkillValue($(this).attr("data-skill"));
        var modifier = getValueById("skill", "modifier");

        setAdHoc(statValue, skillValue, 0, modifier);
        rollAdHoc();
    });

    $(".adhoc button").click(rollAdHoc);

    $(".roll-fight").click(function () {
        var statValue = getStatValue("strength");
        var skillValue = getSkillValue("fight");
        var selectedWeaponIndex = $("input[name='selected-melee-weapon']:checked").val();
        var gearValue = getGearValue("weapon-melee-" + selectedWeaponIndex);
        var modifier = getValueById("fight", "modifier");

        setAdHoc(statValue, skillValue, gearValue, modifier);
        rollAdHoc();
    });

    $(".roll-shoot").click(function () {
        var statValue = getStatValue("agility");
        var skillValue = getSkillValue("shoot");
        var selectedWeaponIndex = $("input[name='selected-ranged-weapon']:checked").val();
        var gearValue = getGearValue("weapon-ranged-" + selectedWeaponIndex);
        var modifier = parseInt($("#ranged-attack-distance").val()) + getValueById("shoot", "modifier");

        setAdHoc(statValue, skillValue, gearValue, modifier);
        rollAdHoc();
    });

    $("#roll-initiative").click(function () {
        var agility = getStatValue("agility");

        if ($("#experienced-fighter-plus2").is(":checked")) {
            agility += 2;
        }

        var rolls = [rollOne() + agility];

        if ($("#experienced-fighter").is(":checked")) {
            rolls.push(rollOne() + agility);
        }

        displayResult({
            "base": [], "skill": [], "gear": [], "other": rolls, "negative": [], "rerollable": false
        }, true);
    });

    $("#change-char").click(function () {
        var charName = $("#change-char-name").val();
        window.location.search = "?char=" + charName;
    });

    $(".roll-quick").click(function () {
        var number = parseInt($(this).attr("data-amount"));
        setAdHoc(number, 0, 0, 0);
        rollAdHoc();
    });

    $("label input[type='checkbox']").checkboxradio();

    var charName = getCharName();
    if (charName) {
        $("#change-char-name").val(decodeURIComponent(charName));
    }

    $(".controlgroup-vertical").controlgroup({
        "direction": "vertical"
    });

    loadData();
});