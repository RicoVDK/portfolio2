import clamp from './clamp';

const lerp = (start, end, amount) => {
	return start + (end - start) * clamp(amount, 0, 1);
};

export default lerp;