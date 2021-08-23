import React from 'react';
import { Link } from 'gatsby';

import TextMark from '/src/components/text/text-mark';

const TextLink = ({
	id = '',
	className = '',
	to = '#',
	external = false,
	children,
}) => {
	return (
		<TextMark className={`hover:text-primary-3 cursor-pointer ${className}`}>
			{ external
				? <a
						target={`_blank`}
						rel={`noopener`}
						href={to}
					>
						{children}
					</a>
				: <Link
						to={to}
					>
						{children}
					</Link>
			}
		</TextMark>
	)
}

export default TextLink;