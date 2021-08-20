
const Tags = {
	GameDev: 0,
	WebDev: 1,
	Released: 2,
	Unreleased: 3,
	WIP: 4,
	Prototype: 5,
	Complete: 6,
	Incomplete: 7,
	Contribution: 8,
	Images: 9,
	Videos: 10,
	Internship: 11,
	Contract: 12,
	School: 13,
	SelfInterest: 14,
	Unity: 15,
	Godot: 16,
	Laravel: 17,
	Django: 18,
	ReactJS: 19,
	Direction: 20,
	Programming: 21,
	Writing: 22,
}

const tagDisplayNames = {
	[Tags.GameDev]: 'Game Dev',
	[Tags.WebDev]: 'Web Dev',
	[Tags.Released]: 'Released',
	[Tags.Unreleased]: 'Unreleased',
	[Tags.WIP]: 'W.I.P.',
	[Tags.Prototype]: 'Prototype',
	[Tags.Complete]: 'Complete',
	[Tags.Incomplete]: 'Incomplete',
	[Tags.Contribution]: 'Contribution',
	[Tags.Images]: 'Images',
	[Tags.Videos]: 'Videos',
	[Tags.Internship]: 'Internship',
	[Tags.Contract]: 'Contract',
	[Tags.School]: 'School',
	[Tags.SelfInterest]: 'Self Interest',
	[Tags.Unity]: 'Unity',
	[Tags.Godot]: 'Godot',
	[Tags.Laravel]: 'Laravel',
	[Tags.Django]: 'Django',
	[Tags.ReactJS]: 'ReactJS',
	[Tags.Direction]: 'Direction',
	[Tags.Programming]: 'Programming',
	[Tags.Writing]: 'Writing',
}

export const tagToDisplayName = (tag) => {
	return tagDisplayNames.hasOwnProperty(tag) ? tagDisplayNames[tag] : 'No Tag';
}

export default Tags;