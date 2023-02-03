import React from "react";
import { AUTH_ENDPOINT } from "../info";
import useAuth from "./useAuth";

const code = new URLSearchParams(window.location.search).get("code");

export default function Login({code}) {
  const accessToken = useAuth(code);
  return (
    <div>
      {code ? (
        "logout"
      ) : (
        <a href={AUTH_ENDPOINT}>
          <button>Login</button>
        </a>
      )}
    </div>
  );
}
