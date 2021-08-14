import React, {
	useRef
} from 'react';
import { differenceInYears } from 'date-fns';

import TextTitle from '/src/components/text/text-title';
import TextSub from '/src/components/text/text-sub';
import TextMark from '/src/components/text/text-mark';
import AffinityCard from '/src/components/affinity-card';

const IndexPage = ({ location }) => {
	const myAge = useRef(differenceInYears(new Date(), new Date('2001-10-15')));

	return (
		<div id={`index`}>
			<TextSub
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
			</TextSub>

			<TextTitle id={'affinities'}>
				Affinities
			</TextTitle>

			<div className={`relative flex justify-center w-full`}>
				<div className={`relative grid grid-cols-2 gap-4 w-full max-w-700px`}>
					<AffinityCard
						faClassName={'fa-code'}
						title={'Programming'}
					>
						4+ years of experience as well as a hobby.<br/>
						Familiar with object oriented principles.<br/>
						<br/>
						Experienced in using languages such as:<br/>
						C#, Python, GDScript, Php, Lua, JavaScript.<br/>
					</AffinityCard>
					<AffinityCard
						faClassName={'fa-code'}
						title={'Direction & Management'}
					>
						2+ years of experience managing projects as a scrum master,
						while also being a part of their development teams.<br/>
						<br/>
						Scrum {'&'} Agile is a norm.<br/>
						Also capable of working with Jira {'&'} Trello as well as the good old fashioned paper and markers.
					</AffinityCard>
					<AffinityCard
						faClassName={'fa-code'}
						title={'Game Development'}
					>
						4+ years of experience as a hobby,<br/>
						ontop of having made 2 prototypes as part of a school project.<br/>
						<br/>
						Currently working on 2 additional prototypes of my own, which you can find <TextMark>here</TextMark>.
						<br/>
						Experienced in using both Unity {'&'} Godot.
					</AffinityCard>
					<AffinityCard
						faClassName={'fa-code'}
						title={'Web Development'}
					>
						4+ years of experience as well as 2 successfull internships, back-end {'&'} front-end.<br/>
						<br/>
						Capable of designing websites in a variety of styles<br/>
						(A wacky and unique style like this one, for instance!).<br/>
						<br/>
						Feel free to take a look at a few of my past works <TextMark>here</TextMark>.
					</AffinityCard>
				</div>
			</div>
		</div>
	)
}

export default IndexPage;