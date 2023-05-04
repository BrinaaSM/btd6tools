const source = document.getElementById("current-round-input");
const result = document.getElementById("moab-hp-output");

function inputHandler(e) {
	var value = e.target.value;
	if(value == 0) {
		result.innerHTML = "N/A";
	} else {
		result.innerHTML = value;
	}
}

source.addEventListener("input", inputHandler);