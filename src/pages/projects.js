import React, {
	useState,
	useLayoutEffect
} from 'react';

import Tags from '/src/components/tags';
import ProjectSearch from '/src/components/project-search';
import ProjectEntry from '/src/components/project-entry';

const projects = [
	{
		displayName: 'Project Eterna',
		description: 'Description',
		id: 'entry-eterna',
		children: [],
		tags: [
			Tags.GameDev, Tags.Prototype,
			Tags.WIP, Tags.Images,
			Tags.Videos,
		]
	},
	{
		displayName: 'Portfolio Website',
		description: 'Description',
		id: 'entry-portfolio',
		children: [],
		tags: [
			Tags.WebDev, Tags.WIP,
		]
	},
]

const ProjectsPage = ({ location, setContents, }) => {
	const [results, setResults] = useState(projects);

	useLayoutEffect(() => {
		setContents([
			{ displayName: 'Search', id: 'search', children: [] },
			{ displayName: 'Results', id: 'results', children: results },
		]);
	}, [setContents, results]);

	return (
		<div id={`projects`}>
			<div id={`search`} className={`relative flex flex-col w-full items-center pt-6`}>
				<ProjectSearch
					toSearch={projects}
					setResults={setResults}
				/>
				<div id={`results`} className={`relative w-full`}>
					{results.map((project, index) => (
						<ProjectEntry
							key={index}
							title={project.displayName}
							desc={project.description}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default ProjectsPage;