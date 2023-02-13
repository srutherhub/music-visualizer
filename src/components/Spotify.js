import { useState } from "react";
import Login from "./Login";
import Search from "./Search";
import Current from "./Current";

function Spotify() {
  const [accessToken, setAccessToken] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [playingTrack, setPlayingTrack] = useState();
  const [search, setSearch] = useState("");

  const chooseTrack = (track) => {
    setPlayingTrack(track);
    setSearch("");
  };

  return (
    <div>
      <Login setAccessToken={setAccessToken} />
      <Search
        accessToken={accessToken}
        search={search}
        setSearch={setSearch}
        setSearchResults={setSearchResults}
        searchResults={searchResults}
        chooseTrack={chooseTrack}
      />
      <Current
        accessToken={accessToken}
        uri={playingTrack?.uri}
        searchResults={searchResults}
      />
    </div>
  );
}

export default Spotify;
