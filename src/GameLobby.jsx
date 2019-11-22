import React from "react";
import { Lobby } from "boardgame.io/react";
import { KillEm } from "./game";

KillEm.minPlayers = 4;
KillEm.maxPlayers = 4;

class KillEmLobby extends React.Component {
  render() {
    return (
      <Lobby
        gameServer="172.28.153.39:8000"
        lobbyServer="172.28.153.39:8000"
        gameComponents={[KillEm]}
      />
    );
  }
}
