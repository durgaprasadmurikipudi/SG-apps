import React from "react";

const VideoDetail = props => {

    
  if (!props.video) return null;
  const videoId = props.video.id.videoId || props.video.id.channelId;
  console.log("https://www.youtube.com/embed/" + videoId);
  const videoUrl = "https://www.youtube.com/embed/" + videoId;

  return (
    <div>
      <iframe
        title="Youtube Video"
        src={videoUrl}
      />    
      <div className="ui segment">
        <h4 className="ui header">{props.video.snippet.title}</h4>
        <p>{props.video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
