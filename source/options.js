// eslint-disable-next-line import/no-unassigned-import
import 'webext-base-css';
import './options.css';

import optionsStorage from './options-storage.js';

const rangeInputs = [...document.querySelectorAll('input[type="range"][name^="opacity"]')];
const numberInputs = [...document.querySelectorAll('input[type="number"][name^="opacity"]')];
// const output = document.querySelector('.embed-output');

// function updateOutputColor() {
// 	output.style.backgroundColor = `rgb(${rangeInputs[0].value}, ${rangeInputs[1].value}, ${rangeInputs[2].value})`;
// }

function updateInputField(event) {
	numberInputs[rangeInputs.indexOf(event.currentTarget)].value = event.currentTarget.value;
}

for (const input of rangeInputs) {
	// input.addEventListener('input', updateOutputColor);
	input.addEventListener('input', updateInputField);
}

async function init() {
	await optionsStorage.syncForm('#options-form');
	// updateOutputColor();
}

init();
