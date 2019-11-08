// src/server.js
const Server = require("boardgame.io/dist/server").Server;
const TicTacToe = require("./game").TicTacToe;
const server = Server({ games: [TicTacToe] });
server.run(8000, () => console.log("Running on port 8000"));










/*
http://18.224.209.168/
*/
