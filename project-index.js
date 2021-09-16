import Tags from '/src/components/tags';

import EntryPortfolioIcon from '/src/images/projects/ricosoftworks/ricosoftworks-icon.png';
import EntryEternaIcon from '/src/images/projects/eterna/eterna-icon.png';
import EntryDartScoreIcon from '/src/images/projects/dartscore/dartscore-icon.png';
import EntryPrinterIcon from '/src/images/projects/3d-printer-dashboard/printer-icon.png';
import Entry25DUnityIcon from '/src/images/projects/2_5d-unity-prototype/25d-unity-icon.png';
import EntryBirdsIcon from '/src/images/projects/birds/birds-icon.png';
import EntryPhantasmaIcon from '/src/images/projects/phantasma/phantasma-icon.png';
import EntryVVDialogueIcon from '/src/images/projects/vvdialogue/vvdialogue-icon.png';
import EntryDreamventureIcon from '/src/images/projects/dreamventure/dreamventure-icon.png';

const Projects = [
	{
		displayName: 'Rico\'s Softworks',
		description: `
			This project post includes an insight into how this website was developed.
		`,
		id: 'entry-portfolio',
		url: 'ricosoftworks',
		updated: '08/09/2021',
		img: EntryPortfolioIcon,
		disabled: false,
		children: [],
		tags: [
			Tags.WebDev, Tags.Released,
			Tags.SelfInterest, Tags.ReactJS,
			Tags.Frontend,
		]
	},
	// {
	// 	displayName: 'Semag Games\' Website',
	// 	description: `
	// 		I lend a hand in developing the company's website in order to help out my friend.<br/>
	// 		<br/>
	// 		Here you can also read about how I approached making existing content responsive,
	//		as well as how I implemented the mobile nav menu.
	// 	`,
	// 	id: 'entry-semag-website',
	//	url: '#',
	//	img: null,
	// 	disabled: false,
	// 	children: [],
	// 	tags: [
	// 		Tags.WebDev, Tags.Complete,
	// 		Tags.Contribution, Tags.ReactJS,
	// 		Tags.Frontend,
	// 	]
	// },
	{
		displayName: 'Project Eterna',
		description: `
			A 2.5D story-driven action adventure RPG.<br />
			<br />
			Currently a W.I.P. prototype.
		`,
		id: 'entry-eterna',
		url: 'eterna',
		updated: '08/09/2021',
		img: EntryEternaIcon,
		disabled: false,
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
			A first person puzzle horror where the player is forced to explore and escape from a dark environment 
			that houses disturbing truths, as well as terrifying twisted entities looking for their next meal.
		`,
		id: 'entry-birds',
		url: 'birds',
		updated: '--/--/----',
		img: EntryBirdsIcon,
		disabled: true,
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
		displayName: 'Vibrant Venture',
		description: `
			This entry contains my latest contribution to this game, made by Semag Games.<br/>
			<br/>
			My work involved designing a set of characters' personalities and then writing interactive dialogue for each of them!
		`,
		id: 'entry-vibrant-venture',
		url: 'vibrant-venture',
		updated: '--/--/----',
		img: EntryVVDialogueIcon,
		disabled: true,
		children: [],
		tags: [
			Tags.Contribution, Tags.SelfInterest,
			Tags.Complete, Tags.Writing,
		]
	},
	{
		displayName: 'Dart-score',
		description: `
			One of the projects I took part in as a full stack developer during my 2nd internship.<br/>
			<br/>
			Here you can read more about my task that involved designing and implementing a tournament system for darting!
		`,
		id: 'entry-dartscore',
		url: 'dartscore',
		updated: '08/09/2021',
		img: EntryDartScoreIcon,
		disabled: false,
		children: [],
		tags: [
			Tags.WebDev, Tags.Internship,
			Tags.Unreleased, Tags.Complete,
			Tags.Videos, Tags.Django,
			Tags.ReactJS, Tags.Programming,
			Tags.Frontend, Tags.Backend,
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
		url: '3d-printer-dashboard',
		updated: '08/09/2021',
		img: EntryPrinterIcon,
		disabled: false,
		children: [],
		tags: [
			Tags.WebDev, Tags.School,
			Tags.Unreleased, Tags.Complete,
			Tags.Videos, Tags.Laravel,
			Tags.Programming, Tags.Frontend,
			Tags.Backend,
		]
	},
	{
		displayName: 'Phantasma',
		description: `
			The final Unity project I have worked on for school,
			a 2D puzzle action game.
			<br/>
			It's the first project that involved a team made up of two different courses; Software Development & Media Designer.
		`,
		id: 'entry-phantasma',
		url: 'phantasma',
		updated: '--/--/----',
		img: EntryPhantasmaIcon,
		disabled: true,
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
		displayName: '2.5D Unity Prototype',
		description: `
			A school "exam practice" project I asked to work on in order to improve my skills in Unity C#.<br/>
			<br/>
			This is where I first got to tackle 3D, in an effort to make a base framework
			for a top-down puzzle adventure game in a very small timeframe.
		`,
		id: 'entry-2_5d-unity-prototype',
		url: '2_5d-unity-prototype',
		updated: '16/09/2021',
		img: Entry25DUnityIcon,
		disabled: true,
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
			<br />
			The player wakes up in a dream world of their own and tries to find their way back to reality, 
			while encountering strange enemies and puzzles.
		`,
		id: 'entry-dreamventure',
		url: 'dreamventure',
		updated: '--/--/----',
		img: EntryDreamventureIcon,
		disabled: true,
		children: [],
		tags: [
			Tags.GameDev, Tags.School,
			Tags.Unreleased, Tags.Complete,
			Tags.Videos, Tags.Images,
			Tags.Prototype, Tags.Unity,
			Tags.Direction,
		]
	},
];

export default Projects;