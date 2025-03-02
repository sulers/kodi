import YouTube from "react-youtube";
import "../styles/VideoPlayer.css";

type VideoPlayerProps = {
  videoUrl: string;
};

function VideoPlayer({ videoUrl }: VideoPlayerProps) {
  const videoId =
    videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be")
      ? videoUrl.split("v=")[1] || videoUrl.split("/").pop()
      : videoUrl;
  if (!videoId) {
    return <div>Error: Invalid Video URL</div>;
  }

  const opts = {
    height: "390",
    width: "auto",
    playerVars: {
      controls: 1,
      disablekb: 1,
      rel: 0,
      modestbranding: 1,
    },
  };

  return (
    <div className="video-player">
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
}

export default VideoPlayer;
