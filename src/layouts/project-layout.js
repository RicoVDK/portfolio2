import React, {
	useRef
} from 'react';

import TextLink from '/src/components/text/text-link';
import NoContent from '/src/components/no-content';
import SEO from '/src/components/seo';

import Projects from '/project-index';

const ProjectLayout = ({
	location,
	projectId,
	children,
}) => {
	const project = useRef(Projects.find(project => project.id == projectId));
	const disabled = useRef(project.current.disabled);
	const helmet = useRef(
		<SEO
			pageTitle={`Projects > ${project.current.displayName}`}
			desc={project.current.description.replace('/<br/>/g', ' ')}
			img={project.current.img}
			location={location}
		/>
	);

	return disabled.current ? (
		<div
			id={`no-project`}
			className={`relative w-full min-h-full`}
		>
			{helmet.current}

			<div className={`relative flex w-full h-full max-w-700px justify-center items-center m-auto`}>
				<NoContent
					icon={<i className={`fas fa-lock text-8xl`} />}
				>
					<span className={`text-xl font-bold`}>You can't view this post.</span><br/>
					<br/>
					The contents for this project post are unavailable.<br/>
					Either because it's being worked on, or it's temporarily locked.<br/>
					<br/>
					Why don't you go see if another project piques your interest on the <TextLink to={`/projects`}>projects page</TextLink>?
				</NoContent>
			</div>
		</div>
	) : (
		<div
			id={`project`}
			className={``}
		>
			{helmet.current}
			
			{children}
		</div>
	)
}

export default ProjectLayout;