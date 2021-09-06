import React from 'react';

export const pillClickEffect = ( element ) => {
	const effElement = document.createElement('div');

	effElement.className = 'absolute w-full h-full bg-transparent border-2 rounded-full border-gray-400 animate-pill-click-effect pointer-events-none z-50';

	clickEffect(element, effElement);
}

export const squareClickEffect = ( element ) => {
	const effElement = document.createElement('div');

	effElement.className = 'absolute w-full h-full bg-transparent border-2 rounded-3xl border-gray-400 animate-square-click-effect pointer-events-none z-50';

	clickEffect(element, effElement);
}

export const circleClickEffect = ( element ) => {
	const effElement = document.createElement('div');

	effElement.className = 'absolute w-full h-full bg-transparent border-2 rounded-full border-gray-400 animate-square-click-effect pointer-events-none z-50';

	clickEffect(element, effElement);
}

const clickEffect = (element, effElement) => {
	effElement.addEventListener('animationend', () => effElement.remove());
	element.insertBefore(effElement, element.firstChild);
}