import React, {
	useLayoutEffect,
} from 'react';

import ProjectLayout from '/src/layouts/project-layout';

const PrinterDashboard3D = ({ setModal, setContents }) => {
	useLayoutEffect(() => {
		setContents([]);
	}, [setContents]);

	return (
		<ProjectLayout projectId={`entry-3d-printer-dashboard`}>

		</ProjectLayout>
	)
}

export default PrinterDashboard3D;