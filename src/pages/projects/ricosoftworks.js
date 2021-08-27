import React, {
	useRef,
	useLayoutEffect,
} from 'react';

import ProjectLayout from '/src/layouts/project-layout';
import ProjectBanner from '/src/components/project-banner';
import TextLink from '/src/components/text/text-link';
import TextCenter from '/src/components/text/text-center';
import TextLeft from '/src/components/text/text-left';
import TextTitle from '/src/components/text/text-title';
import TextItalic from '/src/components/text/text-italic';
import TextSubTitle from '/src/components/text/text-subtitle';
import TextBold from '/src/components/text/text-bold';
import IMGViewer from '/src/components/img-viewer';
import IMGGrid, {
	Entry as IMGGridEntry
} from '/src/components/img-grid';

import Header from '/src/images/projects/ricosoftworks/ricosoftworks-header.png';
import AboutCode01 from '/src/images/projects/ricosoftworks/ricosoftworks-about-code01.png';
import AboutCode02 from '/src/images/projects/ricosoftworks/ricosoftworks-about-code02.png';
import AboutCode03 from '/src/images/projects/ricosoftworks/ricosoftworks-about-code03.png';
import AboutCode04 from '/src/images/projects/ricosoftworks/ricosoftworks-about-code04.png';

const RicoSoftworks = ({ setContents, setModal }) => {
	useLayoutEffect(() => {
		setContents([
			{ displayName: 'Motivation', id: 'motivation', children: [] },
			{ displayName: 'Preparation', id: 'preparation', children: [
				{ displayName: 'Important Questions', id: 'important-questions', children: [] },
				{ displayName: 'Defining Purpose', id: 'defining-purpose', children: [] },
				{ displayName: 'Defining Resources', id: 'defining-resources', children: [] },
				{ displayName: 'The Plan', id: 'the-plan', children: [] },
			] },
			{ displayName: 'Implementation', id: 'implementation', children: [
				{ displayName: 'About Page (Design)', id: 'about-page-design', children: [] },
				{ displayName: 'About Page (Code)', id: 'about-page-code', children: [] },
			] },
		]);
	}, [setContents]);

	return (
		<ProjectLayout projectId={`entry-portfolio`}>
			<ProjectBanner
				id={`project`}
				className={`mb-6`}
				img={Header}
				setModal={setModal}
			>
				Rico's Softworks
			</ProjectBanner>
			
			<TextTitle id={`motivation`}>
				Motivation
			</TextTitle>
			<TextCenter>
				It's early July, 2021.<br/>
				I had just finished my final exams and internship for the Software Development course 
				and knew that I wanted to be able to put my talents to use and develop them while out in the field.<br/>
				Obviously what I felt was the urge to get a job and work!<br/>
				<br/>
				But before that, I wanted something better than a boring Word document to house my experiences.<br/>
				I wanted to go the extra mile to prove my abilities through actions, not just words.<br/>
				<br/>
				And so, right after finishing my internship I started working on this website.
			</TextCenter><br/>

			<TextTitle id={`preparation`}>
				Preparation
			</TextTitle>
			<TextCenter>
				<TextSubTitle id={`important-questions`} className={`py-4`}>
					Important Questions
				</TextSubTitle><br/>
				<br/>
				Before we dive right into implementing features, I thought of 3 important questions to ask myself.<br/>
				So let's answer these first! These questions are fairly straightforward and listed in general perspective, but can help define the ground works we should be focusing on:<br/>
				<br/>
				<TextLeft>
					<TextItalic><TextBold>
						- Why should this product be worked on? (Motivation/Reason)<br/>
						- What is the goal of the product? (Purpose/Goal)<br/>
						- Can our team make it? (Resources/Probability)
					</TextBold></TextItalic>
				</TextLeft><br/>
				<TextSubTitle id={`defining-purpose`} className={`py-4`}>
					Defining Purpose
				</TextSubTitle><br/>
				<br/>
				We already talked about the motivation, but what about its purpose?<br/>
				Right from the start, I already knew what the purpose of my very own website would be:<br/>
				<br/>
				<TextLeft>
					<TextItalic><TextBold>
						- To showcase who I am, what I do, and what drives me.<br/>
						- To list my past projects and contributions in detail.<br/>
						- To act as a bridge between myself and potential clients or recruiters.
					</TextBold></TextItalic>
				</TextLeft><br/>
				<TextSubTitle id={`defining-resources`} className={`py-4`}>
					Defining Resources
				</TextSubTitle><br/>
				<br/>
				Having defined its purpose, we can then use that to establish the minimum we need in order to meet the requirements for fulfilling the purpose of our product.<br/>
				Keeping in mind the fact that I'm going to be working on a website, 
				I thought the best way to summarize my capabilities is by having an about page that lists my skills and experiences.<br/>
				I thought of having a person visit my site and have the about page be the very first thing they see, because it's the very core of the website.<br/>
				They would be able to quickly get an idea of who I am and what I can do, and then optionally take a look at my projects or contact me straight away.<br/>
				<br/>
				The next obvious thing to decide was having the projects be its own seperate page.<br/>
				I wanted to be able to write detailed posts about a project if I wanted to, so that would mean I would have to make seperate pages for each project post.<br/>
				The projects page itself would contain a list of projects, perhaps with additional search functionalities just to make it easier for people to find what they're interested in, 
				which would also give me the perfect opportunity to show off my capabilities a bit by creating a filter system. Perfect!<br/>
				<br/>
				Lastly, I needed something that told visitors how they could reach out to me if needed.<br/>
				Most if not all websites of this kind do this by providing a contact page, so I thought it was a good idea to do the same thing.<br/>
				One primary feature most contact pages have is a contact form.<br/>
				I personally wasn't sure if I wanted to spend the time making something like this, 
				since forms usually require lots of validation checks, very much so for mailing.<br/>
				So I decided to move that idea aside for the time being and keep it as an optional thing to add eventually.<br/>
				<br/>
				Having established the basic necessities for my website, I can now split them up into smaller components and think about what I will use to make them.<br/>
				<br/>
				<TextSubTitle id={`the-plan`} className={`py-4`}>
					The Plan
				</TextSubTitle><br/>
				<br/>
				Before I think about all of the features each page is going to have, it's important to determine a deadline.<br/>
				I mean, I do want to finish this project <TextBold>at some point</TextBold>, right?<br/>
				Even if there's no one telling you when they want something to be finished, 
				it's still very useful to tell yourself when you should be finished in effort to encourage productivity.<br/>
				Not only that, but it's especially useful to get a feeling of what features you should be focusing on first, and what you shouldn't focus on at all.<br/>
				<br/>
				In any case, I knew that I officially entered summer holidays after having graduated college, 
				and I want to have a job in September.<br/>
				So I determined the deadline to be the 31st of August, 2021.<br/>
				<br/>
				Great! I successfully visualized my deadline, giving me the ability to accurately determine what tasks need to be done and when, so let's start doing that now.<br/>
				I won't go into too much detail about every single component on each page, but the main idea here is that you basically take the requirements, 
				and "disect" them into something known as "user stories".<br/>
				User stories describe a feature on a project.<br/>
				For example, a user story could be something like "As a visitor, I want to be able to search for a project.".<br/>
				Still, it's quite a lengthy sentence, isn't it?<br/>
				Usually when you plan projecs on paper you would want to keep things a bit short yet easy to understand, so naming your user story "Project Search" is fine too.<br/>
				<br/>
				With that example out of the way, you can imagine me creating additional stories for other components, like the timeline on the about page, and so on.<br/>
				This may all sound very familiar to you if you've heard of Scrum or Agile before, 
				and you can guess that the next thing to do would be to disect those user stories even further into sub tasks and assign points to them,
				and then determine when to work on what.<br/>
				<br/>
				Officially for bigger projects that involve a client you would split your time into sprints and assign a goal to each sprint, but for this project I'm my own client,
				so I decided to skip that part and get right to work the next day.<br/>
				Props to you if you read all that!
			</TextCenter>

			<TextTitle id={`implementation`}>
				Implementation
			</TextTitle>
			<TextCenter>
				Before I started working on anything I already decided that I wanted to build my website using ReactJS.<br/>
				I knew that my website was going to be static and I didn't need any back-end, so I looked into a framework that optimized for exactly that purpose.<br/>
				That's when I stumbled upon Gatsby, and determined it would be good to encapsulate my website in its framework as it's primarily targeted towards portfolio websites, 
				which is exactly the kind of website I'm making!<br/>
				<br/>
				<TextSubTitle id={`about-page-design`} className={`py-4`}>About Page (Design)</TextSubTitle><br/>
				<br/>
				After having installed all the dependencies, like Tailwind to speed up styling, I started working on the about page.<br/>
				First tackling the about page is actually something very beneficial, because as I build the page I am also making several things into reusable components,
				like one for styling text into <TextItalic>italic</TextItalic>, a <TextSubTitle>subtitle</TextSubTitle>, or making it a <TextLink>link</TextLink>, and so on!<br/>
				<br/>
				I wanted to structure the about page in 3 parts, where it's ordened from quick and shortened information to more detailed.<br/>
				That's why when you visit the page, the first thing you see is a short introduction about myself and what I do.<br/>
				If people are interested, they can scroll down to what exactly my affinities are, which go into more detail than the quick introduction.<br/>
				Afterward, if people <TextBold>are still interested</TextBold>, they can see most of my experience history below that.<br/>
				Would be weird if it was the other way around, right?<br/>
				<br/>
				Aside from that, I wanted to put the sidebar I included in my design to good use by having it contain a table of contents, 
				since there will be pages with a lot of text (no kidding) and I know from experience that I often just want to be able to see where I can find something.<br/>
				So, I made myself a component that accepts a list of objects, each containing a display name and an id that refers to the corresponding element.<br/>
				With that, inside the component I can simply add an anchor tag that refers to the id.<br/>
				Due to the way anchor tags work, including a hashtag as the first character in its href attribute and 
				clicking the anchor will scroll the window to make the element with that id visible.<br/>
				<br/>
				<TextSubTitle id={`about-page-code`} className={`py-4`}>About Page (Code)</TextSubTitle><br/>
				<br/>
				Anyways, after such a massive wall of text, I figure you probably want to see some code.<br/>
				No worries, got some right here!<br/>
				<TextItalic>(Click the images to enlarge them)</TextItalic><br/>
				<br/>
				<IMGGrid>
					<IMGGridEntry>
						<IMGViewer
							title={`Imports, dynamic dates, & applying page contents`}
							date={`2021/08/27`}
							src={AboutCode01}
							setModal={setModal}
						/>
					</IMGGridEntry>
					<IMGGridEntry>
						<IMGViewer
							title={`Reusable components example`}
							date={`2021/08/27`}
							src={AboutCode02}
							setModal={setModal}
						/>
					</IMGGridEntry>
					<IMGGridEntry>
						<IMGViewer
							title={`Page content button example`}
							date={`2021/08/27`}
							src={AboutCode03}
							setModal={setModal}
						/>
					</IMGGridEntry>
					<IMGGridEntry>
						<IMGViewer
							title={`Rendering the content buttons with recursion`}
							date={`2021/08/27`}
							src={AboutCode04}
							setModal={setModal}
						/>
					</IMGGridEntry>
				</IMGGrid>
			</TextCenter>
		</ProjectLayout>
	)
}

export default RicoSoftworks;