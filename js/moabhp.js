const roundInput = document.getElementById("current-round-input");
const modifierInput = document.getElementById("modifier-input");
const resultMOAB = document.getElementById("moab-hp-output");
const resultBFB = document.getElementById("bfb-hp-output");
const resultZOMG = document.getElementById("zomg-hp-output");
const resultDDT = document.getElementById("ddt-hp-output");
const resultBAD = document.getElementById("bad-hp-output");
const resultCeramic = document.getElementById("ceram-hp-output");

var knowledge;
var doubleHP;
var fortified;
var fortified_modifier = 2;
var challenge;
var modifier = 100;
var min_modifier = 5;
var max_modifier = 50000;
var knowledge_modifier = 0.9;
var round;

// input handling

function inputHandlerRound(e) {
	round = e.target.value;
	calcAll(round, modifier);
}

function inputHandlerModifier(e) {
	modifier = e.target.value;
	if(modifier < 0) {
		modifierInput.value = min_modifier;
	}
	if(modifier < min_modifier) {
		modifier = min_modifier;
	} else if(modifier > max_modifier) {
		modifierInput.value = max_modifier;
		modifier = max_modifier;
	}
	calcAll(round, modifier);
}

function checkValidModifier() {
	modifier = modifierInput.value;
	if(modifier <= 0) {
		modifier = 100;
		modifierInput.value = "";
	} else if(modifier < min_modifier) {
		modifier = min_modifier;
		modifierInput.value = min_modifier;
	} else if(modifier > max_modifier) {
		modifierInput.value = max_modifier;
		modifier = max_modifier;
	}
}

// dom stuff

function toggleChallenge(){
	var div = document.getElementById("modifier-div");
	if (challenge === true) {
		div.style.display = "block";
	} else {
		div.style.display = "none";
		modifierInput.value = "";
		modifier = 100;
	}
}

function selectCheckbox(domElement) {
	if(domElement.checked) {
		domElement.parentNode.style.border = "3px yellow solid";
	} else {
		domElement.parentNode.style.border = "0px #00003f solid";
	}
}

// calculation

function calcAll(round, modifier) {
	
	if(round === undefined) {
		round = roundInput.value;
	}
	
	if(round <= 0) {
		roundInput.value = "";
		round = 1;
	} else if (round > Number.MAX_SAFE_INTEGER) {
		roundInput.value = Number.MAX_SAFE_INTEGER;
		round = Number.MAX_SAFE_INTEGER;
	}
	
	resultMOAB.innerHTML = calcHP(getHP('moab', round));
	resultBFB.innerHTML = calcHP(getHP('bfb', round));
	resultZOMG.innerHTML = calcHP(getHP('zomg', round));
	resultDDT.innerHTML = calcHP(getHP('ddt', round));
	resultBAD.innerHTML = calcHP(getHP('bad', round));
	resultCeramic.innerHTML =calcHPCeram(getHP('ceramic', round));
}

function calcHPCeram(baseHP) {
	var hp = baseHP;
	
	if(fortified === true) {
		hp = hp * fortified_modifier;
	}
	
	if(challenge === true) {
		hp = Math.floor(hp * (modifier / 100));
		if(hp < 1) {
			hp = 1;
		}
	}
	
	return hp.toLocaleString();
}

function calcHP(baseHP) {
	var hp = baseHP;
	
	if(knowledge === true) {
		hp = Math.floor(parseInt(hp) * knowledge_modifier);
	}
	if(fortified === true) {
		hp = hp * fortified_modifier;
	}
	if(doubleHP === true) {
		hp = hp * 2;
	}
	if(challenge === true) {
		hp = Math.floor(hp * (modifier / 100));
	}
	
	return hp.toLocaleString();
}

document.getElementById("modifier-div").style.display = "none";
roundInput.addEventListener("input", inputHandlerRound);
modifierInput.addEventListener("input", inputHandlerModifier);