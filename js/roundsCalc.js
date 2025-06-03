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

let startRound = 1;
let endRound = 1;
let currentCash = 0;
let roundType;

// input handling

function inputHandlerStart(e) {
	let maxRound;
	
	startRound = e.target.value;
	if (roundType === "default") maxRound = 140;
	else if (roundType === "abr") maxRound = 100;
	else maxRound = 100;
	
	if (startRound < 1) startRound = "";
	if (startRound > maxRound) startRound = maxRound;

	startInput.value = startRound;
}

function inputHandlerEnd(e) {
	let maxRound;
	
	endRound = e.target.value;
	if (roundType === "default") maxRound = 140;
	else if (roundType === "abr") maxRound = 100;
	else  maxRound = 100;
	
	if (endRound < 1) endRound = "";
	if (endRound > maxRound) endRound = maxRound;
	endInput.value = endRound;
}

function inputHandlerCash(e) {
	let regex=/^[0-9]+$/; // only numbers valid
	let max_integer = 2147483647;
	
	currentCash = e.target.value;
	if (currentCash < 0) {
		cashInput.value = currentCash;
		currentCash = 0;
	}
	if (!currentCash.match(regex)) {
		cashInput.value = "";
		currentCash = 0;
	}
	if (currentCash > max_integer) {
		currentCash = max_integer;
		cashInput.value = currentCash;
	}
}

function checkValidRounds() {
	if (startRound === undefined || startRound === "") startRound = 1;
	if (endRound === undefined || endRound === "") endRound = 1;
	if (parseInt(startRound) > parseInt(endRound)) endRound = startRound;
	startInput.value = startRound;
	endInput.value = endRound;
}

function calcAll() {
	checkValidRounds();
	let incomeSum = sumIncome();
	
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

function sumIncome() {
	let sum = 0;
	
	for (let i = parseInt(startRound); i <= parseInt(endRound); i++) sum += calcIncome(i);
	return sum;
}
	
function sumRBE() {
	let sum = 0;
	
	for (let i = parseInt(startRound); i <= parseInt(endRound); i++) sum += calcRBE(i);
	return sum;
}

function sumXP() {
	let sum = 0;
	
	for (let i = parseInt(startRound); i <= parseInt(endRound); i++) sum += calcXP(i);
	return sum;
}

function sumDuration() {
	let sum = 0;
	
	for (let i = parseInt(startRound); i <= parseInt(endRound); i++) sum += getDuration(i);
	return sum;
}

function convertDuration(duration) {
	let converted = "";
	
	if (duration > 60) {
		let min = Math.floor(duration/60);
		converted += min + "m ";
		converted += Math.floor(duration - (min * 60));
	} else converted = Math.floor(duration);
	return converted;
}

startInput.addEventListener("input", inputHandlerStart);
endInput.addEventListener("input", inputHandlerEnd);
cashInput.addEventListener("input", inputHandlerCash);
startInput.addEventListener("blur", calcAll);
endInput.addEventListener("blur", calcAll);
cashInput.addEventListener("blur", calcAll);