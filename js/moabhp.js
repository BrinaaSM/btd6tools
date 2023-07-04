const source = document.getElementById("current-round-input");
const modifierSource = document.getElementById("modifier-input");
const result1 = document.getElementById("moab-hp-output");
const result2 = document.getElementById("bfb-hp-output");
const result3 = document.getElementById("zomg-hp-output");
const result4 = document.getElementById("ddt-hp-output");
const result5 = document.getElementById("bad-hp-output");
const result6 = document.getElementById("ceram-hp-output");

var knowledge;
var doubleHP;
var fortified;
var challenge;
var modifier = 100;
var round;

function inputHandlerRound(e) {
	round = e.target.value;
	calcAll(round, modifier);
}

function inputHandlerModifier(e) {
	modifier = e.target.value;
	if(modifier < 0) {
		modifierSource.value = 5;
	}
	if(modifier < 5) {
		modifier = 5;
	} else if(modifier > 2000) {
		modifierSource.value = 2000;
		modifier = 2000;
	}
	calcAll(round, modifier);
}

function checkValidModifier() {
	modifier = modifierSource.value;
	if(modifier <= 0) {
		modifier = 100;
		modifierSource.value = "";
	} else if(modifier < 5) {
		modifier = 5;
		modifierSource.value = 5;
	} else if(modifier > 2000) {
		modifierSource.value = 2000;
		modifier = 2000;
	}
}

function toggleChallenge(){
	var div = document.getElementById("modifier-div");
	if (challenge === true) {
		div.style.display = "block";
	} else {
		div.style.display = "none";
		modifierSource.value = "";
		modifier = 100;
	}
}

function calcAll(round, modifier) {
	
	if(round === undefined) {
		round = source.value;
	}
	
	if(round <= 0) {
		source.value = "";
		round = 1;
	} else if(round > Number.MAX_SAFE_INTEGER) {
		source.value = Number.MAX_SAFE_INTEGER;
		round = Number.MAX_SAFE_INTEGER;
	}
	
	result1.innerHTML = calcHP(200, round);
	result2.innerHTML = calcHP(700, round);
	result3.innerHTML = calcHP(4000, round);
	result4.innerHTML = calcHP(400, round);
	result5.innerHTML = calcHP(20000, round);
	result6.innerHTML = calcHPCeram(round);
}

function calcHPCeram(round) {
	var hp;
	
	if (round >= 1 && round <= 80) {
		hp = 10;
	} else {
		hp = 60;
	}
	
	if(fortified === true) {
		hp = hp * 2;
	}
	
	if(challenge === true) {
		hp = Math.floor(hp * (modifier / 100));
		if(hp < 1) {
			hp = 1;
		}
	}
	
	return hp.toLocaleString();
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
	else if(round > 500 && round <= Number.MAX_SAFE_INTEGER) {
		hp = baseHP * (491.5 + (round - 500) * 5.0);
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
	if(challenge === true) {
		hp = Math.floor(hp * (modifier / 100));
	}
	
	return hp.toLocaleString();
}

function selectCheckbox(domElement) {
	if(domElement.checked) {
		domElement.parentNode.style.border = "3px yellow solid";
	} else {
		domElement.parentNode.style.border = "3px #00003f solid";
	}
}

document.getElementById("modifier-div").style.display = "none";
source.addEventListener("input", inputHandlerRound);
modifierSource.addEventListener("input", inputHandlerModifier);