import React from 'react';

import isBrowser from '/src/components/is-browser';

export const pillClickEffect = ( element ) => {
	if (!isBrowser)
		return;

	const effElement = document.createElement('div');

	effElement.className = 'absolute bg-transparent border-2 rounded-full border-gray-400 animate-pill-click-effect pointer-events-none z-50';

	clickEffect(element, effElement);
}

export const squareClickEffect = ( element ) => {
	if (!isBrowser)
		return;

	const effElement = document.createElement('div');

	effElement.className = 'absolute bg-transparent border-2 rounded-3xl border-gray-400 animate-square-click-effect pointer-events-none z-50';

	clickEffect(element, effElement);
}

export const circleClickEffect = ( element, target = 'width' ) => {
	if (!isBrowser)
		return;

	const effElement = document.createElement('div');

	effElement.className = 'absolute bg-transparent border-2 rounded-full border-gray-400 animate-square-click-effect pointer-events-none z-50';

	clickEffect(element, effElement, target);
}

const clickEffect = (element, effElement, target) => {
	if (!isBrowser)
		return;

	const elRect = element.getBoundingClientRect();
	const effHeight = target === 'width' ? elRect.width : elRect.height;
	const effWidth = target === 'height' ? elRect.height : elRect.width;

	effElement.style.height = `${effHeight}px`;
	effElement.style.width = `${effWidth}px`;
	effElement.style.left = `${elRect.x - (elRect.width * 0.5) + (effWidth * 0.5)}px`;
	effElement.style.top = `${elRect.y + (elRect.height * 0.5) - (effHeight * 0.5)}px`;

	effElement.addEventListener('animationend', () => effElement.remove());
	document.body.insertBefore(effElement, document.body.firstChild);
}