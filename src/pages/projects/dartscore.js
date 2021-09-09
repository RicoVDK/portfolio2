import React, {
	useLayoutEffect,
} from 'react';

import ProjectLayout from '/src/layouts/project-layout';
import ProjectBanner from '/src/components/project-banner';
import TextTitle from '/src/components/text/text-title';
import TextCenter from '/src/components/text/text-center';
import TextSubTitle from '/src/components/text/text-subtitle';
import TextBold from '/src/components/text/text-bold';
import TextCenterLeft from '/src/components/text/text-center-left';
import ULOut from '/src/components/ul-out';
import IMGViewer from '/src/components/img-viewer';
import PostIMG from '/src/components/post-img';
import IMGGrid, {
	Entry as IMGGridEntry
} from '/src/components/img-grid';

import Match01 from '/src/images/projects/dartscore/dartscore-match01.gif';
import Match02 from '/src/images/projects/dartscore/dartscore-match02.gif';
import Match03 from '/src/images/projects/dartscore/dartscore-match03.gif';
import Scheme01 from '/src/images/projects/dartscore/dartscore-scheme01.png';
import Queries01 from '/src/images/projects/dartscore/dartscore-queries01.png';
import Ranking01 from '/src/images/projects/dartscore/dartscore-ranking01.png';
import Sign01 from '/src/images/projects/dartscore/dartscore-sign01.gif';
import Sign02 from '/src/images/projects/dartscore/dartscore-sign02.gif';

const Dartscore = ({ location, setModal, setContents }) => {
	useLayoutEffect(() => {
		setContents([
			{ displayName: 'Experience', id: 'experience', children: [] },
			{ displayName: 'About', id: 'about', children: [] },
			{ displayName: 'Preparation', id: 'preparation', children: [] },
			{ displayName: 'Implementation', id: 'implementation', children: [
				{ displayName: 'Match Component', id: 'match-component', children: [] },
				{ displayName: 'Tourney Results', id: 'tourney-results', children: [] },
				{ displayName: 'Participation', id: 'participation', children: [] },
			] },
		]);
	}, [setContents]);

	return (
		<ProjectLayout location={location} projectId={`entry-dartscore`}>
			<ProjectBanner
				id={`project`}
				imgTitle={`Tournament scheme`}
				date={`30/08/2021`}
				img={Scheme01}
				setModal={setModal}
			>
				Dart-score
			</ProjectBanner>

			<TextTitle id={`experience`}>
				Experience
			</TextTitle>
			<TextBold>
				<TextCenterLeft>
					<ULOut>
						<li>Learned ReactJS (Hooks), Tailwind, Python + Django within the first 2 weeks of my internship.</li>
						<li>NextJS.</li>
						<li>Rest API</li>
						<li>Designing and working with a complex database system</li>
						<li>Communicating from front-end to back-end and vice versa in real-time.</li>
						<li>Full-stack development.</li>
						<li>Working with time-constraint pressure.</li>
						<li>Working with a flexible, constantly changing team.</li>
					</ULOut>
				</TextCenterLeft>
			</TextBold>

			<TextTitle id={`about`}>
				About
			</TextTitle>
			<TextCenter>
				Dart-score was a project I worked on during my final internship, which also acted as my exams for my Software Dev course on college.<br />
				The website itself allowed for darters, whether new or experienced, to play dart matches through a webcam feed, 
				where the website would keep track of user inputted score, effectively giving players a method to play without the need to be in the same room as your opponent.<br />
				This post will be covering some of the things that I did, which will also include a few images and videos of the front-end.<br />
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
			This meant that I was given the responsibility to create the front {'&'} back-end for the tournament's logic, like starting rounds, advancing them, 
			changing scores, all while making its interface as well, and the list goes on.<br />
			<br />
			<TextCenter><TextSubTitle className={`py-4`} id={`match-component`}>Match Component</TextSubTitle></TextCenter>
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
			<TextCenter>And this is the component used in large quantity near the end of the project:</TextCenter>
			<br />
			<PostIMG
				title={`Tournament scheme (which sadly excludes the nicely styled final round match...)`}
				date={`07/09/2021`}
				src={Scheme01}
				setModal={setModal}
				className={`w-80 m-auto`}
			/>
			<br />
			<TextCenter><TextSubTitle className={`py-4`} id={`tourney-results`}>Tourney Results</TextSubTitle></TextCenter>
			<br />
			My next to last task on this project involved calculating the tournament results based on players' points throughout the entire tournament, 
			meaning I had to get the sum of all the points a player made in each of their matches that were tied to the rounds of said tournament, for each player.<br />
			With that I could then rank the players who threw the most points above those who threw less.<br />
			<br />
			Sounds easy? At the time that was far from easy for me. It was a perfect challenge to be more accurate.<br />
			If you're unfamiliar with web development, you might not know what techniques are used in order to communicate with a database.<br />
			The most common method used in web development is the use of query languages. In our case, PosgreSQL encapsulated by Django's database model module.<br />
			With this, it's possible to chain numerous methods which are turned into query strings under the hood in Django.<br />
			It's like writing the query strings yourself, but with the use of methods (close to how it should be in my opinion).<br />
			<br />
			In any case, I was not experienced in writing SQL queries at all so I had nothing but a basic understanding of how they worked, 
			and now I had to write them using methods of all things.<br />
			In the end, writing queries using methods helped me understand more complex SQL functionalities, 
			so I effectively learned new SQL knowledge alongside how to write model queries with Django.<br />
			<br />
			<TextCenter>These are 3 of a handful of the more complex queries I wrote for the tournament system:</TextCenter>
			<br />
			<PostIMG
				title={`Tournament queries`}
				date={`07/09/2021`}
				src={Queries01}
				setModal={setModal}
				className={`w-80 m-auto`}
			/>
			<br />
			<TextCenter>
				Finally, using the 3rd query I can generate the rankings of the tournament.<br />
				Again, I wasn't given a design prior to making this, so I had to improvize with a listing that replaced the tourney scheme with the ranks, as shown below.<br />
				As you can see, I won the tournament and am therefore the best at darting, despite all these accounts being mine.
			</TextCenter>
			<br />
			<PostIMG
				title={`Attendees ranked by total score`}
				date={`07/09/2021`}
				src={Ranking01}
				setModal={setModal}
				className={`w-80 m-auto`}
			/>
			<br />
			<TextCenter><TextSubTitle className={`py-4`} id={`participation`}>Participation</TextSubTitle></TextCenter>
			<br />
			My last task on this project included creating a panel for managers to sign in existing players, 
			or the creation of attendees that dont have an account if the desired player does not exist on the website.<br />
			<br />
			You can search for a user and bulk select any users that match your query, then sign them in as an attendee all at once.<br />
			Additionally, if your query matches no existing players, 
			a new form will be displayed that allows you to create an attendee based on a provided email, without the participant needing an account.<br />
			This effectively opens the door to on-location tournaments where only the manager needs an account.<br />
			<br />
			In the first gif, you can see <TextBold>2</TextBold> attendees being added instead of the selected 4, since 2 of them are already participating.<br />
			Yes, well spotted. That is indeed a bird holding a glock.<br />
			<br />
			<IMGGrid>
				<IMGGridEntry>
					<IMGViewer
						title={`Adding existing players`}
						date={`07/09/2021`}
						src={Sign01}
						setModal={setModal}
					/>
				</IMGGridEntry>
				<IMGGridEntry>
					<IMGViewer
						title={`Adding a non-existing player`}
						date={`07/09/2021`}
						src={Sign02}
						setModal={setModal}
					/>
				</IMGGridEntry>
			</IMGGrid>
		</ProjectLayout>
	)
}

export default Dartscore;