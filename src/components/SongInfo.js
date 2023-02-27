import React from "react";

export default function SongInfo(props) {
  const { audioData } = props;
  //console.log(audioData.duration);
  return (
    <div className="InfoContainer">
      <div>
        {" "}
        <img src={audioData.imageUrl} alt={audioData.artist} />
      </div>
      <div className="NowPlaying">
        <div className="MarginRight">
          <div className="Grey Margin5">
            <h2>Now Playing</h2>
          </div>
          <h1>{audioData.songTitle}</h1>
          <div className="Grey Margin5">
            <h1>{audioData.artist}</h1>
          </div>
          <div className="Grey Margin5">
            <h3>
              {durToMin(audioData.duration) === undefined
                ? ""
                : "Duration: " + durToMin(audioData.duration)}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

const durToMin = (duration) => {
  if (duration === undefined) return;
  const minutes = Math.floor(duration / 60);
  const seconds = (duration - minutes * 60) / 60;
  return `${minutes}:${Math.floor(seconds * 60)} min`;
};
