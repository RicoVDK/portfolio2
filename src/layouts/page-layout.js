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

export const PageLayout = ({ children }) => {
	const [contents, setContents] = useState([]);

	const buildPageContentEntries = (contents) => {
		const elements = [];

		for (let i = 0; i < contents.length; i++) {
			elements.push(<PageContentEntry
				key={i}
				displayName={contents[i].displayName}
				href={contents[i].id}
			>
				{contents[i].children.length > 0 ? buildPageContentEntries(contents[i].children) : undefined}
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
					buildPageContentEntries={buildPageContentEntries}
				>
					{children}
				</MobilePageLayout>
			</OnMobile>

			<OnDesktop>
				<DesktopPageLayout
					contents={contents}
					setContents={setContents}
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
				<div className={`absolute w-full h-full overflow-y-scroll p-6`}>
					{cloneElement(children, { contents, setContents })}
				</div>
			</div>

			<div
					id={`page-bottom-shadow`}
					className={`absolute w-full h-6 bottom-0 z-50 px-px`}
				>
				<div className={`relative w-full h-full bg-gradient-to-t from-gray-900 to-transparent`}></div>
			</div>
		</div>
	)
}

export const DesktopPageLayout = ({
	contents,
	setContents,
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
								: <div className={`relative w-full text-center text-gray-400 italic`}>No referable contents were found...</div>
							}
						</PageContent>
					</div>
				</div>
			</div>

			{/** Page. */}
			<div className={`relative flex-grow h-full`}>
				<div className={`absolute w-full h-full overflow-y-scroll p-6`}>
					{cloneElement(children, { contents, setContents })}
				</div>
			</div>

			<div
				id={`page-bottom-shadow`}
				className={`absolute w-full h-6 bottom-0 z-50 px-px`}
			>
				<div className={`relative w-full h-full bg-gradient-to-t from-gray-900 to-transparent`}></div>
			</div>
		</div>
	)
}