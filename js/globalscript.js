function selectCheckbox(domElement) {
	if(domElement.checked) {
		domElement.parentNode.style.border = "3px yellow solid";
	} else {
		domElement.parentNode.style.border = "3px #00003f solid";
	}
}