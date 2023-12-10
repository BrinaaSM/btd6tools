function calcXP(round) {
	var xp = 0;
	if (round < 21) {
		xp = (round * 20 + 20);
	} else if (round < 51) {
		xp = (round * 50 - 380);
	} else {
		xp = (round * 90 - 2880);
	}
	return xp;
}

function calcIncome(round) {
	var income = 0;
	var multiplier = 1;
	var bloons = getBloons(round);
	var count = 0;
	
	bloons.forEach(
		function(bloon) {
			for (var i = 0; i < bloon.count; i++) {
				income += getIncomeBloon(bloon.type, round);
			}
		}
	);
	
	if (round > 120) {
		multiplier = 0.02;
	} else if (round > 100) {
		multiplier = 0.05;
	} else if (round > 85) {
		multiplier = 0.1;
	} else if (round > 60) {
		multiplier = 0.2;
	} else if (round > 50) {
		multiplier = 0.5;
	} else {
		multiplier = 1;
	}
	
	income *= multiplier;
	
	income += (parseInt(round) + 100);
	
	return income;
}

function calcRBE(round) {
	var rbe = 0;
	var multiplier = 1;
	var bloons = getBloons(round);
	var count = 0;
	
	bloons.forEach(
		function(bloon) {
			for (var i = 0; i < bloon.count; i++) {
				if ('fortified' in bloon) {
					rbe += getRBE(bloon.type, 1, round);
				} else {
					rbe += getRBE(bloon.type, 0, round);
				}
			}
		}
	);
	
	return rbe;
}