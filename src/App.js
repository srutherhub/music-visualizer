import "./App.css";
import "./components/style.css"
import { useState } from "react";
import Spotify from "./components/Spotify.js";
import Visualizer from "./components/Visualizer";
import ThreeD from "./components/ThreeD";

/* REFERENCE VIDEO https://www.youtube.com/watch?v=Xcet6msf3eE&t=3142s */

/*Currently Only Components Relating to Spotify are Complete*/

function App() {
  const [audioData, setAudioData] = useState({});
  const [audioBeat,setAudioBeat] = useState([]);

  //LIFTING AUDIO ANALYSIS DATA STATE FROM SPOTIFY -> SEARCH COMPONENT
  const getAudioAnalysisData = (one, two) => {
    setAudioData({ ...one, ...two });
  };

  //console.log(audioBeat[0])
  //console.log(audioData);

  return (
    <div className="App">
      <div className="ThreeD"><ThreeD/></div>
      <div className="Spotify">
        <Spotify getAudioAnalysisData={getAudioAnalysisData} setAudioBeat={setAudioBeat}/>
      </div>
      <div className="Visualizer" >
        <Visualizer audioData={audioData} audioBeat={audioBeat}/>
      </div>
    </div>
  );
}

export default App;
