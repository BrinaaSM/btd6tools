class Tower {
	constructor(name, checkBoxElem, labelElem, isHero) {
		this.name = name;
		this.box = checkBoxElem;
		this.label = labelElem;
		this.hero = isHero;
	}
}

// create hero classes
const anyHero = new Tower("Any Hero", document.getElementById("any-hero"), document.getElementById("any-hero-label"), true);
const gwen = new Tower("Gwendolyn", document.getElementById("gwen"), document.getElementById("gwen-label"), true);
const striker = new Tower("Striker Jones", document.getElementById("striker"), document.getElementById("striker-label"), true);
const obyn = new Tower("Obyn Greenfoot", document.getElementById("obyn"), document.getElementById("obyn-label"), true);
const churchill = new Tower("Captain Churchill", document.getElementById("churchill"), document.getElementById("churchill-label"), true);
const ben = new Tower("Benjamin", document.getElementById("ben"), document.getElementById("ben-label"), true);
const ezili = new Tower("Ezili", document.getElementById("ezili"), document.getElementById("ezili-label"), true);
const pat = new Tower("Pat Fusty", document.getElementById("pat"), document.getElementById("pat-label"), true);
const adora = new Tower("Adora", document.getElementById("adora"), document.getElementById("adora-label"), true);
const brickell = new Tower("Admiral Brickell", document.getElementById("brickell"), document.getElementById("brickell-label"), true);
const etienne = new Tower("Etienne", document.getElementById("etienne"), document.getElementById("etienne-label"), true);
const sauda = new Tower("Sauda", document.getElementById("sauda"), document.getElementById("sauda-label"), true);
const psi = new Tower("Psi", document.getElementById("psi"), document.getElementById("psi-label"), true);
const gerry = new Tower("Geraldo", document.getElementById("gerry"), document.getElementById("gerry-label"), true);
const corvus = new Tower("Corvus", document.getElementById("corvus"), document.getElementById("corvus-label"), true);
const rosalia = new Tower("Rosalia", document.getElementById("rosalia"), document.getElementById("rosalia-label"), true);

// create primary classes
const anyPrimary = new Tower("Any Primary Monkey", document.getElementById("any-primary"), document.getElementById("any-primary-label"), false);
const dart = new Tower("Dart Monkey", document.getElementById("dart"), document.getElementById("dart-label"), false);
const boomerang = new Tower("Boomerang Monkey", document.getElementById("boomerang"), document.getElementById("boomerang-label"), false);
const bomb = new Tower("Bomb Shooter", document.getElementById("bomb"), document.getElementById("bomb-label"), false);
const tack = new Tower("Tack Shooter", document.getElementById("tack"), document.getElementById("tack-label"), false);
const ice = new Tower("Ice Monkey", document.getElementById("ice"), document.getElementById("ice-label"), false);
const glue = new Tower("Glue Gunner", document.getElementById("glue"), document.getElementById("glue-label"), false);

// create military classes
const anyMilitary = new Tower("Any Military Monkey", document.getElementById("any-military"), document.getElementById("any-military-label"), false);
const sniper = new Tower("Sniper Monkey", document.getElementById("sniper"), document.getElementById("sniper-label"), false);
const sub = new Tower("Monkey Sub", document.getElementById("sub"), document.getElementById("sub-label"), false);
const bucc = new Tower("Monkey Buccaneer", document.getElementById("bucc"), document.getElementById("bucc-label"), false);
const ace = new Tower("Monkey Ace", document.getElementById("ace"), document.getElementById("ace-label"), false);
const heli = new Tower("Heli Pilot", document.getElementById("heli"), document.getElementById("heli-label"), false);
const mortar = new Tower("Mortar Monkey", document.getElementById("mortar"), document.getElementById("mortar-label"), false);
const dartling = new Tower("Dartling Gunner", document.getElementById("dartling"), document.getElementById("dartling-label"), false);

// create magic classes
const anyMMagic = new Tower("Any Magic Monkey", document.getElementById("any-magic"), document.getElementById("any-magic-label"), false);
const wiz = new Tower("Quincy", document.getElementById("quincy"), document.getElementById("quincy-label"), false);
const superm = new Tower("Quincy", document.getElementById("quincy"), document.getElementById("quincy-label"), false);
const ninja = new Tower("Quincy", document.getElementById("quincy"), document.getElementById("quincy-label"), false);
const alch = new Tower("Quincy", document.getElementById("quincy"), document.getElementById("quincy-label"), false);
const druid = new Tower("Quincy", document.getElementById("quincy"), document.getElementById("quincy-label"), false);
const mermonkey = new Tower("Quincy", document.getElementById("quincy"), document.getElementById("quincy-label"), false);

// create support classes
const anySupport = new Tower("Any Support Monkey", document.getElementById("any-support"), document.getElementById("any-support-label"), false);
const farm = new Tower("Quincy", document.getElementById("quincy"), document.getElementById("quincy-label"), false);
const spac = new Tower("Quincy", document.getElementById("quincy"), document.getElementById("quincy-label"), false);
const village = new Tower("Quincy", document.getElementById("quincy"), document.getElementById("quincy-label"), false);
const engi = new Tower("Quincy", document.getElementById("quincy"), document.getElementById("quincy-label"), false);
const beast = new Tower("Quincy", document.getElementById("quincy"), document.getElementById("quincy-label"), false);

const sizeInput = document.getElementById("team-size-input");
const teamOutput = document.getElementById("team-output");

var output;
var outputHero;

var chimpsCount = 0;

var chimpsViable = 1;

var teamSize = 3;
const defaultTeamSize = 3;
const maxMonkeyCount = 24;

const chimpsViableTowers = [];
const chimpsViableHeroes = [];

const possibleTowers = [];
const possibleHeroes = [];
const chosenTowers = [];

const heroBoxes = [];
const primaryBoxes = [];
const militaryBoxes = [];
const magicBoxes = [];
const supportBoxes = [];
const heroLabels = [];
const primaryLabels = [];
const militaryLabels = [];
const magicLabels = [];
const supportLabels = [];

var hero;
const heroBox = document.getElementById("hero");

var primary;
const primaryBox = document.getElementById("primary");

var military;
const militaryBox = document.getElementById("military");

var magic;
const magicBox = document.getElementById("magic");

var support;
const supportBox = document.getElementById("support");

heroBoxes.push(anyHero.box);
heroBoxes.push(quincyBox);
heroBoxes.push(gwenBox);
heroBoxes.push(strikerBox);
heroBoxes.push(obynBox);
heroBoxes.push(churchillBox);
heroBoxes.push(benBox);
heroBoxes.push(eziliBox);
heroBoxes.push(patBox);
heroBoxes.push(adoraBox);
heroBoxes.push(brickellBox);
heroBoxes.push(etienneBox);
heroBoxes.push(saudaBox);
heroBoxes.push(psiBox);
heroBoxes.push(gerryBox);
heroBoxes.push(corvusBox);
heroBoxes.push(rosaliaBox);

heroLabels.push(anyHero.label);
heroLabels.push(quincyLabel);
heroLabels.push(gwenLabel);
heroLabels.push(strikerLabel);
heroLabels.push(obynLabel);
heroLabels.push(churchillLabel);
heroLabels.push(benLabel);
heroLabels.push(eziliLabel);
heroLabels.push(patLabel);
heroLabels.push(adoraLabel);
heroLabels.push(brickellLabel);
heroLabels.push(etienneLabel);
heroLabels.push(saudaLabel);
heroLabels.push(psiLabel);
heroLabels.push(gerryLabel);
heroLabels.push(corvusLabel);
heroLabels.push(rosaliaLabel);

primaryBoxes.push(anyPrimaryBox);
primaryBoxes.push(dartBox);
primaryBoxes.push(boomerangBox);
primaryBoxes.push(bombBox);
primaryBoxes.push(tackBox);
primaryBoxes.push(iceBox);
primaryBoxes.push(glueBox);

primaryLabels.push(anyPrimaryLabel);
primaryLabels.push(dartLabel);
primaryLabels.push(boomerangLabel);
primaryLabels.push(bombLabel);
primaryLabels.push(tackLabel);
primaryLabels.push(iceLabel);
primaryLabels.push(glueLabel);

militaryBoxes.push(anyMilitaryBox);
militaryBoxes.push(sniperBox);
militaryBoxes.push(subBox);
militaryBoxes.push(buccBox);
militaryBoxes.push(aceBox);
militaryBoxes.push(heliBox);
militaryBoxes.push(mortarBox);
militaryBoxes.push(dartlingBox);

militaryLabels.push(anyMilitaryLabel);
militaryLabels.push(sniperLabel);
militaryLabels.push(subLabel);
militaryLabels.push(buccLabel);
militaryLabels.push(aceLabel);
militaryLabels.push(heliLabel);
militaryLabels.push(mortarLabel);
militaryLabels.push(dartlingLabel);

magicBoxes.push(anyMagicBox);
magicBoxes.push(wizBox);
magicBoxes.push(supermBox);
magicBoxes.push(ninjaBox);
magicBoxes.push(alchBox);
magicBoxes.push(druidBox);
magicBoxes.push(mermonkeyBox);

magicLabels.push(anyMagicLabel);
magicLabels.push(wizLabel);
magicLabels.push(supermLabel);
magicLabels.push(ninjaLabel);
magicLabels.push(alchLabel);
magicLabels.push(druidLabel);
magicLabels.push(mermonkeyLabel);

supportBoxes.push(anySupportBox);
supportBoxes.push(farmBox);
supportBoxes.push(spacBox);
supportBoxes.push(villageBox);
supportBoxes.push(engiBox);
supportBoxes.push(beastBox);

supportLabels.push(anySupportLabel);
supportLabels.push(farmLabel);
supportLabels.push(spacLabel);
supportLabels.push(villageLabel);
supportLabels.push(engiLabel);
supportLabels.push(beastLabel);

function initPage() {
	for(let i = 1; i < heroBoxes.length; i++) {
		heroBoxes[i].checked = false;
	}
	hero = false;
	primaryBoxes[0].checked = false;
	militaryBoxes[0].checked = false;
	magicBoxes[0].checked = false;
	supportBoxes[0].checked = false;
}

// check and correct team size
function inputHandlerSize(e) {
	teamSize = e.target.value;
	if(teamSize < 0) {
		sizeInput.value = defaultTeamSize;
	}
	if (teamSize > maxMonkeyCount) {
		sizeInput.value = maxMonkeyCount;
		teamSize = maxMonkeyCount;
	}
}

function resetColors() {
	for(let i = 0; i < heroLabels.length; i++) {
		heroLabels[i].style.color = "#87CEEB";
	}
	for(let i = 0; i < militaryLabels.length; i++) {
		militaryLabels[i].style.color = "#87CEEB";
	}
	for(let i = 0; i < primaryLabels.length; i++) {
		primaryLabels[i].style.color = "#87CEEB";
	}
	for(let i = 0; i < militaryLabels.length; i++) {
		militaryLabels[i].style.color = "#87CEEB";
	}
	for(let i = 0; i < magicLabels.length; i++) {
		magicLabels[i].style.color = "#87CEEB";
	}
	for(let i = 0; i < supportLabels.length; i++) {
		supportLabels[i].style.color = "#87CEEB";
	}
	return;
}

function togglePrimary() {
	for(let i = 0; i < primaryBoxes.length; i++) {
		primaryBoxes[i].checked = primary;
		primaryBoxes[i].disabled = !primary;
	}
	if(primary) {
		anyPrimaryBox.checked = false;
	}
	return;
}

function toggleMilitary() {
	for(let i = 0; i < militaryBoxes.length; i++) {
		militaryBoxes[i].checked = military;
		militaryBoxes[i].disabled = !military;
	}
	if(military) {
		anyMilitaryBox.checked = false;
	}
	return;
}

function toggleMagic() {
	for(let i = 0; i < magicBoxes.length; i++) {
		magicBoxes[i].checked = magic;
		magicBoxes[i].disabled = !magic;
	}
	if(magic) {
		anyMagicBox.checked = false;
	}
	return;
}

function toggleSupport() {
	for(let i = 0; i < supportBoxes.length; i++) {
		supportBoxes[i].checked = support;
		supportBoxes[i].disabled = !support;
	}
	if(support) {
		anySupportBox.checked = false;
	}
	return;
}

function toggleHero() {
	for(let i = 0; i < heroBoxes.length; i++) {
		heroBoxes[i].checked = hero;
		heroBoxes[i].disabled = !hero;
	}
	if(hero) {
		anyHeroBox.checked = false;
	}
	return;
}

// fill list with towers that can start C.H.I.M.P.S.
function fillChimpsLists() {
	chimpsViableTowers.length = 0;
	chimpsViableHeroes.length = 0;
	chimpsCount = 0;
	
	// viable heroes	
	if(anyHero.box.checked) {
		chimpsViableTowers.push(anyHero.label);
		chimpsViableHeroes.push(anyHero.label);
		chimpsCount++;
	}
	if(quincyBox.checked) {
		chimpsViableTowers.push(quincyLabel);
		chimpsViableHeroes.push(quincyLabel);
		chimpsCount++;
	}
	if(saudaBox.checked) {
		chimpsViableTowers.push(saudaLabel);
		chimpsViableHeroes.push(saudaLabel);
		chimpsCount++;
	}
	
	// viable towers
	if(anyPrimaryBox.checked) {
		chimpsViableTowers.push(anyPrimaryLabel);
		chimpsCount++;
	}
	if(dartBox.checked) {
		chimpsViableTowers.push(dartLabel);
		chimpsCount++;
	}
	if(boomerangBox.checked) {
		chimpsViableTowers.push(boomerangLabel);
		chimpsCount++;
	}
	if(anyMilitaryBox.checked) {
		chimpsViableTowers.push(anyMilitaryLabel);
		chimpsCount++;
	}
	if(subBox.checked) {
		chimpsViableTowers.push(subLabel);
		chimpsCount++;
	}
	if(anyMagicBox.checked) {
		chimpsViableTowers.push(anyMagicLabel);
		chimpsCount++;
	}
	if(wizBox.checked) {
		chimpsViableTowers.push(wizLabel);
		chimpsCount++;
	}
	if(ninjaBox.checked) {
		chimpsViableTowers.push(ninjaLabel);
		chimpsCount++;
	}
	if(druidBox.checked) {
		chimpsViableTowers.push(druidLabel);
		chimpsCount++;
	}
	if(mermonkeyBox.checked) {
		chimpsViableTowers.push(mermonkeyLabel);
		chimpsCount++;
	}
	if(anySupportBox.checked) {
		chimpsViableTowers.push(anySupportLabel);
		chimpsCount++;
	}
	if(engiBox.checked) {
		chimpsViableTowers.push(engiLabel);
		chimpsCount++;
	}
}

function fillTowerList() {
	let heroAllowed = 0;
	
	possibleTowers.length = 0;
	possibleHeroes.length = 0;
	
	for(let i = 0; i < heroBoxes.length; i++) {
		if(heroBoxes[i].checked == true) {
			possibleTowers.push(heroLabels[i]);
			possibleHeroes.push(heroLabels[i]);
			heroAllowed = 1;
		}
	}
	for(let i = 0; i < primaryBoxes.length; i++) {
		if(primaryBoxes[i].checked == true) {
			possibleTowers.push(primaryLabels[i]);
		}
	}
		
	for(let i = 0; i < militaryBoxes.length; i++) {
		if(militaryBoxes[i].checked == true) {
			possibleTowers.push(militaryLabels[i]);
		}
	}
		
	for(let i = 0; i < magicBoxes.length; i++) {
		if(magicBoxes[i].checked == true) {
			possibleTowers.push(magicLabels[i]);
		}
	}
	
	for(let i = 0; i < supportBoxes.length; i++) {
		if(supportBoxes[i].checked == true) {
			if(chimpsViable) {
				if(supportBoxes[i] != farmBox) {
					possibleTowers.push(supportLabels[i]);
				} else {
					supportBoxes[i].checked == false;
				}		
			} else {
				possibleTowers.push(supportLabels[i]);
			}
		}
	}
	
	return heroAllowed;
}

function inputHandler(e) {
	count = e.target.value;
	return;
}

// pick a random tower that can start C.H.I.M.P.S.
function pickViableTower() {	
	// check if no chimps start possible
	if (chimpsCount == 0) {
		teamOutput.value = "Err: No C.H.I.M.P.S. viable combination found!"
	} else {
		choice = chimpsViableTowers[Math.floor(Math.random()*chimpsViableTowers.length)];
		return choice;
	}
}

// pick a random tower
function pickRandomTower(shouldBeHero) {
	let choice;
	
	if (shouldBeHero === 1) {
		choice = possibleHeroes[Math.floor(Math.random()*possibleHeroes.length)];
	} else {
		choice = possibleTowers[Math.floor(Math.random()*possibleTowers.length)];
	}
	possibleTowers.splice(possibleTowers.indexOf(choice), 1);
	return choice;
}

function isHero(tower) {
	let isHero = 0;
	
	for(let i = 0; i < heroBoxes.length; i++) {
		if(heroLabels[i] === tower) {
			isHero = 1;
		}
	}
	
	return isHero;
}

// remove all heroes from possible towers
function removeHeroes() {
	for(let i = 0; i < heroBoxes.length; i++) {
		if(heroBoxes[i].checked == true) {
			possibleTowers.splice(possibleTowers.indexOf(heroLabels[i]), 1);
		}
	}
}

function roll() {
	let count = 0;
	let choice;	
	let viableChoice = 0;
	let reduceCount = 0;
	let heroAllowed = 0;
	let teamSizeOffset = 0;
	chosenTowers.length = 0;
	output = "";
	
	resetColors();
	fillChimpsLists();
	heroAllowed = fillTowerList();

	// check if team size illegal
	if (heroAllowed == 0 && teamSize <= 0) {
		teamOutput.value = "Err: Team size is set to 0!";
		return;
	}
	// check if team possible to create
	if ((possibleTowers.length - possibleHeroes.length) < teamSize) {
		teamOutput.value = "Err: Not enough Towers selected!";
		return;
	}
	
	if(chimpsViable) {
		if (teamSize == 0) {
			choice = pickRandomTower(1);
			removeHeroes();
			teamSizeOffset = 1;
		} else {
			choice = pickViableTower();
			if (isHero(choice) == 1) {
				removeHeroes();
			} else {
				teamSizeOffset = 1;
				if (heroAllowed == 1) {
					chosenTowers.push(pickRandomTower(1));
					removeHeroes();
				}
			}
		}
		chosenTowers.push(choice);
		// remove picked tower from list
		possibleTowers.splice(possibleTowers.indexOf(choice), 1);
		for (let i = 0; i < teamSize - teamSizeOffset; i++) {
			choice = pickRandomTower(0);
			chosenTowers.push(choice);
		}
	} else {
		if (heroAllowed == 1) {
			choice = pickRandomTower(1);
			removeHeroes();
			chosenTowers.push(choice);
		}
		for (let i = 0; i < teamSize; i++) {
			choice = pickRandomTower(0);
			chosenTowers.push(choice);
		}
	}
	console.log(chosenTowers);
	for (let i = 0; i < chosenTowers.length; i++) {
		output += chosenTowers[i].innerHTML;
		chosenTowers[i].style.color = "yellow";
		if (i < chosenTowers. length - 1) {
			output += ", ";
		}
	}
	teamOutput.value = output;
	return;
}

sizeInput.addEventListener("input", inputHandlerSize);