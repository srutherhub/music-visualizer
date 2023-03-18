const CLIENT_ID = "ecbd8fe9a6874fa6b69b87064e7e4408";
const CLIENT_SECRET = "30611d33a25749439dd91118e8e550dc"
const REDIRECT_URI = "https://srutherhub.github.io/music-visualizer/";
const RESPONSE_TYPE = "code";
const SERVER_URL = "https://reinvented-roan-bass.glitch.me" /*"http://localhost:3001"*/
//const AUTH_ENDPOINT = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`
const AUTH_ENDPOINT =  `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=${RESPONSE_TYPE}&redirect_uri=${REDIRECT_URI}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`

export {AUTH_ENDPOINT,CLIENT_ID,CLIENT_SECRET,REDIRECT_URI,RESPONSE_TYPE,SERVER_URL};