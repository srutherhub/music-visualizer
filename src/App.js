import "./App.css";
import { useState } from "react";
import Spotify from "./components/Spotify.js";

function App() {
  const [audioData, setAudioData] = useState({});
  const getAudioAnalysisData = (one, two) => {
    setAudioData({ ...one, ...two });
  };
  console.log(audioData)
  return (
    <div className="App">
      <div className="Spotify">
        <Spotify getAudioAnalysisData={getAudioAnalysisData}/>
      </div>
      <div>TEST</div>
    </div>
  );
}

export default App;
