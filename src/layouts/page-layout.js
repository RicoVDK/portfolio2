import React, {
	useState,
	useRef,
	cloneElement,
	useLayoutEffect
} from 'react';

import TextSubTitle from '/src/components/text/text-subtitle';
import {
	OnMobile,
	OnDesktop
} from '/src/components/breakpoints';
import PageContent, {
	Entry as PageContentEntry
} from '/src/components/page-content';

export const PageLayout = ({ location, setModal, children }) => {
	const [contents, setContents] = useState([]);
	const pageScroller = useRef(null);
	const lastPathName = useRef('');

	const getInnerContents = (children) => {
		if (children.length > 0)
			return buildPageContentEntries(children);

		// Otherwise return void.
		// Benefit of JS where we don't have to deal with "undefined" litered in our array.
	}

	const buildPageContentEntries = (contents) => {
		const elements = [];

		for (let i = 0; i < contents.length; i++) {
			elements.push(<PageContentEntry
				key={i}
				displayName={contents[i].displayName}
				href={contents[i].id}
			>
				{getInnerContents(contents[i].children)}
			</PageContentEntry>)
		}

		return elements;
	}

	useLayoutEffect(() => {
		if (!pageScroller || !pageScroller.current)
			return;

		if (location.pathname) {
			if (location.pathname !== lastPathName.current) {
				pageScroller.current.scrollTo(0, 0);
			}

			lastPathName.current = location.pathname
		}
	}, [location, pageScroller])

	return (
		<>
			<OnMobile>
				<MobilePageLayout
					pageScroller={pageScroller}
					contents={contents}
					buildPageContentEntries={buildPageContentEntries}
				>
					{cloneElement(children, {
						contents,
						setContents,
						setModal,
						buildPageContentEntries
					})}
				</MobilePageLayout>
			</OnMobile>

			<OnDesktop>
				<DesktopPageLayout
					pageScroller={pageScroller}
					contents={contents}
					buildPageContentEntries={buildPageContentEntries}
				>
					{cloneElement(children, {
						contents,
						setContents,
						setModal,
						buildPageContentEntries
					})}
				</DesktopPageLayout>
			</OnDesktop>
		</>
	);
}

export const MobilePageLayout = ({
	pageScroller,
	contents,
	buildPageContentEntries,
	children
}) => {
	return (
		<div
			id={`page`}
			className={`relative flex-grow w-full w-full border-l border-r desktop:border-0 border-primary`}
		>

			{/** Page. */}
			<div className={`relative flex-grow h-full`}>
				<div ref={pageScroller} className={`absolute w-full h-full overflow-y-scroll py-6 pl-6 pr-3`}>
					{children}
				</div>
			</div>

			<div
					id={`page-top-shadow`}
					className={`absolute w-full h-6 top-0 z-30 px-px`}
				>
				<div className={`relative w-full h-full bg-gradient-to-t from-transparent to-gray-900`}></div>
			</div>
		</div>
	)
}

export const DesktopPageLayout = ({
	pageScroller,
	contents,
	buildPageContentEntries,
	children
}) => {
	return (
		<div
			id={`page`}
			className={`relative flex w-full flex-grow`}
		>
			{/** Sidebar. */}
			<div className={`relative w-1/4 min-w-72 h-full border-r border-primary`}>
				<div className={`absolute w-full h-full`}>
					<div className={`relative flex flex-col w-full h-full py-4 px-1 overflow-hidden`}>
						<TextSubTitle className={`relative block text-center w-full pb-2`}>
							Page contents
						</TextSubTitle>

						<PageContent>
							{contents.length > 0
								? buildPageContentEntries(contents)
								: <div className={`relative w-full text-center text-sm text-gray-400 italic`}>This page has no table of contents.</div>
							}
						</PageContent>
					</div>
				</div>
			</div>

			{/** Page. */}
			<div className={`relative flex-grow h-full`}>
				<div
					id={`page-bottom-shadow`}
					className={`absolute w-full h-6 bottom-0 z-40 px-px pointer-events-none`}
				>
					<div className={`relative w-full h-full bg-gradient-to-t from-gray-900 to-transparent`}></div>
				</div>

				<div ref={pageScroller} className={`absolute w-full h-full overflow-y-scroll py-6 pl-6 pr-3`}>
					{children}
				</div>
			</div>
		</div>
	)
}