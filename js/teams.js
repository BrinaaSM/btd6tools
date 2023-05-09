const source = document.getElementById("count-input");

const content = [];

var count;

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
	dartBox.checked = primary;
	dartBox.disabled = !primary;
	boomerangBox.checked = primary;
	boomerangBox.disabled = !primary;
	bombBox.checked = primary;
	bombBox.disabled = !primary;
	tackBox.checked = primary;
	tackBox.disabled = !primary;
	iceBox.checked = primary;
	iceBox.disabled = !primary;
	glueBox.checked = primary;
	glueBox.disabled = !primary;
}

function toggleMilitary() {
	sniperBox.checked = military;
	sniperBox.disabled = !military;
	subBox.checked = military;
	subBox.disabled = !military;
	buccBox.checked = military;
	buccBox.disabled = !military;
	aceBox.checked = military;
	aceBox.disabled = !military;
	heliBox.checked = military;
	heliBox.disabled = !military;
	mortarBox.checked = military;
	mortarBox.disabled = !military;
	dartlingBox.checked = military;
	dartlingBox.disabled = !military;
}

function toggleMagic() {
	wizBox.checked = magic;
	wizBox.disabled = !magic;
	supermBox.checked = magic;
	supermBox.disabled = !magic;
	ninjaBox.checked = magic;
	ninjaBox.disabled = !magic;
	alchBox.checked = magic;
	alchBox.disabled = !magic;
	druidBox.checked = magic;
	druidBox.disabled = !magic;
}

function toggleSupport() {
	farmBox.checked = support;
	farmBox.disabled = !support;
	spacBox.checked = support;
	spacBox.disabled = !support;
	villageBox.checked = support;
	villageBox.disabled = !support;
	engiBox.checked = support;
	engiBox.disabled = !support;
	beastBox.checked = support;
	beastBox.disabled = !support;
}

function toggleHero() {
	quincyBox.checked = hero;
	quincyBox.disabled = !hero;
	gwenBox.checked = hero;
	gwenBox.disabled = !hero;
	strikerBox.checked = hero;
	strikerBox.disabled = !hero;
	obynBox.checked = hero;
	obynBox.disabled = !hero;
	churchillBox.checked = hero;
	churchillBox.disabled = !hero;
	benBox.checked = hero;
	benBox.disabled = !hero;
	eziliBox.checked = hero;
	eziliBox.disabled = !hero;
	patBox.checked = hero;
	patBox.disabled = !hero;
	adoraBox.checked = hero;
	adoraBox.disabled = !hero;
	brickellBox.checked = hero;
	brickellBox.disabled = !hero;
	etienneBox.checked = hero;
	etienneBox.disabled = !hero;
	saudaBox.checked = hero;
	saudaBox.disabled = !hero;
	psiBox.checked = hero;
	psiBox.disabled = !hero;
	gerryBox.checked = hero;
	gerryBox.disabled = !hero;
}

function inputHandler(e) {
	count = e.target.value;
}

function fillContent() {
	content.clear();
	
	if(dart) {
		content.push("Dart Monkey");
	}
	
}
	
function roll() {
}

source.addEventListener("input", inputHandler);