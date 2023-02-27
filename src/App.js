import "./App.css";
import "./components/style.css"
import { useState } from "react";
import Spotify from "./components/Spotify.js";
import Visualizer from "./components/Visualizer";

/* REFERENCE VIDEO https://www.youtube.com/watch?v=Xcet6msf3eE&t=3142s */

/*Currently Only Components Relating to Spotify are Complete*/

function App() {
  const [audioData, setAudioData] = useState({});

  //LIFTING AUDIO ANALYSIS DATA STATE FROM SPOTIFY -> SEARCH COMPONENT
  const getAudioAnalysisData = (one, two) => {
    setAudioData({ ...one, ...two });
  };

  //console.log(audioData);

  return (
    <div className="App">
      <div className="Spotify">
        <Spotify getAudioAnalysisData={getAudioAnalysisData} />
      </div>
      <div className="Visualizer" >
        <Visualizer audioData={audioData} />
      </div>
    </div>
  );
}

export default App;
