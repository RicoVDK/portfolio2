import React, {
	useState,
	useLayoutEffect
} from 'react';

import isEven from '/src/components/utils/is-even';

import Tags from '/src/components/tags';
import ProjectSearch from '/src/components/project-search';
import ProjectEntry from '/src/components/project-entry';
import TextTitle from '/src/components/text/text-title';
import TextSubText from '/src/components/text/text-subtext';
import TextMark from '/src/components/text/text-mark';

const projects = [
	{
		displayName: 'Rico\'s Softworks',
		description: `
			The website you're currently browsing on!<br/>
			<br/>
			This entry includes an insight in its development.
		`,
		id: 'entry-portfolio',
		children: [],
		tags: [
			Tags.WebDev, Tags.WIP,
			Tags.SelfInterest, Tags.ReactJS
		]
	},
	{
		displayName: 'Project Eterna',
		description: `
			A 2.5D story-driven action adventure RPG that introduces new and unique mechanics to the genre.
		`,
		id: 'entry-eterna',
		children: [],
		tags: [
			Tags.GameDev, Tags.Prototype,
			Tags.WIP, Tags.Images,
			Tags.Videos, Tags.SelfInterest,
			Tags.Godot, Tags.Direction,
			Tags.Programming,
		]
	},
	{
		displayName: 'Project Birds',
		description: `
			A first person puzzle horror featuring malformed animals as consequence of experiments that went terribly wrong.
		`,
		id: 'entry-birds',
		children: [],
		tags: [
			Tags.GameDev, Tags.Prototype,
			Tags.WIP, Tags.Images,
			Tags.Videos, Tags.SelfInterest,
			Tags.Godot, Tags.Direction,
			Tags.Programming,
		]
	},
	{
		displayName: 'DartScore',
		description: `
			One of the projects I took part in as a full stack developer during my 2nd internship.<br/>
			<br/>
			Here you can read more about my task that involved designing and implementing a tournament system for darting!
		`,
		id: 'entry-dartscore',
		children: [],
		tags: [
			Tags.WebDev, Tags.Internship,
			Tags.Unreleased, Tags.Complete,
			Tags.Videos, Tags.Django,
			Tags.ReactJS, Tags.Programming,
		]
	},
	{
		displayName: 'Vibrant Venture',
		description: `
			This entry contains my latest contribution to this game, made by Semag Games.<br/>
			<br/>
			My work involved designing a set of characters' personalities and then writing interactive dialogue for each of them!
		`,
		id: 'entry-vibrant-venture',
		children: [],
		tags: [
			Tags.Contribution, Tags.SelfInterest,
			Tags.Complete,
		]
	},
	{
		displayName: '3D Printer Dashboard',
		description: `
			One of the projects I made for my final exams in Software Dev.<br/>
			<br/>
			It features a web application accessible to teachers and students, where they can upload 3D models.
		`,
		id: 'entry-3d-printer-dashboard',
		children: [],
		tags: [
			Tags.WebDev, Tags.School,
			Tags.Unreleased, Tags.Complete,
			Tags.Videos, Tags.Laravel,
			Tags.Programming,
		]
	},
	{
		displayName: '2.5D Unity Prototype',
		description: `
			A school project I asked to work on in order to improve my skills in Unity.<br/>
			<br/>
			This is where I first got to tackle 3D, in an effort to make a base framework
			for a top-down puzzle adventure game, in a very small timeframe.
		`,
		id: 'entry-2_5d-unity-prototype',
		children: [],
		tags: [
			Tags.GameDev, Tags.School,
			Tags.Unreleased, Tags.Complete,
			Tags.Videos, Tags.Images,
			Tags.Prototype, Tags.Unity,
			Tags.Programming, Tags.Direction,
		]
	},
	{
		displayName: 'Dreamventure',
		description: `
			My first Unity school project that involved us having to make a 2D adventure game.<br/>
			<br/>
			I provided the main concept for the game, as well as having designed and implemented all of its puzzles and environments.<br/>
			Due to prior experience, I only aided the other programmers in their work.
		`,
		id: 'entry-dreamventure',
		children: [],
		tags: [
			Tags.GameDev, Tags.School,
			Tags.Unreleased, Tags.Complete,
			Tags.Videos, Tags.Images,
			Tags.Prototype, Tags.Unity,
			Tags.Direction,
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
			<TextSubText wrapClassName={`text-center pt-6`}>
				Here you'll find <span className={`font-bold`}>{'>'}some{'<'}</span> of the projects I have worked, or am working on!<br/>
				<TextMark>Please keep in mind that not all of these are owned by me.</TextMark><br/>
				<br/>
				You can filter by using the search field below, as well as including and excluding tags by opening the options menu below the search field.
			</TextSubText>

			<div id={`search`} className={`relative flex flex-col w-full items-center pt-12`}>
				<ProjectSearch
					toSearch={projects}
					setResults={setResults}
				/>

				<TextTitle>
					Results
				</TextTitle>
				
				<div id={`results`} className={`relative grid w-full max-w-600px grid-cols-1 tablet:grid-cols-2 gap-4 m-auto`}>
					{results.map((project, index) => (
						<ProjectEntry
							key={index}
							title={project.displayName}
							desc={project.description}
							id={project.id}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default ProjectsPage;