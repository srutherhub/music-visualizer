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
          <div className="Margin5">
            <h1 style={{color:"#00d912"}}>Now Playing</h1>
          </div>
          <h1>{audioData.songTitle}</h1>
          <div className="Grey Margin5">
            <h1>{audioData.artist}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}


