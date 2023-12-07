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
	{id: "fmoab", childs: {ceramic: 4}},
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
	{id: "purples", childs: {pink: 2}},
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
	{id: "fmoab", childs: {ceramic: 4}},
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
	{id: "purples", childs: {pink: 1}},
	{id: "flead", childs: {black: 1}},
	{id: "lead", childs: {black: 1}},
	{id: "red"}
]

const rounds = [
	{id: 1, duration: 17.51, bloons: {red: 20}},
	{id: 2, duration: 19, bloons: {red: 35}},
	{id: 3, duration: 16.71, bloons: {red: 25, blue: 5}},
	{id: 4, duration: 17.31, bloons: {red: 35, blue: 18}},
	{id: 5, duration: 16.5, bloons: {red: 5, blue: 27}},
	{id: 6, duration: 18.7, bloons: {red: 15, blue: 15, green: 4}},
	{id: 7, duration: 26.8, bloons: {red: 20, blue: 20, green: 5}},
	{id: 8, duration: 28.87, bloons: {red: 10, blue: 20, green: 14}},
	{id: 9, duration: 18.95, bloons: {green: 30}},
	{id: 10, duration: 47.99, bloons: {blue: 102}},
	
	{id: 11, duration: 19.16, bloons: {red: 10, blue: 10, green: 12, yellow: 3}},
	{id: 12, duration: 17.39, bloons: {blue: 15, green: 10, yellow: 5}},
	{id: 13, duration: 32.21, bloons: {blue: 50, green: 23}},
	{id: 14, duration: 26.63, bloons: {red: 49, blue: 15, green: 10, yellow: 9}},
	{id: 15, duration: 25, bloons: {red: 20, blue: 15, green: 12, yellow: 10, pink: 5}},
	{id: 16, duration: 16.02, bloons: {green: 40, yellow: 8}},
	{id: 17, duration: 5, bloons: {yellow: 12}},
	{id: 18, duration: 26.82, bloons: {green: 80}},
	{id: 19, duration: 15.76, bloons: {green: 10, yellow: 9, pink: 15}},
	{id: 20, duration: 5.25, bloons: {black: 6}},
	
	{id: 21, duration: 18.12, bloons: {yellow: 40, pink: 15}},
	{id: 22, duration: 8, bloons: {white: 16}},
	{id: 23, duration: 6.82, bloons: {black: 7, white: 7}},
	{id: 24, duration: 9, bloons: {blue: 20, green: 1}},
	{id: 25, duration: 21.14, bloons: {yellow: 25, purple: 10}},
	{id: 26, duration: 14.51, bloons: {pink: 23, zebra: 4}},
	{id: 27, duration: 34.26, bloons: {red: 100, blue: 60, green: 45, yellow: 45}},
	{id: 28, duration: 5, bloons: {lead: 6}},
	{id: 29, duration: 15.25, bloons: {yellow: 65}},
	{id: 30, duration: 13.07, bloons: {lead: 9}},
	
	{id: 31, duration: 15.91, bloons: {black: 8, white: 8, zebra: 10}},
	{id: 32, duration: 27.96, bloons: {purple: 10, black: 15, white: 20}},
	{id: 33, duration: 25.34, bloons: {red: 20, yellow: 13}},
	{id: 34, duration: 36, bloons: {yellow: 160, zebra: 6}},
	{id: 35, duration: 33.76, bloons: {pink: 35, black: 30, white: 25, rainbow: 5}},
	{id: 36, duration: 20.99, bloons: {green: 20, pink: 140}},
	{id: 37, duration: 43.51, bloons: {black: 25, white: 32, lead: 15, zebra: 10}},
	{id: 38, duration: 29.06, bloons: {pink: 42, white: 17, lead: 14, zebra: 10, ceramic: 2}},
	{id: 39, duration: 37.93, bloons: {black: 10, white: 10, zebra: 20, rainbow: 20}},
	{id: 40, duration: 1, bloons: {moab: 1}},
	
	{id: 41, duration: 46.2, bloons: {black: 60, zebra: 60}},
	{id: 42, duration: 11.6, bloons: {rainbow: 11}},
	{id: 43, duration: 9.26, bloons: {rainbow: 10, ceramic: 7}},
	{id: 44, duration: 23.67, bloons: {zebra: 50}},
	{id: 45, duration: 53.1, bloons: {pink: 180, purple: 10, flead: 4, rainbow: 25}},
	{id: 46, duration: 7, bloons: {fceramic: 6}},
	{id: 47, duration: 24.65, bloons: {pink: 70, ceramic: 12}},
	{id: 48, duration: 55.72, bloons: {pink: 40, purple: 30, rainbow: 40, fceramic: 3}},
	{id: 49, duration: 50, bloons: {green: 343, zebra: 20, rainbow: 30, ceramic: 18}},
	{id: 50, duration: 28.98, bloons: {red: 10, flead: 8, ceramic: 20, moab: 2}},
	
	{id: 51, duration: 24.14, bloons: {rainbow: 10, ceramic: 15}},
	{id: 52, duration: 20.56, bloons: {rainbow: 25, ceramic: 10, moab: 2}},
	{id: 53, duration: 35, bloons: {pink: 80, moab: 3}},
	{id: 54, duration: 19.41, bloons: {ceramic: 35, moab: 2}},
	{id: 55, duration: 29.78, bloons: {ceramic: 45, moab: 1}},
	{id: 56, duration: 16.18, bloons: {rainbow: 40, moab: 1}},
	{id: 57, duration: 26.23, bloons: {rainbow: 40, moab: 4}},
	{id: 58, duration: 43.98, bloons: {ceramic: 15, fceramic: 10, moab: 5}},
	{id: 59, duration: 26.16, bloons: {lead: 50, ceramic: 30}},
	{id: 60, duration: 1, bloons: {bfb: 1}},
	
	{id: 61, duration: 20, bloons: {zebra: 150, moab: 5}},
	{id: 62, duration: 48.29, bloons: {purple: 250, rainbow: 15, moab: 5, fmoab: 2}},
	{id: 63, duration: 42.25, bloons: {lead: 75, ceramic: 122}},
	{id: 64, duration: 9.53, bloons: {moab: 6, fmoab: 3}},
	{id: 65, duration: 62, bloons: {zebra: 100, rainbow: 70, ceramic: 50, moab: 3, bfb: 2}},
	{id: 66, duration: 22.75, bloons: {moab: 8, fmoab: 3}},
	{id: 67, duration: 26.44, bloons: {fceramic: 13, moab: 8}},
	{id: 68, duration: 8.44, bloons: {moab: 4, bfb: 1}},
	{id: 69, duration: 42.13, bloons: {black: 40, flead: 40, ceramic: 50}},
	{id: 70, duration: 41.14, bloons: {zebra: 120, rainbow: 200, moab: 4}},
	
	{id: 71, duration: 16.55, bloons: {ceramic: 30, moab: 10}},
	{id: 72, duration: 21.7, bloons: {ceramic: 38, bfb: 2}},
	{id: 73, duration: 26.95, bloons: {moab: 8, bfb: 2}},
	{id: 74, duration: 82.39, bloons: {ceramic: 50, fceramic: 85, bfb: 1}},
	{id: 75, duration: 22.59, bloons: {lead: 14, flead: 14, fmoab: 3, bfb: 7}},
	{id: 76, duration: 1.78, bloons: {ceramic: 60}},
	{id: 77, duration: 58.92, bloons: {moab: 11, bfb: 5}},
	{id: 78, duration: 90, bloons: {purple: 80, rainbow: 150, ceramic: 147}},
	{id: 79, duration: 60, bloons: {rainbow: 500, bfb: 4, fbfb: 2}},
	{id: 80, duration: 2, bloons: {zomg: 1}},
	
	{id: 81, duration: 26.47, bloons: {bfb: 17}},
	{id: 82, duration: 35.68, bloons: {bfb: 10, fbfb: 5}},
	{id: 83, duration: 60.2, bloons: {ceramic: 80, fceramic: 40, moab: 30}},
	{id: 84, duration: 25, bloons: {moab: 50, bfb: 10}},
	{id: 85, duration: 10, bloons: {zomg: 2}},
	{id: 86, duration: 20.85, bloons: {fbfb: 5}},
	{id: 87, duration: 10, bloons: {zomg: 4}},
	{id: 88, duration: 14.55, bloons: {moab: 18, bfb: 8, zomg: 2}},
	{id: 89, duration: 20.74, bloons: {fmoab: 20, fbfb: 8}},
	{id: 90, duration: 11.9, bloons: {flead: 50, ddt: 3}},
	
	{id: 91, duration: 30, bloons: {fceramic: 100, bfb: 20}},
	{id: 92, duration: 35, bloons: {fmoab: 50, zomg: 4}},
	{id: 93, duration: 20, bloons: {fbfb: 10, ddt: 6}},
	{id: 94, duration: 15, bloons: {bfb: 25, zomg: 6}},
	{id: 95, duration: 50.81, bloons: {purple: 500, flead: 250, fmoab: 50, ddt: 30}},
	{id: 96, duration: 32.12, bloons: {fmoab: 40, bfb: 30, zomg: 6}},
	{id: 97, duration: 5, bloons: {fzomg: 2}},
	{id: 98, duration: 30, bloons: {fbfb: 30, zomg: 8}},
	{id: 99, duration: 12, bloons: {moab: 60, fddt: 9}},
	{id: 100, duration: 0.1, bloons: {bad: 1}},
	
	{id: 101, duration: 9.5, bloons: {purple: 450, fceramic: 50, fmoab: 10}},
	{id: 102, duration: 46.5, bloons: {bfb: 3, fbfb: 3, zomg: 1, fzomg: 3, ddt: 18, fddt: 12}},
	{id: 103, duration: 19, bloons: {purple: 198, moab: 100, fmoab: 50, fzomg: 10}},
	{id: 104, duration: 22, bloons: {purple: 200, flead: 200, ceramic: 200, moab: 25, fmoab: 150, bfb: 25, fbfb: 14}},
	{id: 105, duration: 9, bloons: {flead: 25, ceramic: 100, fceramic: 300, bfb: 30}},
	{id: 106, duration: 33.5, bloons: {ddt: 66, fddt: 27}},
	{id: 107, duration: 10, bloons: {purple: 444, fceramic: 100, fzomg: 10}},
	{id: 108, duration: 24, bloons: {zomg: 9, fzomg: 10}},
	{id: 109, duration: 18, bloons: {purple: 15, fmoab: 30, bfb: 15, fbfb: 15, zomg: 15}},
	{id: 110, duration: 36, bloons: {bfb: 25, ddt: 18, fddt: 12}},
	
	{id: 111, duration: 18.5, bloons: {zomg: 22, fzomg: 9}},
	{id: 112, duration: 20, bloons: {fbfb: 27, fddt: 21}},
	{id: 113, duration: 21.5, bloons: {ceramic: 42, fceramic: 42, fbfb: 15, fmoab: 75}},
	{id: 114, duration: 30, bloons: {moab: 24, fmoab: 36, bfb: 12, fbfb: 8, zomg: 5, fzomg: 3, ddt: 9, fddt: 6}},
	{id: 115, duration: 30, bloons: {moab: 24, fmoab: 36, bfb: 12, fbfb: 8, zomg: 5, fzomg: 3, ddt: 9, fddt: 6}},
	{id: 116, duration: 15, bloons: {purple: 400, fbfb: 18, fzomg: 8}},
	{id: 117, duration: 14, bloons: {lead: 250, ddt: 27, fddt: 18}},
	{id: 118, duration: 16, bloons: {zomg: 12, fddt: 30}},
	{id: 119, duration: 26, bloons: {bad: 3}},
	{id: 120, duration: 51, bloons: {fmoab: 24, fbfb: 12, zomg: 12}},
	
	{id: 121, duration: 15, bloons: {fmoab: 28, fbfb: 14, fzomg: 6}},
	{id: 122, duration: 20, bloons: { flead: 225, bfb: 40, fbfb: 20}},
	{id: 123, duration: 40, bloons: {moab: 200, fzomg: 8}},
	{id: 124, duration: 30, bloons: {fbfb: 75}},
	{id: 125, duration: 40, bloons: {moab: 63, bfb: 32, zomg: 21}},
	{id: 126, duration: 27, bloons: {flead: 1, ddt: 99}},
	{id: 127, duration: 14, bloons: {moab: 48, bfb: 24}},
	{id: 128, duration: 28, bloons: {fceramic: 200, fddt: 39, bfb: 30}},
	{id: 129, duration: 28, bloons: {purple: 77, flead: 77, ceramic: 77, zomg: 7, fzomg: 7, ddt: 18}},
	{id: 130, duration: 40, bloons: {moab: 96, fmoab: 66, ddt: 48, fddt: 6}},
	
	{id: 131, duration: 39, bloons: {fzomg: 18}},
	{id: 132, duration: 41, bloons: {purple: 200, zomg: 18, fzomg: 6}},
	{id: 133, duration: 43, bloons: {moab: 27, fmoab: 12, bfb: 27, fbfb: 12, zomg: 9, fzomg: 4}},
	{id: 134, duration: 24.01, bloons: {bfb: 28, fbfb: 12}},
	{id: 135, duration: 24, bloons: {fzomg: 14, fddt: 21}},
	{id: 136, duration: 45, bloons: {fmoab: 96, bfb: 24}},
	{id: 137, duration: 8.1, bloons: {moab: 48, bfb: 24, zomg: 18}},
	{id: 138, duration: 40, bloons: {ddt: 45, fddt: 81}},
	{id: 139, duration: 45, bloons: {moab: 181, fmoab: 72}},
	{id: 140, duration: 46, bloons: {bad: 1, fbad: 1}}
	];
	
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

function getBloonStructure(bloonLayerTop) {
  for (var i = 0; i < bloonStructure.length; i++) {
    if (bloonStructure[i].id === bloonLayerTop) {
		return bloonStructure[i];
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

function calcLayerCount(bloonLayerTop) {
	var layerCount = 1;
	var currentLayer = getBloonStructure(bloonLayerTop);
	var childs = currentLayer.childs;
	if(childs === undefined) {
		return 1;
	}
	
	var keys = Object.keys(childs);
	keys.forEach(
		function(bloon) {
			var bloonCount = childs[bloon];
			for (var i = 0; i < bloonCount; i++) {
				layerCount += calcLayerCount(bloon);
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
			console.log(bloonCount);
			for (var i = 0; i < bloonCount; i++) {
				income += calcLayerCount(bloon);
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
	
	if('red' in roundResult) count = getRound(round).red;
	for (var i = 1; i <= count; i++) {
		income += calcLayerCount("red");
	}
	
	if('red' in roundResult) income += getRound(round).red;
	if('blue' in roundResult) income += getRound(round).blue;
	if('green' in roundResult) income += getRound(round).green;
	if('yellow' in roundResult) income += getRound(round).yellow;
	if('pink' in roundResult) income += getRound(round).pink;
	if('purple' in roundResult) income += getRound(round).purple;
	if('black' in roundResult) income += getRound(round).black;
	if('white' in roundResult) income += getRound(round).white;
	if('lead' in roundResult) income += getRound(round).lead;
	if('flead' in roundResult) income += getRound(round).flead;
	if('zebra' in roundResult) income += getRound(round).zebra;
	if('rainbow' in roundResult) income += getRound(round).rainbow;
	if('ceramic' in roundResult) income += getRound(round).ceramic;
	if('fceramic' in roundResult) income += getRound(round).fceramic;
	if('moab' in roundResult) income += getRound(round).moab;
	if('fmoab' in roundResult) income += getRound(round).fmoab;
	if('bfb' in roundResult) income += getRound(round).bfb;
	if('fbfb' in roundResult) income += getRound(round).fbfb;
	if('zomg' in roundResult) income += getRound(round).zomg;
	if('fzomg' in roundResult) income += getRound(round).fzomg;
	if('ddt' in roundResult) income += getRound(round).ddt;
	if('fddt' in roundResult) income += getRound(round).fddt;
	if('bad' in roundResult) income += getRound(round).bad;
	if('fbad' in roundResult) income += getRound(round).fbad;
	
	income += (parseInt(round) + 100);
	
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
	
	return (income * multiplier);
}

function calcRBE(round) {
	var income = 0;
	var multiplier = 1;
	var roundResult = getRound(round);
	if('red' in roundResult) income += getRound(round).red;
	if('blue' in roundResult) income += getRound(round).blue;
	if('green' in roundResult) income += getRound(round).green;
	if('yellow' in roundResult) income += getRound(round).yellow;
	if('pink' in roundResult) income += getRound(round).pink;
	if('purple' in roundResult) income += getRound(round).purple;
	if('black' in roundResult) income += getRound(round).black;
	if('white' in roundResult) income += getRound(round).white;
	if('lead' in roundResult) income += getRound(round).lead;
	if('flead' in roundResult) income += getRound(round).flead;
	if('zebra' in roundResult) income += getRound(round).zebra;
	if('rainbow' in roundResult) income += getRound(round).rainbow;
	if('ceramic' in roundResult) income += getRound(round).ceramic;
	if('fceramic' in roundResult) income += getRound(round).fceramic;
	if('moab' in roundResult) income += getRound(round).moab;
	if('fmoab' in roundResult) income += getRound(round).fmoab;
	if('bfb' in roundResult) income += getRound(round).bfb;
	if('fbfb' in roundResult) income += getRound(round).fbfb;
	if('zomg' in roundResult) income += getRound(round).zomg;
	if('fzomg' in roundResult) income += getRound(round).fzomg;
	if('ddt' in roundResult) income += getRound(round).ddt;
	if('fddt' in roundResult) income += getRound(round).fddt;
	if('bad' in roundResult) income += getRound(round).bad;
	if('fbad' in roundResult) income += getRound(round).fbad;
	
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
	
	return (income * multiplier);
}
	
startInput.addEventListener("input", inputHandlerStart);
endInput.addEventListener("input", inputHandlerEnd);
cashInput.addEventListener("input", inputHandlerCash);
startInput.addEventListener("blur", calcAll);
endInput.addEventListener("blur", calcAll);
cashInput.addEventListener("blur", calcAll);