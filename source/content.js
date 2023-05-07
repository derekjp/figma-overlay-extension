import optionsStorage from './options-storage.js';

console.log('💈 Content script loaded for', chrome.runtime.getManifest().name);
async function init() {
	const options = await optionsStorage.getAll();
	const embed = options.embed;
	const opacity = options.opacity + '%';
	const figmaFrame = document.createElement('div');
	document.body.prepend(figmaFrame);
	figmaFrame.id = 'iframe-figmaFrame';
	figmaFrame.innerHTML = embed;
	figmaFrame.style.position = 'fixed';
	figmaFrame.style.top = '0';
	figmaFrame.style.left = '0';
	figmaFrame.style.bottom = '0';
	figmaFrame.style.right = '0';
	figmaFrame.style.width = '100%';
	figmaFrame.style.height = '100%';
	figmaFrame.style.opacity = opacity;
	figmaFrame.style.zIndex = '9999999';
}

init();


