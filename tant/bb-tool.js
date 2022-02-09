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

function addDieGraphic(number) {
    var dieGraphic = $('<span class="die"></span>').html(number);
    $("#roll").append(dieGraphic);
}

function displayDice(dice) {
    for (var i = 0; i < dice.length; i++) {
        addDieGraphic(dice[i])
    }
}

function displayModifier(modifier) {
    if (modifier == 0) {
        return;
    }

    var content = modifier > 0 ? "+" + modifier : modifier;

    var modifierGraphic = $('<span class="mod"></span>').html(content);
    $("#roll").append(modifierGraphic);
}

function displayResult(result, modifier) {
    $("#roll span").hide("fade", {}, 500, function () {
        $("#roll").empty();
        displayDice(result);
        displayModifier(modifier);
        $("#roll").append($("<span></span>"));
    });
}

function rollAndDisplay(base, skill, gear, other) {
    var result = rollAll(base, skill, gear, other);
    displayResult(result, true);
    window.lastRoll = result;
}

function getValueById(valueId) {
    if (valueId) {
        var parsedValue = parseInt($("#" + valueId).val());
        return isNaN(parsedValue) ? 0 : parsedValue;
    }
    return 0;
}

function rollDice(numDice, modifier) {
    var result = roll(numDice);
    displayResult(result, modifier);
}

$(document).ready(function () {
    $("button.roll-btn").click(function () {
        var numDice = parseInt($(this).attr("data-dice"));
        var modifier = getValueById($(this).attr("data-mod"));

        rollDice(numDice, modifier);
    });
});