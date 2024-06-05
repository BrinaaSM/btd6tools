var startRound = 1;
var endRound = 1;
var currentCash = 0;
var roundType;

// input handling

// showing

function showAll() {
	
	var bloonsArr = [];
	var rbeArr = [];
	var hpArr = [];
	var speedArr = [];
	var immuArr = [];
	var bloonsImages = [];
	var emptyArr = [];
	
	for(var i = 0; i < bloonStructure.length; i++) {
		bloonsArr.push(document.createElement('div'));
		rbeArr.push(document.createElement('div'));
		hpArr.push(document.createElement('div'));
		speedArr.push(document.createElement('div'));
		immuArr.push(document.createElement('div'));
		emptyArr.push(document.createElement('empty'));
		bloonsArr[i].innerHTML = bloonStructure[(bloonStructure.length - 1) - i].id;
		document.getElementById("default").appendChild(bloonsArr[i]);
		
		createBloonDiv(i, bloonsImages, bloonsArr);
		
		// console.log(bloonStructure[(bloonStructure.length - 1) - i].id);
		let rbe = getRBE(bloonStructure[(bloonStructure.length - 1) - i].id, false, 1);
		let rbeFreeplay = getRBE(bloonStructureFreeplay[(bloonStructure.length - 1) - i].id, false, 81);
		let rbeStr = "RBE: " + rbe.toLocaleString();
		if(rbe != rbeFreeplay) {
			rbeStr += " / " + rbeFreeplay.toLocaleString();
		}
		rbeArr[i].innerHTML = rbeStr;
		
		let hp = 1;
		let hpFreeplay = 1;
		if ('hp' in bloonStructure[(bloonStructureFreeplay.length - 1) - i]) {
			hp = bloonStructure[(bloonStructure.length - 1) - i].hp;
			hpFreeplay = bloonStructureFreeplay[(bloonStructureFreeplay.length - 1) - i].hp;
		}
		let hpStr = "Base HP: " + hp;
		if(hp != hpFreeplay) {
			hpStr += " / " + hpFreeplay;
		}
		
		hpArr[i].innerHTML = hpStr;
		
		speedArr[i].innerHTML = "Base RBS: " + bloonStructure[(bloonStructureFreeplay.length - 1) - i].speed;
		
		let immuStr = "";
		if ('immunities' in bloonStructure[(bloonStructureFreeplay.length - 1) - i]) {
			immuStr += "Immune to: " + getImmunitiesBloonStr(bloonStructure[(bloonStructureFreeplay.length - 1) - i].id);
		}
		
		immuArr[i].innerHTML = immuStr;
		
		bloonsArr[bloonsArr.length - 1].appendChild(rbeArr[rbeArr.length - 1]);
		rbeArr[i].appendChild(hpArr[i]);
		hpArr[i].appendChild(speedArr[i]);
		speedArr[i].appendChild(immuArr[i]);
		immuArr[i].appendChild(emptyArr[i]);
	}
}

function createBloonDiv(index, bloonsImages, bloonsArr) {
	var bloon = bloonStructure[(bloonStructure.length - 1) - index];
	var firstEntry = 1;
	var bloonsStr = "";
	var imgStr = "../img/";
	bloonsImages.push(document.createElement('img'));
	imgStr += bloon.id + ".webp";
	bloonsImages[bloonsImages.length - 1].src = imgStr;
	bloonsArr[bloonsArr.length - 1].appendChild(bloonsImages[bloonsImages.length - 1]);
	
	return;
}