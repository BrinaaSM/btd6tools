const categoryList = [];
const towerList = [];

const defaultTeamSize = 3;
const maxMonkeyCount = 24;

var chimpsViable = true;
var teamSize = 3;

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
const striker = new Tower("Striker", "hero", document.getElementById("striker"), document.getElementById("striker-label"), true, false);
const obyn = new Tower("Obyn", "hero", document.getElementById("obyn"), document.getElementById("obyn-label"), true, false);
const churchill = new Tower("Churchill", "hero", document.getElementById("churchill"), document.getElementById("churchill-label"), true, false);
const ben = new Tower("Benjamin", "hero", document.getElementById("ben"), document.getElementById("ben-label"), true, false);
const ezili = new Tower("Ezili", "hero", document.getElementById("ezili"), document.getElementById("ezili-label"), true, true);
const pat = new Tower("Pat", "hero", document.getElementById("pat"), document.getElementById("pat-label"), true, false);
const adora = new Tower("Adora", "hero", document.getElementById("adora"), document.getElementById("adora-label"), true, false);
const brickell = new Tower("Brickell", "hero", document.getElementById("brickell"), document.getElementById("brickell-label"), true, false);
const etienne = new Tower("Etienne", "hero", document.getElementById("etienne"), document.getElementById("etienne-label"), true, false);
const sauda = new Tower("Sauda", "hero", document.getElementById("sauda"), document.getElementById("sauda-label"), true, true);
const psi = new Tower("Psi", "hero", document.getElementById("psi"), document.getElementById("psi-label"), true, false);
const gerry = new Tower("Geraldo", "hero", document.getElementById("gerry"), document.getElementById("gerry-label"), true, false);
const corvus = new Tower("Corvus", "hero", document.getElementById("corvus"), document.getElementById("corvus-label"), true, false);
const rosalia = new Tower("Rosalia", "hero", document.getElementById("rosalia"), document.getElementById("rosalia-label"), true, false);

// create primary classes
const anyPrimary = new Tower("Any Primary", "primary", document.getElementById("any-primary"), document.getElementById("any-primary-label"), false, true);
const dart = new Tower("Dart", "primary", document.getElementById("dart"), document.getElementById("dart-label"), false, true);
const boomerang = new Tower("Boomerang", "primary", document.getElementById("boomerang"), document.getElementById("boomerang-label"), false, true);
const bomb = new Tower("Bomb", "primary", document.getElementById("bomb"), document.getElementById("bomb-label"), false, false);
const tack = new Tower("Tack", "primary", document.getElementById("tack"), document.getElementById("tack-label"), false, true);
const ice = new Tower("Ice", "primary", document.getElementById("ice"), document.getElementById("ice-label"), false, false);
const glue = new Tower("Glue", "primary", document.getElementById("glue"), document.getElementById("glue-label"), false, false);

// create military classes
const anyMilitary = new Tower("Any Military", "military", document.getElementById("any-military"), document.getElementById("any-military-label"), false, true);
const sniper = new Tower("Sniper", "military", document.getElementById("sniper"), document.getElementById("sniper-label"), false, false);
const sub = new Tower("Sub", "military", document.getElementById("sub"), document.getElementById("sub-label"), false, true);
const bucc = new Tower("Buccaneer", "military", document.getElementById("bucc"), document.getElementById("bucc-label"), false, true);
const ace = new Tower("Ace", "military", document.getElementById("ace"), document.getElementById("ace-label"), false, false);
const heli = new Tower("Heli", "military", document.getElementById("heli"), document.getElementById("heli-label"), false, false);
const mortar = new Tower("Mortar", "military", document.getElementById("mortar"), document.getElementById("mortar-label"), false, false);
const dartling = new Tower("Dartling", "military", document.getElementById("dartling"), document.getElementById("dartling-label"), false, false);

// create magic classes
const anyMagic = new Tower("Any Magic", "magic", document.getElementById("any-magic"), document.getElementById("any-magic-label"), false, true);
const wiz = new Tower("Wizard", "magic", document.getElementById("wiz"), document.getElementById("wiz-label"), false, true);
const superm = new Tower("Supermonkey", "magic", document.getElementById("superm"), document.getElementById("superm-label"), false, false);
const ninja = new Tower("Ninja", "magic", document.getElementById("ninja"), document.getElementById("ninja-label"), false, true);
const alch = new Tower("Alchemist", "magic", document.getElementById("alch"), document.getElementById("alch-label"), false, false);
const druid = new Tower("Druid", "magic", document.getElementById("druid"), document.getElementById("druid-label"), false, true);
const mermonkey = new Tower("Mermonkey", "magic", document.getElementById("mermonkey"), document.getElementById("mermonkey-label"), false, true);

// create support classes
const anySupport = new Tower("Any Support", "support", document.getElementById("any-support"), document.getElementById("any-support-label"), false, true);
const farm = new Tower("Farm", "support", document.getElementById("farm"), document.getElementById("farm-label"), false, false);
const spac = new Tower("Spike Factory", "support", document.getElementById("spac"), document.getElementById("spac-label"), false, false);
const village = new Tower("Village", "support", document.getElementById("village"), document.getElementById("village-label"), false, false);
const engi = new Tower("Engineer", "support", document.getElementById("engi"), document.getElementById("engi-label"), false, true);
const beast = new Tower("Beast Handler", "support", document.getElementById("beast"), document.getElementById("beast-label"), false, true);

// create category classes
const heroCat = new Category("hero", [], document.getElementById("hero"), true);
const primaryCat = new Category("primary", [], document.getElementById("primary"), true);
const militaryCat = new Category("military", [], document.getElementById("military"), true);
const magicCat = new Category("magic", [], document.getElementById("magic"), true);
const supportCat = new Category("support", [], document.getElementById("support"), true);

const sizeInput = document.getElementById("team-size-input");
const teamOutput = document.getElementById("team-output");

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
	// uncheck farm
	farm.box.checked = false;
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

function toggleChimpsViable() {
	chimpsViable = !chimpsViable;
	farm.box.checked = !chimpsViable;
}

// fill list with towers that are enabled
function fillTowerList(towerList) {
	for(let i = 0; i < categoryList.length; i++) {
		for(let j = 0; j < categoryList[i].list.length; j++) {
			if (categoryList[i].list[j].box.checked) {
				if(chimpsViable) {
					// remove farm
					if(categoryList[i].list[j] != farm) {
						towerList.push(categoryList[i].list[j]);
					} else {
						categoryList[i].list[j].box.checked == false;
					}
				} else {
					towerList.push(categoryList[i].list[j]);
				}
			}
		}
	}
	return;
}

// pick a random tower that can start C.H.I.M.P.S. (TODO: could be combined with random tower)
function pickViableTower(towerList) {
	
	for(let i = 0; i < towerList.length; i++) {
		if (towerList[i].start) {
			viableTowers.push(towerList[i]);
		}
	}

	// check if no chimps start possible
	if (viableTowers.length == 0) {
		return null;
	}	
	return viableTowers[Math.floor(Math.random()*viableTowers.length)];
}

// pick a random tower
// pick hero forces hero or non hero
// pick start forces (non-hero) that can start or doesn't matter
function pickRandomTower(towerList, pickHero, pickStart) {
	const heroList = [];
	const nonHeroList = [];
	const startList = [];
	
	let choice;
	
	for(let i = 0; i < towerList.length; i++) {
		if (towerList[i].hero) {
			heroList.push(towerList[i]);
		} else {
			nonHeroList.push(towerList[i]);
			if (towerList[i].start) {
				startList.push(towerList[i]);
			}
		}
	}
	
	if (pickStart) {
		choice = startList[Math.floor(Math.random()*startList.length)];
		towerList.splice(towerList.indexOf(choice), 1);
		return choice;
	}
	
	if (pickHero) {
		choice = heroList[Math.floor(Math.random()*heroList.length)];
	} else {
		choice = nonHeroList[Math.floor(Math.random()*nonHeroList.length)];
	}
	towerList.splice(towerList.indexOf(choice), 1);
	return choice;
}

function countHeroes(towerList) {
	let sum = 0;
	
	for(let i = 0; i < towerList.length; i++) {
		if(towerList[i].hero) {
			sum++;
		}
	}
	return sum;
}

function roll() {
	const chosenTowers = [];
	const towerList = [];

	let choice;	
	let teamSizeOffset = 0;
	let output = "";
	
	resetColors();
	fillTowerList(towerList);
	
	// add hero if allowed
	if (countHeroes(towerList) > 0) {
		choice = pickRandomTower(towerList, true, false);
		chosenTowers.push(choice);
	// check if team size illegal
	} else if (teamSize <= 0) {
		teamOutput.value = "Err: Team size is set to 0!";
		return;
	}
	
	// check if team possible to create
	if (towerList.length - countHeroes(towerList) < teamSize) {
		teamOutput.value = "Err: Not enough Towers selected!";
		return;
	}
	
	// force chimps start
	if(chimpsViable) {
		// check if hero can start
		if (choice && !choice.start) {
			choice = pickRandomTower(towerList, false, true);
			// check if viable tower is found
			if(!choice) {
				teamOutput.value = "Err: No C.H.I.M.P.S. viable combination found!"
				return;
			}
		teamSizeOffset = 1;
		chosenTowers.push(choice);
		}
	}
	
	for (let i = 0; i < teamSize - teamSizeOffset; i++) {
		choice = pickRandomTower(towerList, false, false);
		chosenTowers.push(choice);
	}
	
	for (let i = 0; i < chosenTowers.length; i++) {
		output += chosenTowers[i].name;
		chosenTowers[i].label.style.color = "yellow";
		if (i < chosenTowers. length - 1) {
			output += ", ";
		}
	}
	
	teamOutput.value = output;
	return;
}

sizeInput.addEventListener("input", inputHandlerSize);