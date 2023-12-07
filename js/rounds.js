const startInput = document.getElementById("start-round-input");
const endInput = document.getElementById("end-round-input");
const cashInput = document.getElementById("cash-input");

const rbeOutputTotal = document.getElementById("rbe-output-total");
const xpOutputTotal = document.getElementById("xp-output-total");
const cashOutputTotal = document.getElementById("cash-output-total");
const durationOutputTotal = document.getElementById("duration-output-total");

const rbeOutputStart = document.getElementById("rbe-output-start");
const xpOutputStart = document.getElementById("xp-output-start");
const cashOutputStart = document.getElementById("cash-output-start");
const durationOutputStart = document.getElementById("duration-output-start");

const rbeOutputEnd = document.getElementById("rbe-output-end");
const xpOutputEnd = document.getElementById("xp-output-end");
const cashOutputEnd = document.getElementById("cash-output-end");
const durationOutputEnd = document.getElementById("duration-output-end");


const bloonStructure = [
	{id: "fbad", childs: {fzomg: 2, fddt: 3}},
	{id: "bad", childs: {zomg: 2, ddt: 3}},
	{id: "fddt", childs: {fceramic: 4}},
	{id: "ddt", childs: {ceramic: 4}},
	{id: "zomg", childs: {bfb: 4}},
	{id: "fzomg", childs: {fbfb: 4}},
	{id: "fbfb", childs: {fmoab: 4}},
	{id: "bfb", childs: {moab: 4}},
	{id: "fmoab", childs: {fceramic: 4}},
	{id: "moab", childs: {ceramic: 4}},
	{id: "fceramic", childs: {rainbow: 2}},
	{id: "ceramic", childs: {rainbow: 2}},
	{id: "rainbow", childs: {zebra: 2}},
	{id: "zebra", childs: {black: 1, white: 1}},
	{id: "black", childs: {pink: 2}},
	{id: "white", childs: {pink: 2}},
	{id: "pink", childs: {yellow: 1}},
	{id: "yellow", childs: {green: 1}},
	{id: "green", childs: {blue: 1}},
	{id: "blue", childs: {red: 1}},
	{id: "purple", childs: {pink: 2}},
	{id: "flead", childs: {black: 2}},
	{id: "lead", childs: {black: 2}},
	{id: "red"}
]

const bloonStructureFreeplay = [
	{id: "fbad", childs: {fzomg: 2, fddt: 3}},
	{id: "bad", childs: {zomg: 2, ddt: 3}},
	{id: "fddt", childs: {fceramic: 4}},
	{id: "ddt", childs: {ceramic: 4}},
	{id: "zomg", childs: {bfb: 4}},
	{id: "fzomg", childs: {fbfb: 4}},
	{id: "fbfb", childs: {fmoab: 4}},
	{id: "bfb", childs: {moab: 4}},
	{id: "fmoab", childs: {fceramic: 4}},
	{id: "moab", childs: {ceramic: 4}},
	{id: "fceramic", childs: {rainbow: 1}},
	{id: "ceramic", childs: {rainbow: 1}},
	{id: "rainbow", childs: {zebra: 1}},
	{id: "zebra", childs: {white: 1}},
	{id: "black", childs: {pink: 1}},
	{id: "white", childs: {pink: 1}},
	{id: "pink", childs: {yellow: 1}},
	{id: "yellow", childs: {green: 1}},
	{id: "green", childs: {blue: 1}},
	{id: "blue", childs: {red: 1}},
	{id: "purple", childs: {pink: 1}},
	{id: "flead", childs: {black: 1}},
	{id: "lead", childs: {black: 1}},
	{id: "red"}
]

var startRound = 1;
var endRound = 1;
var currentCash = 0;

function inputHandlerStart(e) {
	startRound = e.target.value;
	if(startRound < 1) {
		startRound = "";
	}
	if(startRound > 140) {
		startRound = 140;
	}
	startInput.value = startRound;
}

function inputHandlerEnd(e) {
	endRound = e.target.value;
	if(endRound < 1) {
		endRound = "";
	}
	if(endRound > 140) {
		endRound = 140;
	}
	endInput.value = endRound;
}

function checkValidRounds() {
	if(startRound === undefined || startRound === "") {	
		startRound = 1;
	}
	if(endRound === undefined || endRound === "") {
		endRound = 1;
	}
	if (parseInt(startRound) > parseInt(endRound)) {
		endRound = startRound;
	}
	startInput.value = startRound;
	endInput.value = endRound;
}

function inputHandlerCash(e) {
	var regex=/^[0-9]+$/; // only numbers valid
	var max_integer = 2147483647;
	currentCash = e.target.value;
	if(currentCash < 0) {
		cashInput.value = currentCash;
		currentCash = 0;
	}
	if (!currentCash.match(regex)) {
		cashInput.value = "";
		currentCash = 0;
	}
	if(currentCash > max_integer) {
		currentCash = max_integer;
		cashInput.value = currentCash;
	}
}

function calcAll() {
	checkValidRounds();
	var startRoundResult = getRound(startRound);
	var endRoundResult = getRound(endRound);
	var incomeSum = sumIncome();
	
	rbeOutputTotal.innerHTML = sumRBE().toLocaleString() + " RBE";
	xpOutputTotal.innerHTML = sumXP().toLocaleString() + " XP";
	cashOutputTotal.innerHTML = "$"+ Math.floor(incomeSum).toLocaleString() + " + $" + currentCash.toLocaleString() + " = $" + (parseInt(currentCash) + parseInt(incomeSum)).toLocaleString();
	durationOutputTotal.innerHTML = convertDuration(sumDuration()) + "s";
	
	rbeOutputStart.innerHTML = calcRBE(startRound).toLocaleString() + " RBE";
	xpOutputStart.innerHTML = calcXP(startRound).toLocaleString() + " XP";
	cashOutputStart.innerHTML = "$"+ Math.floor(calcIncome(startRound)).toLocaleString();
	durationOutputStart.innerHTML = convertDuration(startRoundResult.duration) + "s";
	
	rbeOutputEnd.innerHTML = calcRBE(endRound).toLocaleString() + " RBE";
	xpOutputEnd.innerHTML = calcXP(endRound).toLocaleString() + " XP";
	cashOutputEnd.innerHTML = "$"+ Math.floor(calcIncome(endRound)).toLocaleString();
	durationOutputEnd.innerHTML = convertDuration(endRoundResult.duration) + "s";
}

function getRound(round) {
  for (var i = 0; i < rounds.length; i++) {
    if (parseInt(rounds[i].id) === parseInt(round)) {
		return rounds[i];
	}
  }
}

function getBloonStructure(bloonLayerTop, round) {
	var structure;
	if(round > 80) {
		structure = bloonStructureFreeplay;
	} else {
		structure = bloonStructure;
	}
	for (var i = 0; i < structure.length; i++) {
		if (structure[i].id === bloonLayerTop) {
			return structure[i];
		}
	}
}

function sumIncome() {
	sum = 0;
	for (var i = parseInt(startRound); i <= parseInt(endRound); i++) {
		sum += calcIncome(i);
	}
	return sum;
}
	
function sumRBE() {
	sum = 0;
	for (var i = parseInt(startRound); i <= parseInt(endRound); i++) {
		sum += calcRBE(i);
	}
	return sum;
}

function sumXP() {
	sum = 0;
	for (var i = parseInt(startRound); i <= parseInt(endRound); i++) {
		sum += calcXP(i);
	}
	return sum;
}

function sumDuration() {
	sum = 0;
	for (var i = parseInt(startRound); i <= parseInt(endRound); i++) {
		sum += getRound(i).duration;
	}
	return sum;
}

function calcXP(round) {
	var roundResult = getRound(round);
	var xp = 0;
	if (round < 21) {
		xp = (round * 20 + 20);
	} else if (round < 51) {
		xp = (round* 50 - 380);
	} else {
		xp = (round * 90 - 2880);
	}
	return xp;
}

function convertDuration(duration) {
	var converted = "";
	if(duration > 60) {
		var min = Math.floor(duration/60);
		converted += min + "m ";
		converted += Math.floor(duration - (min * 60));
	} else {
		converted = Math.floor(duration);
	}
	return converted;
}

function calcLayerRBE(bloonLayerTop, round) {
	var layerCount = 1;
	var currentLayer = getBloonStructure(bloonLayerTop, round);
	var childs = currentLayer.childs;
	var layerCountBefore;
	if(childs === undefined) {
		return 1;
	}
	
	layerCountBefore = layerCount;
	if(round > 80) {
		if(bloonLayerTop === 'fceramic') layerCount += 120;
		if(bloonLayerTop === 'ceramic') layerCount += 60;
	} else {
		if(bloonLayerTop === 'fceramic') layerCount += 20;
		if(bloonLayerTop === 'ceramic') layerCount += 10;
	}
	if(bloonLayerTop === 'flead') layerCount += 4;
	if(bloonLayerTop === 'moab') layerCount += calcHP(200, round);
	if(bloonLayerTop === 'fmoab') layerCount += calcHP(200, round) * 2;
	if(bloonLayerTop === 'bfb') layerCount += calcHP(700, round);
	if(bloonLayerTop === 'fbfb') layerCount += calcHP(700, round) * 2;
	if(bloonLayerTop === 'zomg') layerCount += calcHP(4000, round);
	if(bloonLayerTop === 'fzomg') layerCount += calcHP(4000, round) * 2;
	if(bloonLayerTop === 'ddt') layerCount += calcHP(400, round);
	if(bloonLayerTop === 'fddt') layerCount += calcHP(400, round) * 2;
	if(bloonLayerTop === 'bad') layerCount += calcHP(20000, round);
	if(bloonLayerTop === 'fbad') layerCount += calcHP(20000, round) * 2;
	if(layerCountBefore !== layerCount) layerCount--; // react to additional layer included in HP
	
	
	var keys = Object.keys(childs);
	keys.forEach(
		function(bloon) {
			var bloonCount = childs[bloon];
			for (var i = 0; i < bloonCount; i++) {
				layerCount += calcLayerRBE(bloon, round);
			}
		}
	);
	return layerCount;
}

function calcHP(baseHP, round) {
	var hp;
	
	if (round >= 1 && round <= 80) {
		hp = baseHP;
	}
	else if(round >= 81 && round <= 100) {
		hp = baseHP * (1 + (round - 80) * 0.02);
	}
	else if(round >= 101 && round <= 124) {
		hp = baseHP * (1.4 + (round - 100) * 0.05);
	}
	else if(round >= 125 && round <= 150) {
		hp = baseHP * (2.6 + (round - 124) * 0.15);
	}
	else if(round >= 151 && round <= 250) {
		hp = baseHP * (6.5 + (round - 150) * 0.35);
	}
	else if(round >= 251 && round <= 300) {
		hp = baseHP * (41.5 + (round - 250) * 1.0);
	}
	else if(round >= 301 && round <= 400) {
		hp = baseHP * (91.5 + (round - 300) * 1.5);
	}
	else if(round >= 401 && round <= 500) {
		hp = baseHP * (241.5 + (round - 400) * 2.5);
	}
	else {
		hp = baseHP * (491.5 + (round - 500) * 5.0);
	}
	
	return hp;
}

function calcLayerMoney(bloonLayerTop, round) {
	var layerCount = 1;
	var currentLayer = getBloonStructure(bloonLayerTop, round);
	var childs = currentLayer.childs;
	if(childs === undefined) {
		return 1;
	}
	
	if(round > 80) {
		if(bloonLayerTop === 'fceramic') layerCount += 86;
		if(bloonLayerTop === 'ceramic') layerCount += 86;
	}
	
	var keys = Object.keys(childs);
	keys.forEach(
		function(bloon) {
			var bloonCount = childs[bloon];
			for (var i = 0; i < bloonCount; i++) {
				layerCount += calcLayerMoney(bloon, round);
			}
		}
	);
	return layerCount;
}

function calcIncome(round) {
	var income = 0;
	var multiplier = 1;
	var roundResult = getRound(round);
	var bloons = roundResult.bloons;
	var count = 0;
	
	var keys = Object.keys(bloons);
	keys.forEach(
		function(bloon) {
			var bloonCount = bloons[bloon];
			for (var i = 0; i < bloonCount; i++) {
				income += calcLayerMoney(bloon, round);
			}
		}
	);
	
	if (round > 120) {
		multiplier = 0.02;
	} else if (round > 100) {
		multiplier = 0.05;
	} else if (round > 85) {
		multiplier = 0.1;
	} else if (round > 60) {
		multiplier = 0.2;
	} else if (round > 50) {
		multiplier = 0.5;
	} else {
		multiplier = 1;
	}
	
	income *= multiplier;
	
	income += (parseInt(round) + 100);
	
	return income;
}

function calcRBE(round) {
	var rbe = 0;
	var multiplier = 1;
	var roundResult = getRound(round);
	var bloons = roundResult.bloons;
	var count = 0;
	
	var keys = Object.keys(bloons);
	keys.forEach(
		function(bloon) {
			var bloonCount = bloons[bloon];
			for (var i = 0; i < bloonCount; i++) {
				rbe += calcLayerRBE(bloon, round);
			}
		}
	);
	
	return rbe;
}
	
startInput.addEventListener("input", inputHandlerStart);
endInput.addEventListener("input", inputHandlerEnd);
cashInput.addEventListener("input", inputHandlerCash);
startInput.addEventListener("blur", calcAll);
endInput.addEventListener("blur", calcAll);
cashInput.addEventListener("blur", calcAll);