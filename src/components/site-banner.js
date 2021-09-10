import React from 'react';

import SpinningCog from './spinning-cog';
import SiteTitleTag from '/src/components/site-title-tag';
import {
	OnMobile,
} from '/src/components/breakpoints';

const SiteBanner = () => {
	return (
		<div
			id={`banner`}
			className={`relative w-full h-9 tablet:h-16 desktop:h-24 bg-gray-800 border-r border-l border-primary z-40`}
		>
			<div className={`relative w-full h-full overflow-hidden`}>

				<SpinningCog
					wrapClassName={`top-1/2 transform -translate-x-1/2 -translate-y-1/2`}
					cogClassName={`text-7xl tablet:text-12xl text-primary animate-spin-slower-right`}
				/>
				<div
					id={`center-cogs-container`}
					className={`relative h-full w-2/4 tablet:w-72 mx-auto`}
				>
					<SpinningCog
						wrapClassName={`hidden tablet:block transform -translate-x-full -translate-y-1/2`}
						cogClassName={`text-4xl tablet:text-5xl text-primary-3 animate-spin-slower-left`}
					/>
					<SpinningCog
						wrapClassName={`top-full transform -translate-x-1/2 -translate-y-1/2`}
						cogClassName={`text-6xl tablet:text-8xl text-primary-3 animate-spin-slow-left`}
					/>
					<SpinningCog
						wrapClassName={`z-10 left-1/2 top-full transform -translate-x-1/2 -translate-y-1/2`}
						cogClassName={`text-8xl tablet:text-10xl text-primary animate-spin-slower-right text-shadow-lg`}
					/>
					<SpinningCog
						wrapClassName={`left-full top-full transform -translate-x-1/2 -translate-y-1/2`}
						cogClassName={`text-6xl tablet:text-8xl text-primary-3 animate-spin-slow-right`}
					/>
					<SpinningCog
						wrapClassName={`hidden tablet:block left-full top-1/4 transform -translate-y-1/2`}
						cogClassName={`text-4xl tablet:text-5xl text-primary-3 animate-spin-slower-right`}
					/>
				</div>
				<SpinningCog
					wrapClassName={`left-full top-1/2 transform -translate-x-1/2 -translate-y-1/2`}
					cogClassName={`text-7xl tablet:text-12xl text-primary animate-spin-slower-left`}
				/>
				<OnMobile>
					<div className={`absolute flex w-full h-full top-0 left-0 justify-center items-center italic font-bold text-primary text-base tablet:text-xl z-10`}>
						<SiteTitleTag />
					</div>
				</OnMobile>
			</div>
		</div>
	)
}

export default SiteBanner;