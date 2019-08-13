import React from "react";
// pulling props.selectedVideo off into the const name 'slectedVide': our shortcut
const VideoDetail = ({ selectedVideo }) => {
    // is added to be the placeholder when selected video doesn't exist (while it's loading) the rerendering
    if(!selectedVideo)return <h2>Loading Spinner Goes Here</h2>
    // get loading spinner from font awesome
    
    const videoId = selectedVideo.id.videoId;
    const videoUrl = `https://www.youtube.com/embed/${videoId}?rel=0`;
    // interpilation
    console.log(videoUrl);
    
    
    return (
        <section>
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" title={selectedVideo.snippet.title} src={videoUrl} allowFullScreen></iframe>
            </div>
            <h2>{selectedVideo.snippet.title}</h2>
            <p>{selectedVideo.snippet.description}</p>
        </section>
    )
}

export default VideoDetail;