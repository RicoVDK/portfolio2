import React, {
	useLayoutEffect,
} from 'react';

import ProjectLayout from '/src/layouts/project-layout';
import ProjectBanner from '/src/components/project-banner';
import TextTitle from '/src/components/text/text-title';
import TextCenter from '/src/components/text/text-center';
import TextSubTitle from '/src/components/text/text-subtitle';
import TextItalic from '/src/components/text/text-italic';
import TextBold from '/src/components/text/text-bold';
import IMGViewer from '/src/components/img-viewer';
import TextLink from '/src/components/text/text-link';
import IMGGrid, {
	Entry as IMGGridEntry
} from '/src/components/img-grid';

import Header from '/src/images/projects/eterna/eterna-header.png';
import Gameplay01 from '/src/images/projects/eterna/eterna-gameplay01.gif';
import Gameplay02 from '/src/images/projects/eterna/eterna-gameplay02.gif';
import Gameplay03 from '/src/images/projects/eterna/eterna-gameplay03.gif';
import Node01 from '/src/images/projects/eterna/eterna-node01.png';
import Node02 from '/src/images/projects/eterna/eterna-node02.png';
import Code01 from '/src/images/projects/eterna/eterna-code01.png';
import Code02 from '/src/images/projects/eterna/eterna-code02.png';
import Code03 from '/src/images/projects/eterna/eterna-code03.png';
import Code04 from '/src/images/projects/eterna/eterna-code04.png';

const Eterna = ({ location, setModal, setContents }) => {
	useLayoutEffect(() => {
		setContents([
			{ displayName: 'What is Eterna?', id: 'about', children: [] },
			{ displayName: 'July 2021 (v0.0.1p)', id: 'july-2021', children: [
				{ displayName: 'Development', id: 'july-2021-dev', children: [] },
				{ displayName: 'Gameplay', id: 'july-2021-gameplay', children: [] },
				{ displayName: 'Node Structure', id: 'july-2021-node', children: [] },
				{ displayName: 'Code', id: 'july-2021-code', children: [] },
			] },
			{ displayName: 'In the Future', id: 'future', children: [] },
		]);
	}, [setContents]);

	return (
		<ProjectLayout location={location} projectId={`entry-eterna`}>
			<ProjectBanner
				id={`project`}
				imgTitle={`Extremely early prototype screenshot`}
				date={`30/08/2021`}
				img={Header}
				setModal={setModal}
			>
				Project Eterna
			</ProjectBanner>

			<TextTitle id={`about`}>What is Eterna?</TextTitle>
			<TextCenter>
				Project Eterna is a 2.5D story driven RPG.<br/>
				The code name "Eterna" was chosen due to the relation to the concept of time, 
				as well as for it to have a story that lasts.<br/>
				<br/>
				Info regarding the game's mechanics, storyline, and concepts won't be explained in detail, 
				or might not even be talked about in this post in effort to keep most, if not everything, a surprise.<br/>
				(And because it's not a good idea to prematurely talk about your game in-depth)<br/>
				<br/>
				<TextBold>Content on the game in this post is subject to change and nowhere near final, as it is an unfinished prototype.</TextBold><br/>
				Taking the above into consideration, this post will only detail the technical aspect of this project.
			</TextCenter>
			
			<TextTitle id={`july-2021`}>July 2021 (v0.0.1p)</TextTitle>
			<TextCenter><TextSubTitle id={`july-2021-dev`} className={`py-4`}>Development</TextSubTitle></TextCenter><br/>
			<br/>
			Development on the first prototype is started <TextBold><TextItalic>and so far has only been worked on in one afternoon and one evening</TextItalic></TextBold>.<br/>
			The goal is to eventually have a prototype that contains player abilities (movement, jumping, etc), 
			as well as other main features such as a start on the combat system and interaction, and some UI.<br/>
			<br/>
			Speaking of UI, I implemented a debug menu early on so that I would be able to proofread the variable values in real-time.<br/>
			In <TextLink to={'/projects/birds'}>Project Birds</TextLink>, 
			I managed to fix some bugs I wouldn't have noticed without a debug menu, so I find having one early on in Eterna essential.<br/>
			<br/>
			I sadly haven't been able to work on Eterna for the entirety of August and half of July, 
			due to my attention being put into developing this website as well as contributing in various areas to Semag Games.<br/>
			<br/>
			<TextCenter><TextSubTitle id={`july-2021-gameplay`} className={`py-4`}>Gameplay</TextSubTitle></TextCenter><br/>
			<br/>
			<TextCenter>
				<TextBold>WARNING</TextBold><br/>
				Intense action packed gameplay below...
			</TextCenter>
			<br/>
			<IMGGrid>
				<IMGGridEntry>
					<IMGViewer
						title={`Custom physics`}
						date={`30/08/2021`}
						src={Gameplay01}
						setModal={setModal}
					/>
				</IMGGridEntry>
				<IMGGridEntry>
					<IMGViewer
						title={`Smooth & Dynamic slope physics`}
						date={`30/08/2021`}
						src={Gameplay02}
						setModal={setModal}
					/>
				</IMGGridEntry>
				<IMGGridEntry>
					<IMGViewer
						title={`Early fully custom debug menu`}
						date={`30/08/2021`}
						src={Gameplay03}
						setModal={setModal}
					/>
				</IMGGridEntry>
			</IMGGrid>
			<br/>
			<TextCenter><TextSubTitle id={`july-2021-node`} className={`py-4`}>Node Structure</TextSubTitle></TextCenter><br/>
			<br/>
			The main scene that loads when the app is ran is called "App".<br/>
			It houses all nodes that are required on startup and handle global app functionalities.<br/>
			The Game scene contains all the game logic (loading the proper levels, inventory, etc), 
			while the App scene is where this can be switched out for something like the title screen.<br/>
			Using this same pattern, the Game scene will have something similar, but for its levels and areas.<br/>
			<br/>
			In the second image you can see the structure of the player node.<br/>
			The controller for the the player is seperate from the player and input logic.<br/>
			A new script is required that changes the properties of the controller directly, 
			so that the player body can read from the controller.<br/>
			For this I simply make a custom KeyboardInput node and program it to change specific values on the controller.<br/>
			The same process could be done for the gamepad and any other control types.<br/>
			<br/>
			<IMGGrid>
				<IMGGridEntry>
					<IMGViewer
						title={`App structure`}
						date={`30/08/2021`}
						src={Node02}
						setModal={setModal}
					/>
				</IMGGridEntry>
				<IMGGridEntry>
					<IMGViewer
						title={`Player node structure`}
						date={`30/08/2021`}
						src={Node01}
						setModal={setModal}
					/>
				</IMGGridEntry>
			</IMGGrid>
			<br/>
			<TextCenter><TextSubTitle id={`july-2021-code`} className={`py-4`}>Code</TextSubTitle></TextCenter><br/>
			<br/>
			<IMGGrid>
				<IMGGridEntry>
					<IMGViewer
						title={`Movable entity physics loop`}
						date={`30/08/2021`}
						src={Code01}
						setModal={setModal}
					/>
				</IMGGridEntry>
				<IMGGridEntry>
					<IMGViewer
						title={`Movable entity controller. This is where a movable entity reads its variables from.`}
						date={`30/08/2021`}
						src={Code02}
						setModal={setModal}
					/>
				</IMGGridEntry>
				<IMGGridEntry>
					<IMGViewer
						title={
							`UI window controller (as seen in the 3rd gameplay GIF).`
						}
						date={`30/08/2021`}
						src={Code03}
						setModal={setModal}
					/>
				</IMGGridEntry>
				<IMGGridEntry>
					<IMGViewer
						title={`Debug menu`}
						date={`30/08/2021`}
						src={Code04}
						setModal={setModal}
					/>
				</IMGGridEntry>
			</IMGGrid>

			<TextTitle id={`future`}>In the Future</TextTitle>
			<TextCenter>
				This post will be updated once there is more content to show.<br/>
				I hope you look forward to it!<br/>
				<br/>
				This project has kept me up during many many nights this year due to bursts of ideas and motivation, 
				but little to no time to work on it, sadly.<br/>
				Once situations stabilize, I'll be able to plan my time and work on it more.
			</TextCenter>
		</ProjectLayout>
	)
}

export default Eterna;