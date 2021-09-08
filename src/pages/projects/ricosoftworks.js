import React, {
	useLayoutEffect,
} from 'react';

import ProjectLayout from '/src/layouts/project-layout';
import ProjectBanner from '/src/components/project-banner';
import TextLink from '/src/components/text/text-link';
import TextCenter from '/src/components/text/text-center';
import TextCenterLeft from '/src/components/text/text-center-left';
import TextLeft from '/src/components/text/text-left';
import TextTitle from '/src/components/text/text-title';
import TextItalic from '/src/components/text/text-italic';
import TextSubTitle from '/src/components/text/text-subtitle';
import TextBold from '/src/components/text/text-bold';
import ULOut from '/src/components/ul-out';
import PostIMG from '/src/components/post-img';
import IMGViewer from '/src/components/img-viewer';
import IMGGrid, {
	Entry as IMGGridEntry
} from '/src/components/img-grid';

import Header from '/src/images/projects/ricosoftworks/ricosoftworks-header.png';
import AboutCode01 from '/src/images/projects/ricosoftworks/ricosoftworks-about-code01.png';
import AboutCode02 from '/src/images/projects/ricosoftworks/ricosoftworks-about-code02.png';
import AboutCode03 from '/src/images/projects/ricosoftworks/ricosoftworks-about-code03.png';
import AboutCode04 from '/src/images/projects/ricosoftworks/ricosoftworks-about-code04.png';
import ProjectsCode01 from '/src/images/projects/ricosoftworks/ricosoftworks-projects-code01.png';
import ProjectsCode02 from '/src/images/projects/ricosoftworks/ricosoftworks-projects-code02.png';
import ProjectsCode03 from '/src/images/projects/ricosoftworks/ricosoftworks-projects-code03.png';
import ProjectsCode04 from '/src/images/projects/ricosoftworks/ricosoftworks-projects-code04.png';
import ProjectsCode05 from '/src/images/projects/ricosoftworks/ricosoftworks-projects-code05.png';
import ProjectsCode06 from '/src/images/projects/ricosoftworks/ricosoftworks-projects-code06.png';
import ContactCode01 from '/src/images/projects/ricosoftworks/ricosoftworks-contact-code01.png';
import ContactCode02 from '/src/images/projects/ricosoftworks/ricosoftworks-contact-code02.png';
import ContactCode03 from '/src/images/projects/ricosoftworks/ricosoftworks-contact-code03.png';
import ContactCode04 from '/src/images/projects/ricosoftworks/ricosoftworks-contact-code04.png';
import PostCode01 from '/src/images/projects/ricosoftworks/ricosoftworks-post-code01.png';
import PostCode02 from '/src/images/projects/ricosoftworks/ricosoftworks-post-code02.png';
import PostCode03 from '/src/images/projects/ricosoftworks/ricosoftworks-post-code03.png';
import PostCode04 from '/src/images/projects/ricosoftworks/ricosoftworks-post-code04.png';
import PostCode05 from '/src/images/projects/ricosoftworks/ricosoftworks-post-code05.png';
import PostCode06 from '/src/images/projects/ricosoftworks/ricosoftworks-post-code06.png';
import Layout01 from '/src/images/projects/ricosoftworks/ricosoftworks-layout01.png';
import Old01 from '/src/images/projects/ricosoftworks/ricosoftworks-old01.gif';
import Old02 from '/src/images/projects/ricosoftworks/ricosoftworks-old02.gif';
import Old03 from '/src/images/projects/ricosoftworks/ricosoftworks-old03.png';
import Old04 from '/src/images/projects/ricosoftworks/ricosoftworks-old04.gif';
import Old05 from '/src/images/projects/ricosoftworks/ricosoftworks-old05.gif';
import Old06 from '/src/images/projects/ricosoftworks/ricosoftworks-old06.gif';

const RicoSoftworks = ({ setContents, setModal }) => {
	useLayoutEffect(() => {
		setContents([
			{ displayName: 'Experience', id: 'experience', children: [] },
			{ displayName: 'Motivation', id: 'motivation', children: [] },
			{ displayName: '(Re) Implementation', id: 're-implementation', children: [
				{ displayName: 'General Structure', id: 'general-structure', children: [] },
				{ displayName: 'About Page', id: 'about-page', children: [] },
				{ displayName: 'Projects Page', id: 'projects-page', children: [] },
				{ displayName: 'Contact Page', id: 'contact-page', children: [] },
				{ displayName: 'Posts', id: 'posts', children: [] },
			] },
			{ displayName: 'Afterword', id: 'afterword', children: [] },
			{ displayName: 'Old Website', id: 'old-website', children: [] },
		]);
	}, [setContents]);

	return (
		<ProjectLayout projectId={`entry-portfolio`}>
			<ProjectBanner
				id={`project`}
				className={`mb-6`}
				imgTitle={`An in-dev screenshot of the website`}
				date={`27/08/2021`}
				img={Header}
				setModal={setModal}
			>
				Rico's Softworks
			</ProjectBanner>

			<TextTitle id={`experience`}>
				Experience
			</TextTitle>
			<TextBold>
				<TextCenterLeft>
					<ULOut>
						<li>Front-end development.</li>
						<li>ReactJS (Hooks) + Gatsby.</li>
						<li>SEO {'&'} Accessibility.</li>
						<li>Tailwind.</li>
						<li>SCSS.</li>
						<li>Taking responsibility {'&'} managing valuable time.</li>
						<li>Webhosting.</li>
					</ULOut>
				</TextCenterLeft>
			</TextBold>
			
			<TextTitle id={`motivation`}>
				Motivation
			</TextTitle>
			<TextCenter>
				Near the end of my last internship I already began working on my own site that I could use as a portfolio.<br />
				I developed it to the point where mobile had a game-like navigation style using my custom made scrolling module.<br />
				You could scroll the navigation menu horizontally and optionally use arrows to increment the scroll position.<br />
				It had translation support as well! So why did I drop it?<br />
				<br />
				At the time of writing this, I have 4 years of experience in web development.<br />
				However, even experienced developers learn new things constantly.<br />
				In my case, I had never set up a React website from scratch before, and despite my experience gained from <TextLink to={`/projects/dartscore`}>dart-score</TextLink>, 
				there were still many things I did not know about React.<br />
				As I developed that website, its code became difficult to manage and expand upon, and I also grew to dislike my design more and more, 
				so I made the decision to start over and begin development on the website you're browsing right now, using the experience gained from the last.<br />
				<br />
				Not surprisingly, compared to the first website taking nearly 2 months to get to the state where you could search for a project, 
				that only took me a little less than 2 weeks to complete for this website, not reusing code from the old one.<br />
				<br />
				In this post you'll be having a look at the inner workings of this website and the thoughts behind key components, 
				and at the end I'll show you a few things from the old website.
			</TextCenter>

			<TextTitle id={`re-implementation`}>
				(Re) Implementation
			</TextTitle>
			<TextCenter><TextSubTitle className={`py-6`} id={`general-structure`}>General Structure</TextSubTitle></TextCenter>
			<br />
			I always wanted an easy on the eyes and a mix of retro and modern kind of theme for the website, 
			as well as for there to be a way to have a "table of contents" on all the things a page has to offer.<br />
			So I began writing out a basic html structure, which was even faster thanks to tailwind allowing for quickly accessible styles, 
			and ended up with something that contained page contents in a window separate from its outer contents, 
			the latter of which would house things like the header and nav menu.<br />
			<br />
			The page section, which would re-render on navigation, contained the page itself as well as the contents sidebar.<br />
			To you it may look like the site is divided horizontally, but underneath the hood it's actually divided <TextBold>vertically</TextBold>.<br />
			<br />
			<PostIMG
				title={`Site structure visualized`}
				date={`08/09/2021`}
				src={Layout01}
				setModal={setModal}
				className={`w-80 m-auto`}
			/>
			<br />
			<TextCenter><TextSubTitle className={`py-6`} id={`about-page`}>About Page</TextSubTitle></TextCenter>
			<br />
			One of the only two things I ended up reworking from the old website is the timeline, the old one of which you'll be able to see at the end of this post.<br />
			Aside from that, I divided the about page in 3 major segments, sorted on visitor priority interest.<br />
			Someone in for a quick glance would want to read a short version of who I am and what I do, 
			while someone with more time would want to read about my affinities ontop of that.<br />
			Finally, someone hooked from the two prior introductions would be interested in looking through my history, the timeline.<br />
			In the end, any of those 3 types of visitors would have the option to look through <TextLink to={`/projects`}>my projects</TextLink> after a glance at the about page, 
			where they can really get an idea of what I have been capable of so far.<br />
			<br />
			<TextCenter>Here's a look underneath the about page's hood</TextCenter>
			<br />
			<IMGGrid>
				<IMGGridEntry>
					<IMGViewer
						title={`Setting up the page contents`}
						date={`27/08/2021`}
						src={AboutCode01}
						setModal={setModal}
					/>
				</IMGGridEntry>
				<IMGGridEntry>
					<IMGViewer
						title={`Reusing components`}
						date={`27/08/2021`}
						src={AboutCode02}
						setModal={setModal}
					/>
				</IMGGridEntry>
				<IMGGridEntry>
					<IMGViewer
						title={`Table of contents button source code`}
						date={`27/08/2021`}
						src={AboutCode03}
						setModal={setModal}
					/>
				</IMGGridEntry>
				<IMGGridEntry>
					<IMGViewer
						title={`Rendering table of contents`}
						date={`27/08/2021`}
						src={AboutCode04}
						setModal={setModal}
					/>
				</IMGGridEntry>
			</IMGGrid>
			<br />
			<TextCenter><TextSubTitle className={`py-6`} id={`projects-page`}>Projects Page</TextSubTitle></TextCenter>
			<br />
			The projects page needed to be swiftly accessible, 
			so I included search {'&'} filter functionality so that visitors can look for posts that meet their interests in the snap of a finger.<br />
			I made a custom module for this which filters based on an array of objects, in this case the project entries.<br />
			For optimization reasons I also included a timer that would restart itself on every key input in the search bar, 
			as to avoid processing every key hit.<br />
			<br />
			<TextCenter>You've likely already experienced the rest for yourself, so here's a look at its code.</TextCenter>
			<br />
			<IMGGrid>
				<IMGGridEntry>
					<IMGViewer
						title={`Search filter & Bulk controls`}
						date={`08/09/2021`}
						src={ProjectsCode01}
						setModal={setModal}
					/>
				</IMGGridEntry>
				<IMGGridEntry>
					<IMGViewer
						title={`Window animations & filter functionalities`}
						date={`27/08/2021`}
						src={ProjectsCode02}
						setModal={setModal}
					/>
				</IMGGridEntry>
				<IMGGridEntry>
					<IMGViewer
						title={`Timer, initialization, and toggle functionality`}
						date={`27/08/2021`}
						src={ProjectsCode03}
						setModal={setModal}
					/>
				</IMGGridEntry>
				<IMGGridEntry>
					<IMGViewer
						title={`Search options window`}
						date={`27/08/2021`}
						src={ProjectsCode04}
						setModal={setModal}
					/>
				</IMGGridEntry>
			</IMGGrid>
			<br />
			<TextCenter><TextSubTitle className={`py-6`} id={`contact-page`}>Contact Page</TextSubTitle></TextCenter>
			<br />
			This page needed to first and foremost tell a visitor what I'm available for, 
			and what would be important to include when reaching out to me before showing contact info.<br />
			<br />
			For this I made what I call a TNF table which stands for true, null, and false.<br />
			<br />
			<TextCenterLeft>
				<ULOut>
					<li>"true" displays a green check mark.</li>
					<li>"null" displays an orange question mark for uncertainty.</li>
					<li>"false" displays a red cross.</li>
				</ULOut>
			</TextCenterLeft>
			<br />
			Lastly the contact information needed to be differentiated from normal text on the page, 
			so I made a new component that allowed for an icon, a title, and its content.<br />
			Exclusively to the email text since there's no contact form, I added a one-click-copy functionality.<br />
			<br />
			<TextCenter>See for yourself!</TextCenter>
			<br />
			<IMGGrid>
				<IMGGridEntry>
					<IMGViewer
						title={`Contact page source`}
						date={`27/08/2021`}
						src={ContactCode01}
						setModal={setModal}
					/>
				</IMGGridEntry>
				<IMGGridEntry>
					<IMGViewer
						title={`TNF table source`}
						date={`27/08/2021`}
						src={ContactCode02}
						setModal={setModal}
					/>
				</IMGGridEntry>
				<IMGGridEntry>
					<IMGViewer
						title={`Contact info table`}
						date={`27/08/2021`}
						src={ContactCode03}
						setModal={setModal}
					/>
				</IMGGridEntry>
				<IMGGridEntry>
					<IMGViewer
						title={`Clipboard component`}
						date={`27/08/2021`}
						src={ContactCode04}
						setModal={setModal}
					/>
				</IMGGridEntry>
			</IMGGrid>
			<br />
			<TextCenter><TextSubTitle className={`py-6`} id={`posts`}>Posts</TextSubTitle></TextCenter>
			<br />
			<TextCenter>As a bonus, here's a look at how posts are made.</TextCenter>
			<br />
			<IMGGrid>
				<IMGGridEntry>
					<IMGViewer
						title={`The many many imports`}
						date={`30/08/2021`}
						src={PostCode01}
						setModal={setModal}
					/>
				</IMGGridEntry>
				<IMGGridEntry>
					<IMGViewer
						title={`Basic post structure using existing components`}
						date={`30/08/2021`}
						src={PostCode02}
						setModal={setModal}
					/>
				</IMGGridEntry>
				<IMGGridEntry>
					<IMGViewer
						title={`Using the image grid`}
						date={`30/08/2021`}
						src={PostCode03}
						setModal={setModal}
					/>
				</IMGGridEntry>
				<IMGGridEntry>
					<IMGViewer
						title={`Image viewer component`}
						date={`30/08/2021`}
						src={PostCode04}
						setModal={setModal}
					/>
				</IMGGridEntry>
				<IMGGridEntry>
					<IMGViewer
						title={`Adding a project entry to the index`}
						date={`04/09/2021`}
						src={PostCode05}
						setModal={setModal}
					/>
				</IMGGridEntry>
				<IMGGridEntry>
					<IMGViewer
						title={`Defining tags`}
						date={`04/09/2021`}
						src={PostCode06}
						setModal={setModal}
					/>
				</IMGGridEntry>
			</IMGGrid>

			<TextTitle id={`afterword`}>
				Afterword
			</TextTitle>
			In the end, finishing the website took roughly 3 weeks, while the remaining time was spent writing posts and the necessary formatting components.<br />
			Polishing changes were also made, like including an "updated" label on posts, and adding click effects.<br />

			<TextTitle id={`old-website`}>
				Old Website
			</TextTitle>
			<TextCenter>
				Enjoy some older images and gifs from the scrapped website!<br />
				<br />
				The old design was inspired by google's material design, 
				and aimed to look a bit like a theme you'd see used in sports car dashboards.<br />
				It's all custom, just like the current website.
			</TextCenter>
			<br />
			<IMGGrid>
				<IMGGridEntry>
					<IMGViewer
						title={`Page layout`}
						date={`--/06/2021`}
						src={Old06}
						setModal={setModal}
					/>
				</IMGGridEntry>
				<IMGGridEntry>
					<IMGViewer
						title={`Custom navigation menu & scroller`}
						date={`--/06/2021`}
						src={Old01}
						setModal={setModal}
					/>
				</IMGGridEntry>
				<IMGGridEntry>
					<IMGViewer
						title={`Custom localization support`}
						date={`--/06/2021`}
						src={Old02}
						setModal={setModal}
					/>
				</IMGGridEntry>
				<IMGGridEntry>
					<IMGViewer
						title={`Contact page`}
						date={`--/06/2021`}
						src={Old03}
						setModal={setModal}
					/>
				</IMGGridEntry>
				<IMGGridEntry>
					<IMGViewer
						title={`Projects page layout & searching`}
						date={`--/09/2021`}
						src={Old04}
						setModal={setModal}
					/>
				</IMGGridEntry>
				<IMGGridEntry>
					<IMGViewer
						title={`Projects page tags filter`}
						date={`--/09/2021`}
						src={Old05}
						setModal={setModal}
					/>
				</IMGGridEntry>
			</IMGGrid>
		</ProjectLayout>
	)
}

export default RicoSoftworks;