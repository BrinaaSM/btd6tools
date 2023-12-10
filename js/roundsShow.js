const startInput = document.getElementById("start-round-input");
const endInput = document.getElementById("end-round-input");

const roundOutput = document.getElementById("round-output");
const bloonOutput = document.getElementById("bloon-output");
const splitBloonOutput = document.getElementById("split-bloon-output");
const blimpOutput = document.getElementById("blimp-output");

var startRound = 1;
var endRound = 1;
var currentCash = 0;
var roundType;

// input handling

function inputHandlerStart(e) {
	var maxRound;
	startRound = e.target.value;
	if(roundType === "default") {
		maxRound = 140;
	} else if(roundType === "abr") {
		maxRound = 100;
	} else {
		maxRound = 100;
	}
		
	if(startRound < 1) {
		startRound = "";
	}
	if(startRound > maxRound) {
		startRound = maxRound;
	}
	startInput.value = startRound;
}

function inputHandlerEnd(e) {
	var maxRound;
	endRound = e.target.value;
	if(roundType === "default") {
		maxRound = 140;
	} else if(roundType === "abr") {
		maxRound = 100;
	} else {
		maxRound = 100;
	}
	
	if(endRound < 1) {
		endRound = "";
	}
	if(endRound > maxRound) {
		endRound = maxRound;
	}
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

// calculation

function calcAll() {
	checkValidRounds();
	var incomeSum = sumIncome();
	
	for(var i = startRound; i <= endRound; i++) {
	
		roundOutput.innerHTML = i;
		bloonOutput.innerHTML = showBloons(round, 'normal');
		splitBloonOutput.innerHTML = showBloons(round, 'split');
		blimpOutput.innerHTML = showBloons(round, 'blimp');
	
	}
	
	rbeOutputTotal.innerHTML = sumRBE().toLocaleString() + " RBE";
	xpOutputTotal.innerHTML = sumXP().toLocaleString() + " XP";
	cashOutputTotal.innerHTML = "$"+ Math.floor(incomeSum).toLocaleString() + " + $" + currentCash.toLocaleString() + " = $" + (parseInt(currentCash) + parseInt(incomeSum)).toLocaleString();
	durationOutputTotal.innerHTML = convertDuration(sumDuration()) + "s";
	
	rbeOutputStart.innerHTML = calcRBE(startRound).toLocaleString() + " RBE";
	xpOutputStart.innerHTML = calcXP(startRound).toLocaleString() + " XP";
	cashOutputStart.innerHTML = "$"+ Math.floor(calcIncome(startRound)).toLocaleString();
	durationOutputStart.innerHTML = convertDuration(getDuration(startRound)) + "s";
	
	rbeOutputEnd.innerHTML = calcRBE(endRound).toLocaleString() + " RBE";
	xpOutputEnd.innerHTML = calcXP(endRound).toLocaleString() + " XP";
	cashOutputEnd.innerHTML = "$"+ Math.floor(calcIncome(endRound)).toLocaleString();
	durationOutputEnd.innerHTML = convertDuration(getDuration(endRound)) + "s";
}

function calcXP(round) {
	var xp = 0;
	if (round < 21) {
		xp = (round * 20 + 20);
	} else if (round < 51) {
		xp = (round * 50 - 380);
	} else {
		xp = (round * 90 - 2880);
	}
	return xp;
}

function calcIncome(round) {
	var income = 0;
	var multiplier = 1;
	var bloons = getBloons(round);
	var count = 0;
	
	bloons.forEach(
		function(bloon) {
			for (var i = 0; i < bloon.count; i++) {
				income += getIncomeBloon(bloon.type, round);
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
	var bloons = getBloons(round);
	var count = 0;
	
	bloons.forEach(
		function(bloon) {
			for (var i = 0; i < bloon.count; i++) {
				if ('fortified' in bloon) {
					rbe += getRBE(bloon.type, 1, round);
				} else {
					rbe += getRBE(bloon.type, 0, round);
				}
			}
		}
	);
	
	return rbe;
}

// summing

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
		sum += getDuration(i);
	}
	return sum;
}

// helper

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

startInput.addEventListener("input", inputHandlerStart);
endInput.addEventListener("input", inputHandlerEnd);
cashInput.addEventListener("input", inputHandlerCash);
startInput.addEventListener("blur", calcAll);
endInput.addEventListener("blur", calcAll);
cashInput.addEventListener("blur", calcAll);