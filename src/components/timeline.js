import React, {
	useRef,
	Children,
	cloneElement,
} from 'react';

export const Entry = ({ date, hasStripe, children }) => {
	const getStripeStyle = () => {
		return hasStripe
			? `bg-gray-400 w-1`
			: `w-0 border-l-4 border-dotted border-gray-400`
	}

	return (
		<div className={`relative w-full`}>
			<div className={`relative w-full`}>
				{/** Stripe. */}
				<div className={`absolute w-8 h-full pt-3`}>
					<div className={`relative h-full left-1/2 transform -translate-x-1/2 ${getStripeStyle()}`}></div>
				</div>

				{/** Ribbon. */}
				<div className={`absolute w-full`}>
					{/** Label. */}
					<div className={`flex absolute h-8 bg-gray-800 rounded-full items-center font-bold text-sm pl-10 pr-4`}>
						{date}
					</div>

					{/** Circle. */}
					<div className={`flex absolute w-8 h-8 bg-gray-800 rounded-full border border-gray-700 items-center justify-center`}>
						<div className={`relative w-3 h-3 bg-primary-3 rounded-full`}></div>
					</div>
				</div>

				<div className={`relative w-full pt-14 pb-6 pl-8 min-h-16 italic text-xsm`}>
					{children}
				</div>
			</div>
		</div>
	)
}

const Timeline = ({ children }) => {
	const childCount = useRef(Children.count(children));

	return (
		<div className={`relative w-full text-sm text-center`}>
			<div className={`relative w-full`}>
				{children.map((child, index) => cloneElement(child, {
					key: index,
					hasStripe: childCount.current - 1 > index
				}))}
			</div>
		</div>
	)
}

export default Timeline;