const source = document.getElementById("current-round-input");
const result1 = document.getElementById("moab-hp-output");
const result2 = document.getElementById("bfb-hp-output");
const result3 = document.getElementById("zomg-hp-output");
const result4 = document.getElementById("ddt-hp-output");
const result5 = document.getElementById("bad-hp-output");

var knowledge;
var doubleHP;
var fortified;

function inputHandler(e) {
	var round = e.target.value;
	calcAll(round);
}

function calcAll(round) {
	if(round === null) {
		round = document.getElementById("current-round-input").value;
	}
	result1.innerHTML = calcHP(200, round);
	result2.innerHTML = calcHP(700, round);
	result3.innerHTML = calcHP(4000, round);
	result4.innerHTML = calcHP(400, round);
	result5.innerHTML = calcHP(20000, round);
}

function calcHP(baseHP, round) {
	var hp;
	if(round >= 1 && round <= 80) {
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
	else if(round > 500 && round <= Number.MAX_SAFE_INTEGER) {
		hp = baseHP * (491.5 + (round - 500) * 5.0);
	}
	else if(round > Number.MAX_SAFE_INTEGER) {
		return "JS doesn't support this number safely.";
	}
	else {
		return "N/A";
	}
	
	if(knowledge === true) {
		hp = Math.floor(parseInt(hp) * 0.9);
	}
	if(fortified === true) {
		hp = hp * 2;
	}
	if(doubleHP === true) {
		hp = hp * 2;
	}
	
	return hp.toLocaleString();
}

source.addEventListener("input", inputHandler);