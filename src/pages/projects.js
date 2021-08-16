import React, {
	useLayoutEffect
} from 'react';

const ProjectsPage = ({ location, setContents, }) => {
	useLayoutEffect(() => {
		setContents([]);
	}, [setContents])

	return (
		<div id={`projects`}>
			Projects page	
		</div>
	)
}

export default ProjectsPage;