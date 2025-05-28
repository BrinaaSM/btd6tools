class Category {
	constructor(name, towerList, checkBoxElem, labelElem) {
		this.name = name;
		this.list = towerList;
		this.box = checkBoxElem;
		this.label = labelElem;
	}
}

class Tower {
	constructor(name, category, checkBoxElem, labelElem, isHero) {
		this.name = name;
		this.category = category;
		this.box = checkBoxElem;
		this.label = labelElem;
		this.hero = isHero;
	}
}

// create hero classes
const anyHero = new Tower("Any Hero", "hero", document.getElementById("any-hero"), document.getElementById("any-hero-label"), true);
const quincy = new Tower("Quincy", "hero", document.getElementById("quincy"), document.getElementById("quincy-label"), true);
const gwen = new Tower("Gwendolyn", "hero", document.getElementById("gwen"), document.getElementById("gwen-label"), true);
const striker = new Tower("Striker Jones", "hero", document.getElementById("striker"), document.getElementById("striker-label"), true);
const obyn = new Tower("Obyn Greenfoot", "hero", document.getElementById("obyn"), document.getElementById("obyn-label"), true);
const churchill = new Tower("Captain Churchill", "hero", document.getElementById("churchill"), document.getElementById("churchill-label"), true);
const ben = new Tower("Benjamin", "hero", document.getElementById("ben"), document.getElementById("ben-label"), true);
const ezili = new Tower("Ezili", "hero", document.getElementById("ezili"), document.getElementById("ezili-label"), true);
const pat = new Tower("Pat Fusty", "hero", document.getElementById("pat"), document.getElementById("pat-label"), true);
const adora = new Tower("Adora", "hero", document.getElementById("adora"), document.getElementById("adora-label"), true);
const brickell = new Tower("Admiral Brickell", "hero", document.getElementById("brickell"), document.getElementById("brickell-label"), true);
const etienne = new Tower("Etienne", "hero", document.getElementById("etienne"), document.getElementById("etienne-label"), true);
const sauda = new Tower("Sauda", "hero", document.getElementById("sauda"), document.getElementById("sauda-label"), true);
const psi = new Tower("Psi", "hero", document.getElementById("psi"), document.getElementById("psi-label"), true);
const gerry = new Tower("Geraldo", "hero", document.getElementById("gerry"), document.getElementById("gerry-label"), true);
const corvus = new Tower("Corvus", "hero", document.getElementById("corvus"), document.getElementById("corvus-label"), true);
const rosalia = new Tower("Rosalia", "hero", document.getElementById("rosalia"), document.getElementById("rosalia-label"), true);

// create primary classes
const anyPrimary = new Tower("Any Primary Monkey", "primary", document.getElementById("any-primary"), document.getElementById("any-primary-label"), false);
const dart = new Tower("Dart Monkey", "primary", document.getElementById("dart"), document.getElementById("dart-label"), false);
const boomerang = new Tower("Boomerang Monkey", "primary", document.getElementById("boomerang"), document.getElementById("boomerang-label"), false);
const bomb = new Tower("Bomb Shooter", "primary", document.getElementById("bomb"), document.getElementById("bomb-label"), false);
const tack = new Tower("Tack Shooter", "primary", document.getElementById("tack"), document.getElementById("tack-label"), false);
const ice = new Tower("Ice Monkey", "primary", document.getElementById("ice"), document.getElementById("ice-label"), false);
const glue = new Tower("Glue Gunner", "primary", document.getElementById("glue"), document.getElementById("glue-label"), false);

// create military classes
const anyMilitary = new Tower("Any Military Monkey", "military", document.getElementById("any-military"), document.getElementById("any-military-label"), false);
const sniper = new Tower("Sniper Monkey", "military", document.getElementById("sniper"), document.getElementById("sniper-label"), false);
const sub = new Tower("Monkey Sub", "military", document.getElementById("sub"), document.getElementById("sub-label"), false);
const bucc = new Tower("Monkey Buccaneer", "military", document.getElementById("bucc"), document.getElementById("bucc-label"), false);
const ace = new Tower("Monkey Ace", "military", document.getElementById("ace"), document.getElementById("ace-label"), false);
const heli = new Tower("Heli Pilot", "military", document.getElementById("heli"), document.getElementById("heli-label"), false);
const mortar = new Tower("Mortar Monkey", "military", document.getElementById("mortar"), document.getElementById("mortar-label"), false);
const dartling = new Tower("Dartling Gunner", "military", document.getElementById("dartling"), document.getElementById("dartling-label"), false);

// create magic classes
const anyMagic = new Tower("Any Magic Monkey", "magic", document.getElementById("any-magic"), document.getElementById("any-magic-label"), false);
const wiz = new Tower("Wizard Monkey", "magic", document.getElementById("wiz"), document.getElementById("wiz-label"), false);
const superm = new Tower("Supermonkey", "magic", document.getElementById("superm"), document.getElementById("superm-label"), false);
const ninja = new Tower("Ninja Monkey", "magic", document.getElementById("ninja"), document.getElementById("ninja-label"), false);
const alch = new Tower("Alchemist", "magic", document.getElementById("alch"), document.getElementById("alch-label"), false);
const druid = new Tower("Druid", "magic", document.getElementById("druid"), document.getElementById("druid-label"), false);
const mermonkey = new Tower("Mermonkey", "magic", document.getElementById("mermonkey"), document.getElementById("mermonkey-label"), false);

// create support classes
const anySupport = new Tower("Any Support Monkey", "support", document.getElementById("any-support"), document.getElementById("any-support-label"), false);
const farm = new Tower("Banana Farm", "support", document.getElementById("farm"), document.getElementById("farm-label"), false);
const spac = new Tower("Spike Factory", "support", document.getElementById("spac"), document.getElementById("spac-label"), false);
const village = new Tower("Monkey Village", "support", document.getElementById("village"), document.getElementById("village-label"), false);
const engi = new Tower("Engineer Monkey", "support", document.getElementById("engi"), document.getElementById("engi-label"), false);
const beast = new Tower("Beast Handler", "support", document.getElementById("beast"), document.getElementById("beast-label"), false);

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

const heroList = [];
const primaryList = [];
const militaryList = [];
const magicList= [];
const supportList= [];

var heroCat = true;
var primaryCat = true;
var militaryCat = true;
var magicCat = true;
var supportCat = true;

const hero = new Category("Heroes", heroList, document.getElementById("hero"), heroCat);
const primary = new Category("Primary", primaryList, document.getElementById("primary"), primaryCat);
const military = new Category("Military", militaryList, document.getElementById("military"), militaryCat);
const magic = new Category("Magic", magicList, document.getElementById("magic"), magicCat);
const support = new Category("Support", supportList, document.getElementById("support"), supportCat);

function fillCategoryLists() {
	heroList.push(anyHero);
	heroList.push(quincy);
	heroList.push(gwen);
	heroList.push(striker);
	heroList.push(obyn);
	heroList.push(churchill);
	heroList.push(ben);
	heroList.push(ezili);
	heroList.push(pat);
	heroList.push(adora);
	heroList.push(brickell);
	heroList.push(etienne);
	heroList.push(sauda);
	heroList.push(psi);
	heroList.push(gerry);
	heroList.push(corvus);
	heroList.push(rosalia);

	primaryList.push(anyPrimary);
	primaryList.push(dart);
	primaryList.push(boomerang);
	primaryList.push(bomb);
	primaryList.push(tack);
	primaryList.push(ice);
	primaryList.push(glue);

	militaryList.push(anyMilitary);
	militaryList.push(sniper);
	militaryList.push(sub);
	militaryList.push(bucc);
	militaryList.push(ace);
	militaryList.push(heli);
	militaryList.push(mortar);
	militaryList.push(dartling);

	magicList.push(anyMagic);
	magicList.push(wiz);
	magicList.push(superm);
	magicList.push(ninja);
	magicList.push(alch);
	magicList.push(druid);
	magicList.push(mermonkey);

	supportList.push(anySupport);
	supportList.push(farm);
	supportList.push(spac);
	supportList.push(village);
	supportList.push(engi);
	supportList.push(beast);
	
	return;
}

function initPage() {
	fillCategoryLists();
	console.log(heroList);
	for(let i = 1; i < heroList.length; i++) {
		heroList[i].box.checked = false;
	}
	heroCat = false;
	primaryList[0].box.checked = false;
	militaryList[0].box.checked = false;
	magicList[0].box.checked = false;
	supportList[0].box.checked = false;
	
	return;
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
	
	return;
}

function resetColors() {
	for(let i = 0; i < heroList.length; i++) {
		heroList[i].label.style.color = "#87CEEB";
	}
	for(let i = 0; i < militaryList.length; i++) {
		militaryList[i].label.style.color = "#87CEEB";
	}
	for(let i = 0; i < primaryList.length; i++) {
		primaryList[i].label.style.color = "#87CEEB";
	}
	for(let i = 0; i < magicList.length; i++) {
		magicList[i].label.style.color = "#87CEEB";
	}
	for(let i = 0; i < supportList.length; i++) {
		supportList[i].label.style.color = "#87CEEB";
	}
	
	return;
}

function toggleCategory(category) {
	category.label = !category.label;
	for(let i = 0; i < category.list.length; i++) {
		category.list[i].box.checked = category.label;
		category.list[i].box.disabled = !category.label;
	}
	if(category.label) {
		category.list[0].box.checked = false;
	}
	
	return;
}

/*function toggleHero() {
	for(let i = 0; i < heroList.length; i++) {
		heroList[i].box.checked = heroCat;
		heroList[i].box.disabled = !heroCat;
	}
	if(hero) {
		anyHero.box.checked = false;
	}
	
	return;
}

function togglePrimary() {
	for(let i = 0; i < primaryList.length; i++) {
		primaryList[i].box.checked = primaryCat;
		primaryList[i].box.disabled = !primaryCat;
	}
	if(primary) {
		anyPrimary.box.checked = false;
	}
	
	return;
}

function toggleMilitary() {
	for(let i = 0; i < militaryList.length; i++) {
		militaryList[i].box.checked = militaryCat;
		militaryList[i].box.disabled = !militaryCat;
	}
	if(military) {
		anyMilitary.box.checked = false;
	}
	
	return;
}

function toggleMagic() {
	for(let i = 0; i < magicList.length; i++) {
		magicList[i].box.checked = magicCat;
		magicList[i].box.disabled = !magicCat;
	}
	if(magic) {
		anyMagic.box.checked = false;
	}
	
	return;
}

function toggleSupport() {
	for(let i = 0; i < supportList.length; i++) {
		supportList[i].box.checked = supportCat;
		supportList[i].box.disabled = !supportCat;
	}
	if(support) {
		anySupport.box.checked = false;
	}
	
	return;
}
*/

// fill list with towers that can start C.H.I.M.P.S.
function fillChimpsLists() {
	chimpsViableTowers.length = 0;
	chimpsViableHeroes.length = 0;
	chimpsCount = 0;
	
	// viable heroes	
	if(anyHero.box.checked) {
		chimpsViableTowers.push(anyHero);
		chimpsViableHeroes.push(anyHero);
		chimpsCount++;
	}
	if(quincy.box.checked) {
		chimpsViableTowers.push(quincy);
		chimpsViableHeroes.push(quincy);
		chimpsCount++;
	}
	if(sauda.box.checked) {
		chimpsViableTowers.push(sauda);
		chimpsViableHeroes.push(sauda);
		chimpsCount++;
	}
	
	// viable towers
	if(anyPrimary.box.checked) {
		chimpsViableTowers.push(anyPrimary);
		chimpsCount++;
	}
	if(dart.box.checked) {
		chimpsViableTowers.push(dart);
		chimpsCount++;
	}
	if(boomerang.box.checked) {
		chimpsViableTowers.push(boomerang);
		chimpsCount++;
	}
	if(anyMilitary.box.checked) {
		chimpsViableTowers.push(anyMilitary);
		chimpsCount++;
	}
	if(sub.box.checked) {
		chimpsViableTowers.push(sub);
		chimpsCount++;
	}
	if(anyMagic.box.checked) {
		chimpsViableTowers.push(anyMagic);
		chimpsCount++;
	}
	if(wiz.box.checked) {
		chimpsViableTowers.push(wiz);
		chimpsCount++;
	}
	if(ninja.box.checked) {
		chimpsViableTowers.push(ninja);
		chimpsCount++;
	}
	if(druid.box.checked) {
		chimpsViableTowers.push(druid);
		chimpsCount++;
	}
	if(mermonkey.box.checked) {
		chimpsViableTowers.push(mermonkey);
		chimpsCount++;
	}
	if(anySupport.box.checked) {
		chimpsViableTowers.push(anySupport);
		chimpsCount++;
	}
	if(engi.box.checked) {
		chimpsViableTowers.push(engi);
		chimpsCount++;
	}
	
	return;
}

function fillTowerList() {
	let heroAllowed = false;
	
	possibleTowers.length = 0;
	possibleHeroes.length = 0;
	
	for(let i = 0; i < heroList.length; i++) {
		if(heroList[i].box.checked == true) {
			possibleTowers.push(heroList[i]);
			possibleHeroes.push(heroList[i]);
			heroAllowed = true;
		}
	}
	for(let i = 0; i < primaryList.length; i++) {
		if(primaryList[i].box.checked == true) {
			possibleTowers.push(primaryList[i]);
		}
	}
		
	for(let i = 0; i < militaryList.length; i++) {
		if(militaryList[i].box.checked == true) {
			possibleTowers.push(militaryList[i]);
		}
	}
		
	for(let i = 0; i < magicList.length; i++) {
		if(magicList[i].box.checked == true) {
			possibleTowers.push(magicList[i]);
		}
	}
	
	for(let i = 0; i < supportList.length; i++) {
		if(supportList[i].box.checked == true) {
			if(chimpsViable) {
				if(supportList[i] != farm) {
					possibleTowers.push(supportList[i]);
				} else {
					supportList[i].box.checked == false;
				}		
			} else {
				possibleTowers.push(supportList[i]);
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
		return null;
	}
	
	choice = chimpsViableTowers[Math.floor(Math.random()*chimpsViableTowers.length)];
	
	return choice;
}

// pick a random tower
function pickRandomTower(shouldBeHero) {
	let choice;
	
	if (shouldBeHero) {
		choice = possibleHeroes[Math.floor(Math.random()*possibleHeroes.length)];
	} else {
		choice = possibleTowers[Math.floor(Math.random()*possibleTowers.length)];
	}
	possibleTowers.splice(possibleTowers.indexOf(choice), 1);
	
	return choice;
}

// remove all heroes from possible towers
function removeHeroes() {
	for(let i = 0; i < heroList.length; i++) {
		if(heroList[i].box.checked == true) {
			possibleTowers.splice(possibleTowers.indexOf(heroList[i]), 1);
		}
	}
	
	return;
}

function roll() {
	let count = 0;
	let choice;	
	let viableChoice = 0;
	let reduceCount = 0;
	let heroAllowed = true;
	let teamSizeOffset = 0;
	chosenTowers.length = 0;
	output = "";
	
	resetColors();
	fillChimpsLists();
	heroAllowed = fillTowerList();

	// check if team size illegal
	if (!heroAllowed && teamSize <= 0) {
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
			choice = pickRandomTower(true);
			removeHeroes();
			teamSizeOffset = 1;
		} else {
			choice = pickViableTower();
			// check if viable tower is found
			if(!choice) {
				teamOutput.value = "Err: No C.H.I.M.P.S. viable combination found!"
				
				return;
			}
			if (choice.hero) {
				removeHeroes();
			} else {
				teamSizeOffset = 1;
				if (heroAllowed) {
					chosenTowers.push(pickRandomTower(true));
					removeHeroes();
				}
			}
		}
		chosenTowers.push(choice);
		// remove picked tower from list
		possibleTowers.splice(possibleTowers.indexOf(choice), 1);
		for (let i = 0; i < teamSize - teamSizeOffset; i++) {
			choice = pickRandomTower(false);
			chosenTowers.push(choice);
		}
	} else {
		if (heroAllowed) {
			choice = pickRandomTower(true);
			removeHeroes();
			chosenTowers.push(choice);
		}
		for (let i = 0; i < teamSize; i++) {
			choice = pickRandomTower(false);
			chosenTowers.push(choice);
		}
	}
	for (let i = 0; i < chosenTowers.length; i++) {
		output += chosenTowers[i].label.innerHTML;
		chosenTowers[i].label.style.color = "yellow";
		if (i < chosenTowers. length - 1) {
			output += ", ";
		}
	}
	teamOutput.value = output;
	
	return;
}

sizeInput.addEventListener("input", inputHandlerSize);