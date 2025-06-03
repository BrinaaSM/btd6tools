function showAll() {
	
	let bloonsArr = [];
	let rbeArr = [];
	let hpArr = [];
	let speedArr = [];
	let immuArr = [];
	let bloonsImages = [];
	let emptyArr = [];
	
	for(let i = 0; i < bloonStructure.length; i++) {
		let bloon = bloonStructure[(bloonStructure.length - 1) - i];
		
		// create bloon divs
		bloonsArr.push(document.createElement('div'));
		rbeArr.push(document.createElement('div'));
		hpArr.push(document.createElement('div'));
		speedArr.push(document.createElement('div'));
		immuArr.push(document.createElement('div'));
		emptyArr.push(document.createElement('empty'));
		// add bloon to name if not moab
		if(bloon.hp > 10) bloonsArr[i].innerHTML = bloon.name;
		else bloonsArr[i].innerHTML = bloon.name + " Bloon";
		document.getElementById("default").appendChild(bloonsArr[i]);
		createBloonDiv(i, bloonsImages, bloonsArr);
		
		// fill divs
		rbeArr[i].innerHTML = createRBEString(bloon);
		hpArr[i].innerHTML = createHPString(bloon);	
		speedArr[i].innerHTML = "Base RBS: " + bloon.speed;
		let immuStr = "";
		if (bloon.immunities) immuStr += "Immune to: " + getImmunitiesBloonString(bloon.name);
		immuArr[i].innerHTML = immuStr;
		
		// append in order
		bloonsArr[bloonsArr.length - 1].appendChild(rbeArr[rbeArr.length - 1]);
		rbeArr[i].appendChild(hpArr[i]);
		hpArr[i].appendChild(speedArr[i]);
		speedArr[i].appendChild(immuArr[i]);
		immuArr[i].appendChild(emptyArr[i]);
	}
	return;
}

function createRBEString(bloon) {
	let rbe = getRBE(bloon.name, false, 1);
	let rbeStr = "Base RBE: " + rbe.toLocaleString();
	return rbeStr;	
}

function createHPString(bloon) {
	let hp = 1;
	let hpFreeplay = 1;
	let hpStr = "Base HP: ";
	
	// reb bloon
	if (!bloon.hp) return hpStr + hp;
	
	hp = bloon.hp;
	if (!bloon.hpFP) hpFreeplay = bloon.hp;
	else hpFreeplay = bloon.hpFP;
	
	hpStr += hp;
	if(hp != hpFreeplay) {
		hpStr += " / " + hpFreeplay;
	}
	return hpStr;
}

function createBloonDiv(index, bloonsImages, bloonsArr) {
	let bloon = bloonStructure[(bloonStructure.length - 1) - index];
	let firstEntry = 1;
	let bloonsStr = "";
	let imgStr = "../img/";
	
	bloonsImages.push(document.createElement('img'));
	imgStr += bloon.name.replaceAll(".", "_") + ".webp";
	bloonsImages[bloonsImages.length - 1].src = imgStr;
	bloonsArr[bloonsArr.length - 1].appendChild(bloonsImages[bloonsImages.length - 1]);
	return;
}