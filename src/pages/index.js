import React, {
	useRef,
	useLayoutEffect,
} from 'react';
import {
	differenceInYears,
	format
} from 'date-fns';

import TextTitle from '/src/components/text/text-title';
import TextSubText from '/src/components/text/text-subtext';
import TextSubTitle from '/src/components/text/text-subtitle';
import TextMark from '/src/components/text/text-mark';
import TextBold from '/src/components/text/text-bold';
import TextLink from '/src/components/text/text-link';
import AffinityCard from '/src/components/affinity-card';
import SEO from '/src/components/seo';
import Timeline, {
	Entry as TimelineEntry
} from '/src/components/timeline';

const IndexPage = ({ location, setContents }) => {
	const myAge = useRef(differenceInYears(new Date(), new Date('2001-10-15')));
	const date = useRef(format(new Date(), `yyyy MMM`));

	useLayoutEffect(() => {
		setContents([
			{ displayName: 'Introduction', id: 'intro', children: [] },
			{ displayName: 'Affinities', id: 'affinities', children: [] },
			{ displayName: 'History', id: 'history', children: [
				{ displayName: 'Attending College', id: 'history-college-year-one', children: [] },
				{ displayName: '1st Internship', id: 'history-first-internship', children: [] },
				{ displayName: 'Final Year of College', id: 'history-college-final-year', children: [] },
				{ displayName: 'Writing Vibrant Venture Dialogue', id: 'history-vv-dialogue', children: [] },
				{ displayName: 'Graduating', id: 'history-graduating', children: [] },
				{ displayName: 'Rico\'s Softworks', id: 'history-ricosoftworks', children: [] },
				// { displayName: 'Semag Games\' Website', id: 'history-semag-website', children: [] },
				{ displayName: 'Present Day', id: 'history-present-day', children: [] },
			] },
		])
	}, [setContents]);

	return (
		<div id={`index`}>
			<SEO
				pageTitle={`About`}
				desc={`Learn about who I am and what I do!`}
				location={location}
			/>

			<TextSubText
				id={'intro'}
				wrapClassName={`text-center pt-4`}
			>
				Hello and welcome!<br/>
				<br/>
				I am a {myAge.current} year old Dutch Software Developer who graduated MBO 4 at Landstede Harderwijk,<br/>
				(Equivalent to college on Associate level)<br/>
				and live in the Netherlands.<br/>
				<br/>
				My passion is to be working on video games, which is what I do as a hobby in my spare time.<br />
				My dream is to be able to live out the rest of my life working on video games that people can enjoy.<br/>
			</TextSubText>

			<TextTitle id={'affinities'}>
				Affinities
			</TextTitle>

			<div className={`relative flex justify-center w-full`}>
				<div className={`relative grid grid-cols-1 tablet:grid-cols-2 gap-4 w-full max-w-700px align-center`}>
					<AffinityCard
						faClassName={'fa-laptop-code'}
						title={'Programming'}
					>
						4+ years of experience as well as a hobby.<br/>
						Familiar with <TextBold>object oriented principles {'&'} source control</TextBold>.<br/>
						<br/>
						Experienced in using languages such as:<br/>
						<TextBold>
							C#, Python, GDScript, Php, Lua, JavaScript.<br/>
						</TextBold>
					</AffinityCard>
					<AffinityCard
						faClassName={'fa-chalkboard-teacher'}
						title={'Direction & Management'}
					>
						2+ years of experience managing projects as a scrum master,
						while also being a part of their development teams.<br/>
						<br/>
						<TextBold>Scrum {'&'} Agile</TextBold> is a norm.<br/>
						Also capable of working with <TextBold>Jira {'&'} Trello</TextBold> as well as the good old fashioned paper and markers.
					</AffinityCard>
					<AffinityCard
						faClassName={'fa-gamepad'}
						title={'Game Development'}
					>
						4+ years of experience as a hobby,<br/>
						ontop of having made 2 prototypes as part of a school project.<br/>
						<br/>
						Currently working on 2 additional prototypes of my own, which you can find <TextLink to={`/projects`}>here</TextLink>.<br/>
						<br/>
						Experienced in using both <TextBold>Unity {'&'} Godot</TextBold>.
					</AffinityCard>
					<AffinityCard
						faClassName={'fa-file-code'}
						title={'Web Development'}
					>
						4+ years of experience as well as 2 successfull internships, <TextBold>back-end {'&'} front-end</TextBold>.<br/>
						<br/>
						Capable of designing websites in a variety of styles,<br/>
						as well as being experienced in <TextBold>designing and implementing databases</TextBold>.<br/>
						<br/>
						Experience in using the following:<br/>
						<TextBold>Laravel, ReactJS, Next, Gatsby, Wordpress, MySQL, Drupal, Django + REST, JQuery, Vue, HTML, JSX, CSS, SCSS, Tailwind</TextBold>
					</AffinityCard>
				</div>
			</div>

			<TextTitle id={'history'}>
				History
			</TextTitle>

			<div className={`relative max-w-500px mx-auto`}>
				<Timeline>
					<TimelineEntry
						id={`history-college-year-one`}
						date={`2018 Aug. - 2019 Jul.`}
					>
						<TextSubTitle>Attending College</TextSubTitle><br/>
						<br/>
						Enrolled as a first year in college,<br/>
						(MBO in the Netherlands)<br/>
						studying the course Software Development<br/>
						<br/>
						During my first year I learned the basics of object oriented programming, 
						as well as how to work in a team by literally just being assigned a team and a project.<br/>
						<br/>
						We would have new projects and be assigned to a new team every 2-3 months, 
						effectively repeating and honing our development process while we gained practical experience.<br/>
						<br/>
						Each team had their own responsibility of managing internal roles and planning, for both the project itself and meetings.<br/>
						Taking the initiative was actively encouraged.
					</TimelineEntry>
					<TimelineEntry
						id={`history-first-internship`}
						date={`2019 Aug. - 2020 Jul.`}
					>
						<TextSubTitle>1st Internship</TextSubTitle><br/>
						<br/>
						Began my first internship as a Web Developer in the 2nd year of college.<br/>
						<br/>
						Here I got to expand my knowledge in PHP {'&'} JS + JQuery by learning the CMS Wordpress, 
						while making a one pager with Elementor, which would be the very first website I ever aired and singlehandedly created.<br/>
						<br/>
						Alongside that, I created about 1 to 4 websites every day using their custom CMS,
						which eventually ended up being a total of 80+ websites at the end of my internship.<br/>
						<br/>
						Inbetween my tasks there were also occurences where some of their clients' websites needed bugfixing,<br/>
						as well as new features, which I pushed through.<br/>
						<br/>
						After my internship I was tasked with making a game prototype, 
						which we designed to be a <TextLink to={`/projects/phantasma`}>2D "Luigi's Mansion" type of game</TextLink>.
					</TimelineEntry>
					<TimelineEntry
						id={`history-college-final-year`}
						date={`2020 Aug. - 2021 Jul.`}
					>
						<TextSubTitle>Final Year of College</TextSubTitle><br/>
						<br/>
						One half of the school year was spent working on 2 projects.<br/>
						The first project being a <TextLink to={`/projects/3d-printer-dashboard`}>3D printer dashboard</TextLink>, 
						which could both be used by students and teachers.<br/>
						The second and last one was an early <TextLink to={`/projects/2_5d-unity-prototype`}>Unity 2.5D prototype</TextLink>, 
						in which I taught myself the basics of 3D {'&'} grid movement + more.<br/>
						<br/>
						The last half of the school year was an exam in the form of a final internship.<br/>
						Once again, Web Development, I learned Python + Django in the first two weeks,
						and got familiar with ReactJS afterwards.<br/>
						<br/>
						At the end of my internship I had designed {'&'} implemented <TextLink to={`/projects/dartscore`}>a working KO tournament system</TextLink> for darting,
						for which I also implemented (and expanded on) its front-end.
					</TimelineEntry>
					<TimelineEntry
						id={`history-vv-dialogue`}
						date={`2021 Apr. - 2021 May.`}
					>
						<TextSubTitle>Writing Vibrant Venture Dialogue</TextSubTitle><br/>
						<br/>
						A good friend of mine and owner of <TextMark>Semag Games</TextMark> gave me the opportunity to write dialogue for his game <TextLink
							external={true}
							to={`https://store.steampowered.com/app/1264520/Vibrant_Venture/`}
						>Vibrant Venture</TextLink>.<br/>
						<br/>
						The task involved designing a group of characters' personalities based on the only thing available at the time, their artworks,
						and then writing a big batch of interactive dialogue for each of them.<br/>
						<br/>
						The final document consists out of more than 6000 words!<br/>
						You can play the game and view my contribution from the update Alpha 5 and on, by visiting the game's town.
					</TimelineEntry>
					<TimelineEntry
						id={`history-graduating`}
						date={`2021 Jul.`}
					>
						<TextSubTitle>Graduating</TextSubTitle><br/>
						<br/>
						I graduated college as a Software Developer on Associate level.<br/>
						<br/>
						Development on the prototype <TextLink to={`/projects/eterna`}>Project Eterna</TextLink> was started.<br/>
						Development on the prototype <TextLink to={`/projects/birds`}>Project Birds</TextLink> was started.<br/>
					</TimelineEntry>
					<TimelineEntry
						id={`history-ricosoftworks`}
						date={`2021 Aug. - 2021 Sep.`}
					>
						<TextSubTitle>Rico's Softworks</TextSubTitle><br/>
						<br/>
						Development is started on the 2nd rendition of Rico's Softworks, 
						alongside aiding development in a yet-to-be-announced project.<br />
						<br />
						Later that month, development on the website was completed, 
						and writing the posts and polishing existing content began.<br />
						<br />
						You can read more about the development of this website <TextLink to={`/projects/ricosoftworks`}>here</TextLink>.
					</TimelineEntry>
					{/* <TimelineEntry
						id={`history-semag-website`}
						date={`2021 Aug.`}
					>
						<TextSubTitle>Semag Games' Website</TextSubTitle><br/>
						<br/>
						Much like before, my friend asked me to lend a hand in creating a website for his company, where their games could be displayed as well.<br/>
						<br/>

						Due to my already tackling 3 projects, and having my hands quite full on this website at the time,
						I instead offered advice on how to approach the project using my own experience,
						and helped him get a hang of ReactJS {'&'} Sass.<br/>
						<br/>
						I also made the website responsive, added a mobile nav bar, and helped fixing styling related issues.<br/>
						You can read more on this <TextMark>here</TextMark>.
					</TimelineEntry> */}
					<TimelineEntry
						id={`history-present-day`}
						date={`2021 Sep. ${date.current}.`}
					>
						<TextSubTitle>Present Day</TextSubTitle><br/>
						<br/>
						Currently working as a Software Engineer and developing 2 prototypes in my spare time:<br />
						<TextLink to={`/projects/eterna`}>Project Eterna</TextLink> {'&'} <TextLink to={`/projects/birds`}>Project Birds</TextLink>.
					</TimelineEntry>
				</Timeline>
			</div>

			<TextSubText wrapClassName={`pt-6 pb-12 text-center`}>
				Thank you for your interest thus far!<br/>
				<br/>
				personal details are excluded on this website for privacy reasons.<br/>
				For any additional questions, please feel free to contact me.<br/>
				<br/>
				Contact info is shared on <TextLink to={`/contact`}>this page</TextLink>.
			</TextSubText>
		</div>
	)
}

export default IndexPage;