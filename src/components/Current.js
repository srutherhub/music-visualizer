import { useState, useEffect } from "react";
import SpotifyPlayer from "react-spotify-web-playback";

export default function Current(props) {
  const { uri, accessToken, searchResults } = props;
  const [play, setPlay] = useState(false);
  const [currentImg, setCurrentImg] = useState("");

  useEffect(() => {
    setPlay(true);
    searchResults.forEach((track) => {
      if (uri === track.uri) setCurrentImg(track.imageUrl);
    });
  }, [uri]);

  if (!accessToken) return null;
  return (
    <div className="SpotifyWebPlayer">
      <SpotifyPlayer
        styles={{
          bgColor: "#0A0A0A",
          trackNameColor: "#575757",
          trackArtistColor: "#333333",
          sliderColor: "rgb(72, 214, 74)",
        }}
        layout={"responsive"}
        inlineVolume={false}
        token={accessToken}
        uris={uri ? [uri] : []}
        play={play}
        callback={(state) => {
          if (!state.isPlaying) setPlay(false);
        }}
      />
      {/* <div>
        {" "}
        <img src={currentImg} className="CurrentImg" />
      </div> */}
    </div>
  );
}
