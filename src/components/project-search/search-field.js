import React, {
	useState
} from 'react';

const SearchField = ({
	className = 'relative w-full h-8 p-4 italic focus:outline-none bg-gray-800 rounded-full hover:bg-gray-700',
	placeholder = 'Search...',
	onChange = () => {},
}) => {
	const [value, setValue] = useState('');

	const onInput = (event) => {
		setValue(event.target.value);
		onChange(event.target.value);
	}

	return (
		<input
			className={className}
			type="text"
			placeholder={placeholder}
			onChange={onInput}
			value={value}
		/>
	)
}

export default SearchField;