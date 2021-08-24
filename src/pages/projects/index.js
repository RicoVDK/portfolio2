import React, {
	useState,
	useEffect,
	useRef,
	useLayoutEffect
} from 'react';
import queryString from 'query-string';

import ProjectSearch from '/src/components/project-search';
import ProjectEntry from '/src/components/project-entry';
import TextTitle from '/src/components/text/text-title';
import TextSubText from '/src/components/text/text-subtext';
import TextMark from '/src/components/text/text-mark';

import Projects from '/project-index';

const ProjectsPage = ({ location, setContents, }) => {
	const [results, setResults] = useState(Projects);
	const [waiting, setWaiting] = useState(false);

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
						id={project.id}
						disabled={project.disabled}
						url={project.url}
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
	}, [setContents, results]);

	return (
		<div id={`projects`}>
			<TextSubText wrapClassName={`text-center pt-6`}>
				Here you'll find <span className={`font-bold`}>{'>'}some{'<'}</span> of the projects I have worked, or am working on!<br/>
				<TextMark>Please keep in mind that not all of these are owned by me.</TextMark><br/>
				<br/>
				You can filter by using the search field below, as well as including and excluding tags by opening the options menu below the search field.
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
				
				{getResults()}
			</div>
		</div>
	)
}

export default ProjectsPage;