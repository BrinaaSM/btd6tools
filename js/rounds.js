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

/*
r red
b blue
g green
y yellow
p pink
pu purple
bl black
w white
l lead
fl fortified lead
z zebra
rb rainbow
c ceramic
fc fortified ceramic
m moab
fm fortified M.O.A.B.
f B.F.B.
ff fortified B.F.B.
o Z.O.M.G.
fo fortified Z.O.M.G.
d D.D.T
fd fortified D.D.T.
a B.A.D.
fa fortified B.A.D.
*/
const rounds = [
	{id: 1, duration: 17.51, r: 20},
	{id: 2, duration: 19, r: 35},
	{id: 3, duration: 16.71, r: 25, b: 5},
	{id: 4, duration: 17.31, r: 35, b: 18},
	{id: 5, duration: 16.5, r: 5, b: 27},
	{id: 6, duration: 18.7, r: 15, b: 15, g: 4},
	{id: 7, duration: 26.8, r: 20, b: 20, g: 5},
	{id: 8, duration: 28.87, r: 10, b: 20, g: 14},
	{id: 9, duration: 18.95, g: 30},
	{id: 10, duration: 47.99, b: 102},
	
	{id: 11, duration: 19.16, r: 10, b: 10, g: 12, y: 3},
	{id: 12, duration: 17.39, b: 15, g: 10, y: 5},
	{id: 13, duration: 32.21, b: 50, g: 23},
	{id: 14, duration: 26.63, r: 49, b: 15, g: 10, y: 9},
	{id: 15, duration: 25, r: 20, b: 15, g: 12, y: 10, p: 5},
	{id: 16, duration: 16.02, g: 40, y: 8},
	{id: 17, duration: 5, y: 12},
	{id: 18, duration: 26.82, g: 80},
	{id: 19, duration: 15.76, g: 10, y: 9, p: 15},
	{id: 20, duration: 5.25, bl: 6},
	
	{id: 21, duration: 18.12, y: 40, p: 15},
	{id: 22, duration: 8, w: 16},
	{id: 23, duration: 6.82, bl: 7, w: 7},
	{id: 24, duration: 9, b: 20, g: 1},
	{id: 25, duration: 21.14, y: 25, pu: 10},
	{id: 26, duration: 14.51, p: 23, z: 4},
	{id: 27, duration: 34.26, r: 100, b: 60, g: 45, y: 45},
	{id: 28, duration: 5, l: 6},
	{id: 29, duration: 15.25, y: 65},
	{id: 30, duration: 13.07, l: 9},
	
	{id: 31, duration: 15.91, bl: 8, w: 8, z: 10},
	{id: 32, duration: 27.96, pu: 10, bl: 15, w: 20},
	{id: 33, duration: 25.34, r: 20, y: 13},
	{id: 34, duration: 36, y: 160, z: 6},
	{id: 35, duration: 33.76, p: 35, bl: 30, w: 25, rb: 5},
	{id: 36, duration: 20.99, g: 20, p: 140},
	{id: 37, duration: 43.51, bl: 25, w: 32, l: 15, z: 10},
	{id: 38, duration: 29.06, p: 42, w: 17, l: 14, z: 10, c: 2},
	{id: 39, duration: 37.93, bl: 10, w: 10, z: 20, rb: 20},
	{id: 40, duration: 1, m: 1},
	
	{id: 41, duration: 46.2, bl: 60, z: 60},
	{id: 42, duration: 11.6, rb: 11},
	{id: 43, duration: 9.26, rb: 10, c: 7},
	{id: 44, duration: 23.67, z: 50},
	{id: 45, duration: 53.1, p: 180, pu: 10, fl: 4, rb: 25},
	{id: 46, duration: 7, fc: 6},
	{id: 47, duration: 24.65, p: 70, c: 12},
	{id: 48, duration: 55.72, p: 40, pu: 30, rb: 40, fc: 3},
	{id: 49, duration: 50, g: 343, z: 20, rb: 30, c: 18},
	{id: 50, duration: 28.98, r: 10, fl: 8, c: 20, m: 2},
	
	{id: 51, duration: 24.14, rb: 10, c: 15},
	{id: 52, duration: 20.56, rb: 25, c: 10, m: 2},
	{id: 53, duration: 35, p: 80, m: 3},
	{id: 54, duration: 19.41, c: 35, m: 2},
	{id: 55, duration: 29.78, c: 45, m: 1},
	{id: 56, duration: 16.18, rb: 40, m: 1},
	{id: 57, duration: 26.23, rb: 40, m: 4},
	{id: 58, duration: 43.98, c: 15, fc: 10, m: 5},
	{id: 59, duration: 26.16, l: 50, c: 30},
	{id: 60, duration: 1, f: 1},
	
	{id: 61, duration: 20, z: 150, m: 5},
	{id: 62, duration: 48.29, pu: 250, rb: 15, m: 5, fm: 2},
	{id: 63, duration: 42.25, l: 75, c: 122},
	{id: 64, duration: 9.53, m: 6, fm: 3},
	{id: 65, duration: 62, z: 100, rb: 70, c: 50, m: 3, f: 2},
	{id: 66, duration: 22.75, m: 8, fm: 3},
	{id: 67, duration: 26.44, fc: 13, m: 8},
	{id: 68, duration: 8.44, m: 4, f: 1},
	{id: 69, duration: 42.13, bl: 40, fl: 40, c: 50},
	{id: 70, duration: 41.14, z: 120, rb: 200, m: 4},
	
	{id: 71, duration: 16.55, c: 30, m: 10},
	{id: 72, duration: 21.7, c: 38, f: 2},
	{id: 73, duration: 26.95, m: 8, f: 2},
	{id: 74, duration: 82.39, c: 50, fc: 85, f: 1},
	{id: 75, duration: 22.59, l: 14, fl: 14, fm: 3, f: 7},
	{id: 76, duration: 1.78, c: 60},
	{id: 77, duration: 58.92, m: 11, f: 5},
	{id: 78, duration: 90, pu: 80, rb: 150, c: 147},
	{id: 79, duration: 60, rb: 500, f: 4, ff: 2},
	{id: 80, duration: 2, o: 1},
	
	{id: 81, duration: 26.47, f: 17},
	{id: 82, duration: 35.68, f: 10, ff: 5},
	{id: 83, duration: 60.2, c: 80, fc: 40, m: 30},
	{id: 84, duration: 25, m: 50, f: 10},
	{id: 85, duration: 10, o: 2},
	{id: 86, duration: 20.85, ff: 5},
	{id: 87, duration: 10, o: 4},
	{id: 88, duration: 14.55, m: 18, f: 8, o: 2},
	{id: 89, duration: 20.74, fm: 20, ff: 8},
	{id: 90, duration: 11.9, fl: 50, d: 3},
	
	{id: 91, duration: 30, fc: 100, f: 20},
	{id: 92, duration: 35, fm: 50, o: 4},
	{id: 93, duration: 20, ff: 10, d: 6},
	{id: 94, duration: 15, f: 25, o: 6},
	{id: 95, duration: 50.81, pu: 500, fl: 250, fm: 50, d: 30},
	{id: 96, duration: 32.12, fm: 40, f: 30, o: 6},
	{id: 97, duration: 5, fo: 2},
	{id: 98, duration: 30, ff: 30, o: 8},
	{id: 99, duration: 12, m: 60, fd: 9},
	{id: 100, duration: 0.1, a: 1},
	
	{id: 101, duration: 9.5, pu: 450, fc: 50, fm: 10},
	{id: 102, duration: 46.5, f: 3: ff: 3, o: 1, fo: 3, d: 18, fd: 12},
	{id: 103, duration: 19, pu: 198, m: 100, fm: 50, fo: 10},
	{id: 104, duration: 22, pu: 200, fl: 200, c: 200, m: 25, fm: 150, f: 25, ff: 14},
	{id: 105, duration: 9, fl: 25, c: 100, fc: 300, f: 30},
	{id: 106, duration: 33.5, d: 66, fd: 27},
	{id: 107, duration: 10, pu: 444, fc: 100, fo: 10},
	{id: 108, duration: 24, o: 9, fo: 10},
	{id: 109, duration: 18, pu: 15, fm: 30, f: 15, ff: 15, o: 15},
	{id: 110, duration: 36, f: 25, d: 18, fd: 12},
	
	{id: 111, duration: 18.5, o: 22, fo: 9},
	{id: 112, duration: 20, ff: 27, fd: 21},
	{id: 113, duration: 21.5, c: 42, fc: 42, ff: 15, fm: 75},
	{id: 114, duration: 30, m: 24, fm: 36, f: 12, ff: 8, o: 5, fo: 3, d: 9, fd: 6},
	{id: 115, duration: 30, m: 24, fm: 36, f: 12, ff: 8, o: 5, fo: 3, d: 9, fd: 6},
	{id: 116, duration: 15, pu: 400, ff: 18, fo: 8},
	{id: 117, duration: 14, l: 250, d: 27, fd: 18},
	{id: 118, duration: 16, o: 12, fd: 30},
	{id: 119, duration: 26, a: 3},
	{id: 120, duration: 51, fm: 24, ff: 12, o: 12},
	
	{id: 121, duration: 15, fm: 28, ff: 14, fo: 6},
	{id: 122, duration: 20, fl: 225, f: 40, ff: 20},
	{id: 123, duration: 40, m: 200, fo: 8},
	{id: 124, duration: 30, ff: 75},
	{id: 125, duration: 40, m: 63, f: 32, o: 21},
	{id: 126, duration: 27, fl: 1, d: 99},
	{id: 127, duration: 14, m: 48, f: 24},
	{id: 128, duration: 28, fc: 200, fd: 39, f: 30},
	{id: 129, duration: 28, pu: 77, fl: 77, c: 77, o: 7, fo: 7, d: 18},
	{id: 130, duration: 40, m: 96, fm: 66, d: 48, fd: 6},
	
	{id: 131, duration: 39, fo: 18},
	{id: 132, duration: 41, pu: 200, o: 18, fo: 6},
	{id: 133, duration: 43, m: 27, fm: 12, f: 27, ff: 12, o: 9, fo: 4},
	{id: 134, duration: 24.01, f: 28, ff: 12},
	{id: 135, duration: 24, fo: 14, fd: 21},
	{id: 136, duration: 45, fm: 96, f: 24},
	{id: 137, duration: 8.1, m: 48, f: 24, o: 18},
	{id: 138, duration: 40, d: 45, fd: 81},
	{id: 139, duration: 45, m: 181, fm: 72},
	{id: 140, duration: 46, a: 1, fa: 1}
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

function calcIncome(round) {
	var income = 0;
	var multiplier = 1;
	var roundResult = getRound(round);
	if('r' in roundResult) income += getRound(round).r;
	if('b' in roundResult) income += getRound(round).b;
	if('g' in roundResult) income += getRound(round).g;
	if('y' in roundResult) income += getRound(round).y;
	if('p' in roundResult) income += getRound(round).p;
	if('pu' in roundResult) income += getRound(round).pu;
	if('bl' in roundResult) income += getRound(round).bl;
	if('w' in roundResult) income += getRound(round).w;
	if('l' in roundResult) income += getRound(round).l;
	if('fl' in roundResult) income += getRound(round).fl;
	if('z' in roundResult) income += getRound(round).z;
	if('rb' in roundResult) income += getRound(round).rb;
	if('c' in roundResult) income += getRound(round).c;
	if('fc' in roundResult) income += getRound(round).fc;
	if('m' in roundResult) income += getRound(round).m;
	if('fm' in roundResult) income += getRound(round).fm;
	if('f' in roundResult) income += getRound(round).f;
	if('ff' in roundResult) income += getRound(round).ff;
	if('o' in roundResult) income += getRound(round).o;
	if('fo' in roundResult) income += getRound(round).fo;
	if('d' in roundResult) income += getRound(round).d;
	if('fd' in roundResult) income += getRound(round).fd;
	if('a' in roundResult) income += getRound(round).a;
	if('fa' in roundResult) income += getRound(round).fa;
	
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
	if('r' in roundResult) income += getRound(round).r;
	if('b' in roundResult) income += getRound(round).b;
	if('g' in roundResult) income += getRound(round).g;
	if('y' in roundResult) income += getRound(round).y;
	if('p' in roundResult) income += getRound(round).p;
	if('pu' in roundResult) income += getRound(round).pu;
	if('bl' in roundResult) income += getRound(round).bl;
	if('w' in roundResult) income += getRound(round).w;
	if('l' in roundResult) income += getRound(round).l;
	if('fl' in roundResult) income += getRound(round).fl;
	if('z' in roundResult) income += getRound(round).z;
	if('rb' in roundResult) income += getRound(round).rb;
	if('c' in roundResult) income += getRound(round).c;
	if('fc' in roundResult) income += getRound(round).fc;
	if('m' in roundResult) income += getRound(round).m;
	if('fm' in roundResult) income += getRound(round).fm;
	if('f' in roundResult) income += getRound(round).f;
	if('ff' in roundResult) income += getRound(round).ff;
	if('o' in roundResult) income += getRound(round).o;
	if('fo' in roundResult) income += getRound(round).fo;
	if('d' in roundResult) income += getRound(round).d;
	if('fd' in roundResult) income += getRound(round).fd;
	if('a' in roundResult) income += getRound(round).a;
	if('fa' in roundResult) income += getRound(round).fa;
	
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