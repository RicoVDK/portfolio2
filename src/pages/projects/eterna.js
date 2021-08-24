import React, {
	useRef,
	useLayoutEffect,
} from 'react';

import ProjectLayout from '/src/layouts/project-layout';
import ProjectBanner from '/src/components/project-banner';

import IMGTest from '/src/images/paris.jpg';

const RicoSoftworks = ({ setContents }) => {
	useLayoutEffect(() => {
		setContents([]);
	}, [setContents]);

	return (
		<ProjectLayout projectId={`entry-eterna`}>
			<ProjectBanner
				id={`project`}
				img={IMGTest}
			>
				Project Eterna
			</ProjectBanner>
		</ProjectLayout>
	)
}

export default RicoSoftworks;