import React, {
	useLayoutEffect,
} from 'react';

import ProjectLayout from '/src/layouts/project-layout';

const Phantasma = ({ location, setModal, setContents }) => {
	useLayoutEffect(() => {
		setContents([]);
	}, [setContents]);

	return (
		<ProjectLayout location={location} projectId={`entry-phantasma`}>

		</ProjectLayout>
	)
}

export default Phantasma;