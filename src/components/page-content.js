import React, {
	useState,
	useRef,
	Children
} from 'react';

import {
	buttonScaleHover
} from '/src/components/effect-styles.js';
import {
	pillClickEffect
} from '/src/components/click-effects';

export const Entry = ({
	defaultOpen = true,
	displayName = 'No Name',
	href = '#',
	onClick = () => {},
	children,
}) => {
	const [open, setOpen] = useState(defaultOpen);
	const vRef = useRef();
	const childCount = Children.count(children);

	const onTogglePressed = () => {
		setOpen(!open);
	}

	const onEntryClicked = () => {
		pillClickEffect(vRef.current);
	}

	return (
		<div className={`relative mb-2 last:mb-0 whitespace-nowrap`}>
			{/** Toggle */}
			<div ref={vRef} onClick={onEntryClicked} className={`relative w-full h-8`}>
				<div className={`relative flex w-full h-8 group ${buttonScaleHover}`}>
					<div className={`absolute w-full h-full rounded-full border border-gray-700 bg-gray-800 group-hover:bg-gray-700 group-active:bg-primary`}></div>

					<div className={`relative flex w-8 h-8 justify-center items-center select-none cursor-pointer ${childCount > 0 ? '' : 'hidden'}`}>
						<div
							onClick={onTogglePressed}
							className={`relative flex w-6 h-6 justify-center items-center bg-gray-800 rounded-full text-xs hover:bg-primary hover:text-gray-800`}
						>
							<i className={`fas ${open ? 'fa-minus' : 'fa-plus'}`}/>
						</div>
					</div>

					<a
						className={`relative block flex-grow h-8 text-primary select-none group-active:text-gray-800`}
						href={`#${href}`}
						onClick={onClick}
					>
						<div className={`absolute flex w-full h-full items-center pr-4 ${
							childCount < 1 ? 'pl-4' : ''
						} text-sm`}>
							<span className={`relative w-full truncate`}>{displayName}</span>
						</div>
					</a>
				</div>
			</div>

			{/** Nesting. */}
			<div className={`relative w-full px-4 ${childCount > 0 && open ? '' : 'hidden'}`}>
				<div className={`relative block w-full py-2 px-2 bg-gray-800 rounded-bl-2xl rounded-br-2xl border border-t-0 border-gray-700 text-sm border-box`}>
					{children}
				</div>
			</div>
		</div>
	)
}

const PageContent = ({
	children
}) => {
	return(
		<div className={`relative w-full flex-grow border-b border-t border-gray-700 overflox-x-visible`}>
			<div className={`absolute w-full h-4 top-0 z-10 pointer-events-none`}>
				<div className={`relative w-full h-full bg-gradient-to-t from-transparent to-gray-900`}></div>
			</div>
			<div className={`absolute w-full h-4 bottom-0 z-10 pointer-events-none`}>
				<div className={`relative w-full h-full bg-gradient-to-t from-gray-900 to-transparent`}></div>
			</div>
			
			<div className={`absolute w-full h-full`}>
				<div className={`relative h-full overflow-y-scroll overflow-x-hidden py-4`}>
					<div className={`relative w-full pl-4 pr-2 py-1`}>
						{children}
					</div>
				</div>
			</div>
		</div>
	)
}

export default PageContent;