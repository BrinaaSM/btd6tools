var startRound = 1;
var endRound = 1;
var currentCash = 0;
let roundType;

function showAll() {
	
	let bloonsArr = [];
	let rbeArr = [];
	let hpArr = [];
	let speedArr = [];
	let immuArr = [];
	let bloonsImages = [];
	let emptyArr = [];
	
	for(let i = 0; i < bloonStructure.length; i++) {
		// create bloon divs
		bloonsArr.push(document.createElement('div'));
		rbeArr.push(document.createElement('div'));
		hpArr.push(document.createElement('div'));
		speedArr.push(document.createElement('div'));
		immuArr.push(document.createElement('div'));
		emptyArr.push(document.createElement('empty'));
		bloonsArr[i].innerHTML = bloonStructure[(bloonStructure.length - 1) - i].name;
		document.getElementById("default").appendChild(bloonsArr[i]);
		createBloonDiv(i, bloonsImages, bloonsArr);
		
		
		let rbe = getRBE(bloonStructure[(bloonStructure.length - 1) - i].name, false, 1);
		let rbeFreeplay = getRBE(bloonStructure[(bloonStructure.length - 1) - i].name, false, 81);
		let rbeStr = "RBE: " + rbe.toLocaleString();
		if(rbe != rbeFreeplay) {
			rbeStr += " / " + rbeFreeplay.toLocaleString();
		}
		rbeArr[i].innerHTML = rbeStr;
		
		let hp = 1;
		let hpFreeplay = 1;
		if ('hp' in bloonStructure[(bloonStructure.length - 1) - i]) {
			hp = bloonStructure[(bloonStructure.length - 1) - i].hp;
			hpFreeplay = bloonStructure[(bloonStructure.length - 1) - i].hp;
		}
		let hpStr = "Base HP: " + hp;
		if(hp != hpFreeplay) {
			hpStr += " / " + hpFreeplay;
		}
		
		hpArr[i].innerHTML = hpStr;
		
		speedArr[i].innerHTML = "Base RBS: " + bloonStructure[(bloonStructure.length - 1) - i].speed;
		
		let immuStr = "";
		if ('immunities' in bloonStructure[(bloonStructure.length - 1) - i]) {
			immuStr += "Immune to: " + getImmunitiesBloonString(bloonStructure[(bloonStructure.length - 1) - i].name);
		}
		
		immuArr[i].innerHTML = immuStr;
		
		bloonsArr[bloonsArr.length - 1].appendChild(rbeArr[rbeArr.length - 1]);
		rbeArr[i].appendChild(hpArr[i]);
		hpArr[i].appendChild(speedArr[i]);
		speedArr[i].appendChild(immuArr[i]);
		immuArr[i].appendChild(emptyArr[i]);
	}
	return;
}

function createBloonDiv(index, bloonsImages, bloonsArr) {
	let bloon = bloonStructure[(bloonStructure.length - 1) - index];
	let firstEntry = 1;
	let bloonsStr = "";
	let imgStr = "../img/";
	bloonsImages.push(document.createElement('img'));
	imgStr += bloon.name + ".webp";
	bloonsImages[bloonsImages.length - 1].src = imgStr;
	bloonsArr[bloonsArr.length - 1].appendChild(bloonsImages[bloonsImages.length - 1]);
	return;
}