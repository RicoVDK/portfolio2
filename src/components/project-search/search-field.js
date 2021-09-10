import React, {
	useState,
	useRef,
} from 'react';

import {
	pillClickEffect
} from '/src/components/click-effects';

const SearchField = ({
	className = 'relative w-full h-8 p-4 italic focus:outline-none bg-gray-800 rounded-full hover:bg-gray-700 border border-gray-700 text-center',
	placeholder = 'Search...',
	onChange = () => {},
}) => {
	const [value, setValue] = useState('');
	const inputRef = useRef(null);

	const onInput = (event) => {
		setValue(event.target.value);
		onChange(event.target.value);
	}

	const onClick = () => {
		pillClickEffect(inputRef.current);
	}

	return (
		<input
			ref={inputRef}
			className={className}
			type="text"
			placeholder={placeholder}
			onChange={onInput}
			onClick={onClick}
			value={value}
			data-hj-allow={true}
		/>
	)
}

export default SearchField;