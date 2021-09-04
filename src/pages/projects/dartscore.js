import React, {
	useLayoutEffect,
} from 'react';

import ProjectLayout from '/src/layouts/project-layout';

const Dartscore = ({ setModal, setContents }) => {
	useLayoutEffect(() => {
		setContents([]);
	}, [setContents]);

	return (
		<ProjectLayout projectId={`entry-dartscore`}>

		</ProjectLayout>
	)
}

export default Dartscore;