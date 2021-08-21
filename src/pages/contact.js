import React, {
	useLayoutEffect
} from 'react';

import TextTitle from '/src/components/text/text-title';
import TextMark from '/src/components/text/text-mark';
import TextSubText from '/src/components/text/text-subtext';
import TextItalic from '/src/components/text/text-italic';
import TextSubTitle from '/src/components/text/text-subtitle';
import TNFTable from '/src/components/tnf-table';
import CenteredUL from '/src/components/centered-ul';

const ContactPage = ({ location, setContents }) => {
	useLayoutEffect(() => {
		setContents([]);
	}, [setContents]);

	return (
		<div id={`contact`}>
			<TextSubText
				id={`notice`}
				wrapClassName={`text-center pt-6`}
			>
				<TextMark >Please see the contents below before contacting and asking questions!</TextMark><br/>
			</TextSubText>

			<TextTitle id={`availability`}>
				Availability
			</TextTitle>
			
			<div className={`w-full px-4 pb-4 text-center`}>
				<TextItalic>
					You can expect a response within the same week if either "Full time" or "Part time" is set to available.<br/>
					(This also applies if I sent you here myself)
				</TextItalic>
			</div>

			<TNFTable
				className={`m-auto`}
				contents={[
					{ displayName: 'Full time', tnf: true },
					{ displayName: 'Part time', tnf: true },
					{ displayName: 'Intern', tnf: false },
					{ displayName: 'Commission', tnf: false },
					{ displayName: 'Volunteer', tnf: false },
				]}
			/>

			<TextTitle id={`expectations`}>
				Expectations
			</TextTitle>

			<TextSubText wrapClassName={`text-center px-4`}>
				To make communications as swift and smooth as possible, I request to see and know the following:<br/>
				<br/>
				<div className={``}>
					<TextSubTitle id={`for-emails`}>For emails:</TextSubTitle><br/>
					<CenteredUL>
						<li>Your company/business name.</li>
						<li>Your website, or social media if not applicable.</li>
					</CenteredUL>
				</div>

			</TextSubText>
		</div>
	)
}

export default ContactPage;