import "./style.css";
import { useState } from "react";
import Login from "./Login";
import Search from "./Search";
import Current from "./Current";




function Spotify(props) {
  const {getAudioAnalysisData} = props;
  const [accessToken, setAccessToken] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [playingTrack, setPlayingTrack] = useState();
  const [search, setSearch] = useState("");


  const chooseTrack = (track) => {
    setPlayingTrack(track);
    //CLEARS SONG SEARCHES ON SELECT
    //setSearch("");
  };

  return (
    <>
      <div className="Login">
        {" "}
        <Login setAccessToken={setAccessToken} />
      </div>
      <div className='SearchBar'>
        <SearchBar search={search} setSearch={setSearch} />
      </div>
      <div className="Scroll">
        <div className="Search">
          {" "}
          <Search
          getAudioAnalysisData = {getAudioAnalysisData}
            playingTrack={playingTrack}
            accessToken={accessToken}
            search={search}
            setSearch={setSearch}
            setSearchResults={setSearchResults}
            searchResults={searchResults}
            chooseTrack={chooseTrack}
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
    </>
  );
}

export default Spotify;

function SearchBar(props) {
  const { search, setSearch } = props;
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
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
