dieGlyphs = {
    "base": ["☣", "2️", "3️", "4️", "5️", "☢"],
    "skill": ["1️", "2️", "3️", "4️", "5️", "☢"],
    "gear": ["✴", "2️", "3️", "4️", "5️", "☢"],
    "negative": ["1️", "2️", "3️", "4️", "5️", "☢"],
    "other": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"]
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
    sortDescending(dice);

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
    var dieGraphic = $('<span class="die"></span>').text(dieGlyphs[dieType][number - 1]).addClass("die-" + dieType);
    $("#roll").append(dieGraphic);
}

function addAllDiceGraphicsForOneType(dice, dieType) {
    for (var i = 0; i < dice.length; i++) {
        addDieGraphic(dice[i], dieType)
    }
}

function displayResult(result, clear) {
    if (clear) {
        $("#roll span").hide("fade", {}, 500, function () {
            $("#roll").empty();
            addAllDiceGraphicsForOneType(result.base, "base");
            addAllDiceGraphicsForOneType(result.skill, "skill");
            addAllDiceGraphicsForOneType(result.gear, "gear");
            addAllDiceGraphicsForOneType(result.negative, "negative");
            addAllDiceGraphicsForOneType(result.other, "other");
            $("#roll").append($("<span></span>"));

            $("#rerollButton").prop("disabled", !result.rerollable)
        });
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

function saveOneField(fieldId) {
    var value = $(fieldId).val();
    window.localStorage.setItem("myz-tool" + fieldId, value);
}

function saveData() {
    $(".saved").each(function (i) {
        saveOneField("#" + $(this).attr("id"));
    });
}

function loadOneField(fieldId) {
    var value = window.localStorage.getItem("myz-tool" + fieldId);
    $(fieldId).val(value);
}

function loadData() {
    $(".saved").each(function (i) {
        loadOneField("#" + $(this).attr("id"));
    });
}

$(document).ready(function () {
    $("button.roll-stat").click(function () {
        var statValue = getStatValue($(this).attr("data-stat"));
        rollAndDisplay(statValue, 0, 0, 0);
    });

    $(".skill button").click(function () {
        var statValue = getStatValue($(this).attr("data-stat"));
        var skillValue = getSkillValue($(this).attr("data-skill"));
        rollAndDisplay(statValue, skillValue, 0, 0);
    });

    $(".special-skill button").click(function () {
        var statId = $(this).siblings("select").children("option:selected").attr("data-stat");
        var statValue = getStatValue(statId);
        var skillValue = getSkillValue($(this).attr("data-skill"));
        rollAndDisplay(statValue, skillValue, 0, 0);
    });

    $(".adhoc button").click(function () {
        var statValue = getStatValue("adhoc");
        var skillValue = getSkillValue("adhoc");
        var gearValue = getGearValue("adhoc");
        var modifier = getValueById("adhoc", "modifier");
        rollAndDisplay(statValue, skillValue + modifier, gearValue, 0);
    });

    $(".roll-fight").click(function () {
        var statValue = getStatValue("strength");
        var skillValue = getSkillValue("fight");
        var selectedWeaponIndex = $("input[name='selected-melee-weapon']:checked").val();
        var gearValue = getGearValue("weapon-melee-" + selectedWeaponIndex);
        rollAndDisplay(statValue, skillValue, gearValue, 0);
    });

    $(".roll-shoot").click(function () {
        var statValue = getStatValue("agility");
        var skillValue = getSkillValue("shoot");
        var selectedWeaponIndex = $("input[name='selected-ranged-weapon']:checked").val();
        var gearValue = getGearValue("weapon-ranged-" + selectedWeaponIndex);
        var modifier = parseInt($("#ranged-attack-distance").val());
        rollAndDisplay(statValue, skillValue + modifier, gearValue, 0);
    });

    $("#roll-initiative").click(function () {
        var agility = getStatValue("agility");
        var rolls = [rollOne() + agility];

        if ($("#experienced-fighter").is(":checked")) {
            rolls.push(rollOne() + agility);
        }

        displayResult({
            "base": [], "skill": [], "gear": [], "other": rolls, "negative": [], "rerollable": false
        }, true);
    });

    loadData();
});