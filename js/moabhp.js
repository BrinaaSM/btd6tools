const roundInput = document.getElementById("current-round-input");
const modifierInput = document.getElementById("modifier-input");

const resultList = [];

const fortified_modifier = 2;
const knowledge_modifier = 0.9;
const min_modifier = 5;
const max_modifier = 50000;

let knowledge;
let doubleHP;
let fortified;
let challenge;
let modifier = 100;
let round;

resultList.push(document.getElementById("bad-hp-output"));
resultList.push(document.getElementById("ddt-hp-output"));
resultList.push(document.getElementById("zomg-hp-output"));
resultList.push(document.getElementById("bfb-hp-output"));
resultList.push(document.getElementById("moab-hp-output"));
resultList.push(document.getElementById("ceram-hp-output"));

function inputHandlerRound(e) {
	round = e.target.value;
	calcAll(round, modifier);
}

function inputHandlerModifier(e) {
	modifier = e.target.value;
	if (modifier < 0) modifierInput.value = min_modifier;
	if (modifier < min_modifier) modifier = min_modifier;
	else if(modifier > max_modifier) {
		modifierInput.value = max_modifier;
		modifier = max_modifier;
	}
	calcAll(round, modifier);
}

function checkValidModifier() {
	modifier = modifierInput.value;
	if (modifier <= 0) {
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

function toggleChallenge(){
	let div = document.getElementById("modifier-div");
	
	if (challenge) div.style.display = "block";
	else {
		div.style.display = "none";
		modifierInput.value = "";
		modifier = 100;
	}
}

function selectCheckbox(domElement) {
	if (domElement.checked) domElement.parentNode.style.border = "3px yellow solid";
	else domElement.parentNode.style.border = "0px #00003f solid";
}

function calcAll(round, modifier) {	
	if (!round) round = roundInput.value;
	
	if (round <= 0) {
		roundInput.value = "";
		round = 1;
	} else if (round > Number.MAX_SAFE_INTEGER) {
		roundInput.value = Number.MAX_SAFE_INTEGER;
		round = Number.MAX_SAFE_INTEGER;
	}
	
	for (let i = 0; i < resultList.length; i++) {
		let hp = modifyResult(getHP(bloonStructure[i].name, fortified, round), bloonStructure[i].name);
		resultList[i].innerHTML = hp;
	}
}

function modifyResult(hp, bloon) {
	if (challenge) {
		hp = Math.round(hp * (modifier / 100));
		if(hp < 1) hp = 1;
	}
	
	if (bloon === 'ceramic') return hp.toLocaleString();
	
	if (knowledge) hp = Math.round(parseInt(hp) * knowledge_modifier);
	if (doubleHP) hp = hp * 2;
	
	return hp.toLocaleString();
}

document.getElementById("modifier-div").style.display = "none";
roundInput.addEventListener("input", inputHandlerRound);
modifierInput.addEventListener("input", inputHandlerModifier);