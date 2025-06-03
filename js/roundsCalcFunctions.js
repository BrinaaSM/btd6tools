function calcXP(round) {
	let xp = 0;
	
	// weird xp curve
	if (round < 21) xp = (round * 20 + 20);
	else if (round < 51) xp = (round * 50 - 380);
	else xp = (round * 90 - 2880);
	return xp;
}

function calcIncome(round) {
	let income = 0;
	let multiplier = 1;
	let bloons = getBloons(round);
	let count = 0;
	
	bloons.forEach(
		function(bloon) {
			for (let i = 0; i < bloon.count; i++) income += getIncomeBloon(bloon.name, round);
		}
	);
	
	// income reduction
	if (round > 120) multiplier = 0.02;
	else if (round > 100) multiplier = 0.05;
	else if (round > 85) multiplier = 0.1;
	else if (round > 60) multiplier = 0.2;
	else if (round > 50) multiplier = 0.5;
	else multiplier = 1;
	
	income *= multiplier;
	income += (parseInt(round) + 100);
	return income;
}

function calcRBE(round) {
	let rbe = 0;
	let multiplier = 1;
	let bloons = getBloons(round);
	let count = 0;
	
	bloons.forEach(
		function(bloon) {
			for (let i = 0; i < bloon.count; i++) {
				if ('fortified' in bloon) rbe += getRBE(bloon.name, true, round);
				else rbe += getRBE(bloon.name, false, round);
			}
		}
	);
	return rbe;
}