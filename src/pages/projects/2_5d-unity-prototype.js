import React, {
	useLayoutEffect,
} from 'react';

import ProjectLayout from '/src/layouts/project-layout';
import ProjectBanner from '/src/components/project-banner';
import TextTitle from '/src/components/text/text-title';
import TextCenter from '/src/components/text/text-center';
import TextSubTitle from '/src/components/text/text-subtitle';
import TextBold from '/src/components/text/text-bold';
import TextCenterLeft from '/src/components/text/text-center-left';
import ULOut from '/src/components/ul-out';
import IMGViewer from '/src/components/img-viewer';
import PostIMG from '/src/components/post-img';
import IMGGrid, {
	Entry as IMGGridEntry
} from '/src/components/img-grid';

import Header from '/src/images/projects/2_5d-unity-prototype/25d-unity-header.png';
import Code01 from '/src/images/projects/2_5d-unity-prototype/25d-unity-code01.png';

const UnityPrototype25D = ({ location, setModal, setContents }) => {
	useLayoutEffect(() => {
		setContents([]);
	}, [setContents]);

	return (
		<ProjectLayout location={location} projectId={`entry-2_5d-unity-prototype`}>
			<ProjectBanner
				id={`project`}
				className={`mb-6`}
				imgTitle={`A look at placeholder settings UI`}
				date={`--/06/2020`}
				img={Header}
				setModal={setModal}
			>
				2.5D Unity Prototype
			</ProjectBanner>
		</ProjectLayout>
	)
}

export default UnityPrototype25D;