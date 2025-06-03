const bloonStructure = [
	{name: "bad", childs: {zomg: 2, ddt: 3}, hp: 20000, speed: 0.18, immunities: {knockback: 1, slow: 1, stun: 1}},
	{name: "ddt", childs: {ceramic: 4}, hp: 400, speed: 2.64, immunities: {energy: 1, explosion: 1, sharp: 1, shatter: 1}},
	{name: "zomg", childs: {bfb: 4}, hp: 4000, speed: 0.18},
	{name: "bfb", childs: {moab: 4}, hp: 700, speed: 0.25},
	{name: "moab", childs: {ceramic: 4}, hp: 200, speed: 1},
	{name: "ceramic", childs: {rainbow: 2}, childsFP: {rainbow: 1}, hp: 10, hpFP: 60, speed: 2.5},
	{name: "rainbow", childs: {zebra: 2}, childsFP: {zebra: 1}, speed: 2.2},
	{name: "zebra", childs: {black: 1, white: 1}, childsFP: {white: 1}, speed: 1.8, immunities: {cold: 1, explosion: 1}},
	{name: "black", childs: {pink: 2}, childsFP: {pink: 1}, speed: 1.8, immunities: {explosion: 1}},
	{name: "white", childs: {pink: 2}, childsFP: {pink: 1}, speed: 2, immunities: {cold: 1}},
	{name: "purple", childs: {pink: 2, childsFP: {pink: 1}}, speed: 3, immunities: {energy: 1, plasma: 1}},
	{name: "lead", childs: {black: 2}, childsFP: {black: 1}, speed: 1, immunities: {energy: 1, sharp: 1, shatter: 1}},
	{name: "pink", childs: {yellow: 1}, speed: 3.5},
	{name: "yellow", childs: {green: 1}, speed: 3.2},
	{name: "green", childs: {blue: 1}, speed: 1.8},
	{name: "blue", childs: {red: 1}, speed: 1.4},
	{name: "red", speed: 1}
]

/*
const bloonStructureFreeplay = [
	{name: "bad", childs: {zomg: 2, ddt: 3}, hp: 20000, speed: 0.18, immunities: {knockback: 1, slow: 1, stun: 1}},
	{name: "ddt", childs: {ceramic: 4}, hp: 400, speed: 2.64, immunities: {energy: 1, explosion: 1, sharp: 1, shatter: 1}},
	{name: "zomg", childs: {bfb: 4}, hp: 4000, speed: 0.18},
	{name: "bfb", childs: {moab: 4}, hp: 700, speed: 0.25},
	{name: "moab", childs: {ceramic: 4}, hp: 200, speed: 1},
	{name: "ceramic", childs: {rainbow: 1}, hp: 60, speed: 2.5},
	{name: "rainbow", childs: {zebra: 1}, speed: 2.2},
	{name: "zebra", childs: {white: 1}, speed: 1.8, immunities: {cold: 1, explosion: 1}},
	{name: "black", childs: {pink: 1}, speed: 1.8, immunities: {explosion: 1}},
	{name: "white", childs: {pink: 1}, speed: 2, immunities: {cold: 1}},
	{name: "purple", childs: {pink: 1}, speed: 3, immunities: {energy: 1, plasma: 1}},
	{name: "lead", childs: {black: 1}, speed: 1, immunities: {energy: 1, sharp: 1, shatter: 1}},
	{name: "pink", childs: {yellow: 1}, speed: 3.5},
	{name: "yellow", childs: {green: 1}, speed: 3.2},
	{name: "green", childs: {blue: 1}, speed: 1.8},
	{name: "blue", childs: {red: 1}, speed: 1.4},
	{name: "red", speed: 1}
]
*/

function getBloon(bloon) {
	for (let i = 0; i < bloonStructure.length; i++) {
		if (bloonStructure[i].name === bloon) {
			return bloonStructure[i];
		}
	}
}

/*
function getBloonFreeplay(bloon) {
	for (let i = 0; i < bloonStructureFreeplay.length; i++) {
		if (bloonStructureFreeplay[i].name === bloon) {
			return bloonStructureFreeplay[i];
		}
	}
}
*/

function getBloonStructure(bloonLayerTop) {
	for (let i = 0; i < bloonStructure.length; i++) {
		if (bloonStructure[i].name === bloonLayerTop) {
			return bloonStructure[i];
		}
	}
}

// HP

function getHP(bloon, round) {
	let hp;
	let baseHP;
	
	if(round > 80) {
		baseHP = getBloon(bloon).hpFP;
		if(getBloon(bloon).hpFP === undefined) {
			baseHP = getBloon(bloon).hp;
		}
	} else {
		baseHP = getBloon(bloon).hp;
	}
	
	// default HP
	if (isNaN(baseHP)) {
		return 1;
	}
	
	if (bloon === 'ceramic' || bloon === 'lead') {
		return baseHP;
	}
	
	if (round >= 1 && round <= 80) {
		hp = baseHP;
	}
	else if(round >= 81 && round <= 100) {
		hp = baseHP * (1 + (round - 80) * 0.02);
	}
	else if(round >= 101 && round <= 124) {
		hp = baseHP * (1.4 + (round - 100) * 0.05);
	}
	else if(round >= 125 && round <= 150) {
		hp = baseHP * (2.6 + (round - 124) * 0.15);
	}
	else if(round >= 151 && round <= 250) {
		hp = baseHP * (6.5 + (round - 150) * 0.35);
	}
	else if(round >= 251 && round <= 300) {
		hp = baseHP * (41.5 + (round - 250) * 1.0);
	}
	else if(round >= 301 && round <= 400) {
		hp = baseHP * (91.5 + (round - 300) * 1.5);
	}
	else if(round >= 401 && round <= 500) {
		hp = baseHP * (241.5 + (round - 400) * 2.5);
	}
	else {
		hp = baseHP * (491.5 + (round - 500) * 5.0);
	}
	
	return hp;
}

// RBE

function getRBE(bloon, isFortified, round) {
	let childs;
	let rbeBefore;
	
	let rbe = 1;
	let currentLayer = getBloonStructure(bloon);
	
	if (round > 80) {
		childs = currentLayer.childsFP;
		if(currentLayer.childsFP === undefined) {
			childs = currentLayer.childs;
		}
	} else {
		childs = currentLayer.childs;
	}
	
	// red bloon reached
	if(childs === undefined) {
		return 1;
	}
	
	rbeBefore = rbe;
	
	if(bloon === 'rainbow' || bloon === 'black') {
		isFortified = 0;
	}
	
	if(bloon === 'ceramic') rbe += getHP('ceramic', round);
	if(bloon === 'moab') rbe += getHP('moab', round);
	if(bloon === 'bfb') rbe += getHP('bfb', round);
	if(bloon === 'zomg') rbe += getHP('zomg', round);
	if(bloon === 'ddt') rbe += getHP('ddt', round);
	if(bloon === 'bad') rbe += getHP('bad', round);
	
	// remove 0th-layer of HP-bloons
	if(rbeBefore !== rbe) rbe--;

	if(isFortified === 1 && bloon !== 'lead') {
		rbe *= 2;
	} else if (isFortified === 1 && bloon === 'lead') {
		rbe *= 4;
	}
			
	let keys = Object.keys(childs);
	keys.forEach(
		function(bloon) {
			let bloonCount = childs[bloon];
			for (let i = 0; i < bloonCount; i++) {
				rbe += getRBE(bloon, isFortified, round);
			}
		}
	);
	return rbe;
}
	
// Income
	
function getIncomeBloon(bloon, round) {
	let income = 1;
	let currentLayer = getBloonStructure(bloon, round);
	let childs = currentLayer.childs;
	if(childs === undefined) {
		return 1;
	}

	if(round > 80) {
		if(bloon === 'ceramic') income += 86;
	}

	let keys = Object.keys(childs);
	keys.forEach(
		function(bloon) {
			let bloonCount = childs[bloon];
			for (let i = 0; i < bloonCount; i++) {
				income += getIncomeBloon(bloon, round);
			}
		}
	);
	return income;
}

// Immunites

function getImmunitiesBloonStr(bloon) {
	let immuStr = "";
	let immunities = getBloonStructure(bloon, 1).immunities;
	let immunityList = [];
	let keys = Object.keys(immunities);
	
	keys.forEach(
		function(immunity) {
			immunityList.push(immunity);
		}
	);
	
	for (let i = 0; i < immunityList.length; i++) {
		immuStr += immunityList[i];
		if (i < immunityList.length - 1) {
			immuStr += ", "
		}
	}
	
	return immuStr;
}