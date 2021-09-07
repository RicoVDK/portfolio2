import React, {
	useLayoutEffect,
} from 'react';

import ProjectLayout from '/src/layouts/project-layout';
import TextTitle from '/src/components/text/text-title';
import TextCenter from '/src/components/text/text-center';
import TextItalic from '/src/components/text/text-italic';
import TextLink from '/src/components/text/text-link';
import TextSubTitle from '/src/components/text/text-subtitle';
import IMGViewer from '/src/components/img-viewer';
import PostIMG from '/src/components/post-img';
import IMGGrid, {
	Entry as IMGGridEntry
} from '/src/components/img-grid';
import {
	buttonScaleHover
} from '/src/components/effect-styles';

import Match01 from '/src/images/projects/dartscore/dartscore-match01.gif';
import Match02 from '/src/images/projects/dartscore/dartscore-match02.gif';
import Match03 from '/src/images/projects/dartscore/dartscore-match03.gif';
import Scheme01 from '/src/images/projects/dartscore/dartscore-scheme01.png';

const Dartscore = ({ setModal, setContents }) => {
	useLayoutEffect(() => {
		setContents([]);
	}, [setContents]);

	return (
		<ProjectLayout projectId={`entry-dartscore`}>
			<TextTitle id={`about`}>
				About
			</TextTitle>
			<TextCenter>
				DartScore was a project I worked on during my final internship, which also acted as my exams, for my Software Dev course on college.<br />
				The website itself allowed for darters, whether new or experienced, to play dart matches through a webcam feed, 
				where the website would keep track of user inputted score, effectively giving players a method to play without the need to be in the same room as your opponent.<br />
				This post will be covering some of the things that I did, which will also include a few images and videos of the front-end.<br />
				Unfortunately, I'm unable to record new footage of my contributions to the app
				<br />
				<TextItalic>
					In respect to the privacy of their product, this post will not contain any screenshots that depict its code.<br />
					If you're curious regardless, please <TextLink to={`/contact`}>contact me</TextLink> and I will try to get you in contact with the product owners.
				</TextItalic><br />
				<br />
				During the time of my internship, its website was running on ReactJS as its front-end and Django as its back-end.
			</TextCenter>

			<TextTitle id={`preparation`}>
				Preparation
			</TextTitle>
			For their next release, they wanted to add a new tournament system to the already existing website, 
			which only housed means to duel other darters through invitations prior.<br />
			Front-end designs were already put in place. However, the back-end did not have any designs yet.<br />
			This meant that I, as a back-end intern, would be lending a hand in designing the database.<br />
			<br />
			Actually, "lending a hand" would be a big understatement, as I got to discuss and argue with one of the co-owners and a senior developer 
			about what should be included and how.<br />
			We'd set aside an afternoon to write out the entire schematics of the database as well as its attributes and types, 
			and then eventually moved on to creating the migration files for each table.<br />
			<br />
			I do would like to take a moment here and emphasize on how much it helped me grow as well as be productive being able to think out and plan features 
			with experienced people and be treated like you've been working there as an employee instead of an intern that doesn't know anything.<br />
			I'm glad that I was able to play a key role in designing the database structure, which I ended up implementing myself along with the rest of the tournament back-end!<br />

			<TextTitle id={`implementation`}>
				Implementation
			</TextTitle>
			For this project, I specifically asked to have a hand in front-end, as well as back-end so that I could polish my ReactJS and Django skills simultaneously.<br />
			Luckily for me they were short on team members, so my willing to kill two birds in one stone was well timed.<br />
			<br />
			<TextCenter><TextSubTitle id={`match-component`}>Match Component</TextSubTitle></TextCenter>
			<br />
			I still remember the moment we all started the first sprint, there was no landing page for a tournament made yet.<br />
			...Meaning that I had to start creating my components on a temporary page which I could then drop in later when the tournament landing page was made by a colleague.<br />
			And so I created a flexible reusable match component that was editable by a tournament manager and could have its contents be updated, 
			which I made alongside several back-end tasks that involved the tournament, like sorting players into pairs randomly and handing out "bye's", 
			calculating and creating the required amount of rounds to play, etc.<br />
			<br />
			<TextCenter>Here's a look at the earliest stage of this match component that I could dig up:</TextCenter>
			<br />
			<IMGGrid>
					<IMGGridEntry>
						<IMGViewer
							title={`Visual changes depending on the match's status (Recorded before save was implemented)`}
							date={`07/09/2021`}
							src={Match01}
							setModal={setModal}
						/>
					</IMGGridEntry>
					<IMGGridEntry>
						<IMGViewer
							title={`Editable contents with a save button`}
							date={`07/09/2021`}
							src={Match02}
							setModal={setModal}
						/>
					</IMGGridEntry>
				</IMGGrid>
				<br />
				<TextCenter>
					I also made an additional sidebar that shows a panel allowing for updating a match status.<br />
					Its visuals weren't in the provided design and so I had to improvize a visualization for managers to set match statuses inside components.<br />
					In this gif, it's communicating with the server in real-time and updating the front-end based on the server's results:
				</TextCenter>
				<br />
				<PostIMG
					title={`Updating a match in real-time, resulting in the player being set to the next round.`}
					date={`07/09/2021`}
					src={Match03}
					setModal={setModal}
					className={`w-80 m-auto`}
				/>
				<br />
				<TextCenter>And this is the component fully utilized and in action near the end of the project:</TextCenter>
				<br />
				<PostIMG
					title={`Tournament scheme (which sadly excludes the nicely styled final round match...)`}
					date={`07/09/2021`}
					src={Scheme01}
					setModal={setModal}
					className={`w-80 m-auto`}
				/>
		</ProjectLayout>
	)
}

export default Dartscore;