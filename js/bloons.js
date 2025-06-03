const bloonStructure = [
	{name: "b.a.d.", childs: {"z.o.m.g.": 2, "d.d.t.": 3}, hp: 20000, speed: 0.18, immunities: {knockback: 1, slow: 1, stun: 1}},
	{name: "d.d.t.", childs: {ceramic: 4}, hp: 400, speed: 2.64, immunities: {energy: 1, explosion: 1, sharp: 1, shatter: 1}},
	{name: "z.o.m.g.", childs: {"b.f.b.": 4}, hp: 4000, speed: 0.18},
	{name: "b.f.b.", childs: {"m.o.a.b.": 4}, hp: 700, speed: 0.25},
	{name: "m.o.a.b.", childs: {ceramic: 4}, hp: 200, speed: 1},
	{name: "ceramic", childs: {rainbow: 2}, childsFP: {rainbow: 1}, hp: 10, hpFP: 60, speed: 2.5},
	{name: "rainbow", childs: {zebra: 2}, childsFP: {zebra: 1}, speed: 2.2},
	{name: "zebra", childs: {black: 1, white: 1}, childsFP: {white: 1}, speed: 1.8, immunities: {cold: 1, explosion: 1}},
	{name: "black", childs: {pink: 2}, childsFP: {pink: 1}, speed: 1.8, immunities: {explosion: 1}},
	{name: "white", childs: {pink: 2}, childsFP: {pink: 1}, speed: 2, immunities: {cold: 1}},
	{name: "purple", childs: {pink: 2}, childsFP: {pink: 1}, speed: 3, immunities: {energy: 1, plasma: 1}},
	{name: "lead", childs: {black: 2}, childsFP: {black: 1}, speed: 1, immunities: {energy: 1, sharp: 1, shatter: 1}},
	{name: "pink", childs: {yellow: 1}, speed: 3.5},
	{name: "yellow", childs: {green: 1}, speed: 3.2},
	{name: "green", childs: {blue: 1}, speed: 1.8},
	{name: "blue", childs: {red: 1}, speed: 1.4},
	{name: "red", speed: 1}
]

const fortifiedMultiplier = 2;

function getBloonStructure(bloonLayerTop) {
	for (let i = 0; i < bloonStructure.length; i++)
		if (bloonStructure[i].name === bloonLayerTop) return bloonStructure[i];
	return null;
}

function getHP(bloon, isFortified, round) {
	let hp;
	if(round > 80 && getBloonStructure(bloon).hpFP) hp = getBloonStructure(bloon).hpFP;
	else hp = getBloonStructure(bloon).hp;
	
	// default HP bloon
	if (!hp) return 1;
	
	// freeplay hp scaling for moab class only
	if (bloon !== 'ceramic' && bloon !== 'lead') {	
		if (round >= 1 && round <= 80) hp = hp;
		else if (round >= 81 && round <= 100) hp = hp * (1 + (round - 80) * 0.02);
		else if (round >= 101 && round <= 124) hp = hp * (1.4 + (round - 100) * 0.05);
		else if (round >= 125 && round <= 150) hp = hp * (2.6 + (round - 124) * 0.15);
		else if (round >= 151 && round <= 250) hp = hp * (6.5 + (round - 150) * 0.35);
		else if (round >= 251 && round <= 300) hp = hp * (41.5 + (round - 250) * 1.0);
		else if (round >= 301 && round <= 400) hp = hp * (91.5 + (round - 300) * 1.5);
		else if (round >= 401 && round <= 500) hp = hp * (241.5 + (round - 400) * 2.5);
		else hp = hp * (491.5 + (round - 500) * 5.0);
	}	
	if (isFortified) hp *= fortifiedMultiplier;
	// f-lead special
	if (isFortified && bloon === 'lead') hp *= fortifiedMultiplier;
	
	return hp;
}

function getRBE(bloon, isFortified, round) {
	let childs;
	let rbe = 1;
	let currentLayer = getBloonStructure(bloon);
	
	if (round > 80 && currentLayer.childsFP) childs = currentLayer.childsFP;
	else childs = currentLayer.childs;
	
	// red bloon reached
	if (!childs) return 1;
	
	// defortify f-ceramic/f-lead childs
	if (bloon === 'rainbow' || bloon === 'black') isFortified = false;
	
	// ceramic and higher + f-lead
	if (getHP(bloon, isFortified, round) > 1) rbe += getHP(bloon, isFortified, round);
	
	// remove 0th-layer of HP-bloons
	if (getHP(bloon, isFortified, round) > 1) rbe--;

	if (isFortified) rbe *= fortifiedMultiplier;
	// f-lead special
	if (isFortified && bloon === 'lead') rbe *= fortifiedMultiplier;
	
	let keys = Object.keys(childs);
	keys.forEach(
		function(bloon) {
			for (let i = 0; i < childs[bloon]; i++) {
				rbe += getRBE(bloon, isFortified, round);
			}
		}
	);
	return rbe;
}
	
function getIncomeBloon(bloon, round) {
	let income = 1;
	let currentLayer = getBloonStructure(bloon, round);
	let childs = currentLayer.childs;
	
	// red bloon
	if (!childs) {
		return 1;
	}

	// ceramic special income
	if (round > 80 && bloon === 'ceramic') income += 86;

	let bloonChilds = Object.keys(childs);
	bloonChilds.forEach(
		function(bloon) {
			for (let i = 0; i < childs[bloon]; i++) income += getIncomeBloon(bloon, round);
		}
	);
	return income;
}

function getImmunitiesBloonString(bloon) {
	let immuStr = "";
	let immunityList = Object.keys(getBloonStructure(bloon, 1).immunities);
	
	for (let i = 0; i < immunityList.length; i++) {
		immuStr += immunityList[i];
		if (i < immunityList.length - 1) immuStr += ", ";
	}
	return immuStr;
}