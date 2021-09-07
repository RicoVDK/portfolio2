import React from 'react';

import IMGViewer from '/src/components/img-viewer';
import {
	buttonScaleHover
} from '/src/components/effect-styles';

const PostIMG = ({
	id = '',
	className = '',
	title = '',
	date = '',
	src = null,
	setModal,
}) => (
	<IMGViewer
		title={title}
		date={date}
		src={src}
		setModal={setModal}
		id={id}
		className={`rounded-3xl border border-gray-700 overflow-hidden ${buttonScaleHover} ${className}`}
	/>
)

export default PostIMG;