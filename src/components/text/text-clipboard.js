import React, {
	useState,
	useRef,
	useLayoutEffect,
} from 'react';

import TextMark from '/src/components/text/text-mark';

const TextClipboard = ({
	id = '',
	className = '',
	children,
}) => {
	const [copied, setCopied] = useState(false);
	const timer = useRef(null);

	const copyText = (event) => {
		if (copied)
			return;

		navigator.clipboard.writeText(event.target.innerText);

		setCopied(true);

		if (timer.current)
			clearTimeout(timer.current);

		timer.current = setTimeout(() => setCopied(false), 1500);
	}

	useLayoutEffect(() => {
		return () => {
			clearTimeout(timer.current);
		}
	}, [timer]);

	return (
		<span
			className={`relative hover:text-primary-3 cursor-pointer ${className}`}
			onClick={copyText}
		>
			{ copied
				? <span className={`text-primary`}>Copied!</span>
				: <TextMark>
						{children}
					</TextMark>
			}
		</span>
	)
}

export default TextClipboard;