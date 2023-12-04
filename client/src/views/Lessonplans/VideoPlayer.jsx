import React, { useState, useEffect } from 'react';
import '../../components/ActivityPanels/ActivityLevels.less';
import FlagButton from '../../components/FlagButton/FlagButton.jsx';
import { getVideoLink } from '../../Utils/requests';
import './PlansPage.less';

export default function VideoPlayer(props) {
  const { name, vidTitleFontSize } = props;
  const [vidLink, setVidLink] = useState(null);

  useEffect(() => {
    getLink(name);
  }, [name]);

  const getLink = (id) => {
    getVideoLink(id).then((res) => {
      if (res.data) {
        console.log("URL: " + res.data[0].URL);
        setVidLink(res.data[0].URL);
      } else {
        console.log("No video");
      }
    });
  };

  if (vidLink != null) {
    return (
      <div id="video">
        <h2 id="vidTitle" style={{ fontSize: vidTitleFontSize }}>
          {name} Video <FlagButton id={1} />
        </h2>

        {/* Retrieve video link */}
        {console.log("Video: " + vidLink)}

        <iframe
          width="840"
          height="473"
          src={vidLink}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    );
  } else {
    // Return loading or error message if vidLink is still null
    return <p>Loading...</p>;
  }
}