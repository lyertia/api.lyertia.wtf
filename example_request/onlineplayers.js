const request = require('request');

request('https://api.lyertia.wtf/api/default/minecraftpe?auth=3AEWuSMVcOdFXBQK&host=play.redmc.me', function (error, response, body) {
  const json_body = JSON.parse(body);
  console.log("Online Players:"+ json_body.online + "  Max Players:"+ json_body.maxPlayers); // Online Players:4  Max Players:80
});