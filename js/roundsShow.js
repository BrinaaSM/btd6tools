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
	var rbeArr = [];
	var xpArr = [];
	var cashArr = [];
	var durationArr = [];
	var bloonsArr = [];
	var bloonsImages = [];
	var emptyArr = [];
	
	for(var i = startRound - 1; i < endRound; i++) {
		roundsArr.push(document.createElement('div'));
		rbeArr.push(document.createElement('div'));
		xpArr.push(document.createElement('div'));
		cashArr.push(document.createElement('div'));
		durationArr.push(document.createElement('div'));
		emptyArr.push(document.createElement('empty'));
		roundsArr[i].innerHTML = "Round: " + (parseInt(i) + 1);
		document.getElementById("content").appendChild(roundsArr[i]);
		
		createBloonDiv(i + 1, bloonsArr, bloonsImages, roundsArr);
		
		rbeArr[i].innerHTML = "RBE: " + (calcRBE(parseInt(i) + 1)).toLocaleString();
		cashArr[i].innerHTML = Math.floor(calcIncome(parseInt(i) + 1)).toLocaleString() + "$";
		xpArr[i].innerHTML = (calcXP(parseInt(i) + 1)).toLocaleString() + " XP";
		durationArr[i].innerHTML = getDuration(parseInt(i) + 1) + "s";
		
		bloonsArr[bloonsArr.length - 1].appendChild(rbeArr[rbeArr.length - 1]);
		rbeArr[i].appendChild(xpArr[i]);
		xpArr[i].appendChild(cashArr[i]);
		cashArr[i].appendChild(durationArr[i]);
		durationArr[i].appendChild(emptyArr[i]);
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
			imgStr += bloon.type + ".webp";
			bloonsStr += bloon.count + " x";
			bloonsImages[bloonsImages.length - 1].src = imgStr;
			
			bloonsArr[bloonsArr.length - 1].innerHTML = bloonsStr;
			
			console.log(round);
			console.log(bloonsArr[bloonsArr.length - 1]);
			
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