import React, {
	useState,
	useEffect,
	useRef,
	useLayoutEffect
} from 'react';

import ProjectSearch from '/src/components/project-search';
import ProjectEntry from '/src/components/project-entry';
import TextTitle from '/src/components/text/text-title';
import TextSubText from '/src/components/text/text-subtext';
import TextLink from '/src/components/text/text-link';
import TextBold from '/src/components/text/text-bold';
import TextItalic from '/src/components/text/text-italic';
import TextCenter from '/src/components/text/text-center';
import SEO from '/src/components/seo';

import Projects from '/project-index';
import { siteMetadata } from '/gatsby-config';

const ProjectsPage = ({ location, setContents, }) => {
	const [results, setResults] = useState(Projects);
	const [waiting, setWaiting] = useState(false);
	const [counts, setCounts] = useState({
		available: 0,
		unavailable: 0,
	});

	const getResults = () => {
		if (waiting) {
			return <div className={`relative flex flex-col items-center m-auto italic text-gray-400 text-center`}>
				Waiting for you to stop fiddling with the filters...
			</div>
		} else if (results.length > 0) {
			return <div className={`relative grid w-full max-w-600px grid-cols-1 tablet:grid-cols-2 gap-4 m-auto`}>
				{results.map((project, index) => (
					<ProjectEntry
						key={index}
						title={project.displayName}
						desc={project.description}
						updated={project.updated}
						id={project.id}
						disabled={project.disabled}
						url={project.url}
						img={project.img}
					/>
				))}
			</div>
		} else if (results.length < 1) {
			return <div className={`relative flex flex-col items-center m-auto italic text-gray-400 text-center`}>
				No projects matched your query... :(
			</div>
		}
	}

	useLayoutEffect(() => {
		setContents([
			{ displayName: 'Search', id: 'search', children: [] },
			{ displayName: 'Results', id: 'results', children: results },
		]);

		setCounts({
			available: results.reduce((count, result) => (!result.disabled ? (count || 0) + 1 : count), 0),
			unavailable: results.reduce((count, result) => (result.disabled ? (count || 0) + 1 : count), 0),
		})
	}, [setContents, setCounts, results]);

	return (
		<div id={`projects`}>
			<SEO
				pageTitle={`Projects`}
				desc={`Learn about the development process behind my projects.`}
				location={location}
			/>

			<TextSubText wrapClassName={`text-center pt-6`}>
				This page contains posts about some of the projects that I was involved in.<br />
				<br />
				Use the <TextBold>options toggle beneath the search bar</TextBold> to allow for tag filtering.<br />
				Is your project of interest not available or not listed?<br />
				<TextLink to={`/contact`}>contact me</TextLink> for a short recap.<br />
				<br />
				<TextItalic>Projects are sorted from new to old.</TextItalic>
			</TextSubText>

			<div
				id={`search`}
				className={`relative flex flex-col w-full items-center py-12`}
			>
				<ProjectSearch
					toSearch={Projects}
					waiting={waiting}
					setWaiting={setWaiting}
					setResults={setResults}
				/>

				<TextTitle id={`results`}>
					Results
				</TextTitle>
				{ results.length > 0 && !waiting &&
					<TextCenter className={`pb-12`}>
						<TextBold>{counts.available}</TextBold> available {counts.available < 2 ? `project was` : `projects were`} found!<br />
						{ counts.unavailable > 0 && 
							<span className={`text-sm italic text-gray-400`}>
								<TextBold>{counts.unavailable}</TextBold> of which {counts.unavailable < 2 ? `is` : `are`} unavailable.
							</span>}
					</TextCenter>
				}
				
				{getResults()}
			</div>
		</div>
	)
}

export default ProjectsPage;