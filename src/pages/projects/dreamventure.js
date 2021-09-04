import React, {
	useLayoutEffect,
} from 'react';

import ProjectLayout from '/src/layouts/project-layout';

const Dreamventure = ({ setModal, setContents }) => {
	useLayoutEffect(() => {
		setContents([]);
	}, [setContents]);

	return (
		<ProjectLayout projectId={`entry-dreamventure`}>

		</ProjectLayout>
	)
}

export default Dreamventure;