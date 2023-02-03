import React from 'react';
import {useState, useEffect} from 'react'
import axios from "axios"
import { SERVER_URL } from '../info';



export default function useAuth(code) {
  const [accessToken,setAccessToken] = useState();
  const [refreshToken,setRefreshToken] = useState();
  const [expiresIn,setExpireIn] = useState();

  useEffect(()=>{
    // Axios is essentially a fetch request
    axios.post(SERVER_URL+"/login",{
      code
    }).then(res => {
      console.log(res.data)
    })
    .catch(()=> window.location = "/")

  },[code])

}
