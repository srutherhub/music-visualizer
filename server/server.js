const Fastify = require("fastify");
const SpotifyWebApi = require("spotify-web-api-node");
const cors = require('cors')()
const bodyParser = require('body-parser');

const CLIENT_ID = "ecbd8fe9a6874fa6b69b87064e7e4408";
const CLIENT_SECRET = "30611d33a25749439dd91118e8e550dc"
const REDIRECT_URI = "http://localhost:3000";

const fastify = Fastify();
//fastify.use(cors)
fastify.use(bodyParser.json)

fastify.post("/login", (request, reply) => {
  console.log(request.body);
  const code = request.body.code;
  const spotifyApi = new SpotifyWebApi({
    redirectUri: REDIRECT_URI,
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
  });
  spotifyApi.authorizationCodeGrant(code).then((data) => {
    reply
      .json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      })
      .catch(() => {
        reply.sendStatus(400);
      });
  });
});

fastify.listen({ port: 3001 }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
