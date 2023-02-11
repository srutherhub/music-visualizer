const Fastify = require("fastify");
const SpotifyWebApi = require("spotify-web-api-node");
const cors = require("@fastify/cors");

const fastify = Fastify();
fastify.register(cors, {});

const CLIENT_ID = "ecbd8fe9a6874fa6b69b87064e7e4408";
const CLIENT_SECRET = "30611d33a25749439dd91118e8e550dc";
const REDIRECT_URI = "http://localhost:3000/";

fastify.post("/refresh", (request, reply) => {
  reply.header("Access-Control-Allow-Origin", "*");
  const refreshToken = request.body.refreshToken;
  const spotifyApi = new SpotifyWebApi({
    redirectUri: REDIRECT_URI,
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    refreshToken,
  });
  console.log("test");
  spotifyApi.refreshAccessToken().then((data) => {
    reply.send({
      accessToken: data.body.access_token,
      expiresIn: data.body.expires_in,
    });
    spotifyApi.setAccessToken(data.body["access_token"]);
  });
  // .catch((err) => console.log(err));
});

fastify.post("/login", (request, reply) => {
  reply.header("Access-Control-Allow-Origin", "*");
  //console.log(request.body);
  const code = request.body.code;
  //console.log(code)
  const spotifyApi = new SpotifyWebApi({
    redirectUri: REDIRECT_URI,
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
  });
  spotifyApi
    .authorizationCodeGrant(code)
    .then((data) => {
      //console.log(data)
      reply.send({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

fastify.listen({ port: 3001 }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
