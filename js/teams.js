const team = document.getElementById("output-text");
const heroOutput = document.getElementById("output-hero");

const content = [];

var primary;
const primaryBox = document.getElementById("primary");
var dart;
const dartBox = document.getElementById("dart");
const dartLabel = document.getElementById("dart-label");
var boomerang;
const boomerangBox = document.getElementById("boomerang");
const boomerangLabel = document.getElementById("boomerang-label");
var bomb;
const bombBox = document.getElementById("bomb");
const bombLabel = document.getElementById("bomb-label");
var tack;
const tackBox = document.getElementById("tack");
const tackLabel = document.getElementById("tack-label");
var ice;
const iceBox = document.getElementById("ice");
const iceLabel = document.getElementById("ice-label");
var glue;
const glueBox = document.getElementById("glue");
const glueLabel = document.getElementById("glue-label");

var military;
const militaryBox = document.getElementById("military");
var sniper;
const sniperBox = document.getElementById("sniper");
const sniperLabel = document.getElementById("sniper-label");
var sub;
const subBox = document.getElementById("sub");
const subLabel = document.getElementById("sub-label");
var bucc;
const buccBox = document.getElementById("bucc");
const buccLabel = document.getElementById("bucc-label");
var ace;
const aceBox = document.getElementById("ace");
const aceLabel = document.getElementById("ace-label");
var heli;
const heliBox = document.getElementById("heli");
const heliLabel = document.getElementById("heli-label");
var mortar;
const mortarBox = document.getElementById("mortar");
const mortarLabel = document.getElementById("mortar-label");
var dartling;
const dartlingBox = document.getElementById("dartling");
const dartlingLabel = document.getElementById("dartling-label");

var magic;
const magicBox = document.getElementById("magic");
var wiz;
const wizBox = document.getElementById("wiz");
const wizLabel = document.getElementById("wiz-label");
var superm;
const supermBox = document.getElementById("superm");
const supermLabel = document.getElementById("superm-label");
var ninja;
const ninjaBox = document.getElementById("ninja");
const ninjaLabel = document.getElementById("ninja-label");
var alch;
const alchBox = document.getElementById("alch");
const alchLabel = document.getElementById("alch-label");
var druid;
const druidBox = document.getElementById("druid");
const druidLabel = document.getElementById("druid-label");

var support;
const supportBox = document.getElementById("support");
var farm;
const farmBox = document.getElementById("farm");
const farmLabel = document.getElementById("farm-label");
var spac;
const spacBox = document.getElementById("spac");
const spacLabel = document.getElementById("spac-label");
var village;
const villageBox = document.getElementById("village");
const villageLabel = document.getElementById("village-label");
var engi;
const engiBox = document.getElementById("engi");
const engiLabel = document.getElementById("engi-label");
var beast;
const beastBox = document.getElementById("beast");
const beastLabel = document.getElementById("beast-label");

var hero;
const heroBox = document.getElementById("hero");
var quincy;
const quincyBox = document.getElementById("quincy");
const quincyLabel = document.getElementById("quincy-label");
var gwen;
const gwenBox = document.getElementById("gwen");
const gwenLabel = document.getElementById("gwen-label");
var striker;
const strikerBox = document.getElementById("striker");
const strikerLabel = document.getElementById("striker-label");
var obyn;
const obynBox = document.getElementById("obyn");
const obynLabel = document.getElementById("obyn-label");
var churchill;
const churchillBox = document.getElementById("churchill");
const churchillLabel = document.getElementById("churchill-label");
var ben;
const benBox = document.getElementById("ben");
const benLabel = document.getElementById("ben-label");
var ezili;
const eziliBox = document.getElementById("ezili");
const eziliLabel = document.getElementById("ezili-label");
var pat;
const patBox = document.getElementById("pat");
const patLabel = document.getElementById("pat-label");
var adora;
const adoraBox = document.getElementById("adora");
const adoraLabel = document.getElementById("adora-label");
var brickell;
const brickellBox = document.getElementById("brickell");
const brickellLabel = document.getElementById("brickell-label");
var etienne;
const etienneBox = document.getElementById("etienne");
const etienneLabel = document.getElementById("etienne-label");
var sauda;
const saudaBox = document.getElementById("sauda");
const saudaLabel = document.getElementById("sauda-label");
var psi;
const psiBox = document.getElementById("psi");
const psiLabel = document.getElementById("psi-label");
var gerry;
const gerryBox = document.getElementById("gerry");
const gerryLabel = document.getElementById("gerry-label");

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
		content.push(dartLabel);
	}
	if(boomerang === true) {
		content.push(boomerangLabel);
	}
	if(bomb === true) {
		content.push(bombLabel);
	}
	if(tack === true) {
		content.push(tackLabel);
	}
	if(ice === true) {
		content.push(iceLabel);
	}
	if(glue === true) {
		content.push(glueLabel);
	}
	

	if(sniper === true) {
		content.push(sniperLabel);
	}
	if(sub === true) {
		content.push(subLabel);
	}
	if(bucc === true) {
		content.push(buccLabel);
	}
	if(ace === true) {
		content.push(aceLabel);
	}
	if(heli === true) {
		content.push(heliLabel);
	}
	if(mortar === true) {
		content.push(mortarLabel);
	}
	if(dartling === true) {
		content.push(dartlingLabel);
	}
	
	if(wiz === true) {
		content.push(wizLabel);
	}
	if(superm === true) {
		content.push(supermLabel);
	}
	if(ninja === true) {
		content.push(ninjaLabel);
	}
	if(alch === true) {
		content.push(alchLabel);
	}
	if(druid === true) {
		content.push(druidLabel);
	}
	
	if(farm === true) {
		content.push(farmLabel);
	}
	if(spac === true) {
		content.push(spacLabel);
	}
	if(village === true) {
		content.push(villageLabel);
	}
	if(engi === true) {
		content.push(engiLabel);
	}
	if(beast === true) {
		content.push(beastLabel);
	}
	
	let choice;
	
	for(let i = 0; i < content.length; i++) {
		content[i].style.color = "#87CEEB";
	}
	
	for(let i = 0; i < 3; i++) {
		choice = content[Math.floor(Math.random()*content.length)];
		choice.style.color = "yellow";
		content.splice(content.indexOf(choice), 1);
	}
	
	team.innerHTML = output;
	
	content.length = 0;
	
	if(quincy === true) {
		content.push(quincyLabel);
	}
	if(gwen === true) {
		content.push(gwenLabel);
	}
	if(striker === true) {
		content.push(strikerLabel);
	}
	if(obyn === true) {
		content.push(obynLabel);
	}
	if(churchill === true) {
		content.push(churchillLabel);
	}
	if(ben === true) {
		content.push(benLabel);
	}
	if(ezili === true) {
		content.push(eziliLabel);
	}
	if(pat === true) {
		content.push(patLabel);
	}
	if(adora === true) {
		content.push(adoraLabel);
	}
	if(brickell === true) {
		content.push(brickellLabel);
	}
	if(etienne === true) {
		content.push(etienneLabel);
	}
	if(sauda === true) {
		content.push(saudaLabel);
	}
	if(psi === true) {
		content.push(psiLabel);
	}
	if(gerry === true) {
		content.push(gerryLabel);
	}
	
	for(let i = 0; i < content.length; i++) {
		content[i].style.color = "#87CEEB";
	}
	
	choice = content[Math.floor(Math.random()*content.length)];
	choice.style.color = "yellow";
	return;
}