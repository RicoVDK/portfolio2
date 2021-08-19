import React, {
	useState,
	useLayoutEffect,
	useRef,
} from 'react';

import lerp from '/src/components/utils/lerp';

import SearchField from './search-field';
import TagItem from './tag-item';
import OptionButton from './option-button';
import Tags, {
	tagToDisplayName
} from '/src/components/tags';

const ProjectSearch = ({ lang, toSearch, setResults }) => {
	const [open, setOpen] = useState(false);
	const [searchOptions, setSearchOptions] = useState({
		query: '',
		includeTags: [],
		excludeTags: [],
	});
	const innerContentRef = useRef(null);
	const outerContentRef = useRef(null);
	const outerContentHeightRef = useRef(0);
	const innerContentHeightRef = useRef(0);
	const animFrame = useRef(null);

	const search = () => {
		const localResults = [];

		toSearch.map((project) => {
			const hasIncluded = searchOptions.includeTags.some(tag => project.tags.includes(tag));
			const hasExcluded = searchOptions.excludeTags.some(tag => project.tags.includes(tag));

			if (searchOptions.excludeTags.length && hasExcluded)
				return

			if (searchOptions.query.length) {
				const title = project.displayName;

				if (title.toLowerCase().indexOf(searchOptions.query.toLowerCase()) > -1) {
					localResults.push(project);

					return
				}

				return
			}
			
			if (searchOptions.includeTags.length && hasIncluded) {
				localResults.push(project);

				return
			} else if (searchOptions.includeTags.length) {
				return
			}

			localResults.push(project);
		})

		setResults(localResults);
	}

	const includeAllTags = () => {
		setSearchOptions((oldOptions) => ({
			...oldOptions,
			includeTags: Object.values(Tags),
			excludeTags: [],
		}))
	}

	const excludeAllTags = () => {
		setSearchOptions((oldOptions) => ({
			...oldOptions,
			includeTags: [],
			excludeTags: Object.values(Tags),
		}))
	}

	const disableAllTags = () => {
		setSearchOptions((oldOptions) => ({
			...oldOptions,
			includeTags: [],
			excludeTags: [],
		}))
	}

	const setContentHeight = (px) => {
		outerContentHeightRef.current = px;
		outerContentRef.current.style.height = `${px}px`;
	}

	const stopAnimateContentHeight = () => {
		if (animFrame.current) {
			cancelAnimationFrame(animFrame.current);

			animFrame.current = null;
		}
	}

	const animateContentHeight = (px) => {
		setContentHeight(lerp(
			outerContentHeightRef.current,
			px,
			0.5
		));

		if ((px === innerContentHeightRef.current && outerContentHeightRef.current < innerContentHeightRef.current - 0.1)
		|| (px === 0 && outerContentHeightRef.current > 0.1)) {
			animFrame.current = requestAnimationFrame(() => animateContentHeight(px));
		} else {
			stopAnimateContentHeight();
			setContentHeight(px);
		}
	}

	const onSearchQueryChanged = (result) => {
		setSearchOptions((oldOptions) => ({
			...oldOptions,
			query: result,
		}))
	}

	const onTagClicked = (tag) => {
		const includeTags = searchOptions.includeTags;
		const excludeTags = searchOptions.excludeTags;

		if (searchOptions.includeTags.includes(tag)) {
			includeTags.splice(includeTags.indexOf(tag), 1);
			excludeTags.push(tag);
		} else if (searchOptions.excludeTags.includes(tag)) {
			excludeTags.splice(excludeTags.indexOf(tag), 1);
		} else {
			includeTags.push(tag);
		}
		
		setSearchOptions((oldOptions) => ({
			...oldOptions,
			includeTags,
			excludeTags,
		}))
	}

	const onToggleClicked = () => {
		if (!animFrame.current) {
			innerContentHeightRef.current = innerContentRef.current.getBoundingClientRect().height;

			setOpen(innerContentHeightRef.current * 0.5 > outerContentHeightRef.current);

			animFrame.current = requestAnimationFrame(() => animateContentHeight(
				innerContentHeightRef.current * 0.5 > outerContentHeightRef.current ? innerContentHeightRef.current : 0
			));
		}
	}

	useLayoutEffect(() => {
		search();
	}, [searchOptions]);
	
	return (
		<div className={`relative w-full max-w-500px`}>
			{/** Search Bar. */}
			<SearchField
				placeholder={`Search for a project...`}
				onChange={onSearchQueryChanged}
			/>

			{/** Inner Content. */}
			<div
				ref={outerContentRef}
				style={{
					height: outerContentHeightRef.current
				}}
				className={`relative w-full px-4 overflow-hidden select-none`}
			>
				<div className={`relative w-full border-l border-r border-b border-primary rounded-bl-2xl rounded-br-2xl`} ref={innerContentRef}>
					{/** Options. */}
					<div className={`grid relative grid-cols-2 px-1 py-1`}>
						{Object.values(Tags).map((prop, index) =>
							<TagItem
								key={index}
								tag={index}
								text={tagToDisplayName(index)}
								onClicked={onTagClicked}
								includeTags={searchOptions.includeTags}
								excludeTags={searchOptions.excludeTags}
							/>
						)}
					</div>
					<div className={`grid relative grid-cols-1 px-1 pb-1`}>
						<OptionButton
							text={`Include All`}
							onClick={includeAllTags}
						/>
						<OptionButton
							text={`Exclude All`}
							onClick={excludeAllTags}
						/>
						<OptionButton
							text={`Disable All`}
							onClick={disableAllTags}
						/>
					</div>
					
					{/** Bottom Border. */}
					{/* <div className={`absolute w-full bottom-0 border-b border-primary`}></div> */}
				</div>
			</div>

			{/** Toggle. */}
			<div className={`relative flex w-full justify-center`}>
				<div 
					onClick={onToggleClicked} 
					className={`relative flex w-16 h-8 justify-center items-center font-bold rounded-bl-full rounded-br-full cursor-pointer ${
						open ? 'bg-primary text-gray-800 hover:bg-primary-3' : 'bg-gray-800 text-primary hover:bg-gray-700'
					}`}
				>
					<i className={`fas fa-cogs`}></i>
				</div>
			</div>
		</div>
	)
}

export default ProjectSearch;