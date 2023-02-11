import { useState } from "react";
import Login from "./Login";
import Search from "./Search";
import Current from "./Current";

function Spotify() {
  const [accessToken, setAccessToken] = useState("");
  console.log(accessToken);

  return (
    <div>
      <Login setAccessToken={setAccessToken} />
    </div>
  );
}

export default Spotify;
