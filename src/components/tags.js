
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
}

export const tagToDisplayName = (tag) => {
	return tagDisplayNames.hasOwnProperty(tag) ? tagDisplayNames[tag] : 'No Tag';
}

export default Tags;