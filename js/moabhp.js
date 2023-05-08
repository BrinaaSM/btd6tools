const source = document.getElementById("current-round-input");
const result1 = document.getElementById("moab-hp-output");
const result2 = document.getElementById("bfb-hp-output");
const result3 = document.getElementById("zomg-hp-output");
const result4 = document.getElementById("ddt-hp-output");
const result5 = document.getElementById("bad-hp-output");

function inputHandler(e) {
	var round = e.target.value;
	result1.innerHTML = calcHP(200, round);
	result2.innerHTML = calcHP(700, round);
	result3.innerHTML = calcHP(4000, round);
	result4.innerHTML = calcHP(400, round);
	result5.innerHTML = calcHP(20000, round);
}

function calcHP(baseHP, round) {
	if(round >= 1 && round <= 80) {
		return baseHP.toLocaleString();
	}
	if(round >= 81 && round <= 100) {
		return (baseHP * (1 + (round - 80) * 0.02)).toLocaleString();
	}
	if(round >= 101 && round <= 124) {
		return (baseHP * (1.4 + (round - 100) * 0.05)).toLocaleString();
	}
	if(round >= 125 && round <= 150) {
		return (baseHP * (2.6 + (round - 124) * 0.15)).toLocaleString();
	}
	if(round >= 151 && round <= 250) {
		return (baseHP * (6.5 + (round - 150) * 0.35)).toLocaleString();
	}
	if(round >= 251 && round <= 300) {
		return (baseHP * (41.5 + (round - 250) * 1.0)).toLocaleString();
	}
	if(round >= 301 && round <= 400) {
		return (baseHP * (91.5 + (round - 300) * 1.5)).toLocaleString();
	}
	if(round >= 401 && round <= 500) {
		return (baseHP * (241.5 + (round - 400) * 2.5)).toLocaleString();
	}
	if(round > 500 && round <= Number.MAX_SAFE_INTEGER) {
		return (baseHP * (491.5 + (round - 500) * 5.0)).toLocaleString();
	}
	if(round > Number.MAX_SAFE_INTEGER) {
		return "JS doesn't support this number safely.";
	}
	return "N/A";
}




source.addEventListener("input", inputHandler);