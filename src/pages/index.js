import React, {
	useRef
} from 'react';
import { differenceInYears } from 'date-fns';

import TextTitle from '/src/components/text/text-title';
import TextSubText from '/src/components/text/text-subtext';
import TextSubTitle from '/src/components/text/text-subtitle';
import TextMark from '/src/components/text/text-mark';
import AffinityCard from '/src/components/affinity-card';
import Timeline, {
	Entry as TimelineEntry
} from '/src/components/timeline';

const IndexPage = ({ location }) => {
	const myAge = useRef(differenceInYears(new Date(), new Date('2001-10-15')));

	return (
		<div id={`index`}>
			<TextSubText
				id={'intro'}
				wrapClassName={`text-center`}
			>
				Hello and welcome!<br/>
				<br/>
				I am a {myAge.current} year old Software Developer who graduated on Associate level in mid 2021,<br/>
				(Equivalent of MBO 4),<br/>
				and live in the Netherlands.<br/>
				<br/>
				Most of my spare time is spent working on video games as a hobby,<br/>
				hoping to one day fulfill my dream of being able to live out the rest of my life working on video games that people can enjoy.<br/>
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
						Familiar with object oriented principles {'&'} source control.<br/>
						<br/>
						Experienced in using languages such as:<br/>
						C#, Python, GDScript, Php, Lua, JavaScript.<br/>
					</AffinityCard>
					<AffinityCard
						faClassName={'fa-chalkboard-teacher'}
						title={'Direction & Management'}
					>
						2+ years of experience managing projects as a scrum master,
						while also being a part of their development teams.<br/>
						<br/>
						Scrum {'&'} Agile is a norm.<br/>
						Also capable of working with Jira {'&'} Trello as well as the good old fashioned paper and markers.
					</AffinityCard>
					<AffinityCard
						faClassName={'fa-gamepad'}
						title={'Game Development'}
					>
						4+ years of experience as a hobby,<br/>
						ontop of having made 2 prototypes as part of a school project.<br/>
						<br/>
						Currently working on 2 additional prototypes of my own, which you can find <TextMark>here</TextMark>.<br/>
						<br/>
						Experienced in using both Unity {'&'} Godot.
					</AffinityCard>
					<AffinityCard
						faClassName={'fa-file-code'}
						title={'Web Development'}
					>
						4+ years of experience as well as 2 successfull internships, back-end {'&'} front-end.<br/>
						<br/>
						Capable of designing websites in a variety of styles,<br/>
						as well as being experienced in designing and implementing databases.<br/>
						<br/>
						Feel free to take a look at a few of my past works <TextMark>here</TextMark>.
					</AffinityCard>
				</div>
			</div>

			<TextTitle id={'history'}>
				History
			</TextTitle>

			<div className={`relative max-w-400px mx-auto`}>
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
						as well as how to work in a team.<br/>
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
						Here I got to expand my knowledge in PHP {'&'} JS + JQuery by learning the CMS WordPress, 
						while making a one pager with Elementor, which would be the very first website I ever aired and singlehandedly created.<br/>
						<br/>
						Alongside that, I created about 1 to 4 websites every day using their custom CMS,
						which eventually ended up being a total of 80+ websites at the end of my internship.<br/>
						<br/>
						Inbetween my tasks there were also occurences where some of their clients' websites needed bugfixing,<br/>
						as well as new features, which I pushed through.<br/>
						<br/>
						After my internship I was handed a prototype game project, which we designed to be a 2D "Luigi's Mansion" type of game.
					</TimelineEntry>
					<TimelineEntry
						id={`history-college-final-year`}
						date={`2020 Aug. - 2021 Jul.`}
					>

						<TextSubTitle>The Final Year of College</TextSubTitle><br/>
						<br/>
						One half of the school year was spent working on 2 projects.<br/>
						The first project being <TextMark>a 3D printer dashboard website</TextMark>, which could both be used by students and teachers.<br/>
						The second and last one was an early Unity 2.5D prototype, in which I taught myself the basics of 3D {'&'} grid movement + more.<br/>
						<br/>
						The last half of the school year was an exam in the form of a final internship.<br/>
						Once again, Web Development, I learned Python + Django in the first two weeks,
						and got familiar with ReactJS afterwards.<br/>
						<br/>
						At the end of my internship I had designed {'&'} implemented <TextMark>a working KO tournament system</TextMark> for darting,
						for which I also implemented (and expanded on) a pre-designed front-end.
					</TimelineEntry>
					<TimelineEntry
						id={`history-vv-dialogue`}
						date={`2021 Apr. - 2021 May`}
					>
						<TextSubTitle>Writing Vibrant Venture Dialogue</TextSubTitle><br/>
						<br/>
						A good friend of mine and owner of <TextMark>Semag Games</TextMark> gave me the opportunity to write dialogue for his game <TextMark>Vibrant Venture</TextMark>.<br/>
						<br/>
						The task involved designing a group of characters' personalities based on the only thing available at the time, their artworks,
						and then writing a big batch of interactive dialogue for each of them.<br/>
						<br/>
						The final document consists out of more than 6000 words!<br/>
						You can play the game and view my contribution from the update Alpha 5 and on, by visiting the game's town.
					</TimelineEntry>
					<TimelineEntry
						id={`history-present-day`}
						date={`2021 Jul.`}
					>
						<TextSubTitle>Present Day</TextSubTitle><br/>
						<br/>
						I graduated college as a Software Developer on Associate level.<br/>
						<br/>
						Development on the prototype <TextMark>"Project Eterna"</TextMark> is started.<br/>
						Development on the prototype <TextMark>"Project Birds"</TextMark> is started.<br/>
						Development on <TextMark>my personal website</TextMark> is started<br/>(yes, this one!).
					</TimelineEntry>
				</Timeline>
			</div>

			<TextSubText wrapClassName={`pt-6 text-center`}>
				Thank you for your interest thus far!<br/>
				<br/>
				I intentionally did not include any personal info and details for privacy and safety reasons.<br/>
				For any additional questions, please feel free to contact me.<br/>
				<br/>
				Contact info is shared on <TextMark>this page</TextMark>.
			</TextSubText>
		</div>
	)
}

export default IndexPage;