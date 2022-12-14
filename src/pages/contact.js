import React, {
	useLayoutEffect
} from 'react';

import TextTitle from '/src/components/text/text-title';
import TextItalic from '/src/components/text/text-italic';
import TextSubTitle from '/src/components/text/text-subtitle';
import TextClipboard from '/src/components/text/text-clipboard';
import IconTextTable from '/src/components/icon-text-table';
import TextLink from '/src/components/text/text-link';
import TextCenterLeft from '/src/components/text/text-center-left';
import ULOut from '/src/components/ul-out';
import SEO from '/src/components/seo';
import JTypeHours from '/src/components/jtype-hours';
import TNFTable, {
	TNFIconClass
} from '/src/components/tnf-table';

import { siteMetadata } from '/gatsby-config';

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
			<SEO
				pageTitle={`Contact`}
				desc={`Contact me for hiring or questions.`}
				location={location}
			/>

			<TextTitle id={`availability`}>
				Availability
			</TextTitle>
			<div className={`w-full px-4 pb-4 text-center`}>
				<TextItalic>
					Updated 22/09/2021
				</TextItalic><br/>
				{/* <br/>
				<TextCenterLeft>
					<i className={TNFIconClass(true)} /> = Available<br/>
					<i className={TNFIconClass(null)} /> = Only for Game Dev<br/>
					<i className={TNFIconClass(false)} /> = Unavailable<br/>
				</TextCenterLeft> */}
			</div>

			<TNFTable
				className={`m-auto`}
				contents={[
					{ displayName: <JTypeHours hours={`(32-40h p/w)`}>Fulltime</JTypeHours>, tnf: false },
					{ displayName: <JTypeHours hours={`(8-30h p/w)`}>Parttime</JTypeHours>, tnf: false },
					{ displayName: <JTypeHours hours={`-`}>Commission</JTypeHours>, tnf: false },
					{ displayName: <JTypeHours hours={`-`}>Volunteer</JTypeHours>, tnf: false },
				]}
			/>
			<br />
			<TextCenterLeft>
				<ULOut>
					<li>Able to and preferrably work remote.</li>
					<li>Able to meet face-to-face using public transport within the Netherlands.</li>
				</ULOut>
			</TextCenterLeft>

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
					- What does the job include? What will I be responsible for? -
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
						icon: 'fas fa-envelope',
						displayName: 'E-Mail',
						child: <TextClipboard className={`block text-center w-full truncate`}>
							{siteMetadata.socials.mail}<i className={`far fa-copy text-sm pl-2`} />
						</TextClipboard>
					},
				]}
			/>
		</div>
	)
}

export default ContactPage;