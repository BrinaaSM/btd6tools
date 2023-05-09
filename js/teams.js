const source = document.getElementById("count-input");
const team = document.getElementById("output-text");

const content = [];

var count = 1;

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
	dart = primary;
	boomerangBox.checked = primary;
	boomerangBox.disabled = !primary;
	boomerang = primary;
	bombBox.checked = primary;
	bombBox.disabled = !primary;
	bomb = primary;
	tackBox.checked = primary;
	tackBox.disabled = !primary;
	tack = primary;
	iceBox.checked = primary;
	iceBox.disabled = !primary;
	ice = primary;
	glueBox.checked = primary;
	glueBox.disabled = !primary;
	glue = primary;
	return;
}

function toggleMilitary() {
	sniperBox.checked = military;
	sniperBox.disabled = !military;
	sniper = military;
	subBox.checked = military;
	subBox.disabled = !military;
	sub = military;
	buccBox.checked = military;
	buccBox.disabled = !military;
	bucc = military;
	aceBox.checked = military;
	aceBox.disabled = !military;
	ace = military;
	heliBox.checked = military;
	heliBox.disabled = !military;
	heli = military;
	mortarBox.checked = military;
	mortarBox.disabled = !military;
	mortar = military;
	dartlingBox.checked = military;
	dartlingBox.disabled = !military;
	dartling = military;
	return;
}

function toggleMagic() {
	wizBox.checked = magic;
	wizBox.disabled = !magic;
	wiz = magic;
	supermBox.checked = magic;
	supermBox.disabled = !magic;
	superm = magic;
	ninjaBox.checked = magic;
	ninjaBox.disabled = !magic;
	ninja = magic;
	alchBox.checked = magic;
	alchBox.disabled = !magic;
	alch = magic;
	druidBox.checked = magic;
	druidBox.disabled = !magic;
	druid = magic;
	return;
}

function toggleSupport() {
	farmBox.checked = support;
	farmBox.disabled = !support;
	farm = support;
	spacBox.checked = support;
	spacBox.disabled = !support;
	spac = support;
	villageBox.checked = support;
	villageBox.disabled = !support;
	village = support;
	engiBox.checked = support;
	engiBox.disabled = !support;
	engi = support;
	beastBox.checked = support;
	beastBox.disabled = !support;
	beast = support;
	return;
}

function toggleHero() {
	quincyBox.checked = hero;
	quincyBox.disabled = !hero;
	quincy = hero;
	gwenBox.checked = hero;
	gwenBox.disabled = !hero;
	gwen = hero;
	strikerBox.checked = hero;
	strikerBox.disabled = !hero;
	striker = hero;
	obynBox.checked = hero;
	obynBox.disabled = !hero;
	obyn = hero;
	churchillBox.checked = hero;
	churchillBox.disabled = !hero;
	churchill = hero;
	benBox.checked = hero;
	benBox.disabled = !hero;
	ben = hero;
	eziliBox.checked = hero;
	eziliBox.disabled = !hero;
	ezili = hero;
	patBox.checked = hero;
	patBox.disabled = !hero;
	pat = hero;
	adoraBox.checked = hero;
	adoraBox.disabled = !hero;
	adora = hero;
	brickellBox.checked = hero;
	brickellBox.disabled = !hero;
	brickell = hero;
	etienneBox.checked = hero;
	etienneBox.disabled = !hero;
	etienne = hero;
	saudaBox.checked = hero;
	saudaBox.disabled = !hero;
	sauda = hero;
	psiBox.checked = hero;
	psiBox.disabled = !hero;
	psi = hero;
	gerryBox.checked = hero;
	gerryBox.disabled = !hero;
	gerry = hero;
	return;
}

function inputHandler(e) {
	count = e.target.value;
	return;
}

function roll() {
	content.length = 0;
	
	if(dart === true) {
		content.push("Dart Monkey");
	}
	if(boomerang === true) {
		content.push("Boomerang Monkey");
	}
	if(bomb === true) {
		content.push("Bomb Shooter");
	}
	if(tack === true) {
		content.push("Tack Shooter");
	}
	if(ice === true) {
		content.push("Ice Monkey");
	}
	if(glue === true) {
		content.push("Glue Gunner");
	}
	

	if(sniper === true) {
		content.push("Sniper Monkey");
	}
	if(sub === true) {
		content.push("Monkey Sub");
	}
	if(bucc === true) {
		content.push("Monkey Buccaneer");
	}
	if(ace === true) {
		content.push("Monkey Ace");
	}
	if(heli === true) {
		content.push("Heli Pilot");
	}
	if(mortar === true) {
		content.push("Mortar Monkey");
	}
	if(dartling === true) {
		content.push("Dartling Gunner");
	}
	
	if(wiz === true) {
		content.push("Wizard Monkey");
	}
	if(superm === true) {
		content.push("Super Monkey");
	}
	if(ninja === true) {
		content.push("Ninja Monkey");
	}
	if(alch === true) {
		content.push("Alchemist");
	}
	if(druid === true) {
		content.push("Druid");
	}
	
	if(farm === true) {
		content.push("Banana Farm");
	}
	if(spac === true) {
		content.push("Spike Factory");
	}
	if(village === true) {
		content.push("Monkey Village");
	}
	if(engi === true) {
		content.push("Engineer Monkey");
	}
	if(beast === true) {
		content.push("Beast Handler");
	}
	var output = "";
	
	for(let i = 0; i < count; i++) {
		let choice = content[Math.floor(Math.random()*content.length)];
		if(!choice) {
			return;
		}
		output += choice + " ";
		content.splice(content.indexOf(choice), 1);
	}
	
	team.innerHTML = output;
	return;
}

source.addEventListener("input", inputHandler);