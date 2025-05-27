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

var primary;
const primaryBox = document.getElementById("primary");
const anyPrimaryBox = document.getElementById("any-primary");
const anyPrimaryLabel = document.getElementById("any-primary-label");
const dartBox = document.getElementById("dart");
const dartLabel = document.getElementById("dart-label");
const boomerangBox = document.getElementById("boomerang");
const boomerangLabel = document.getElementById("boomerang-label");
const bombBox = document.getElementById("bomb");
const bombLabel = document.getElementById("bomb-label");
const tackBox = document.getElementById("tack");
const tackLabel = document.getElementById("tack-label");
const iceBox = document.getElementById("ice");
const iceLabel = document.getElementById("ice-label");
const glueBox = document.getElementById("glue");
const glueLabel = document.getElementById("glue-label");

var military;
const militaryBox = document.getElementById("military");
const anyMilitaryBox = document.getElementById("any-military");
const anyMilitaryLabel = document.getElementById("any-military-label");
const sniperBox = document.getElementById("sniper");
const sniperLabel = document.getElementById("sniper-label");
const subBox = document.getElementById("sub");
const subLabel = document.getElementById("sub-label");
const buccBox = document.getElementById("bucc");
const buccLabel = document.getElementById("bucc-label");
const aceBox = document.getElementById("ace");
const aceLabel = document.getElementById("ace-label");
const heliBox = document.getElementById("heli");
const heliLabel = document.getElementById("heli-label");
const mortarBox = document.getElementById("mortar");
const mortarLabel = document.getElementById("mortar-label");
const dartlingBox = document.getElementById("dartling");
const dartlingLabel = document.getElementById("dartling-label");

var magic;
const magicBox = document.getElementById("magic");
const anyMagicBox = document.getElementById("any-magic");
const anyMagicLabel = document.getElementById("any-magic-label");
const wizBox = document.getElementById("wiz");
const wizLabel = document.getElementById("wiz-label");
const supermBox = document.getElementById("superm");
const supermLabel = document.getElementById("superm-label");
const ninjaBox = document.getElementById("ninja");
const ninjaLabel = document.getElementById("ninja-label");
const alchBox = document.getElementById("alch");
const alchLabel = document.getElementById("alch-label");
const druidBox = document.getElementById("druid");
const druidLabel = document.getElementById("druid-label");
const mermonkeyBox = document.getElementById("mermonkey");
const mermonkeyLabel = document.getElementById("mermonkey-label");

var support;
const supportBox = document.getElementById("support");
const anySupportBox = document.getElementById("any-support");
const anySupportLabel = document.getElementById("any-support-label");
const farmBox = document.getElementById("farm");
const farmLabel = document.getElementById("farm-label");
const spacBox = document.getElementById("spac");
const spacLabel = document.getElementById("spac-label");
const villageBox = document.getElementById("village");
const villageLabel = document.getElementById("village-label");
const engiBox = document.getElementById("engi");
const engiLabel = document.getElementById("engi-label");
const beastBox = document.getElementById("beast");
const beastLabel = document.getElementById("beast-label");

var hero;
const heroBox = document.getElementById("hero");
const anyHeroBox = document.getElementById("any-hero");
const anyHeroLabel = document.getElementById("any-hero-label");
const quincyBox = document.getElementById("quincy");
const quincyLabel = document.getElementById("quincy-label");
const gwenBox = document.getElementById("gwen");
const gwenLabel = document.getElementById("gwen-label");
const strikerBox = document.getElementById("striker");
const strikerLabel = document.getElementById("striker-label");
const obynBox = document.getElementById("obyn");
const obynLabel = document.getElementById("obyn-label");
const churchillBox = document.getElementById("churchill");
const churchillLabel = document.getElementById("churchill-label");
const benBox = document.getElementById("ben");
const benLabel = document.getElementById("ben-label");
const eziliBox = document.getElementById("ezili");
const eziliLabel = document.getElementById("ezili-label");
const patBox = document.getElementById("pat");
const patLabel = document.getElementById("pat-label");
const adoraBox = document.getElementById("adora");
const adoraLabel = document.getElementById("adora-label");
const brickellBox = document.getElementById("brickell");
const brickellLabel = document.getElementById("brickell-label");
const etienneBox = document.getElementById("etienne");
const etienneLabel = document.getElementById("etienne-label");
const saudaBox = document.getElementById("sauda");
const saudaLabel = document.getElementById("sauda-label");
const psiBox = document.getElementById("psi");
const psiLabel = document.getElementById("psi-label");
const gerryBox = document.getElementById("gerry");
const gerryLabel = document.getElementById("gerry-label");
const corvusBox = document.getElementById("corvus");
const corvusLabel = document.getElementById("corvus-label");
const rosaliaBox = document.getElementById("rosalia");
const rosaliaLabel = document.getElementById("rosalia-label");

heroBoxes.push(anyHeroBox);
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

heroLabels.push(anyHeroLabel);
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
	chimpsCount = 0;
	
	// viable heroes	
	if(anyHeroBox.checked) {
		chimpsViableTowers.push(anyHeroLabel);
		chimpsViableHeroes.push(anyHeroLabel);
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
	removeHeroes();
	
	// check if team size illegal
	if (heroAllowed === 0 && teamSize <= 0) {
		teamOutput.value = "Err: Team size is set to 0!"
	} else if(chimpsViable) {
		choice = pickViableTower();
		if (isHero(choice)) {
			removeHeroes();
		} else {
			chosenTowers.push(pickRandomTower(1));
			removeHeroes();
			teamSizeOffset = 1;
		}
		chosenTowers.push(choice);
		// remove picked tower from list
		possibleTowers.splice(possibleTowers.indexOf(choice), 1);
		
		/*// TODO: understand
		if(content.length > 0) {
			choice = content[Math.floor(Math.random()*content.length)];
			choice.style.color = "yellow";
			
			outputHero = choice.innerHTML;
		}*/
		
		/*for(let i = 0; i < content.length; i++) {
			content[i].style.color = "#87CEEB";
		}*/
		for (let i = 0; i < teamSize - teamSizeOffset; i++) {
			choice = pickRandomTower(0);
			chosenTowers.push(choice);
		}
	} else {
		if (heroAllowed === 1) {
			choice = pickRandomTower(1);
			removeHeroes();
			chosenTowers.push(choice);
		}
		for (let i = 0; i < teamSize; i++) {
			choice = pickRandomTower(0);
			chosenTowers.push(choice);
		}
		/*
		content.length = 0;
		
		for(let i = 0; i < content.length; i++) {
			content[i].style.color = "#87CEEB";
		}

		if (teamSize.length === 0) {
			sizeInput.value = 3;
			teamSize = 3;
		}
		
		if(count < teamSize) {
			sizeInput.value = count;
			teamSize = count;
		}
		
		if(teamSize >= 1) {
			if(heroFound) {
				output += outputHero + ", ";
			}
			if(chimpsViable == 1 && viableChoice >= 1) {
				choice = chimpsViableTowers[Math.floor(Math.random()*chimpsViableTowers.length)];
				output += choice.innerHTML + " ";
				choice.style.color = "yellow";
				content.splice(content.indexOf(choice), 1);
				reduceCount = 1;
			}
			for(let i = 0; i < (teamSize - reduceCount); i++) {
				content.removeChild
				choice = content[Math.floor(Math.random()*content.length)];
				if (i != teamSize - reduceCount) {
					output += choice.innerHTML + " ";
				}
				choice.style.color = "yellow";
				content.splice(content.indexOf(choice), 1);
			}
			teamOutput.value = output;
		} else if (heroFound == 0 || !hero) {
			
		} else {
			teamOutput.value = outputHero;
		}
		*/
	}
	output = "";
	for (let i = 0; i < chosenTowers.length; i++) {
		output += chosenTowers[i].innerHTML;
		if (i < chosenTowers. length - 1) {
			output += ", ";
		}
	}
	teamOutput.value = output;
	return;
}

sizeInput.addEventListener("input", inputHandlerSize);