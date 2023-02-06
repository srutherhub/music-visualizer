import React from "react";
import { useState } from "react";
import { AUTH_ENDPOINT } from "../info";
import useAuth from "./useAuth";

const code = new URLSearchParams(window.location.search).get("code");

export default function Login() {
  const accessToken = useAuth(code);
  return (
    <div>
      {code != undefined ? (
       code
      ) : (
        <a href={AUTH_ENDPOINT}>
          <button>Login</button>
        </a>
      )}
    </div>
  );
}
