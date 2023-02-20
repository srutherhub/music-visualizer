export default function DisplayPlayTracks(props) {
  const { track, chooseTrack } = props;

  const handlePlayback = () => {
    chooseTrack(track);
  };
  return (
    <div
      style={{ cursor: "pointer" }}
      onClick={handlePlayback}
      className="SearchesContainer"
    >
      <div key={track.uri} className="SongSearches">
        <img src={track.imageUrl} alt={track.songTitle} style={{ width: 64}} />

        <div className="TitleArtist">
          <div style={{fontSize:"16px",color:"#969696"}}>{track.songTitle}</div>
          <div>{track.artist}</div>
        </div>
      </div>
    </div>
  );
}
