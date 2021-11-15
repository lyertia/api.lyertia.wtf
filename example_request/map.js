const request = require('request');

request('https://api.lyertia.wtf/api/select/minecraftpe?auth=3AEWuSMVcOdFXBQK&host=play.redmc.me&map', function (error, response, body) {
  const json_body = JSON.parse(body);
  console.log(json_body.map); // PocketMine-MP
});