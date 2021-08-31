import React from 'react';
import { Link } from 'gatsby';

const SocialButton = ({
	id = '',
	className = '',
	to = '#',
	external = true,
	children,
}) => {
	return external
		? <a
				id={id}
				href={to}
				target={`_blank`}
				rel={`noopener`}
				className={`relative flex justify-center items-center w-12 h-12 border border-gray-700 rounded-full ${className}`}
			>
				{children}
			</a>
		: <Link
				id={id}
				to={to}
				className={`relative flex justify-center items-center w-12 h-12 border border-gray-700 rounded-full ${className}`}
			>
				{children}
			</Link>
}

export default SocialButton;