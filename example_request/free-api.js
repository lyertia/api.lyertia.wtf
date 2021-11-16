//You can get online and max players with free api.

const request = require('request');

request('https://api.lyertia.wtf/free/minecraftpe?host=play.redmc.me', function (error, response, body) {
  const json_body = JSON.parse(body);
  const maxPlayers = json_body.maxPlayers;
  const onlinePlayers = json_body.online;

  console.log(`${onlinePlayers}/${maxPlayers}`); // 8/80
 
});
