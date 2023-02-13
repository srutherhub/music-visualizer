export default function DisplayPlayTracks(props) {
  const { track, chooseTrack } = props;

  const handlePlayback = () => {
    chooseTrack(track);
  };
  return (
    <div style={{ cursor: "pointer" }} onClick={handlePlayback}>
      <div key={track.uri}>
        <img src={track.imageUrl} alt={track.songTitle} style={{ width: 64 }} />
        <div>{track.songTitle}</div>
        <div>{track.artist}</div>
      </div>
    </div>
  );
}
