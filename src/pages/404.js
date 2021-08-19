import React, {
  useLayoutEffect
} from 'react';

const NotFoundPage = ({ location, setContents }) => {
	useLayoutEffect(() => {
		setContents([]);
	}, [setContents])

  return (
    <div id={`404`}>
      Not Found
    </div>
  )
}

export default NotFoundPage
