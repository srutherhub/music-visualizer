import React from "react";

export default function AnalysisData(props) {
  const { audioData } = props;
  console.log(audioData);
  return (
    <div>
      <div className="AnalysisContainer">
        <div>
          <h1>Analysis</h1>
        </div>
        <div className="MusicData">
          <div>Key: {audioData.key}</div>
          <div>Key Confidence: {audioData.key_confidence}</div>
          <div>Mode: {audioData.mode}</div>
          <div>Mode Confidence: {audioData.mode_confidence}</div>
          <div>Tempo: {audioData.tempo}</div>
          <div>Tempo Confidence: {audioData.tempo_confidence}</div>
          <div>Time Signature: {audioData.time_signature}</div>
          <div>
            Time Signature Confidence: {audioData.time_signature_confidence}
          </div>
        </div>
        <div className="ExtraData">
          <div>Acousticness: {audioData.acousticness}</div>
          <div>Danceability: {audioData.danceability}</div>
          <div>Energy: {audioData.energy}</div>
          <div>Instrumentalness: {audioData.instrumentalness}</div>
          <div>Liveness: {audioData.liveness}</div>
          <div>valence: {audioData.valence}</div>
        </div>
      </div>
    </div>
  );
}

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
