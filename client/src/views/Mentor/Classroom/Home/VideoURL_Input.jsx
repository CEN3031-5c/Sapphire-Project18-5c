import { useState } from 'react'
import { Form, Input } from 'antd'

function VideoURL_Input ( { setEmbedLink, embedLink, setVideoQuestion, question } ) {

  const checkEmbedLink = embedLink => {

    const regex = /<iframe.*?<\/iframe>/s;

    if (embedLink.search(regex) === -1) {
      return null;
    }
    return embedLink;
  }

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
      <Form.Item id="form-label" label="Interactive Question:">
        <Input.TextArea
          onChange={e => {
            setVideoQuestion(e.target.value);
          }}
          value={question}
          className="input"
          placeHolder="Enter question for end of video"
        ></Input.TextArea>
      </Form.Item>
    </div>
  );
}

export default VideoURL_Input;

