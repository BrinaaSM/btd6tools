const bloonStructure = [
	{id: "fbad", childs: {fzomg: 2, fddt: 3}, hp: 40000},
	{id: "bad", childs: {zomg: 2, ddt: 3}, hp: 20000},
	{id: "fddt", childs: {fceramic: 4}, hp: 800},
	{id: "ddt", childs: {ceramic: 4}, hp: 400},
	{id: "fzomg", childs: {fbfb: 4}, hp: 8000},
	{id: "zomg", childs: {bfb: 4}, hp: 4000},
	{id: "fbfb", childs: {fmoab: 4}, hp: 1400},
	{id: "bfb", childs: {moab: 4}, hp: 700},
	{id: "fmoab", childs: {fceramic: 4}, hp: 400},
	{id: "moab", childs: {ceramic: 4}, hp: 200},
	{id: "fceramic", childs: {rainbow: 2}, hp: 20},
	{id: "ceramic", childs: {rainbow: 2}, hp: 10},
	{id: "rainbow", childs: {zebra: 2}},
	{id: "zebra", childs: {black: 1, white: 1}},
	{id: "black", childs: {pink: 2}},
	{id: "white", childs: {pink: 2}},
	{id: "pink", childs: {yellow: 1}},
	{id: "yellow", childs: {green: 1}},
	{id: "green", childs: {blue: 1}},
	{id: "blue", childs: {red: 1}},
	{id: "purple", childs: {pink: 2}},
	{id: "flead", childs: {black: 2}, hp: 4},
	{id: "lead", childs: {black: 2}},
	{id: "red"}
]

const bloonStructureFreeplay = [
	{id: "fbad", childs: {fzomg: 2, fddt: 3}, hp: 40000},
	{id: "bad", childs: {zomg: 2, ddt: 3}, hp: 20000},
	{id: "fddt", childs: {fceramic: 4}, hp: 800},
	{id: "ddt", childs: {ceramic: 4}, hp: 400},
	{id: "fzomg", childs: {fbfb: 4}, hp: 8000},
	{id: "zomg", childs: {bfb: 4}, hp: 4000},
	{id: "fbfb", childs: {fmoab: 4}, hp: 1400},
	{id: "bfb", childs: {moab: 4}, hp: 700},
	{id: "fmoab", childs: {fceramic: 4}, hp: 400},
	{id: "moab", childs: {ceramic: 4}, hp: 200},
	{id: "fceramic", childs: {rainbow: 1}, hp: 120},
	{id: "ceramic", childs: {rainbow: 1}, hp: 60},
	{id: "rainbow", childs: {zebra: 1}},
	{id: "zebra", childs: {white: 1}},
	{id: "black", childs: {pink: 1}},
	{id: "white", childs: {pink: 1}},
	{id: "pink", childs: {yellow: 1}},
	{id: "yellow", childs: {green: 1}},
	{id: "green", childs: {blue: 1}},
	{id: "blue", childs: {red: 1}},
	{id: "purple", childs: {pink: 1}},
	{id: "flead", childs: {black: 1}, hp: 4},
	{id: "lead", childs: {black: 1}},
	{id: "red"}
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
	
	if (bloon === 'ceramic' || bloon === 'fceramic' || bloon === 'flead') {
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

function getRBE(bloonLayerTop, round) {
	var layerCount = 1;
	var currentLayer = getBloonStructure(bloonLayerTop, round);
	var childs = currentLayer.childs;
	var layerCountBefore;
	if(childs === undefined) {
		return 1;
	}
	
	layerCountBefore = layerCount;
	
	if(bloonLayerTop === 'fceramic') layerCount += getHP('fceramic', round);
	if(bloonLayerTop === 'ceramic') layerCount += getHP('ceramic', round);
	if(bloonLayerTop === 'flead') layerCount += getHP('flead', round);
	if(bloonLayerTop === 'moab') layerCount += getHP('moab', round);
	if(bloonLayerTop === 'fmoab') layerCount += getHP('moab', round) * 2;
	if(bloonLayerTop === 'bfb') layerCount += getHP('bfb', round);
	if(bloonLayerTop === 'fbfb') layerCount += getHP('bfb', round) * 2;
	if(bloonLayerTop === 'zomg') layerCount += getHP('zomg', round);
	if(bloonLayerTop === 'fzomg') layerCount += getHP('zomg', round) * 2;
	if(bloonLayerTop === 'ddt') layerCount += getHP('ddt', round);
	if(bloonLayerTop === 'fddt') layerCount += getHP('ddt', round) * 2;
	if(bloonLayerTop === 'bad') layerCount += getHP('bad', round);
	if(bloonLayerTop === 'fbad') layerCount += getHP('bad', round) * 2;
	
	if(layerCountBefore !== layerCount) layerCount--; // subtract additional layer included in HP
		
	var keys = Object.keys(childs);
	keys.forEach(
		function(bloon) {
			var bloonCount = childs[bloon];
			for (var i = 0; i < bloonCount; i++) {
				layerCount += getRBE(bloon, round);
			}
		}
	);
	return layerCount;
}
	
// Income
	
function getIncomeBloon(bloonLayerTop, round) {
	var layerCount = 1;
	var currentLayer = getBloonStructure(bloonLayerTop, round);
	var childs = currentLayer.childs;
	if(childs === undefined) {
		return 1;
	}
	
	if(round > 80) {
		if(bloonLayerTop === 'fceramic') layerCount += 86;
		if(bloonLayerTop === 'ceramic') layerCount += 86;
	}
	
	var keys = Object.keys(childs);
	keys.forEach(
		function(bloon) {
			var bloonCount = childs[bloon];
			for (var i = 0; i < bloonCount; i++) {
				layerCount += getIncomeBloon(bloon, round);
			}
		}
	);
	return layerCount;
}