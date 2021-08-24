import React, {
	useLayoutEffect
} from 'react';

import TextTitle from '/src/components/text/text-title';
import TextMark from '/src/components/text/text-mark';
import TextSubText from '/src/components/text/text-subtext';
import TextItalic from '/src/components/text/text-italic';
import TextSubTitle from '/src/components/text/text-subtitle';
import TNFTable from '/src/components/tnf-table';
import TextClipboard from '/src/components/text/text-clipboard';
import IconTextTable from '/src/components/icon-text-table';
import TextLink from '/src/components/text/text-link';

const ContactPage = ({ location, setContents }) => {
	useLayoutEffect(() => {
		setContents([
			{ displayName: 'Availability', id: 'availability', children: [] },
			{ displayName: 'When Contacting', id: 'when-contacting', children: [
				{ displayName: 'For business & hiring', id: 'business-hiring', children: [] },
				{ displayName: 'For general questions', id: 'general-questions', children: [] },
				{ displayName: 'For website feature suggestions', id: 'feature-suggestions', children: [] },
				{ displayName: 'For reporting website-related issues', id: 'website-issues', children: [] },
			] },
			{ displayName: 'Contact Information', id: 'contact-info', children: [] },
		]);
	}, [setContents]);

	return (
		<div id={`contact`}>
			<TextTitle id={`availability`}>
				Availability
			</TextTitle>
			
			<div className={`w-full px-4 pb-4 text-center`}>
				<TextItalic>
					Last updated 2021 Aug 23
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

			<TextTitle id={`when-contacting`}>
				When Contacting
			</TextTitle>

			<div className={`w-full text-center px-4`}>
				Please include the following information depending on your goal...<br/>
				<br/>
				<TextSubTitle id={`business-hiring`}>For business {'&'} hiring:</TextSubTitle><br/>
				<div className={`relative text-center text-base italic`}>
					- The name of the company/business you represent. -<br/>
					- A link to your official website, or social media if the former is not applicable. -<br/>
					- The reason for contacting. What is it about? I'm curious! -
				</div>
				<br/>
				<TextSubTitle id={`general-questions`}>For general questions:</TextSubTitle><br/>
				<div className={`relative text-center text-base italic`}>
					- Your questions, obviously! -
				</div>
				<br/>
				<TextSubTitle id={`feature-suggestions`}>For website feature suggestions:</TextSubTitle><br/>
				<div className={`relative text-center text-base italic`}>
					- What feature you would like to see on this website. -<br/>
					- Why you think it should be implemented. -
				</div>
				<br/>
				<TextSubTitle id={`website-issues`}>For reporting website-related issues:</TextSubTitle><br/>
				<div className={`relative text-center text-base italic`}>
					- The name of the browser you're using. -<br/>
					- What you were doing when said issue occurred. -<br/>
					- Screenshots that display the issue (Optional). -<br/>
					- A recording showing a replication of the issue (Optional). -<br/>
					- The build number of the browser you're currently using (Optional). -
				</div>
			</div>

			<TextTitle id={`contact-info`}>
				Contact Information
			</TextTitle>

			<IconTextTable
				className={`m-auto max-w-500px pb-12`}
				contents={[
					{
						icon: 'fab fa-twitter',
						displayName: 'Twitter',
						child: <TextLink
							to={`https://twitter.com/ricovdk`}
							external={true}
						>
							@ricovdk<i className={`fas fa-external-link-alt text-xs pl-2`} />
						</TextLink>
					},
					{
						icon: 'fas fa-envelope',
						displayName: 'E-Mail',
						child: <TextClipboard>@gmail.com<i className={`far fa-copy text-sm pl-2`} /></TextClipboard>
					},
				]}
			/>
		</div>
	)
}

export default ContactPage;