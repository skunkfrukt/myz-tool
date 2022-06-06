dieGlyphs = {
    "base": ["☣<sup>1</sup>", "2️", "3️", "4️", "5️", "☢<sup>6</sup>"],
    "skill": ["1️", "2️", "3️", "4️", "5️", "☢<sup>6</sup>"],
    "gear": ["✴<sup>1</sup>", "2️", "3️", "4️", "5️", "☢<sup>6</sup>"],
    "negative": ["1️", "2️", "3️", "4️", "5️", "☢<sup>6</sup>"],
    "other": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"]
}

var rollNumber = 0;

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

function rollAll(base, skill, gear, other, description = null) {
    result = {
        "base": roll(base),
        "skill": skill >= 0 ? roll(skill) : [],
        "gear": roll(gear),
        "negative": skill < 0 ? roll(-skill) : [],
        "other": roll(other),
        "rerollable": true,
        "description": description
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

    var text = "Slag #" + ++rollNumber;
    if (result.description) {
        text += ": " + result.description;
    }
    $("#roll-desc").text(text);
}

function rollAndDisplay(base, skill, gear, other, description = null) {
    var result = rollAll(base, skill, gear, other, description);
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
    return newDice;
}

function reroll(previousResult) {
    var result = {
        "base": rerollByDieType(previousResult.base, "base"),
        "skill": rerollByDieType(previousResult.skill, "skill"),
        "gear": rerollByDieType(previousResult.gear, "gear"),
        "negative": rerollByDieType(previousResult.negative, "negative"),
        "other": rerollByDieType(previousResult.other, "other"),
        "rerollable": false
    };
    if (previousResult.description) {
        result.description = "PRESSA: " + previousResult.description;
    } else {
        result.description = "PRESSA";
    }
    return result;
}

function intValueOfField(selector) {
    var rawValue = $(selector).val();
    var parsedValue = parseInt(rawValue);
    return isNaN(parsedValue) ? 0 : parsedValue;
}

function getValueById(valueId, prefix) {
    return valueId ? intValueOfField("#" + prefix + "-" + valueId) : 0;
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

function rollAdHoc(description = null) {
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

function rollStat(statField, modField) {
    var statValue = intValueOfField(statField);
    var damageField = $(statField).attr("data-traumaref");
    var damageValue = intValueOfField(damageField);
    var modifiedStatValue = statValue - damageValue;

    var modValue = intValueOfField(modField);

    var statName = $(statField).attr("data-name");
    var statAbbr = $(statField).attr("data-abbr");
    var description = statName + " [" + modifiedStatValue + "T6 (" + statAbbr + ")";
    description += describeModField(modField);
    description += "]";

    rollAndDisplay(modifiedStatValue, modValue, 0, 0, description);
}

function rollSkill(statField, skillField, modField) {
    var statValue = intValueOfField(statField);
    var damageField = $(statField).attr("data-traumaref");
    var damageValue = intValueOfField(damageField);
    var modifiedStatValue = statValue - damageValue;

    var skillValue = intValueOfField(skillField);
    var skillName = $(skillField).attr("data-name");

    var modValue = intValueOfField(modField);
    var modifiedSkillValue = skillValue + modValue;

    var statAbbr = $(statField).attr("data-abbr");
    var description = skillName + " [" + modifiedStatValue + "T6 (" + statAbbr + ")";
    description += " + " + skillValue + "T6 (" + skillName + ")";
    description += describeModField(modField);
    description += "]";

    rollAndDisplay(modifiedStatValue, modifiedSkillValue, 0, 0, description);
}

function describeModField(modField) {
    var modValue = intValueOfField(modField);
    if (modValue === 0) {
        return "";
    } else if (modValue > 0) {
        return " + " + modValue + "T6 (mod)";
    } else {
        return " - " + Math.abs(modValue) + "T6 (mod)";
    }
}

$(document).ready(function () {
    $("button.roll-stat").click(function () {
        var statField = $(this).attr("data-statref");
        var modField = $(this).attr("data-modref");

        rollStat(statField, modField);
    });

    $("button.roll-skill").click(function () {
        var statField = $(this).attr("data-statref");
        var skillField = $(this).attr("data-skillref");
        var modField = $(this).attr("data-modref");

        rollSkill(statField, skillField, modField);
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

    $("button.roll-adhoc").click(rollAdHoc);

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

        var description = "Initiativ [1T6 + " + agility + " (Kyl)";

        if ($("#experienced-fighter-plus2").is(":checked")) {
            agility += 2;
            description += " + 2 (Stridsvan)";
        }

        var rolls = [rollOne() + agility];

        description += "]";

        displayResult({
            "base": [], "skill": [], "gear": [], "other": rolls, "negative": [], "rerollable": false, "description": description
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