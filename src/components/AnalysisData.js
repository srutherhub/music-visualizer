import React from "react";

export default function AnalysisData(props) {
  const { audioData } = props;
  //console.log(audioData);
  // DATA LISTING
  return (
    <div>
      <div className="AnalysisContainer">
        <div className="AnalysisTitle">
          <h1>Analysis</h1>
        </div>
        <div className="MusicData1">
          <div>
            {durToMin(audioData.duration) === undefined
              ? ""
              : "Duration: " + durToMin(audioData.duration)}
          </div>
          <div>Key: {keyFinder(audioData.key)}</div>
          <div>Key Confidence: {percent(audioData.key_confidence)}</div>
          <div>Mode: {audioData.mode === 1 ? "Major" : "Minor"}</div>
          <div>Mode Confidence: {percent(audioData.mode_confidence)}</div>
        </div>
        <div className="MusicData2">
          <div>Tempo: {Math.floor(audioData.tempo)}</div>
          <div>Tempo Confidence: {percent(audioData.tempo_confidence)}</div>
          <div>Time Signature: {audioData.time_signature}</div>
          <div>
            Time Signature Confidence:{" "}
            {percent(audioData.time_signature_confidence)}
          </div>
          <div>Acousticness: {percent(audioData.acousticness)}</div>
        </div>
        <div className="MusicData3">
          <div>Danceability: {percent(audioData.danceability)}</div>
          <div>Energy: {percent(audioData.energy)}</div>
          <div>Instrumentalness: {percent(audioData.instrumentalness)}</div>
          <div>Liveness: {percent(audioData.liveness)}</div>
          <div>Valence: {percent(audioData.valence)}</div>
        </div>
      </div>
    </div>
  );
}

const durToMin = (duration) => {
  if (duration === undefined) return;
  const minutes = Math.floor(duration / 60);
  const secPercent = (duration - minutes * 60) / 60;
  let seconds = Math.floor(secPercent * 60);
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return `${minutes}:${seconds} min`;
};

const keyFinder = (num) => {
  const keys = [
    "C",
    "C♯/D♭",
    "D",
    "D♯/E♭",
    "E",
    "F",
    "F♯/G♭",
    "G",
    "G♯/A♭",
    "A",
    "A♯/B♭",
    "B"
  ];
  if (num === -1) return "No Key Found";
  return keys[num];
};

const percent = (num) => {
  return Math.floor(num * 100) + "%";
};

// key: 7
// key_confidence:0.076
// mode: 0
// mode_confidence: 0.226
// tempo: 71.608
// tempo_confidence:0.325
// time_signature:3
// time_signature_confidence:0.205

// acousticness:0.876
// danceability:0.239
// energy:0.287
// instrumentalness:0.644
// liveness:0.122
// valence:0.185
