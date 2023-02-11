import { useState, useEffect } from "react";
import axios from "axios";
import { SERVER_URL } from "../info";

export default function useAuth(code) {
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [expiresIn, setExpireIn] = useState();

  useEffect(() => {
    // Axios is essentially a fetch request
    axios
      .post(SERVER_URL + "/login", {
        code,
      })
      .then((res) => {
        setAccessToken(res.data.accessToken);
        setRefreshToken(res.data.refreshToken);
        setExpireIn(res.data.expiresIn);
        window.history.pushState({}, null, "/");
      })
      .catch(() => (window.location = "/"));
  }, [code]);

  useEffect(() => {
    if (!refreshToken || !expiresIn) return;
    const timeout = setInterval(() => {
      axios
        .post(SERVER_URL + "/refresh", {
          refreshToken,
        })
        .then((res) => {
          setAccessToken(res.data.accessToken);
          setExpireIn(res.data.expiresIn);
          window.history.pushState({}, null, "/");
        })
        .catch(() => (window.location = "/"));
    }, (expiresIn - 60) * 1000);
    return () => clearInterval(timeout);
  }, [refreshToken, expiresIn]);
  return accessToken;
}
