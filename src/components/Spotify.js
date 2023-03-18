import "./style.css";
import { useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-node";
import Login from "./Login";
import Search from "./Search";
import Current from "./Current";
import { CLIENT_ID } from "../info";

const spotifyApi = new SpotifyWebApi({
  clientId: CLIENT_ID,
});

export default function Spotify(props) {
  const { getAudioAnalysisData, setAudioBeat } = props;
  const [accessToken, setAccessToken] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [playingTrack, setPlayingTrack] = useState();
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  const chooseTrack = (track) => {
    setPlayingTrack(track);
    //CLEARS SONG SEARCHES ON SELECT
    //setSearch("");
  };

  return (
    <>
      <div className="AnalysisTitle">
        <h1>Play</h1>
      </div>
      <div className="Login">
        {" "}
        <Login setAccessToken={setAccessToken} />
      </div>
      <div className="SearchBar">
        <SearchBar search={search} setSearch={setSearch} />
      </div>
      <div className="Scroll">
        <div className="Search">
          {" "}
          <Search
            getAudioAnalysisData={getAudioAnalysisData}
            playingTrack={playingTrack}
            accessToken={accessToken}
            search={search}
            setSearch={setSearch}
            setSearchResults={setSearchResults}
            searchResults={searchResults}
            chooseTrack={chooseTrack}
            setAudioBeat={setAudioBeat}
          />
        </div>
      </div>

      <div className="Current">
        {" "}
        <Current
          accessToken={accessToken}
          uri={playingTrack?.uri}
          searchResults={searchResults}
        />
      </div>
      <div>
        <VolumeSlider accessToken={accessToken} />
      </div>
    </>
  );
}

function SearchBar(props) {
  const { search, setSearch } = props;
  return (
    <>
      <form>
        <input
          type="text"
          name="search"
          placeholder="Search Song or Artist"
          value={search}
          autoComplete="off"
          onChange={(e) => setSearch(e.target.value)}
        ></input>
      </form>
    </>
  );
}

function VolumeSlider(props) {
  const [volume, setVolume] = useState(100);
  const { accessToken } = props;

  const handleVolume = (e) => {
    setVolume(e.target.value);
  };
  //console.log(volume);
  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setVolume(volume);
  }, [volume]);

  return (
    <div className="VolumeSlider">
      <input
        type="range"
        value={volume}
        onChange={handleVolume}
        min="1"
        max="100"
      />
    </div>
  );
}
