import React from 'react';

const IMGViewer = ({
	id = '',
	className = '',
	title = '',
	date = '',
	src = null,
	setModal,
}) => {
	const showModal = () => {
		if (!src)
			return;

		setModal(
			<div className={`fixed flex justify-center items-center w-screen h-screen left-0 right-0 bottom-0 top-0 z-50`}>
				{/** Background. */}
				<div
					onClick={hideModal}
					className={`absolute w-full h-full bg-black opacity-50`}
				/>

				{/** Image. */}
				<div className={`relative w-5/6 h-5/6 group rounded-3xl overflow-hidden`}>
					<img
						className={`relative block w-full h-full object-scale-down transition-all duration-500 opacity-0 bg-gray-800 border border-gray-700 rounded-3xl`}
						onLoad={(event) => event.target.style.opacity = 1}
						src={src}
					/>

					{title.length && <div className={`absolute hidden group-hover:block w-full py-6 pl-4 pr-24 italic text-xl top-0 left-0 bg-black bg-opacity-50`}>
						{title}
					</div>}

					{date.length && <div className={`absolute hidden group-hover:block w-full py-6 px-4 italic text-xl bottom-0 left-0 bg-black bg-opacity-50`}>
						{date}
					</div>}

					<div
						onClick={hideModal}
						className={`absolute flex justify-center items-center top-0 right-0 w-20 h-20 cursor-pointer text-white hover:text-red-600`}
					>
						<i className={`fas fa-times text-5xl`} />
					</div>
				</div>
			</div>
		)
	}

	const hideModal = () => {
		setModal(null);
	}

	return (
		<div
			id={id}
			className={`relative w-full h-full overflow-hidden cursor-pointer group text-white ${className}`}
			onClick={showModal}
		>
			{/** Glow. */}
			<div className={`absolute flex flex-col justify-between items-center w-full h-full italic text-left opacity-0 group-hover:opacity-100 z-10`}>
				<div className={`absolute w-full h-full bg-black opacity-25`} />
				<div className={`relative w-full py-2 px-4 truncate`}>
					{title}
				</div>

				<i className={`fas fa-expand-alt text-4xl`} />

				<div className={`relative w-full py-2 px-4 truncate`}>
					{date}
				</div>
			</div>

			{/** Image. */}
			<img
				className={`relative block h-full w-full object-contain transition-all duration-500 opacity-0 z-0`}
				onLoad={(event) => event.target.style.opacity = 1}
				src={src}
			/>
		</div>
	)
}

export default IMGViewer;