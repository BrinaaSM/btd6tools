const sizeInput = document.getElementById("team-size-input");
const teamOutput = document.getElementById("team-output");

var output;
var outputHero;

var chimpsCount = 0;

var chimpsViable = 1;

var teamSize = 3;

const chimpsViableHeros = [];
const chimpsViableTowers = [];

const content = [];

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

function inputHandlerSize(e) {
	teamSize = e.target.value;
	if(teamSize < 0) {
		sizeInput.value = 3;
	}
	if(teamSize === 0) {
		teamSize = 3;
	} else if(teamSize > 23) {
		sizeInput.value = 23;
		teamSize = 23;
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

function fillChimpsLists() {
	chimpsViableHeros.length = 0;
	chimpsCount = 0;
	
	if(anyHeroBox.checked) {
		chimpsViableHeros.push(anyHeroLabel);
		chimpsCount++;
	}
	if(quincyBox.checked) {
		chimpsViableHeros.push(quincyLabel);
		chimpsCount++;
	}
	if(saudaBox.checked) {
		chimpsViableHeros.push(saudaLabel);
		chimpsCount++;
	}
	
	chimpsViableTowers.length = 0;
	
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
	if(anySupportBox.checked) {
		chimpsViableTowers.push(anySupportLabel);
		chimpsCount++;
	}
	if(engiBox.checked) {
		chimpsViableTowers.push(engiLabel);
		chimpsCount++;
	}
}

function inputHandler(e) {
	count = e.target.value;
	return;
}	

function roll() {
	let heroFound = 0;
	let count = 0;
	let choice;	
	let viableChoice = 0;
	let reduceCount = 0;
	content.length = 0;
	output = " ";
	
	resetColors();
	
	if(chimpsViable) {
		fillChimpsLists();		
		viableChoice = Math.floor(Math.random()*5);
		if (chimpsCount == 0) {
			teamOutput.value = "Err: No C.H.I.M.P.S. viable combination found!"
		}
	}
	
	if(chimpsViable && (teamSize == 0)) {
		viableChoice = 0;
	}
		
	if(chimpsViable == 1 && viableChoice == 0) {
		choice = chimpsViableHeros[Math.floor(Math.random()*chimpsViableHeros.length)];
		content.push(choice);				
	} else {
		for(let i = 0; i < heroBoxes.length; i++) {
			if(heroBoxes[i].checked == true) {
				content.push(heroLabels[i]);
			}
		}
	}
	
	for(let i = 0; i < content.length; i++) {
		content[i].style.color = "#87CEEB";
	}

	if(content.length > 0) {
		choice = content[Math.floor(Math.random()*content.length)];
		choice.style.color = "yellow";
		heroFound = 1;
		outputHero = choice.innerHTML;
	}
	
	content.length = 0;
	
	for(let i = 0; i < primaryBoxes.length; i++) {
		if(primaryBoxes[i].checked == true) {
			content.push(primaryLabels[i]);
			count++;
		}
	}
	
	for(let i = 0; i < militaryBoxes.length; i++) {
		if(militaryBoxes[i].checked == true) {
			content.push(militaryLabels[i]);
			count++;
		}
	}
	
	for(let i = 0; i < magicBoxes.length; i++) {
		if(magicBoxes[i].checked == true) {
			content.push(magicLabels[i]);
			count++;
		}
	}
	
	for(let i = 0; i < supportBoxes.length; i++) {
		if(supportBoxes[i].checked == true) {
			if(chimpsViable) {
				if(supportBoxes[i] != farmBox) {
					content.push(supportLabels[i]);
					count++;
				} else {
					supportBoxes[i].checked == false;
				}		
			} else {
				content.push(supportLabels[i]);
				count++;
			}
		}
	}
	
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
			output += outputHero + " > ";
		}
		if(chimpsViable == 1 && viableChoice >= 1) {
			choice = chimpsViableTowers[Math.floor(Math.random()*chimpsViableTowers.length)];
			output += choice.innerHTML + ", ";
			choice.style.color = "yellow";
			content.splice(content.indexOf(choice), 1);
			reduceCount = 1;
		}
		for(let i = 0; i < (teamSize - reduceCount); i++) {
			content.removeChild
			choice = content[Math.floor(Math.random()*content.length)];
			output += choice.innerHTML + ", ";
			choice.style.color = "yellow";
			content.splice(content.indexOf(choice), 1);
		}
		if (chimpsViable && (chimpsCount < teamSize)) {
			teamOutput.value = "Err: No C.H.I.M.P.S. viable combination found!"
		} else {
			teamOutput.value = output;
		}
	} else if (heroFound == 0 || !hero) {
		teamOutput.value = "Err: Team size is set to 0!"
	} else {
		teamOutput.value = outputHero;
	}
		
	return;
}

sizeInput.addEventListener("input", inputHandlerSize);