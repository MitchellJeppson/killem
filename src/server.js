// src/server.js
const Server = require("boardgame.io/dist/server").Server;
const KillEm = require("./game").KillEm;

console.log(KillEm);

const server = Server({ games: [KillEm] });
server.run(8000, () => console.log("Running on port 8000"));

/*
http://18.224.209.168/
*/
