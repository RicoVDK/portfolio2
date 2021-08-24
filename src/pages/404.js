import React, {
  useLayoutEffect
} from 'react';

import TextLink from '/src/components/text/text-link';
import NoContent from '/src/components/no-content';

const NotFoundPage = ({ location, setContents }) => {
	useLayoutEffect(() => {
    console.log(location);
		setContents([]);
	}, [setContents])

  return (
    <div id={`404`} className={`min-h-full`}>
      <div className={`relative flex w-full h-full max-w-700px justify-center items-center m-auto`}>
        <NoContent
          icon={<i className={`fas fa-question text-8xl`} />}
        >
          <span className={`text-xl font-bold`}>Nothing to see here...</span><br/>
          <br/>
          Looks like you just stumbled upon a page that doesn't exist...<br/>
          <br/>
          Were you given this message after being directed by a link on this website?<br/>
          If so, <TextLink to={`/contact`}>contact me</TextLink> so that I can fix the dead link!<br/>
          <br/>
          Otherwise, let's just <TextLink to={`/`}>go home</TextLink>, why don't we?
        </NoContent>
      </div>
    </div>
  )
}

export default NotFoundPage
