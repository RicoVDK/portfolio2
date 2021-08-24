import React, {
	useRef,
	useLayoutEffect,
} from 'react';

import ProjectLayout from '/src/layouts/project-layout';
import ProjectBanner from '/src/components/project-banner';
import TextLink from '/src/components/text/text-link';

import IMGTest from '/src/images/paris.jpg';

const RicoSoftworks = ({ setContents }) => {
	useLayoutEffect(() => {
		setContents([]);
	}, [setContents]);

	return (
		<ProjectLayout projectId={`entry-portfolio`}>
			<ProjectBanner
				id={`project`}
				className={`mb-6`}
				img={IMGTest}
			>
				Rico's Softworks
			</ProjectBanner>
			<TextLink to={`/projects/eterna`}>This project is still secret</TextLink>
		</ProjectLayout>
	)
}

export default RicoSoftworks;