import React from "react";
import { Lobby } from "boardgame.io/react";
import { KillEm } from "./game";
import { render } from "react-dom";
import KillEmBoard from "./indexGame.jsx";
import "./index.css";

KillEm.minPlayers = 2;
KillEm.maxPlayers = 2;

class App extends React.Component {
  render() {
    return (
      <Lobby
        gameServer="http://localhost:8000"
        lobbyServer="http://localhost:8000"
        gameComponents={[{ game: KillEm, board: KillEmBoard }]}
      />
    );
  }
}

render(<App />, document.getElementById("root"));
