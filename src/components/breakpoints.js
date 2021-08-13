import React from 'react';
import { theme } from '/tailwind.config';
import { layoutGenerator } from 'react-break';

const exclude = ['tablet'];
let breakpoints = { mobile: 0 };

for (let screen in theme.screens) {
	if (!exclude.includes(screen))
		breakpoints[screen] = parseInt(theme.screens[screen])
};

const layout = layoutGenerator(breakpoints);

export const OnMobile = layout.is('mobile');
export const OnDesktop = layout.is('desktop');
