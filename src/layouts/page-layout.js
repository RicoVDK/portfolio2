import React, {
	useState,
	cloneElement
} from 'react';

import TextSubTitle from '/src/components/text/text-subtitle';
import {
	OnMobile,
	OnDesktop
} from '/src/components/breakpoints';
import PageContent, {
	Entry as PageContentEntry
} from '/src/components/page-content';

export const PageLayout = ({ setModal, children }) => {
	const [contents, setContents] = useState([]);

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

	return (
		<>
			<OnMobile>
				<MobilePageLayout
					contents={contents}
					setContents={setContents}
					setModal={setModal}
					buildPageContentEntries={buildPageContentEntries}
				>
					{children}
				</MobilePageLayout>
			</OnMobile>

			<OnDesktop>
				<DesktopPageLayout
					contents={contents}
					setContents={setContents}
					setModal={setModal}
					buildPageContentEntries={buildPageContentEntries}
				>
					{children}
				</DesktopPageLayout>
			</OnDesktop>
		</>
	);
}

export const MobilePageLayout = ({
	contents,
	setContents,
	setModal,
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
				<div className={`absolute w-full h-full overflow-y-scroll py-6 pl-6 pr-3`}>
					{cloneElement(children, { contents, setContents, setModal })}
				</div>
			</div>

			<div
					id={`page-bottom-shadow`}
					className={`absolute w-full h-6 bottom-0 z-40 px-px`}
				>
				<div className={`relative w-full h-full bg-gradient-to-t from-gray-900 to-transparent`}></div>
			</div>
		</div>
	)
}

export const DesktopPageLayout = ({
	contents,
	setContents,
	setModal,
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
					<div className={`relative w-full h-full p-4`}>
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

				<div className={`absolute w-full h-full overflow-y-scroll py-6 pl-6 pr-3`}>
					{cloneElement(children, { contents, setContents, setModal })}
				</div>
			</div>
		</div>
	)
}