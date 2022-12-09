import React, {
	useLayoutEffect
} from 'react';

import TextTitle from '/src/components/text/text-title';
import TextItalic from '/src/components/text/text-italic';
import TextBold from '/src/components/text/text-bold';
import TextCenter from '/src/components/text/text-center';
import SEO from '/src/components/seo';

import { cdCollection } from '../data/cd-collection';
import { Cd } from './../components/object/cd';
import TextLink from './../components/text/text-link';
import ULOut from '../components/ul-out';

/**
 * Adhoc page for keeping track of my CD collection because I need to be able to share it
 * and also don't want to have to lay down money for crappy software that only has < 1% of the world's music in their db.
 */
const CdPage = ({ location, setContents }) => {
	useLayoutEffect(() => {
		setContents([]); // cry about it.
	}, [setContents]);

	console.log(cdCollection.getCds()[0].getPurchaseLinks().map((link, index) => ({
		link: link,
		index: index,
	})));

	return (
		<div id={`cd`}>
			<SEO
				pageTitle={`CD`}
				desc={`Definitely not Sonic`}
				location={location}
			/>

			<TextTitle id={`CDs`}>
				CDs
			</TextTitle>
			
            <TextCenter className={`pb-12`}>
				<TextItalic>
					<TextBold>Protip:</TextBold>
					<br/>
					Scrolling horizontally is enabled for the below table.
				</TextItalic>
			</TextCenter>

			<table className={`block w-full whitespace-nowrap overflow-x-scroll`}>
				<thead>
					<tr className={`bg-gray-700`}>
						<th className={`border-r border-gray-800`}>Artist</th>
						<th className={`border-r border-gray-800`}>Title</th>
						<th className={`border-r border-gray-800`}>Info</th>
						<th className={`border-l border-gray-800`}>Purchase</th>
					</tr>
				</thead>

				<tbody>
					{cdCollection.getCds().map((cd, index) => (
						<tr key={index} className={`hover:bg-gray-800 border-gray-700 border-t last:border-b`}>
							<td className={`align-top p-2 border-r border-gray-700`}>{cd.getArtist()}</td>
							<td className={`align-top p-2 border-r border-gray-700`}>{cd.getTitle()}</td>
							<td className={`align-top p-2 border-r border-gray-700`}><TextLink to={cd.getInfoLink()} external={true}>{cd.getInfoLink()}</TextLink></td>
							<td className={`align-top p- border-r border-gray-700`}>
								<ULOut>
									{cd.getPurchaseLinks().map((link, index) => (
										<li key={index}><TextLink to={link} external={true}>{link}</TextLink></li>
									))}
								</ULOut>
							</td>
						</tr>
					))}
				</tbody>
			</table>
            
		</div>
	)
}

export default CdPage;