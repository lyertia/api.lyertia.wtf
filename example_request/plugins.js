const request = require('request');

request('https://api.lyertia.wtf/api/all/minecraftpe?auth=naVFOLFUrs8V8N1C&host=play.redmc.me&map', function (error, response, body) {
  const json_body = JSON.parse(body);
  console.log(json_body.info.gamespy.raw.plugins); // PocketMine-MP 4.0.0-BETA3+dev: SG-Core 0.4.1; SkyBlock 0.4.4; DevTools 1.15.0+dev
});