import React, {
	useLayoutEffect,
} from 'react';

import ProjectLayout from '/src/layouts/project-layout';

const UnityPrototype25D = ({ setModal, setContents }) => {
	useLayoutEffect(() => {
		setContents([]);
	}, [setContents]);

	return (
		<ProjectLayout projectId={`entry-2_5d-unity-prototype`}>

		</ProjectLayout>
	)
}

export default UnityPrototype25D;