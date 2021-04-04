dieGlyphs = {
    "base": ["☣", "2️", "3️", "4️", "5️", "☢"],
    "skill": ["1️", "2️", "3️", "4️", "5️", "☢"],
    "gear": ["✴", "2️", "3️", "4️", "5️", "☢"],
    "other": ["1", "2", "3", "4", "5", "6"]
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
    return {
        "base": roll(base),
        "skill": roll(skill),
        "gear": roll(gear),
        "other": roll(other),
        "rerollable": true
    }
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
        var outputElement = $("#roll");
        outputElement.empty();
    }

    addAllDiceGraphicsForOneType(result.base, "base");
    addAllDiceGraphicsForOneType(result.skill, "skill");
    addAllDiceGraphicsForOneType(result.gear, "gear");
    addAllDiceGraphicsForOneType(result.other, "other");

    $("#rerollButton").prop("disabled", !result.rerollable)
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

$(document).ready(function () {
    $(".stat button").click(function () {
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
        rollAndDisplay(statValue, skillValue, gearValue, 0);
    });
});