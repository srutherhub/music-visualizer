import { useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-node";
import { CLIENT_ID } from "../info";
import DisplayPlayTracks from "./DisplayPlayTracks.js";

const spotifyApi = new SpotifyWebApi({
  clientId: CLIENT_ID,
});

export default function Search(props) {
  const {
    getAudioAnalysisData,
    playingTrack,
    accessToken,
    searchResults,
    setSearchResults,
    search,
    setAudioBeat,
    chooseTrack,
  } = props;
  const [audioAnalysis, setAudioAnalysis] = useState({});
  const [audioFeatures, setAudioFeatures] = useState({});
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
            id: tracks.id,
            uri: tracks.uri,
          };
        })
      );
    });
    return () => (cancel = true);
  }, [search, accessToken]);

  useEffect(() => {
    if(playingTrack === undefined) return;
    spotifyApi.getAudioAnalysisForTrack(playingTrack.id).then((response) => {
      setAudioBeat(response.body.beats);
      setAudioAnalysis({
        tempo: response.body.track.tempo,
        tempo_confidence: response.body.track.tempo_confidence,
        duration: response.body.track.duration,
        key: response.body.track.key,
        key_confidence: response.body.track.key_confidence,
        mode: response.body.track.mode,
        mode_confidence: response.body.track.mode_confidence,
        time_signature: response.body.track.time_signature,
        time_signature_confidence:
          response.body.track.time_signature_confidence,
      });
    });
  }, [playingTrack]);

  useEffect(() => {
    if(playingTrack === undefined) return;
    spotifyApi.getAudioFeaturesForTrack(playingTrack.id).then((response) => {
    //console.log(response.body)
    setAudioFeatures({
      artist: playingTrack.artist,
      imageUrl: playingTrack.imageUrl,
      songTitle:playingTrack.songTitle,
      acousticness: response.body.acousticness,
      danceability:response.body.danceability,
      valence:response.body.valence,
      energy:response.body.energy,
      liveness:response.body.liveness,
      instrumentalness:response.body.instrumentalness
    });
  });}, [playingTrack]);

  useEffect(()=>{
    getAudioAnalysisData(audioAnalysis,audioFeatures)
  },[audioAnalysis,audioFeatures])
  //spotifyApi.getAudioFeaturesForTrack(searchResults[1].id).then((response)=>{console.log(response)})
  return (
    <div className="Songs">
      {searchResults.map((track) => (
        <DisplayPlayTracks
          chooseTrack={chooseTrack}
          track={track}
          key={track.uri}
        />
      ))}
    </div>
  );
}
