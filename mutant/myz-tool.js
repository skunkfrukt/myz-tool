dieGlyphs = {
    "base": ["☣", "2️", "3️", "4️", "5️", "☢"],
    "skill": ["1️", "2️", "3️", "4️", "5️", "☢"],
    "gear": ["✴", "2️", "3️", "4️", "5️", "☢"],
    "negative": ["1️", "2️", "3️", "4️", "5️", "☢"],
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
        var outputElement = $("#roll");
        outputElement.empty();
    }

    addAllDiceGraphicsForOneType(result.base, "base");
    addAllDiceGraphicsForOneType(result.skill, "skill");
    addAllDiceGraphicsForOneType(result.gear, "gear");
    addAllDiceGraphicsForOneType(result.negative, "negative");
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
    saveOneField("#stat-strength");
    saveOneField("#stat-agility");
    saveOneField("#stat-wits");
    saveOneField("#stat-empathy");

    saveOneField("#trauma-strength");
    saveOneField("#trauma-agility");
    saveOneField("#trauma-wits");
    saveOneField("#trauma-empathy");

    saveOneField("#skill-endure");
    saveOneField("#skill-force");
    saveOneField("#skill-fight");
    saveOneField("#skill-sneak");
    saveOneField("#skill-move");
    saveOneField("#skill-shoot");
    saveOneField("#skill-scout");
    saveOneField("#skill-comprehend");
    saveOneField("#skill-knowTheZone");
    saveOneField("#skill-senseEmotion");
    saveOneField("#skill-manipulate");
    saveOneField("#skill-heal");
    saveOneField("#skill-special-1-name");
    saveOneField("#skill-special-1");
    saveOneField("#skill-special-2-name");
    saveOneField("#skill-special-2");
}

function loadOneField(fieldId) {
    var value = window.localStorage.getItem("myz-tool" + fieldId);
    $(fieldId).val(value);
}

function loadData() {
    loadOneField("#stat-strength");
    loadOneField("#stat-agility");
    loadOneField("#stat-wits");
    loadOneField("#stat-empathy");

    loadOneField("#trauma-strength");
    loadOneField("#trauma-agility");
    loadOneField("#trauma-wits");
    loadOneField("#trauma-empathy");

    loadOneField("#skill-endure");
    loadOneField("#skill-force");
    loadOneField("#skill-fight");
    loadOneField("#skill-sneak");
    loadOneField("#skill-move");
    loadOneField("#skill-shoot");
    loadOneField("#skill-scout");
    loadOneField("#skill-comprehend");
    loadOneField("#skill-knowTheZone");
    loadOneField("#skill-senseEmotion");
    loadOneField("#skill-manipulate");
    loadOneField("#skill-heal");
    loadOneField("#skill-special-1-name");
    loadOneField("#skill-special-1");
    loadOneField("#skill-special-2-name");
    loadOneField("#skill-special-2");
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

    $(".melee-weapon button").click(function () {
        var statValue = getStatValue("strength");
        var skillValue = getSkillValue("fight");
        var gearValue = getGearValue($(this).attr("data-gear"));
        rollAndDisplay(statValue, skillValue, gearValue, 0);
    });

    $(".ranged-weapon button").click(function () {
        var statValue = getStatValue("agility");
        var skillValue = getSkillValue("shoot");
        var gearValue = getGearValue($(this).attr("data-gear"));
        var modifierValue = parseInt($(this).attr("data-modifier"));
        if (!isNaN(modifierValue)) {
            skillValue += modifierValue;
        }
        rollAndDisplay(statValue, skillValue, gearValue, 0);
    });

    loadData();
});