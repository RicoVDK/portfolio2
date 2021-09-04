import React from 'react';

import SpinningCog from './spinning-cog';
import {
	OnMobile,
} from '/src/components/breakpoints';

const SiteBanner = () => {
	return (
		<div
			id={`banner`}
			className={`relative w-full flex-grow bg-gray-800 border-r border-l border-primary`}
		>
			<div className={`relative w-full h-full overflow-hidden`}>

				<SpinningCog
					wrapClassName={`top-1/2 transform -translate-x-1/2 -translate-y-1/2`}
					cogClassName={`text-10xl tablet:text-12xl text-primary animate-spin-slower-right`}
				/>
				<div
					id={`center-cogs-container`}
					className={`relative h-full w-1/3 tablet:w-56 mx-auto`}
				>
					<SpinningCog
						wrapClassName={`transform -translate-x-full -translate-y-1/2`}
						cogClassName={`text-6xl tablet:text-8xl text-primary-3 animate-spin-slower-left`}
					/>
					<SpinningCog
						wrapClassName={`top-full transform -translate-x-1/2 -translate-y-1/2`}
						cogClassName={`text-6xl tablet:text-8xl text-primary-3 animate-spin-slow-left`}
					/>
					<SpinningCog
						wrapClassName={`z-10 left-1/2 top-full transform -translate-x-1/2 -translate-y-1/2`}
						cogClassName={`text-9xl tablet:text-10xl text-primary animate-spin-slower-right text-shadow-lg`}
					/>
					<SpinningCog
						wrapClassName={`left-full top-full transform -translate-x-1/2 -translate-y-1/2`}
						cogClassName={`text-6xl tablet:text-8xl text-primary-3 animate-spin-slow-right`}
					/>
					<SpinningCog
						wrapClassName={`left-full top-1/4 transform -translate-y-1/2`}
						cogClassName={`text-4xl tablet:text-5xl text-primary-3 animate-spin-slower-right`}
					/>
				</div>
				<SpinningCog
					wrapClassName={`left-full top-1/2 transform -translate-x-1/2 -translate-y-1/2`}
					cogClassName={`text-10xl tablet:text-12xl text-primary animate-spin-slower-left`}
				/>
				<OnMobile>
					<div className={`absolute flex w-full h-full top-0 left-0 justify-center items-center italic font-bold text-primary text-lg tablet:text-2xl z-10`}>
						<div className={`relative px-6 py-2 tablet:px-10 text-center bg-gray-800 border border-gray-700 rounded-full`}>
							Rico's Softworks
						</div>
					</div>
				</OnMobile>
			</div>
		</div>
	)
}

export default SiteBanner;