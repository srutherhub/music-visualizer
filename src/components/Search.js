import { useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-node";
import { CLIENT_ID } from "../info";
import DisplayPlayTracks from "./DisplayPlayTracks.js";

const spotifyApi = new SpotifyWebApi({
  clientId: CLIENT_ID,
});

export default function Search(props) {
  const {
    accessToken,
    searchResults,
    setSearchResults,
    search,
    setSearch,
    chooseTrack,
    track,
  } = props;

  //console.log(search);

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);
  //console.log(accessToken);

  useEffect(() => {
    if (!search) return setSearchResults([]);
    if (!accessToken) return;

    let cancel = false;
    spotifyApi.searchTracks(search).then((response) => {
      if (cancel) return;
      setSearchResults(
        response.body.tracks.items.map((tracks) => {
          return {
            artist: tracks.artists[0].name,
            songTitle: tracks.name,
            imageUrl: tracks.album.images[0].url,
            uri: tracks.uri,
          };
        })
      );
    });
    return () => (cancel = true);
  }, [search, accessToken]);

  return (
    <div>
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
      <div className="songs">
        {searchResults.map((track) => (
          <DisplayPlayTracks
            chooseTrack={chooseTrack}
            track={track}
            key={track.uri}
          />
        ))}
      </div>
    </div>
  );
}
