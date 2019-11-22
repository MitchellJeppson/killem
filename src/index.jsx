import React from "react";
import { Lobby } from "boardgame.io/react";
import { KillEm } from "./game";
import { render } from "react-dom";

KillEm.minPlayers = 4;
KillEm.maxPlayers = 4;

class App extends React.Component {
  render() {
    return (
      <Lobby
        gameServer="http://172.28.153.39:8000"
        lobbyServer="http://172.28.153.39:8000"
        gameComponents={[{ game: KillEm }]}
      />
    );
  }
}

render(<App />, document.getElementById("root"));
