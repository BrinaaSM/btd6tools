var startRound = 1;
var endRound = 1;
var currentCash = 0;
var roundType;

// input handling

// showing

function showAll() {
	if(roundType === "default") {
		endRound = 140;
	} else if(roundType === "abr") {
		endRound = 100;
	} else {
		endRound = 100;
	}
	
	var roundsArr = [];
	var bloonsArr = [];
	var splitsArr = [];
	var blimpsArr = [];
	var emptyArr = [];
	
	for(var i = startRound; i <= endRound; i++) {
		roundsArr.push(document.createElement('div'));
		bloonsArr.push(document.createElement('div'));
		splitsArr.push(document.createElement('div'));
		blimpsArr.push(document.createElement('div'));
		emptyArr.push(document.createElement('div'));
	roundsArr[i - 1].innerHTML = "< Round: " + i + " >";
		document.getElementById("content").appendChild(roundsArr[i - 1]);
		bloonsArr[i - 1].innerHTML = showBloons(i, 'normal');
		splitsArr[i - 1].innerHTML = showBloons(i, 'split');
		blimpsArr[i - 1].innerHTML = showBloons(i, 'blimp');
		emptyArr[i - 1].innerHTML = " - ";
		roundsArr[i - 1].appendChild(bloonsArr[i - 1]);
		bloonsArr[i - 1].appendChild(splitsArr[i - 1]);
		splitsArr[i - 1].appendChild(blimpsArr[i - 1]);
		blimpsArr[i - 1].appendChild(emptyArr[i - 1]);
	}
}

function showBloons(round, type) {
	var bloonsStr = "";
	var bloons = getBloons(round);
	
	bloons.forEach(
		function(bloon) {
			if(getBloon(bloon.type).type == type) {
				if('fortified' in bloon) {
					bloonsStr += "Fortified ";
				}
				if('camo' in bloon) {
					bloonsStr += "Camo ";
				}
				if('regrow' in bloon) {
					bloonsStr += "Regrow ";
				}				
				bloonsStr += bloon.type + " x" + bloon.count + ", ";
			}
		}
	);
		
	return bloonsStr.substring(0, bloonsStr.length - 2);
}