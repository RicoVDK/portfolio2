import React, {
	useLayoutEffect,
} from 'react';

import ProjectLayout from '/src/layouts/project-layout';

const VibrantVenture = ({ location, setModal, setContents }) => {
	useLayoutEffect(() => {
		setContents([]);
	}, [setContents]);

	return (
		<ProjectLayout location={location} projectId={`entry-vibrant-venture`}>

		</ProjectLayout>
	)
}

export default VibrantVenture;