import React, {
	useLayoutEffect,
} from 'react';

import ProjectLayout from '/src/layouts/project-layout';

const VibrantVenture = ({ setModal, setContents }) => {
	useLayoutEffect(() => {
		setContents([]);
	}, [setContents]);

	return (
		<ProjectLayout projectId={`entry-vibrant-venture`}>

		</ProjectLayout>
	)
}

export default VibrantVenture;