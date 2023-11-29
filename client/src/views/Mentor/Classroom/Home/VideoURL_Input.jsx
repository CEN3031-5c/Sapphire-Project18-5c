import { useState } from 'react'
import { Form, Input } from 'antd'

function VideoURL_Input ( { setEmbedLink, embedLink, goodEmbedLink, setGoodEmbedLink } ) {

  const checkEmbedLink = embedLink => {

    const regex = /<iframe.*?<\/iframe>/;

    if (embedLink.search(regex) === -1) {
      setGoodEmbedLink(false);
      return null;
    }
    else {
      let position = embedLink.search("src=\"")
      let cutLink = embedLink.substring(position + 5);
      let newLink = cutLink.substring(0, cutLink.indexOf('\"'))

      setEmbedLink(newLink)
    }
    return embedLink;
  }


  // const extractURLFromEmbedLink = embedLink => {
  //   const regex = /<iframe.*?src="(.*?)".*?<\/iframe>/s;
  //   const match = embedLink.match(regex);
  //   return match ? match[1] : null;
  // };


  return (
    <div>
      <Form.Item id="form-label" label="Video embed link:">
        <Input.TextArea
          onChange={e => {
            setEmbedLink(e.target.value);
            checkEmbedLink(e.target.value);
          }}
          value={embedLink}
          className="input"
          placeholder="Enter video embed link"
        ></Input.TextArea>
      </Form.Item>
    </div>
  );
}

export default VideoURL_Input;

