import React, {
	useLayoutEffect
} from 'react';

const ContactPage = ({ location, setContents }) => {
	useLayoutEffect(() => {
		setContents([]);
	}, [setContents])

	return (
		<div id={`contact`}>
			Contact page	
		</div>
	)
}

export default ContactPage;