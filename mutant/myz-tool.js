dieGlyphs = {
    "base": ["&nbsp;<sup>0</sup>", "☣<sup>1</sup>", "2️", "3️", "4️", "5️", "☢<sup>6</sup>"],
    "skill": ["&nbsp;<sup>0</sup>", "1️", "2️", "3️", "4️", "5️", "☢<sup>6</sup>"],
    "gear": ["&nbsp;<sup>0</sup>", "✴<sup>1</sup>", "2️", "3️", "4️", "5️", "☢<sup>6</sup>"],
    "negative": ["&nbsp;<sup>0</sup>", "1️", "2️", "3️", "4️", "5️", "☢<sup>6</sup>"],
    "other": ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"]
}

itemTypeIcons = {
    "Verktyg": "&#128295;",
    "Närstridsvapen": "&#129683;",
    "Avståndsvapen": "&#128299;",
    "Ammunition": "&#127813;",
    "Rustning": "&#128090;",
    "Rötskydd": "&#129343;",
    "Resurs": "&#129387;",
    "Övrigt": "&#128230;"
}

emoji = {
    "crossmark": "&#10060;",
    "wastebasket": "&#128465;&#xFE0F;"
}

var standardItems = {
    "Rep": {
        "Typ": "Verktyg",
        "Namn": "Rep",
        "Vikt": "1",
        "Prylbonus": "2",
        "Färdighet": "move"
    },
    "Rep m. änterhake": {
        "Typ": "Verktyg",
        "Namn": "Rep m. änterhake",
        "Vikt": "2",
        "Prylbonus": "4",
        "Färdighet": "move"
    },
    "Spritlykta": {
        "Typ": "Övrigt",
        "Namn": "Spritlykta",
        "Vikt": "1"
    },
    "Elddon": {
        "Typ": "Övrigt",
        "Namn": "Elddon",
        "Vikt": "1/2"
    },
    "Batterilykta": {
        "Typ": "Övrigt",
        "Namn": "Batterilykta",
        "Vikt": "1"
    },
    "Varm jacka/rock": {
        "Typ": "Verktyg",
        "Namn": "Varm jacka/rock",
        "Vikt": "0",
        "Prylbonus": "1",
        "Färdighet": "endure"
    },
    "Rejäla kängor": {
        "Typ": "Övrigt",
        "Namn": "Rejäla kängor",
        "Vikt": "0",
        "Prylbonus": "1",
        "Färdighet": "endure"
    },
    "Spade": {
        "Typ": "Verktyg",
        "Namn": "Spade",
        "Vikt": "1",
        "Prylbonus": "1",
        "Färdighet": "force"
    },
    "Filt": {
        "Typ": "Verktyg",
        "Namn": "Filt",
        "Vikt": "1/2",
        "Prylbonus": "2",
        "Färdighet": "endure"
    },
    "Tält": {
        "Typ": "Verktyg",
        "Namn": "Tält",
        "Vikt": "2",
        "Prylbonus": "1",
        "Färdighet": "endure"
    },
    "Rötdräkt": {
        "Typ": "Rötskydd",
        "Namn": "Rötdräkt",
        "Vikt": "1",
        "Prylbonus": "3"
    },
    "Rötmask": {
        "Typ": "Rötskydd",
        "Namn": "Rötmask",
        "Vikt": "1/2",
        "Prylbonus": "2"
    },
    "Skrotkikare": {
        "Typ": "Verktyg",
        "Namn": "Skrotkikare",
        "Vikt": "1",
        "Prylbonus": "1",
        "Färdighet": "scout"
    },
    "Verktyg": {
        "Typ": "Verktyg",
        "Namn": "Verktyg",
        "Vikt": "1",
        "Prylbonus": "1",
        "Färdighet": "tinker"
    },
    "Kokkärl": {
        "Typ": "Verktyg",
        "Namn": "Kokkärl",
        "Vikt": "1",
        "Prylbonus": "1",
        "Färdighet": "knowTheZone"
    },
    "Knogjärn": {
        "Typ": "Närstridsvapen",
        "Namn": "Knogjärn",
        "Vikt": "1/2",
        "Prylbonus": "1",
        "Skada": "1"
    },
    "Skrotkniv": {
        "Typ": "Närstridsvapen",
        "Namn": "Skrotkniv",
        "Vikt": "1/2",
        "Prylbonus": "1",
        "Skada": "2"
    },
    "Slagträ": {
        "Typ": "Närstridsvapen",
        "Namn": "Slagträ",
        "Vikt": "1",
        "Prylbonus": "2",
        "Skada": "1"
    },
    "Slagträ m. spikar": {
        "Typ": "Närstridsvapen",
        "Namn": "Slagträ m. spikar",
        "Vikt": "1",
        "Prylbonus": "2",
        "Skada": "2"
    },
    "Huggare": {
        "Typ": "Närstridsvapen",
        "Namn": "Huggare",
        "Vikt": "1",
        "Prylbonus": "2",
        "Skada": "2"
    },
    "Skrotspjut": {
        "Typ": "Närstridsvapen",
        "Namn": "Skrotspjut",
        "Vikt": "1",
        "Prylbonus": "1",
        "Skada": "2"
    },
    "Skrotyxa": {
        "Typ": "Närstridsvapen",
        "Namn": "Skrotyxa",
        "Vikt": "2",
        "Prylbonus": "1",
        "Skada": "3"
    },
    "Slunga": {
        "Typ": "Avståndsvapen",
        "Namn": "Slunga",
        "Vikt": "1/2",
        "Prylbonus": "1",
        "Skada": "1",
        "Avstånd": "Kort"
    },
    "Pilbåge": {
        "Typ": "Avståndsvapen",
        "Namn": "Pilbåge",
        "Vikt": "1",
        "Prylbonus": "1",
        "Skada": "1",
        "Avstånd": "Långt"
    },
    "Skrotpistol": {
        "Typ": "Avståndsvapen",
        "Namn": "Skrotpistol",
        "Vikt": "1",
        "Prylbonus": "1",
        "Skada": "2",
        "Avstånd": "Kort"
    },
    "Skrotgevär": {
        "Typ": "Avståndsvapen",
        "Namn": "Skrotgevär",
        "Vikt": "1",
        "Prylbonus": "1",
        "Skada": "2",
        "Avstånd": "Långt"
    },
    "Derringer": {
        "Typ": "Avståndsvapen",
        "Namn": "Derringer",
        "Vikt": "1/2",
        "Prylbonus": "1",
        "Skada": "1",
        "Avstånd": "Nära"
    },
    "Cykelkedja": {
        "Typ": "Närstridsvapen",
        "Namn": "Cykelkedja",
        "Vikt": "1",
        "Prylbonus": "1",
        "Skada": "1"
    }
};

var weightUnit = 20;
var suppressUpdateGearBonusOptionsFromInventory = false;
var suppressCalculateTotalWeight = false;

var rollNumber = 0;

function download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
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
    var negativeSixCount = 0;
    for (var i = 0; i < result.negative.length; i++) {
        if (result.negative[i] == 6) {
            negativeSixCount++;
            result.negative[i] = 0;
        }
    }
    for (var i = 0; i < result.base.length; i++) {
        if (negativeSixCount == 0) break;
        if (result.base[i] == 6) {
            negativeSixCount--;
            result.base[i] = 0;
        }
    }
    for (var i = 0; i < result.gear.length; i++) {
        if (negativeSixCount == 0) break;
        if (result.gear[i] == 6) {
            negativeSixCount--;
            result.gear[i] = 0;
        }
    }
    return result;
}

function addDieGraphic(number, dieType) {
    var dieGraphic = $('<span class="die"></span>').html(dieGlyphs[dieType][number]).addClass("die-" + dieType);
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

        $("#rerollButton").button({ "disabled": !result.rerollable });
    }

    var text = "#" + ++rollNumber;
    if (result.description) {
        text += ": " + result.description;
    }
    $("#roll-desc").html(text);
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

function parseIntOrDefault(value, defaultValue) {
    var parsedValue = parseInt(value);
    return isNaN(parsedValue) ? defaultValue : parsedValue;
}

function intValueOfField(selector) {
    var rawValue = $(selector).val();
    return parseIntOrDefault(rawValue, 0);
}

function getValueById(valueId, prefix) {
    return valueId ? intValueOfField("#" + prefix + "-" + valueId) : 0;
}

function getStatValue(statId) {
    return getModifiedStat(statId);
}

function getCharName() {
    return getQuery()["char"];
}

function saveData() {
    var charName = getCharName();
    if (!charName) {
        charName = "";
    }

    var charList = window.localStorage.getItem("myz-tool::chars");
    if (!charList) {
        charList = [];
    }

    if (charList.indexOf(charName) == -1) {
        charList.push(charName);
        charList.sort();
        window.localStorage.setItem("myz-tool::chars", JSON.stringify(charList));
    }

    var json = serialize();
    window.localStorage.setItem("myz-tool::char[" + charName + "]", json);
}

function loadOneField(fieldId, charName) {
    var itemName = "myz-tool" + fieldId;
    if (charName) {
        itemName += ("[" + charName + "]");
    }
    var value = window.localStorage.getItem(itemName);
    $(fieldId).val(value).change();
}

function loadData() {
    var charName = getCharName();
    if (!charName) {
        charName = "";
    }

    var charList = window.localStorage.getItem("myz-tool::chars");

    if (!charList) {
        // If using old save file version, replace and delete it after loading.
        $("input[data-save-as]:not([type='checkbox'])").each(function (i) {
            var fieldId = "#" + $(this).attr("id");
            loadOneField(fieldId, charName);
            var itemName = "myz-tool" + fieldId;
            if (charName) {
                itemName += ("[" + charName + "]");
            }
            window.localStorage.removeItem(itemName)
        });
        saveData();
    }

    var json = window.localStorage.getItem("myz-tool::char[" + charName + "]");
    deserialize(json);
}

function importData() {
    var json = prompt("Klistra in JSON för sparfil:");
    deserialize(json);
}

function exportData() {
    var json = serialize();
    $("#export-dialog #export-json").val(json);

    var dataUrl = new Blob([json], { type: "application/json" });
    var filename = "Mutant-" + $("#name").val().replace(/\s+/, "_");
    $("#export-download-link").attr("href", URL.createObjectURL(dataUrl)).attr("download", filename).button();

    $("#export-dialog").dialog("open");
}

function serialize() {
    var output = { "$version": 2 }
    $("input[data-save-as]:not([type='checkbox'])").each(function () {
        var key = $(this).attr("data-save-as");
        var value = $(this).val();
        if (value) {
            output[key] = value;
        }
    })
    $("select[data-save-as]").each(function () {
        var key = $(this).attr("data-save-as");
        var value = $(this).val();
        if (value) {
            output[key] = value;
        }
    })
    $("input[data-save-as][type='checkbox']").each(function () {
        var key = $(this).attr("data-save-as");
        var value = $(this).is(":checked");
        if (value) {
            output[key] = value;
        }
    })
    $("textarea[data-save-as]").each(function () {
        var key = $(this).attr("data-save-as");
        var value = $(this).val();
        if (value) {
            output[key] = value;
        }
    })

    output["Prylar"] = serializeInventory();

    var json = JSON.stringify(output, null, 4);
    return json;
}

function upgradeSaveDataToVersion2(saveData) {
    if (!saveData["Prylar"]) {
        saveData["Prylar"] = [];
    }

    for (var i = 1; i <= 3; i++) {
        var weaponName = saveData["Vapen[" + i + "].Namn"];
        var weaponBonus = saveData["Vapen[" + i + "].Prylbonus"];
        var weaponDamage = saveData["Vapen[" + i + "].Skada"];

        if (weaponName || weaponBonus || weaponDamage) {
            var weapon = {
                "Typ": "Närstridsvapen",
                "Namn": weaponName ? weaponName : "???",
                "Vikt": "1",
                "Prylbonus": weaponBonus ? weaponBonus : "0",
                "Skada": weaponDamage ? weaponDamage : "0"
            }
            saveData["Prylar"].push(weapon);
        }
    }

    for (var i = 4; i <= 6; i++) {
        var weaponName = saveData["Vapen[" + i + "].Namn"];
        var weaponBonus = saveData["Vapen[" + i + "].Prylbonus"];
        var weaponDamage = saveData["Vapen[" + i + "].Skada"];

        if (weaponName || weaponBonus || weaponDamage) {
            var weapon = {
                "Typ": "Avståndsvapen",
                "Namn": weaponName ? weaponName : "???",
                "Vikt": "1",
                "Prylbonus": weaponBonus ? weaponBonus : "0",
                "Skada": weaponDamage ? weaponDamage : "0"
            }
            saveData["Prylar"].push(weapon);
        }
    }

    saveData["$version"] = 2;
    return saveData;
}

function deserialize(json) {
    var parsed = JSON.parse(json);

    if (parsed["$version"] === 1) {
        parsed = upgradeSaveDataToVersion2(parsed);
    }

    $("input[data-save-as]:not([type='checkbox'])").each(function () {
        var key = $(this).attr("data-save-as");
        var value = parsed[key];
        if (value) {
            $(this).val(value).change();
        }
    })
    $("select[data-save-as]").each(function () {
        var key = $(this).attr("data-save-as");
        var value = parsed[key];
        if (value) {
            $(this).val(value).change();
        }
    })
    $("input[data-save-as][type='checkbox']").each(function () {
        var key = $(this).attr("data-save-as");
        var value = parsed[key];
        if (value) {
            $(this).prop("checked", value).change();
        }
    })
    $("textarea[data-save-as]").each(function () {
        var key = $(this).attr("data-save-as");
        var value = parsed[key];
        if (value) {
            $(this).val(value).change();
        }
    })

    $("#dynamic-inventory").empty();
    if (parsed["Prylar"]) {
        suppressUpdateGearBonusOptionsFromInventory = true;
        suppressCalculateTotalWeight = true;
        for (var i = 0; i < parsed["Prylar"].length; i++) {
            loadInventoryItem(parsed["Prylar"][i]);
        }
        suppressCalculateTotalWeight = false;
        suppressUpdateGearBonusOptionsFromInventory = false;
    }
    calculateTotalWeight();
    updateGearBonusOptionsFromInventory();
}

function rollAdHoc() {
    var statValue = intValueOfField("#stat-adhoc");
    var skillValue = intValueOfField("#skill-adhoc");
    var gearValue = intValueOfField("#gear-adhoc");
    var modifier = intValueOfField("#modifier-adhoc");

    var description = "[";
    description += '<span class="stat-value">' + statValue + "&#x1F3B2;</span>";
    description += ' + <span class="skill-value">' + skillValue + "&#x1F3B2;</span>";
    description += describeModField("#modifier-adhoc");
    description += ' + <span class="gear-value">' + gearValue + "&#x1F3B2;</span>";
    description += "]";

    rollAndDisplay(statValue, skillValue + modifier, gearValue, 0, description);
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
    var description = statName + ' [<span class="stat-value">' + modifiedStatValue + "&#x1F3B2; (" + statAbbr + ")</span>";
    description += describeModField(modField);
    description += "]";

    rollAndDisplay(modifiedStatValue, modValue, 0, 0, description);
    $(modField).val("").trigger("change");
}

function rollSkill(statField, skillField, modField) {
    var statValue = intValueOfField(statField);
    var damageField = $(statField).attr("data-traumaref");
    var damageValue = intValueOfField(damageField);
    var modifiedStatValue = statValue - damageValue;

    var skillValue = intValueOfField(skillField);
    var skillName = $(skillField).attr("data-name");
    var skillId = $(skillField).attr("data-skill");

    var statAbbr = $(statField).attr("data-abbr");
    var description = skillName + ' [<span class="stat-value">' + modifiedStatValue + "&#x1F3B2; (" + statAbbr + ")</span>";
    description += ' + <span class="skill-value">' + skillValue + "&#x1F3B2; (" + skillName + ")</span>";

    var modValue = intValueOfField(modField);

    var talentMods = 0;

    $(".conditional-mod[data-skillref='" + skillField + "']").each(function () {
        if ($(this).is(":checked")) {
            var idOfThis = "#" + $(this).attr("id");
            talentMods += intValueOfField(idOfThis);
            description += describeModField(idOfThis);
            if (!$(this).hasClass("permanent-mod")) {
                $(this).prop("checked", false).trigger("change");
            }
        }
    });

    var modifiedSkillValue = skillValue + modValue + talentMods;

    description += describeModField(modField);

    var skillGearField = $(".skill-gear[data-skill='" + skillId + "']");
    if (skillGearField.length) {
        var gearBonus = parseIntOrDefault(skillGearField.val(), 0);
        if (gearBonus) {
            var gearName = skillGearField.find("option:selected").attr("data-name");
            if (!gearName) {
                gearName = "prylbonus";
            }
            description += ' + <span class="gear-value">' + gearBonus + "&#x1F3B2; (" + gearName + ")</span>";
        }
    }

    description += "]";

    rollAndDisplay(modifiedStatValue, modifiedSkillValue, gearBonus, 0, description);
    $(modField).val("").trigger("change");
}

function rollGear(statField, skillField, gearField, modField) {
    var statValue = intValueOfField(statField);
    var damageField = $(statField).attr("data-traumaref");
    var damageValue = intValueOfField(damageField);
    var modifiedStatValue = statValue - damageValue;

    var skillValue = intValueOfField(skillField);
    var skillName = $(skillField).attr("data-name");

    var modValue = intValueOfField(modField);
    var modifiedSkillValue = skillValue + modValue;

    var gearValue = intValueOfField(gearField);
    var gearNameField = $(gearField).attr("data-nameref");
    var gearName = $(gearNameField).val();

    var statAbbr = $(statField).attr("data-abbr");
    var description = skillName + ' [<span class="stat-value">' + modifiedStatValue + "&#x1F3B2; (" + statAbbr + ")</span>";
    description += ' + <span class="skill-value">' + skillValue + "&#x1F3B2; (" + skillName + ")</span>";
    description += describeModField(modField);
    description += ' + <span class="gear-value">' + gearValue + "&#x1F3B2; (" + gearName + ")</span>"
    description += "]";

    rollAndDisplay(modifiedStatValue, modifiedSkillValue, gearValue, 0, description);
    $(modField).val("").trigger("change");
}

function describeModField(modField) {
    var modValue = intValueOfField(modField);
    var modName = $(modField).attr("data-mod-name");
    if (!modName) {
        modName = "mod";
    }

    if (modValue === 0) {
        return "";
    } else if (modValue > 0) {
        return ' + <span class="mod-value-positive">' + modValue + "&#x1F3B2; (" + modName + ")</span>";
    } else {
        return ' - <span class="mod-value-negative">' + Math.abs(modValue) + "&#x1F3B2; (" + modName + ")</span>";
    }
}

function calculateTotalShootModifier() {
    var modifier = intValueOfField("#modifier-shoot");
    var rangeModifier = intValueOfField("#ranged-attack-distance");
    var aimModifier = $("#aim").is(":checked") ? 1 : 0;

    $("#modifier-shoot-total").val(modifier + rangeModifier + aimModifier);
}

function toggleFields() {
    var thisId = $(this).attr("id");
    var checked = $(this).is(":checked");
    toggledFields = $("[data-toggled-by='#" + thisId + "']");

    if (checked) {
        toggledFields.addClass("active");
    } else {
        toggledFields.removeClass("active");
    }
}

function changeJob() {
    $(".toggled-by-job").removeClass("active");

    $(".job").each(function () {
        var value = $(this).val();
        $(".toggled-by-job[data-active-for-job='" + value + "']").addClass("active");
    });
}

function changeMod() {
    var thisId = $(this).attr("id");
    var thisVal = intValueOfField("#" + thisId);
    if (thisVal >= 0) {
        $(this).removeClass("color-negative");
    } else {
        $(this).addClass("color-negative")
    }
}

function loadJsonFromFile() {
    var files = $(this)[0].files;
    if (files) {
        var file = files[0];
        var reader = new FileReader();
        reader.addEventListener("load", function () {
            var content = reader.result;
            $("#import-json").val(content);
        });
        reader.readAsText(file);
    }
}

function copyJsonToClipboard() {
    var json = $("#export-json").val();
    navigator.clipboard.writeText(json).then(
        function () { },
        function () { }
    );
}

function pasteJsonFromClipboard() {
    navigator.clipboard.readText().then(
        function (json) {
            $("#import-json").val(json);
        },
        function () { }
    );
}

function translateToEnglish() {
    $("[data-eng]").each(function () {
        $(this).attr("data-swe", $(this).text());
        $(this).text($(this).attr("data-eng"));
    });
    $("#english").addClass("hidden");
    $("#swedish").removeClass("hidden");
}

function translateToSwedish() {
    $("[data-eng]").each(function () {
        $(this).text($(this).attr("data-swe"));
    });
    $("#swedish").addClass("hidden");
    $("#english").removeClass("hidden");
}

function updateTotalExperience() {
    var total = parseInt($("#experience").val());

    var sumOfSkills = 0;
    $(".skill").each(function () {
        sumOfSkills += parseIntOrDefault($(this).val(), 0);
    });
    if (sumOfSkills > 10) {
        total += (sumOfSkills - 10) * 5;
    }

    var sumOfTalents = 0;
    $(".talent:checked").each(function () {
        sumOfTalents++;
    });
    if (sumOfTalents > 1) {
        total += (sumOfTalents - 1) * 5;
    }

    $("#total-experience").val(total.toString());
}

function addInventoryItem() {
    var itemType = $("#add-item-type").val();
    if (itemType.startsWith(":")) {
        var itemData = standardItems[itemType.substring(1)];
    } else {
        var itemData = { "Typ": itemType };
    }
    loadInventoryItem(itemData);
    calculateTotalWeight();
}

function loadInventoryItem(itemData) {
    var itemType = itemData["Typ"];

    var rowId = $(".inventory-item").length;
    var elementId = "inventory-item-" + rowId;
    var row = $('<tr id="' + elementId + '" class="inventory-item", data-item-type="' + itemData["Typ"] + '"></tr>');

    row.append('<td><label for="' + elementId + '-name">' + itemTypeIcons[itemType] + '</label></td>')

    var nameSection = $("<td></td>");
    var nameField = $('<input type="text" id="' + elementId + '-name" class="inventory-item-name" />')
    if (itemData["Namn"]) {
        nameField.val(itemData["Namn"]);
    }
    nameField.appendTo(nameSection);
    nameSection.appendTo(row);

    var countSection = $("<td></td>");
    if (itemType == "Ammunition" || itemType == "Resurs") {
        countSection.append('x');
        var countField = $('<input type="number" id="' + elementId + '-count" min="0" class="inventory-item-count small"/>');
        if (itemData["Antal"]) {
            countField.val(itemData["Antal"]);
        }
        countField.change(calculateTotalWeight).appendTo(countSection);
    } else {
        countSection.text("x1");
    }
    countSection.appendTo(row);

    var weightSection = $("<td></td>");
    var weightField = $('<select id="' + elementId + '-weight" class="inventory-item-weight" />');
    weightField.append('<option value="0">0</option>');
    weightField.append('<option value="1/10">1/10</option>');
    weightField.append('<option value="1/4">1/4</option>');
    weightField.append('<option value="1/2">1/2</option>');
    weightField.append('<option value="1" selected>1</option>');
    weightField.append('<option value="2">2</option>');
    weightField.append('<option value="3">3</option>');
    weightField.append('<option value="4">4</option>');
    if (itemData["Vikt"]) {
        weightField.val(itemData["Vikt"]);
    }
    weightField.change(calculateTotalWeight).appendTo(weightSection);
    weightSection.appendTo(row);

    var bonusSection = $('<td class="align-right"></td>');
    if (itemType == "Verktyg" || itemType == "Närstridsvapen" || itemType == "Avståndsvapen" || itemType == "Rustning" || itemType == "Rötskydd") {
        var bonusField = $('<input type="number" id="' + elementId + '-bonus" min="0" class="inventory-item-bonus small color-gear"/>');
        if (itemData["Prylbonus"]) {
            bonusField.val(itemData["Prylbonus"]);
        }
        bonusField.change(updateGearBonusOptionsFromInventory).appendTo(bonusSection);
    }
    bonusSection.appendTo(row);

    if (itemType == "Verktyg") {
        var skillSection = $("<td></td>");
        var skillSelect = $('<select id="' + elementId + '-skill" class="inventory-item-skill"></select>');
        skillSelect.append('<option value="">&ndash;</option>');
        skillSelect.append('<option value="endure">Kämpa på</option>');
        skillSelect.append('<option value="force">Ta krafttag</option>');
        skillSelect.append('<option value="fight">Slåss</option>');
        skillSelect.append('<option value="sneak">Smyga</option>');
        skillSelect.append('<option value="move">Fly</option>');
        skillSelect.append('<option value="shoot">Skjuta</option>');
        skillSelect.append('<option value="scout">Speja</option>');
        skillSelect.append('<option value="comprehend">Förstå sig på</option>');
        skillSelect.append('<option value="knowTheZone">Känna Zonen</option>');
        skillSelect.append('<option value="senseEmotion">Genomskåda</option>');
        skillSelect.append('<option value="manipulate">Manipulera</option>');
        skillSelect.append('<option value="heal">Vårda</option>');
        skillSelect.append('<option value="taunt">Mucka</option>');
        skillSelect.append('<option value="tinker">Mecka</option>');
        skillSelect.append('<option value="navigate">Leda vägen</option>');
        skillSelect.append('<option value="scrounge">Schackra</option>');
        skillSelect.append('<option value="animalHandling">Bussa på</option>');
        skillSelect.append('<option value="inspire">Inspirera</option>');
        skillSelect.append('<option value="command">Kommendera</option>');
        skillSelect.append('<option value="persist">Uthärda</option>');
        if (itemData["Färdighet"]) {
            skillSelect.val(itemData["Färdighet"]);
        }
        skillSelect.change(updateGearBonusOptionsFromInventory).appendTo(skillSection);
        skillSection.appendTo(row);
    } else if (itemType == "Närstridsvapen") {
        var fightSkillSection = $("<td></td>");
        fightSkillSection.append('<input type="hidden" id="' + elementId + '-skill" value="fight" class="inventory-item-skill"/>');
        fightSkillSection.append('<label>Slåss</label>')
        fightSkillSection.appendTo(row);
    } else if (itemType == "Avståndsvapen") {
        var rangeSection = $('<td class="align-right"></td>');
        rangeSection.append('<input type="hidden" id="' + elementId + '-skill" value="shoot" class="inventory-item-skill"/>');
        rangeSection.append('<label for="' + elementId + '-range">Skjuta</label>');
        var rangeField = $('<select id="' + elementId + '-range" class="inventory-item-range"></select>');
        rangeField.append('<option value="Nära">Nära</option>');
        rangeField.append('<option value="Kort">Kort</option>');
        rangeField.append('<option value="Långt">Långt</option>');
        rangeField.append('<option value="Special">Special</option>');
        if (itemData["Avstånd"]) {
            rangeField.val(itemData["Avstånd"]);
        }
        rangeField.appendTo(rangeSection);
        rangeSection.appendTo(row);
    } else {
        row.append("<td></td>");
    }

    if (itemType == "Närstridsvapen" || itemType == "Avståndsvapen") {
        var damageSection = $("<td></td>");
        damageSection.append('<label for="' + elementId + '-damage">Skada</label>');
        var damageField = $('<input type="number" id="' + elementId + '-damage" min="0" class="inventory-item-damage small"/>');
        if (itemData["Skada"]) {
            damageField.val(itemData["Skada"]);
        }
        damageField.appendTo(damageSection);
        damageSection.appendTo(row);
    } else {
        row.append("<td></td>")
    }

    var deleteButton = $('<button id="' + elementId + '-delete">' + emoji.crossmark + '</button>');
    deleteButton.click(deleteInventoryRow);
    deleteButton.appendTo(row);

    row.appendTo("#dynamic-inventory");
    updateGearBonusOptionsFromInventory();
}

function deleteInventoryRow() {
    $(this).closest(".inventory-item").remove();
    calculateTotalWeight();
}

function serializeInventory() {
    var inventory = [];
    $("#dynamic-inventory .inventory-item").each(function () {
        var $this = $(this);
        var itemData = {
            "Typ": $this.attr("data-item-type")
        };

        var nameField = $this.find(".inventory-item-name");
        if (nameField.length) {
            itemData["Namn"] = nameField.val();
        }
        var weightField = $this.find(".inventory-item-weight");
        if (weightField.length) {
            itemData["Vikt"] = weightField.val();
        }
        var countField = $this.find(".inventory-item-count");
        if (countField.length) {
            itemData["Antal"] = countField.val();
        }
        var skillField = $this.find(".inventory-item-skill");
        if (skillField.length) {
            itemData["Färdighet"] = skillField.val();
        }
        var bonusField = $this.find(".inventory-item-bonus");
        if (bonusField.length) {
            itemData["Prylbonus"] = bonusField.val();
        }
        var damageField = $this.find(".inventory-item-damage");
        if (damageField.length) {
            itemData["Skada"] = damageField.val();
        }
        var rangeField = $this.find(".inventory-item-range");
        if (rangeField.length) {
            itemData["Avstånd"] = rangeField.val();
        }
        inventory.push(itemData);
    });
    return inventory;
}

function calculateTotalWeight() {
    if (suppressCalculateTotalWeight) {
        return;
    }

    var totalWeight = 0;

    $(".inventory-item").each(function () {
        var $this = $(this);
        var countField = $this.find(".inventory-item-count");
        var count = countField.length ? parseIntOrDefault(countField.val(), 0) : 1;
        var weight = parseWeight($this.find(".inventory-item-weight").val());
        console.log("weight in field was '" + weight)
        totalWeight += weight * count;
    });

    /* // RAW
    var bulletCount = intValueOfField("#bullets");
    if (bulletCount >= 40) {
        totalWeight += parseWeight("2");
    } else if (bulletCount >= 20) {
        totalWeight += parseWeight("1");
    } else if (bulletCount >= 10) {
        totalWeight += parseWeight("1/2");
    }

    var alcoholCount = intValueOfField("#alcohol");
    if (alcoholCount) {
        totalWeight += parseWeight(Math.ceil(alcoholCount / 10).toString());
    }
    */

    $("#total-weight").val(Math.floor(totalWeight / weightUnit));
}

function parseWeight(weightString) {
    var parts = weightString.split("/");
    var weight = parseIntOrDefault(parts[0], 0) * weightUnit;
    if (parts.length > 1) {
        weight /= parseInt(parts[1]);
    }
    return weight;
}

function calculateWeightCapacity() {
    var strength = intValueOfField("#stat-strength");
    var hasMuleTalent = $("#talent-mule").is(":checked");
    /* // RAW
    var capacity = hasMuleTalent ? strength * 4 : strength * 2;
    */
    // House rules
    var capacity = hasMuleTalent ? strength * 5 : strength * 3;

    $("#weight-capacity").val(capacity);
}

function addGenericGearBonusOptions() {
    $("optgroup.skill-gear-generic").append('<option value="1">Prylbonus +1</option>').append('<option value="2">Prylbonus +2</option>');
}

function updateGearBonusOptionsFromInventory() {
    if (suppressUpdateGearBonusOptionsFromInventory) {
        return;
    }

    console.log("Updating gear bonus options from inventory.")

    $("optgroup.skill-gear-from-inventory").empty();

    $("#dynamic-inventory .inventory-item").each(function () {
        var skillField = $(this).find(".inventory-item-skill");
        if (skillField.length) {
            var skill = skillField.val();

            var bonusField = $(this).find(".inventory-item-bonus");
            if (bonusField.length) {
                var bonus = parseIntOrDefault(bonusField.val(), 0);

                var itemNameField = $(this).find(".inventory-item-name");
                var itemName = itemNameField.length ? itemNameField.val() : "Pryl";

                console.log("Adding gear bonus +" + bonus + " " + skill + " from " + itemName);

                var option = $('<option value="' + bonus + '" data-name="' + itemName + '">' + itemName + ' +' + bonus + '</option>');
                $(".skill-gear[data-skill='" + skill + "'] optgroup.skill-gear-from-inventory").append(option);
            }
        }
    });
}

$(document).ready(function () {
    $(".tabs").tabs();

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

    $("button.roll-adhoc").click(rollAdHoc);

    $(".roll-fight").click(function () {
        var selectedWeaponIndex = $("input[name='selected-melee-weapon']:checked").val();
        var gearField = "#gear-weapon-melee-" + selectedWeaponIndex;

        rollGear("#stat-strength", "#skill-fight", gearField, "#modifier-fight");
    });

    $(".roll-shoot").click(function () {
        calculateTotalShootModifier();

        var selectedWeaponIndex = $("input[name='selected-ranged-weapon']:checked").val();
        var gearField = "#gear-weapon-ranged-" + selectedWeaponIndex;

        rollGear("#stat-agility", "#skill-shoot", gearField, "#modifier-shoot-total");
    });

    $("#roll-initiative").click(function () {
        var agility = getStatValue("agility");

        var description = 'Initiativ [1&#x1F3B2; + <span class="stat-value">' + agility + " (Kyl)</span>";

        if ($("#talent-experienced-fighter").is(":checked")) {
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

        rollAndDisplay(number, 0, 0, 0, "[" + number + "&#x1F3B2;]");
    });

    $("label input[type='checkbox']").checkboxradio();

    var charName = getCharName();
    if (charName) {
        $("#change-char-name").val(decodeURIComponent(charName));
    }

    $(".controlgroup").controlgroup()

    $(".controlgroup-vertical").controlgroup({
        "direction": "vertical"
    });

    $(".toggles-fields").change(toggleFields);

    $(".job").change(changeJob);

    $(".mod").change(changeMod);

    $("#import-dialog").dialog({
        "autoOpen": false,
        modal: true,
        buttons: {
            Importera: function () {
                deserialize($("#import-json").val());
                $(this).dialog("close");
            },
            Avbryt: function () {
                $(this).dialog("close");
            }
        }
    });

    $("#export-dialog").dialog({
        "autoOpen": false,
        modal: true
        /*buttons: {
            OK: function () {
                $(this).dialog("close");
            }
        }*/
    });

    $("#export-dialog button").button();

    $("#open-import-dialog-button").click(function () {
        $("#import-dialog").dialog("open");
    });

    $("#import-file-button").click(function () {
        $("#import-file").click();
    });
    $("#import-file").change(loadJsonFromFile);

    $("#open-export-dialog-button").click(exportData);

    $("#export-copy-button").click(copyJsonToClipboard);

    $("#import-paste-button").click(pasteJsonFromClipboard);

    $("button").button();

    $(".skill").change(updateTotalExperience);
    $("#experience").change(updateTotalExperience);
    $(".talent").change(updateTotalExperience);

    $("#add-item").click(addInventoryItem);

    $("#stat-strength").change(calculateWeightCapacity);
    $("#talent-mule").change(calculateWeightCapacity);

    $("#fixed-inventory .inventory-item-count").change(calculateTotalWeight);

    addGenericGearBonusOptions();

    loadData();
});