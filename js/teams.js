const categoryList = [];
const towerList = [];

class Category {
	constructor(name, towerList, checkBoxElem, labelElem) {
		this.name = name;
		this.list = towerList;
		this.box = checkBoxElem;
		this.label = labelElem;
		
		categoryList.push(this);
	}
}

class Tower {
	constructor(name, category, checkBoxElem, labelElem, isHero, isChimpsStart) {
		this.name = name;
		this.category = category;
		this.box = checkBoxElem;
		this.label = labelElem;
		this.hero = isHero;
		this.start = isChimpsStart;
		
		towerList.push(this);
	}
}

// create hero classes
const anyHero = new Tower("Any Hero", "hero", document.getElementById("any-hero"), document.getElementById("any-hero-label"), true, true);
const quincy = new Tower("Quincy", "hero", document.getElementById("quincy"), document.getElementById("quincy-label"), true, true);
const gwen = new Tower("Gwendolyn", "hero", document.getElementById("gwen"), document.getElementById("gwen-label"), true, false);
const striker = new Tower("Striker Jones", "hero", document.getElementById("striker"), document.getElementById("striker-label"), true, false);
const obyn = new Tower("Obyn Greenfoot", "hero", document.getElementById("obyn"), document.getElementById("obyn-label"), true, false);
const churchill = new Tower("Captain Churchill", "hero", document.getElementById("churchill"), document.getElementById("churchill-label"), true, false);
const ben = new Tower("Benjamin", "hero", document.getElementById("ben"), document.getElementById("ben-label"), true, false);
const ezili = new Tower("Ezili", "hero", document.getElementById("ezili"), document.getElementById("ezili-label"), true, true);
const pat = new Tower("Pat Fusty", "hero", document.getElementById("pat"), document.getElementById("pat-label"), true, false);
const adora = new Tower("Adora", "hero", document.getElementById("adora"), document.getElementById("adora-label"), true, false);
const brickell = new Tower("Admiral Brickell", "hero", document.getElementById("brickell"), document.getElementById("brickell-label"), true, false);
const etienne = new Tower("Etienne", "hero", document.getElementById("etienne"), document.getElementById("etienne-label"), true, false);
const sauda = new Tower("Sauda", "hero", document.getElementById("sauda"), document.getElementById("sauda-label"), true, true);
const psi = new Tower("Psi", "hero", document.getElementById("psi"), document.getElementById("psi-label"), true, false);
const gerry = new Tower("Geraldo", "hero", document.getElementById("gerry"), document.getElementById("gerry-label"), true, false);
const corvus = new Tower("Corvus", "hero", document.getElementById("corvus"), document.getElementById("corvus-label"), true, false);
const rosalia = new Tower("Rosalia", "hero", document.getElementById("rosalia"), document.getElementById("rosalia-label"), true, false);

// create primary classes
const anyPrimary = new Tower("Any Primary Monkey", "primary", document.getElementById("any-primary"), document.getElementById("any-primary-label"), false, true);
const dart = new Tower("Dart Monkey", "primary", document.getElementById("dart"), document.getElementById("dart-label"), false, true);
const boomerang = new Tower("Boomerang Monkey", "primary", document.getElementById("boomerang"), document.getElementById("boomerang-label"), false, true);
const bomb = new Tower("Bomb Shooter", "primary", document.getElementById("bomb"), document.getElementById("bomb-label"), false, false);
const tack = new Tower("Tack Shooter", "primary", document.getElementById("tack"), document.getElementById("tack-label"), false, true);
const ice = new Tower("Ice Monkey", "primary", document.getElementById("ice"), document.getElementById("ice-label"), false, false);
const glue = new Tower("Glue Gunner", "primary", document.getElementById("glue"), document.getElementById("glue-label"), false, false);

// create military classes
const anyMilitary = new Tower("Any Military Monkey", "military", document.getElementById("any-military"), document.getElementById("any-military-label"), false, true);
const sniper = new Tower("Sniper Monkey", "military", document.getElementById("sniper"), document.getElementById("sniper-label"), false, false);
const sub = new Tower("Monkey Sub", "military", document.getElementById("sub"), document.getElementById("sub-label"), false, true);
const bucc = new Tower("Monkey Buccaneer", "military", document.getElementById("bucc"), document.getElementById("bucc-label"), false, true);
const ace = new Tower("Monkey Ace", "military", document.getElementById("ace"), document.getElementById("ace-label"), false, false);
const heli = new Tower("Heli Pilot", "military", document.getElementById("heli"), document.getElementById("heli-label"), false, false);
const mortar = new Tower("Mortar Monkey", "military", document.getElementById("mortar"), document.getElementById("mortar-label"), false, false);
const dartling = new Tower("Dartling Gunner", "military", document.getElementById("dartling"), document.getElementById("dartling-label"), false, false);

// create magic classes
const anyMagic = new Tower("Any Magic Monkey", "magic", document.getElementById("any-magic"), document.getElementById("any-magic-label"), false, true);
const wiz = new Tower("Wizard Monkey", "magic", document.getElementById("wiz"), document.getElementById("wiz-label"), false, true);
const superm = new Tower("Supermonkey", "magic", document.getElementById("superm"), document.getElementById("superm-label"), false, false);
const ninja = new Tower("Ninja Monkey", "magic", document.getElementById("ninja"), document.getElementById("ninja-label"), false, true);
const alch = new Tower("Alchemist", "magic", document.getElementById("alch"), document.getElementById("alch-label"), false, false);
const druid = new Tower("Druid", "magic", document.getElementById("druid"), document.getElementById("druid-label"), false, true);
const mermonkey = new Tower("Mermonkey", "magic", document.getElementById("mermonkey"), document.getElementById("mermonkey-label"), false, true);

// create support classes
const anySupport = new Tower("Any Support Monkey", "support", document.getElementById("any-support"), document.getElementById("any-support-label"), false, true);
const farm = new Tower("Banana Farm", "support", document.getElementById("farm"), document.getElementById("farm-label"), false, false);
const spac = new Tower("Spike Factory", "support", document.getElementById("spac"), document.getElementById("spac-label"), false, false);
const village = new Tower("Monkey Village", "support", document.getElementById("village"), document.getElementById("village-label"), false, false);
const engi = new Tower("Engineer Monkey", "support", document.getElementById("engi"), document.getElementById("engi-label"), false, true);
const beast = new Tower("Beast Handler", "support", document.getElementById("beast"), document.getElementById("beast-label"), false, true);

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

var hero = true;
var primary = true;
var military = true;
var magic = true;
var support = true;

const heroCat = new Category("hero", [], document.getElementById("hero"), hero);
const primaryCat = new Category("primary", [], document.getElementById("primary"), primary);
const militaryCat = new Category("military", [], document.getElementById("military"), military);
const magicCat = new Category("magic", [], document.getElementById("magic"), magic);
const supportCat = new Category("support", [], document.getElementById("support"), support);

function fillCategoryLists() {
	for (let i = 0; i < categoryList.length; i++) {
		for (let j = 0; j < towerList.length; j++) {
			if(categoryList[i].name === towerList[j].category) {
				categoryList[i].list.push(towerList[j]);
			}
		}
	}
	
	return;
}

function initPage() {
	fillCategoryLists();
	// uncheck heros
	for (let i = 1; i < categoryList[0].list.length; i++) {
		categoryList[0].list[i].box.checked = false;
	}
	categoryList[1].list[0].box.checked = false;
	categoryList[2].list[0].box.checked = false;
	categoryList[3].list[0].box.checked = false;
	categoryList[4].list[0].box.checked = false;
	
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
	for (let i = 0; i < categoryList.length; i++) {
		for (let j = 0; j < categoryList[i].list.length; j++) {
			categoryList[i].list[j].label.style.color = "#87CEEB";
		}
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

// fill list with towers that can start C.H.I.M.P.S.
function fillChimpsLists() {
	chimpsViableTowers.length = 0;
	chimpsViableHeroes.length = 0;
	chimpsCount = 0;
	
	for(let i = 0; i < categoryList.length; i++) {
		for(let j = 0; j < categoryList[i].list.length; j++) {
			if (categoryList[i].list[j].box.checked && categoryList[i].list[j].start) {
				chimpsViableTowers.push(categoryList[i].list[j]);
				chimpsCount++;
				if (categoryList[i].list[j].hero) {
					chimpsViableHeroes.push(categoryList[i].list[j]);
				}
			}
		}
	}
	
	return;
}

// fill list with towers that are enabled
function fillTowerList() {
	let heroAllowed = false;
	
	possibleTowers.length = 0;
	possibleHeroes.length = 0;
	
	for(let i = 0; i < categoryList.length; i++) {
		for(let j = 0; j < categoryList[i].list.length; j++) {
			if (categoryList[i].list[j].box.checked) {
				// remove farm
				if(chimpsViable) {
					if(categoryList[i].list[j] != farm) {
						possibleTowers.push(categoryList[i].list[j]);
					} else {
						categoryList[i].list[j].box.checked == false;
					}
				} else {
					possibleTowers.push(categoryList[i].list[j]);
				}
				if (categoryList[i].list[j].hero) {
					possibleHeroes.push(categoryList[i].list[j]);
					heroAllowed = true;
				}
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
	for(let i = 0; i < categoryList[0].list.length; i++) {
		if(categoryList[0].list[i].box.checked == true) {
			possibleTowers.splice(possibleTowers.indexOf(categoryList[0].list[i]), 1);
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