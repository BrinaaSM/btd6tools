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
	var bloonsImages = [];
	var emptyArr = [];
	
	for(var i = startRound - 1; i < endRound; i++) {
		roundsArr.push(document.createElement('div'));
		emptyArr.push(document.createElement('empty'));
		roundsArr[i].innerHTML = "Round: " + (parseInt(i) + 1);
		document.getElementById("content").appendChild(roundsArr[i]);
		
		createBloonDiv(i + 1, bloonsArr, bloonsImages, roundsArr);
		
		bloonsArr[bloonsArr.length - 1].appendChild(emptyArr[i]);
	}
}

function createBloonDiv(round, bloonsArr, bloonsImages, roundsArr) {
	var bloons = getBloons(round);
	var firstEntry = 1;
	
	bloons.forEach(
		function(bloon) {
			var bloonsStr = "";
			var imgStr = "../img/";
			bloonsArr.push(document.createElement('div'));
			bloonsImages.push(document.createElement('img'));
			if('fortified' in bloon) {
				imgStr += "f";
			}
			if('camo' in bloon) {
				imgStr += "c";
			}
			if('regrow' in bloon) {
				imgStr += "r";
			}
			imgStr += bloon.name.replaceAll(".", "_") + ".webp";
			bloonsStr += bloon.count + " x";
			bloonsImages[bloonsImages.length - 1].src = imgStr;
			
			bloonsArr[bloonsArr.length - 1].innerHTML = bloonsStr;
			
			if(firstEntry === 1) {
				firstEntry = 0;
				roundsArr[round - 1].appendChild(bloonsArr[bloonsArr.length - 1])
			} else {
				bloonsArr[bloonsArr.length - 2].appendChild(bloonsArr[bloonsArr.length - 1])
			}
			bloonsArr[bloonsArr.length - 1].appendChild(bloonsImages[bloonsImages.length - 1]);
		}
	);
		
	return;
}