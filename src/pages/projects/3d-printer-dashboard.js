import React, {
	useLayoutEffect,
} from 'react';

import ProjectLayout from '/src/layouts/project-layout';
import ProjectBanner from '/src/components/project-banner';
import TextTitle from '/src/components/text/text-title';
import TextCenter from '/src/components/text/text-center';
import TextItalic from '/src/components/text/text-italic';
import TextCenterLeft from '/src/components/text/text-center-left';
import TextBold from '/src/components/text/text-bold';
import ULOut from '/src/components/ul-out';

import Header from '/src/images/projects/3d-printer-dashboard/printer-header.png';
import Dashboard01 from '/src/images/projects/3d-printer-dashboard/dashboard01.mp4';
import Dashboard02 from '/src/images/projects/3d-printer-dashboard/dashboard02.mp4';

const PrinterDashboard3D = ({ setModal, setContents }) => {
	useLayoutEffect(() => {
		setContents([
			{ displayName: 'Experience', id: 'experience', children: [] },
			{ displayName: 'About', id: 'about', children: [] },
			{ displayName: 'Development', id: 'development', children: [] },
			{ displayName: 'Results', id: 'results', children: [] },
		]);
	}, [setContents]);

	return (
		<ProjectLayout projectId={`entry-3d-printer-dashboard`}>
			<ProjectBanner
				id={`project`}
				className={`mb-6`}
				imgTitle={`Overview of the landing page`}
				date={`--/10/2020`}
				img={Header}
				setModal={setModal}
			>
				3D Printer Dashboard
			</ProjectBanner>

			<TextTitle id={`experience`}>
				Experience
			</TextTitle>
			<TextBold>
				<TextCenterLeft>
					<ULOut>
						<li>Laravel.</li>
						<li>Vue.</li>
						<li>ThreeJS.</li>
						<li>Customer communication.</li>
						<li>Planning {'&'} managing a project.</li>
						<li>Working with 3rd party API's and communicating with external devices.</li>
						<li>Full-stack development.</li>
					</ULOut>
				</TextCenterLeft>
			</TextBold>

			<TextTitle id={`about`}>
				About
			</TextTitle>
			<TextCenter>
				This project was an exam I had to take which would determine whether or not I was eligible to attend my final internship.<br />
				Originally I would be assigned to a real customer (not just one of the teachers), but due to covid there was no choice but to have a teacher play as customer.<br />
				<br />
				You'd probably think I'd be handed a paper with all the requirements, right?<br />
				Haha, no!<br />
				At this school, we hold a meeting that involves the customer, where we get to know eachother and what we need from eachother.<br />
				Making sure the product met the customer's requirements was <TextBold>my responsibility</TextBold>, 
				and plays a key role as to whether or not you succeed in the end.<br />
				<br />
				The customer requested me to make a web application that would be accessible to teachers and students, 
				where the students could upload 3d models and watch the 3d printer do its thing, 
				while teachers would be able to download these models and have them be 3d-printed.<br />
				They specifically requested for the application to be made in Laravel 8, 
				since their old website was made in Laravel 7 and they did not have the time to port things over.<br />
				So when you can "hire" someone, why not order an entirely new website instead?
			</TextCenter>

			<TextTitle id={`development`}>
				Development
			</TextTitle>
			Like any other project at the college course I attended, 
			I started out by meeting with the client, getting to know eachother, getting details about what kind of product they want, 
			and finally, making an appointment to meet again at a later date so that I could present my plan.<br />
			<br />
			With some minor design adjustments and my plan approved, the development phase began.<br />
			The project lasted for 6 weeks divided into 3 sprints.<br />
			The 1st sprint's focus was to get the entire layout and styling done.<br />
			Being ahead of my schedule, I could also start working on user accounts and permissions.<br />
			<br />
			The 2nd sprint revolved entirely around the back-end.<br />
			I made...<br />
			<br />
			<TextCenterLeft>
				<ULOut>
					<li>An embedded 3D model viewer.</li>
					<li>A login and registration system, where only students and employees could sign up.</li>
					<li>The ability to view live-feed {'&'} statistics from the 3D printer.</li>
					<li>The ability to upload files and for the teachers to manage them.</li>
					<li>A file queue displaying the files that will be printed.</li>
					<li>Teachers able to lock accounts and remove them.</li>
				</ULOut>
			</TextCenterLeft>
			<br />
			Being ahead of my schedule once more by almost two weeks, I use the last sprint to focus on customer feedback and nice-to-haves.<br />

			<TextTitle id={`results`}>
				Results
			</TextTitle>
			<TextCenter>
				Included below are two videos that I made to showcase to the examinators after having wrapped things up with my client.<br />
				(Spoiler alert: I passed)
			</TextCenter>
			<br />
			<TextCenter><TextBold><TextItalic>
				A video showcasing the main functionality of the entire website.
			</TextItalic></TextBold></TextCenter>
			<video controls>
				<source src={Dashboard01} type={`video/mp4`} />
			</video>
			<br />
			<TextCenter><TextBold><TextItalic>
				A video showcasing the 3D model viewer that uses a model I made.
			</TextItalic></TextBold></TextCenter>
			<video controls>
				<source src={Dashboard02} type={`video/mp4`} />
			</video>
		</ProjectLayout>
	)
}

export default PrinterDashboard3D;