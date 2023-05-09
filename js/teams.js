const source = document.getElementById("current-round-input");

var primary;
const primaryBox = document.getElementById("primary");

var dart;
const dartBox = document.getElementById("dart");

var boomerang;
const boomerangBox = document.getElementById("boomerang");

var bomb;
const bombBox = document.getElementById("bomb");

var tack;
const tackBox = document.getElementById("tack");

var ice;
const iceBox = document.getElementById("ice");

var glue;
const glueBox = document.getElementById("glue");

var military;
const militaryBox = document.getElementById("military");

var sniper;
const sniperBox = document.getElementById("sniper");

var sub;
const subBox = document.getElementById("sub");

var bucc;
const buccBox = document.getElementById("bucc");

var ace;
const aceBox = document.getElementById("ace");

var heli;
const heliBox = document.getElementById("heli");

var mortar;
const mortarBox = document.getElementById("mortar");

var dartling;
const dartlingBox = document.getElementById("dartling");

var magic;
const magicBox = document.getElementById("magic");

var wiz;
const wizBox = document.getElementById("wiz");

var superm;
const supermBox = document.getElementById("superm");

var ninja;
const ninjaBox = document.getElementById("ninja");

var alch;
const alchBox = document.getElementById("alch");

var druid;
const druidBox = document.getElementById("druid");

var support;
const supportBox = document.getElementById("support");

var farm;
const farmBox = document.getElementById("farm");

var spac;
const spacBox = document.getElementById("spac");

var village;
const villageBox = document.getElementById("village");

var engi;
const engiBox = document.getElementById("engi");

var beast;
const beastBox = document.getElementById("beast");


var hero;
const heroBox = document.getElementById("hero");

var quincy;
const quincyBox = document.getElementById("quincy");

var gwen;
const gwenBox = document.getElementById("gwen");

var striker;
const strikerBox = document.getElementById("striker");

var obyn;
const obynBox = document.getElementById("obyn");

var churchill;
const churchillBox = document.getElementById("churchill");

var ben;
const benBox = document.getElementById("ben");

var ezili;
const eziliBox = document.getElementById("ezili");

var pat;
const patBox = document.getElementById("pat");

var adora;
const adoraBox = document.getElementById("adora");

var brickell;
const brickellBox = document.getElementById("brickell");

var etienne;
const etienneBox = document.getElementById("etienne");

var sauda;
const saudaBox = document.getElementById("sauda");

var psi;
const psiBox = document.getElementById("psi");

var gerry;
const gerryBox = document.getElementById("gerry");


function togglePrimary() {
	dartBox.checked = primaryBox.checked;
	boomerangBox.checked = primaryBox.checked;
	bombBox.checked = primaryBox.checked;
	tackBox.checked = primaryBox.checked;
	iceBox.checked = primaryBox.checked;
	glueBox.checked = primaryBox.checked;
}

function toggleMilitary() {
	sniperBox.checked = militaryBox.checked;
	subBox.checked = militaryBox.checked;
	buccBox.checked = militaryBox.checked;
	aceBox.checked = militaryBox.checked;
	heliBox.checked = militaryBox.checked;
	mortarBox.checked = militaryBox.checked;
	dartlingBox.checked = militaryBox.checked;
}

function toggleMagic() {
	wizBox.checked = magicBox.checked;
	supermBox.checked = magicBox.checked;
	ninjaBox.checked = magicBox.checked;
	alchBox.checked = magicBox.checked;
	druidBox.checked = magicBox.checked;
}

function toggleSupport() {
	farmBox.checked = supportBox.checked;
	spacBox.checked = supportBox.checked;
	villageBox.checked = supportBox.checked;
	engiBox.checked = supportBox.checked;
	beastBox.checked = supportBox.checked;
}

function toggleHero() {
	quincyBox.checked = heroBox.checked;
	gwenBox.checked = heroBox.checked;
	strikerBox.checked = heroBox.checked;
	obynBox.checked = heroBox.checked;
	churchillBox.checked = heroBox.checked;
	benBox.checked = heroBox.checked;
	eziliBox.checked = heroBox.checked;
	patBox.checked = heroBox.checked;
	adoraBox.checked = heroBox.checked;
	brickellBox.checked = heroBox.checked;
	etienneBox.checked = heroBox.checked;
	saudaBox.checked = heroBox.checked;
	psiBox.checked = heroBox.checked;
	gerryBox.checked = heroBox.checked;
}

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

// source.addEventListener("input", inputHandlerRound);