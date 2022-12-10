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
import TextLeft from '/src/components/text/text-left';

/**
 * @see cdCollection
 */
const CdPage = ({ location, setContents }) => {
	useLayoutEffect(() => {
		setContents(cdCollection.getCds().map(cd => ({
			displayName: cd.getTitle(),
			id: cd.getTitle(),
		})));
	}, [setContents]);

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
			
            <TextLeft className={`pb-12`}>
				<TextItalic>
					<TextBold>Notes:</TextBold>
					
					<ULOut>
						<li>
							If the CD is second-hand and not manufactured in a plastic case,
							these usually come with something called an <TextLink
								to={"https://deepgrooves.eu/obistrip/#:~:text=An%20OBI%20strip%20is%20a,the%20release%20info%20in%20Japanese."}
								external={true}
							>"Obi strip"</TextLink>.
							Make sure this is included.
						</li>
						<li>
							If the CD is second-hand, make sure the condition is either "new", "like new", or "mint". Terms may differ depending on the website.
						</li>
						<li>
							For Bandcamp purchases, make sure the album allows for CD purchase that also gives you a digital download on purchase. There is also a "Send as gift" option.
						</li>
						<li>
							This list is sorted from high priority (top) to low priority (bottom).
						</li>
					</ULOut>
				</TextItalic>
			</TextLeft>

			<table className={`block w-full whitespace-nowrap overflow-x-scroll border-l border-r border-gray-700`}>
				<thead>
					<tr className={`bg-gray-700`}>
						<th className={`border-r border-gray-800`}>Artist</th>
						<th className={`border-r border-gray-800`}>Title</th>
						<th className={`border-l border-gray-800`}>Purchase</th>
						<th className={`border-r border-gray-800`}>Info</th>
					</tr>
				</thead>

				<tbody>
					{cdCollection.getCds().map((cd, index) => (
						<tr key={index} id={cd.getTitle()} className={`hover:bg-gray-800 border-gray-700 border-t last:border-b`}>
							<td className={`align-top p-2 border-r border-gray-700`}>{cd.getArtist()}</td>
							<td className={`align-top p-2 border-r border-gray-700`}>{cd.getTitle()}</td>
							<td className={`align-top p- border-r border-gray-700 whitespace-normal truncate text-ellipsis max-w-lg`}>
								<ULOut>
									{cd.getPurchaseLinks().map((link, index) => (
										<li key={index}><TextLink to={link} external={true}>{link}</TextLink></li>
									))}
								</ULOut>
							</td>
							<td className={`align-top p-2 border-r border-gray-700`}><TextLink to={cd.getInfoLink()} external={true}>{cd.getInfoLink()}</TextLink></td>
						</tr>
					))}
				</tbody>
			</table>
            
		</div>
	)
}

export default CdPage;