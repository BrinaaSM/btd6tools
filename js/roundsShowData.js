var roundType;

function showAll() {
	let startRound = 1;
	let endRound;
	
	if (roundType === "default") endRound = 140;
	else if (roundType === "abr") endRound = 100;
	else endRound = 100;
	
	let roundsArr = [];
	let rbeArr = [];
	let xpArr = [];
	let cashArr = [];
	let durationArr = [];
	let bloonsArr = [];
	let bloonsImages = [];
	let emptyArr = [];
	
	for(let i = startRound - 1; i < endRound; i++) {
		roundsArr.push(document.createElement('div'));
		rbeArr.push(document.createElement('div'));
		xpArr.push(document.createElement('div'));
		cashArr.push(document.createElement('div'));
		durationArr.push(document.createElement('div'));
		emptyArr.push(document.createElement('empty'));
		roundsArr[i].innerHTML = "Round: " + (parseInt(i) + 1);
		document.getElementById("content").appendChild(roundsArr[i]);
		
		createBloonDiv(i + 1, bloonsArr, bloonsImages, roundsArr);
		
		rbeArr[i].innerHTML = (calcRBE(parseInt(i) + 1)).toLocaleString() + " RBE";
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
	let bloons = getBloons(round);
	let firstEntry = 1;
	
	bloons.forEach(
		function(bloon) {
			let bloonsStr = "";
			let imgStr = "../img/";
			bloonsArr.push(document.createElement('div'));
			bloonsImages.push(document.createElement('img'));
			if ('fortified' in bloon) imgStr += "f";
			if ('camo' in bloon) imgStr += "c";
			if ('regrow' in bloon) imgStr += "r";
			imgStr += bloon.name.replaceAll(".", "_") + ".webp";
			bloonsStr += bloon.count + " x";
			bloonsImages[bloonsImages.length - 1].src = imgStr;
			
			bloonsArr[bloonsArr.length - 1].innerHTML = bloonsStr;
			
			if(firstEntry === 1) {
				firstEntry = 0;
				roundsArr[round - 1].appendChild(bloonsArr[bloonsArr.length - 1])
			} else bloonsArr[bloonsArr.length - 2].appendChild(bloonsArr[bloonsArr.length - 1]);
			bloonsArr[bloonsArr.length - 1].appendChild(bloonsImages[bloonsImages.length - 1]);
		}
	);
	return;
}