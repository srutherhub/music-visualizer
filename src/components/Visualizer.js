import React from "react";
import AnalysisData from "./AnalysisData";
import SongInfo from "./SongInfo";

function Visualizer(props) {
  const { audioData } = props;
  //console.log(audioData);
  return (
    <>
      {/* <div>
        <p style={{ color: "red" }}>testing</p>
      </div> */}
      <div className="AnalysisData">
        <AnalysisData audioData={audioData} />
      </div>
      {/* <div className="SongInfo">
        <SongInfo audioData={audioData} />
      </div> */}
    </>
  );
}

export default Visualizer;
