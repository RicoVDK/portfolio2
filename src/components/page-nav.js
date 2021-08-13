import React from 'react';
import { Link } from 'gatsby';

const pages = {
	'projects': {
		display: 'Projects',
		url: '/projects'
	},
	'': {
		display: 'About',
		url: '/'
	},
	'contact': {
		display: 'Contact',
		url: '/contact'
	}
}

const PageNav = ({ location }) => {
	const isActive = (page) => {
		if (page.url.length <= 1)
			return location.pathname.length <= 1;

		return location.pathname.indexOf(page.url) > -1
	};

	return (
		<div
			id={`navigation`}
			role={`navigation`}
			className={`relative w-full h-2/5 border-r border-l border-primary desktop:border-0`}
		>
			<div className={`absolute w-full h-full rounded-bl-full rounded-br-full border border-primary`}>
				<div className={`relative flex flex-row h-full px-16`}>
					{Object.keys(pages).map((page, index) => (
						<Link
							key={index}
							to={pages[page].url}
							className={`relative flex-grow h-full group`}
						>
							<div className={`absolute w-full h-full px-2 py-2 tablet:py-4`}>
								<div className={`relative w-full h-full rounded-full ${
									isActive(pages[page]) ? 'bg-primary' : 'group-hover:bg-gray-700'
								}`}></div>
							</div>

							<div className={`absolute flex justify-center items-center w-full h-full text-md tablet:text-lg ${
								isActive(pages[page]) ? 'text-gray-900 font-bold' : 'text-primary'
							}`}>
								{pages[page].display}
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	)
}

export default PageNav;