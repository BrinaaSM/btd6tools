const bloonStructure = [
	{id: "bad", childs: {zomg: 2, ddt: 3}, hp: 20000, type: 'blimp', speed: 0.18},
	{id: "ddt", childs: {ceramic: 4}, hp: 400, type: 'blimp', speed: 2.64},
	{id: "zomg", childs: {bfb: 4}, hp: 4000, type: 'blimp', speed: 0.18},
	{id: "bfb", childs: {moab: 4}, hp: 700, type: 'blimp', speed: 0.25},
	{id: "moab", childs: {ceramic: 4}, hp: 200, type: 'blimp', speed: 1},
	{id: "ceramic", childs: {rainbow: 2}, hp: 10, type: 'split', speed: 2.5},
	{id: "rainbow", childs: {zebra: 2}, type: 'split', speed: 2.2},
	{id: "zebra", childs: {black: 1, white: 1}, type: 'split', speed: 1.8},
	{id: "black", childs: {pink: 2}, type: 'split', speed: 1.8},
	{id: "white", childs: {pink: 2}, type: 'split', speed: 2},
	{id: "purple", childs: {pink: 2}, type: 'normal', speed: 3},
	{id: "lead", childs: {black: 2}, type: 'normal', speed: 1},
	{id: "pink", childs: {yellow: 1}, type: 'normal', speed: 3.5},
	{id: "yellow", childs: {green: 1}, type: 'normal', speed: 3.2},
	{id: "green", childs: {blue: 1}, type: 'normal', speed: 1.8},
	{id: "blue", childs: {red: 1}, type: 'normal', speed: 1.4},
	{id: "red", type: 'normal', speed: 1}
]

const bloonStructureFreeplay = [
	{id: "bad", childs: {zomg: 2, ddt: 3}, hp: 20000, type: 'blimp', speed: 0.18},
	{id: "ddt", childs: {ceramic: 4}, hp: 400, type: 'blimp', speed: 2.64},
	{id: "zomg", childs: {bfb: 4}, hp: 4000, type: 'blimp', speed: 0.18},
	{id: "bfb", childs: {moab: 4}, hp: 700, type: 'blimp', speed: 0.25},
	{id: "moab", childs: {ceramic: 4}, hp: 200, type: 'blimp', speed: 1},
	{id: "ceramic", childs: {rainbow: 1}, hp: 60, type: 'split', speed: 2.5},
	{id: "rainbow", childs: {zebra: 1}, type: 'split', speed: 2.2},
	{id: "zebra", childs: {white: 1}, type: 'split', speed: 1.8},
	{id: "black", childs: {pink: 1}, type: 'split', speed: 1.8},
	{id: "white", childs: {pink: 1}, type: 'split', speed: 2},
	{id: "purple", childs: {pink: 1}, type: 'normal', speed: 3},
	{id: "lead", childs: {black: 1}, type: 'normal', speed: 1},
	{id: "pink", childs: {yellow: 1}, type: 'normal', speed: 3.5},
	{id: "yellow", childs: {green: 1}, type: 'normal', speed: 3.2},
	{id: "green", childs: {blue: 1}, type: 'normal', speed: 1.8},
	{id: "blue", childs: {red: 1}, type: 'normal', speed: 1.4},
	{id: "red", type: 'normal', speed: 1}
]

// structure

function getBloon(bloon) {
	for (var i = 0; i < bloonStructure.length; i++) {
		if (bloonStructure[i].id === bloon) {
			return bloonStructure[i];
		}
	}
}

function getBloonFreeplay(bloon) {
	for (var i = 0; i < bloonStructureFreeplay.length; i++) {
		if (bloonStructureFreeplay[i].id === bloon) {
			return bloonStructureFreeplay[i];
		}
	}
}

function getBloonStructure(bloonLayerTop, round) {
	var structure;
	if(round > 80) {
		structure = bloonStructureFreeplay;
	} else {
		structure = bloonStructure;
	}
	for (var i = 0; i < structure.length; i++) {
		if (structure[i].id === bloonLayerTop) {
			return structure[i];
		}
	}
}

// HP

function getHP(bloon, round) {
	var hp;
	var baseHP;
	if(round > 80) {
		baseHP = getBloonFreeplay(bloon).hp;
	} else {
		baseHP = getBloon(bloon).hp;
	}
		
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
	var rbe = 1;
	var currentLayer = getBloonStructure(bloon, round);
	var childs = currentLayer.childs;
	var rbeBefore;
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
	
	if(rbeBefore !== rbe) rbe--; // remove 0-layer of HP-bloons

	if(isFortified === 1 && bloon !== 'lead') {
		rbe *= 2;
	}
	if(isFortified === 1 && bloon === 'lead') {
		rbe *= 4;
	}
			
	var keys = Object.keys(childs);
	keys.forEach(
		function(bloon) {
			var bloonCount = childs[bloon];
			for (var i = 0; i < bloonCount; i++) {
				rbe += getRBE(bloon, isFortified, round);
			}
		}
	);
	return rbe;
}
	
// Income
	
function getIncomeBloon(bloon, round) {
	var income = 1;
	var currentLayer = getBloonStructure(bloon, round);
	var childs = currentLayer.childs;
	if(childs === undefined) {
		return 1;
	}
	
	if(round > 80) {
		if(bloon === 'ceramic') income += 86;
	}
	
	var keys = Object.keys(childs);
	keys.forEach(
		function(bloon) {
			var bloonCount = childs[bloon];
			for (var i = 0; i < bloonCount; i++) {
				income += getIncomeBloon(bloon, round);
			}
		}
	);
	return income;
}