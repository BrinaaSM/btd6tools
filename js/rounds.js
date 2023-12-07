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

const rounds = [
	{id: 1, income: 121, rbe: 20, duration: 17.51},
	{id: 2, income: 137, rbe: 35, duration: 19},
	{id: 3, income: 138, rbe: 35, duration: 16.71},
	{id: 4, income: 175, rbe: 71, duration: 17.31},
	{id: 5, income: 164, rbe: 59, duration: 16.5},
	{id: 6, income: 163, rbe: 57, duration: 18.7},
	{id: 7, income: 182, rbe: 75, duration: 26.8},
	{id: 8, income: 200, rbe: 92, duration: 28.87},
	{id: 9, income: 199, rbe: 90, duration: 18.95},
	{id: 10, income: 314, rbe: 204, duration: 47.99},
	
	{id: 11, income: 189, rbe: 78, duration: 19.16},
	{id: 12, income: 192, rbe: 80, duration: 17.39},
	{id: 13, income: 282, rbe: 169, duration: 32.21},
	{id: 14, income: 259, rbe: 145, duration: 26.63},
	{id: 15, income: 266, rbe: 151, duration: 25},
	{id: 16, income: 268, rbe: 152, duration: 16.02},
	{id: 17, income: 165, rbe: 48, duration: 5},
	{id: 18, income: 358, rbe: 240, duration: 26.82},
	{id: 19, income: 260, rbe: 141, duration: 15.76},
	{id: 20, income: 186, rbe: 66, duration: 5.25},
	
	{id: 21, income: 351, rbe: 230, duration: 18.12},
	{id: 22, income: 298, rbe: 176, duration: 8},
	{id: 23, income: 277, rbe: 154, duration: 6.82},
	{id: 24, income: 167, rbe: 43, duration: 9},
	{id: 25, income: 335, rbe: 210, duration: 21.14},
	{id: 26, income: 333, rbe: 207, duration: 14.51},
	{id: 27, income: 662, rbe: 535, duration: 34.26},
	{id: 28, income: 266, rbe: 138, duration: 5},
	{id: 29, income: 389, rbe: 260, duration: 15.25},
	{id: 30, income: 337, rbe: 207, duration: 13.07},
	
	{id: 31, income: 537, rbe: 406, duration: 15.91},
	{id: 32, income: 627, rbe: 495, duration: 27.96},
	{id: 33, income: 205, rbe: 72, duration: 25.34},
	{id: 34, income: 912, rbe: 778, duration: 36},
	{id: 35, income: 1150, rbe: 1015, duration: 33.76},
	{id: 36, income: 896, rbe: 760, duration: 20.99},
	{id: 37, income: 1339, rbe: 1202, duration: 43.51},
	{id: 38, income: 1277, rbe: 1157, duration: 29.06},
	{id: 39, income: 1759, rbe: 1620, duration: 37.93},
	{id: 40, income: 521, rbe: 616, duration: 1},
	
	{id: 41, income: 2181, rbe: 2040, duration: 46.2},
	{id: 42, income: 659, rbe: 517, duration: 11.6},
	{id: 43, income: 1278, rbe: 1198, duration: 9.26},
	{id: 44, income: 1294, rbe: 1150, duration: 23.67},
	{id: 45, income: 2422, rbe: 2289, duration: 53.1},
	{id: 46, income: 716, rbe: 684, duration: 7},
	{id: 47, income: 1637, rbe: 1598, duration: 24.65},
	{id: 48, income: 2843, rbe: 2752, duration: 55.72},
	{id: 49, income: 4758, rbe: 4771, duration: 50},
	{id: 50, income: 3016, rbe: 3540, duration: 28.98},
	
	{id: 51, income: 1098.5, rbe: 2030, duration: 24.14},
	{id: 52, income: 1595.5, rbe: 3447, duration: 20.56},
	{id: 53, income: 924.5, rbe: 2248, duration: 35},
	{id: 54, income: 2197.5, rbe: 4872, duration: 19.41},
	{id: 55, income: 2483, rbe: 5296, duration: 29.78},
	{id: 56, income: 1286.5, rbe: 2496, duration: 16.18},
	{id: 57, income: 1859, rbe: 4344, duration: 26.23},
	{id: 58, income: 2298, rbe: 5780, duration: 43.98},
	{id: 59, income: 2159, rbe: 4270, duration: 26.16},
	{id: 60, income: 922.5, rbe: 3164, duration: 1},
	
	{id: 61, income: 1232, rbe: 6530, duration: 20},
	{id: 62, income: 1386.4, rbe: 8247, duration: 48.29},
	{id: 63, income: 2826, rbe: 14413, duration: 42.25},
	{id: 64, income: 849.8, rbe: 6264, duration: 9.53},
	{id: 65, income: 3071.6, rbe: 18966, duration: 62},
	{id: 66, income: 1004.2, rbe: 7496, duration: 22.75},
	{id: 67, income: 1023.6, rbe: 6410, duration: 26.44},
	{id: 68, income: 777.8, rbe: 5628, duration: 8.44},
	{id: 69, income: 1391, rbe: 6680, duration: 42.13},
	{id: 70, income: 2618.8, rbe: 13184, duration: 41.14},
	
	{id: 71, income: 1503, rbe: 9280, duration: 16.55},
	{id: 72, income: 1504, rbe: 10280, duration: 21.7},
	{id: 73, income: 1392.6, rbe: 11256, duration: 26.95},
	{id: 74, income: 3044, rbe: 18054, duration: 82.39},
	{id: 75, income: 2667.4, rbe: 25402, duration: 22.59},
	{id: 76, income: 1316, rbe: 6240, duration: 1.78},
	{id: 77, income: 2540.2, rbe: 22596, duration: 58.92},
	{id: 78, income: 4862, rbe: 26382, duration: 90},
	{id: 79, income: 6709, rbe: 45804, duration: 60},
	{id: 80, income: 1400.2, rbe: 16656, duration: 2},
	
	{id: 81, income: 5366, rbe: 44506, duration: 26.47},
	{id: 82, income: 4757, rbe: 52320, duration: 35.68},
	{id: 83, income: 4749, rbe: 25080, duration: 60.2},
	{id: 84, income: 7044, rbe: 51480, duration: 25},
	{id: 85, income: 2625.4, rbe: 30704, duration: 10},
	{id: 86, income: 948.5, rbe: 27040, duration: 20.85},
	{id: 87, income: 2627.4, rbe: 63008, duration: 10},
	{id: 88, income: 3314, rbe: 63600, duration: 14.55},
	{id: 89, income: 2171, rbe: 64384, duration: 20.74},
	{id: 90, income: 339.3, rbe: 2756, duration: 11.9},
	
	{id: 91, income: 4191, rbe: 71160, duration: 30},
	{id: 92, income: 4537.4, rbe: 117408, duration: 35},
	{id: 93, income: 1946.6, rbe: 62936, duration: 20},
	{id: 94, income: 7667.1, rbe: 178112, duration: 15},
	{id: 95, income: 3718, rbe: 80860, duration: 50.81},
	{id: 96, income: 9955.6, rbe: 238952, duration: 32.12},
	{id: 97, income: 1417.2, rbe: 69984, duration: 5},
	{id: 98, income: 9653.8, rbe: 327456, duration: 30},
	{id: 99, income: 2827.9, rbe: 47424, duration: 12},
	{id: 100, income: 1534.6, rbe: 67200, duration: 0.1},
	
	{id: 101, income: 764, rbe: 20020, duration: 9.5},
	{id: 102, income: 2451.2, rbe: 199826, duration: 46.5},
	{id: 103, income: 6170.4, rbe: 507908, duration: 19},
	{id: 104, income: 7591.5, rbe: 387472, duration: 22},
	{id: 105, income: 4401.25, rbe: 152340, duration: 9},
	{id: 106, income: 1977.65, rbe: 113376, duration: 33.5},
	{id: 107, income: 3865.7, rbe: 447384, duration: 10},
	{id: 108, income: 6003.95, rbe: 643088, duration: 24},
	{id: 109, income: 7648.25, rbe: 552345, duration: 18},
	{id: 110, income: 2687.75, rbe: 141410, duration: 36},
	
	{id: 111, income: 9667.55, rbe: 949472, duration: 18.5},
	{id: 112, income: 2670.8, rbe: 261648, duration: 20},
	{id: 113, income: 3184.5, rbe: 231102, duration: 21.5},
	{id: 114, income: 5608.15, rbe: 483416, duration: 30},
	{id: 115, income: 5609.15, rbe: 492396, duration: 30},
	{id: 116, income: 4148.9, rbe: 575600, duration: 15},
	{id: 117, income: 1161.75, rbe: 75010, duration: 14},
	{id: 118, income: 4450.1, rbe: 398784, duration: 16},
	{id: 119, income: 2220.9, rbe: 319020, duration: 26},
	{id: 120, income: 5252.8, rbe: 431808, duration: 51},
	
	{id: 121, income: 1593.48, rbe: 516500, duration: 15},
	{id: 122, income: 2083.5, rbe: 386730, duration: 20},
	{id: 123, income: 2723.16, rbe: 629936, duration: 40},
	{id: 124, income: 2511.5, rbe: 738600, duration: 30},
	{id: 125, income: 4548.48, rbe: 939624, duration: 40},
	{id: 126, income: 980.52, rbe: 141778, duration: 27},
	{id: 127, income: 1324.76, rbe: 178248, duration: 14},
	{id: 128, income: 1820.18, rbe: 322048, duration: 28},
	{id: 129, income: 2240.76, rbe: 826792, duration: 28},
	{id: 130, income: 1784.48, rbe: 307968, duration: 40},
	
	{id: 131, income: 2427.6, rbe: 1461456, duration: 39},
	{id: 132, income: 3184.48, rbe: 1268688, duration: 41},
	{id: 133, income: 3305.94, rbe: 1153341, duration: 43},
	{id: 134, income: 1454, rbe: 374840, duration: 24.01},
	{id: 135, income: 2103.3, rbe: 1386840, duration: 24},
	{id: 136, income: 1699.52, rbe: 402624, duration: 45},
	{id: 137, income: 3531.12, rbe: 1143984, duration: 8.1},
	{id: 138, income: 1198.12, rbe: 442872, duration: 40},
	{id: 139, income: 2166.86, rbe: 401346, duration: 45},
	{id: 140, income: 773.84, rbe: 645440, duration: 46}
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
	durationOutputTotal.innerHTML = sumDuration().toLocaleString() + "s";
	
	rbeOutputStart.innerHTML = startRoundResult.rbe.toLocaleString() + " RBE";
	xpOutputStart.innerHTML = calcXP(startRound).toLocaleString() + " XP";
	cashOutputStart.innerHTML = "$"+ Math.floor(startRoundResult.income).toLocaleString();
	durationOutputStart.innerHTML = startRoundResult.duration.toLocaleString() + "s";
	
	rbeOutputEnd.innerHTML = endRoundResult.rbe.toLocaleString() + " RBE";
	xpOutputEnd.innerHTML = calcXP(endRound).toLocaleString() + " XP";
	cashOutputEnd.innerHTML = "$"+ Math.floor(endRoundResult.income).toLocaleString();
	durationOutputEnd.innerHTML = endRoundResult.duration.toLocaleString() + "s";
}

function getRound(round) {
  for (var i = 0; i < rounds.length; i++) {
    if (parseInt(rounds[i].id) === parseInt(round)) {
		return rounds[i];
	}
  }
}

function sumIncome() {
	sum = 0;
	for (var i = parseInt(startRound); i <= parseInt(endRound); i++) {
		sum += getRound(i).income;
	}
	return sum;
}
	
function sumRBE() {
	sum = 0;
	for (var i = parseInt(startRound); i <= parseInt(endRound); i++) {
		sum += getRound(i).rbe;
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
	var xp = 20;
	for (var i = 1; i <= round; i++) {
		if (i < 21) {
			xp += 20;
		} else if (i === 21) {
			xp += 250;
		} else if (i < 51) {
			xp += 50;
		}  else if (i === 51) {
			xp -= 410;
		}  else{
			xp += 90;
		}
	}
	return xp;
}

startInput.addEventListener("input", inputHandlerStart);
endInput.addEventListener("input", inputHandlerEnd);
cashInput.addEventListener("input", inputHandlerCash);
startInput.addEventListener("blur", calcAll);
endInput.addEventListener("blur", calcAll);
cashInput.addEventListener("blur", calcAll);