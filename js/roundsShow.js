let roundType;

function showAll() {
	let startRound = 1;
	let endRound;
	
	if (roundType === "default") endRound = 140;
	else if (roundType === "abr") endRound = 100;
	else endRound = 100;
	
	let roundsArr = [];
	let bloonsArr = [];
	let bloonsImages = [];
	let emptyArr = [];
	
	for(let i = startRound - 1; i < endRound; i++) {
		roundsArr.push(document.createElement('div'));
		emptyArr.push(document.createElement('empty'));
		roundsArr[i].innerHTML = "Round: " + (parseInt(i) + 1);
		document.getElementById("content").appendChild(roundsArr[i]);
		
		createBloonDiv(i + 1, bloonsArr, bloonsImages, roundsArr);
		
		bloonsArr[bloonsArr.length - 1].appendChild(emptyArr[i]);
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
			
			if (firstEntry === 1) {
				firstEntry = 0;
				roundsArr[round - 1].appendChild(bloonsArr[bloonsArr.length - 1])
			} else bloonsArr[bloonsArr.length - 2].appendChild(bloonsArr[bloonsArr.length - 1]);
			bloonsArr[bloonsArr.length - 1].appendChild(bloonsImages[bloonsImages.length - 1]);
		}
	);
	return;
}