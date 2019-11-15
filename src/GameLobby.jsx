import React from "react";
import { Lobby } from "boardgame.io/react";
import { KillEm } from "./game";

KillEm.minPlayers = 4;
KillEm.maxPlayers = 4;

class KillEmLobby extends React.Component {
  render() {
    return (
      <Lobby
        gameServer="http://18.224.209.168:8000"
        lobbyServer="http://18.224.209.168:8000"
        gameComponents={[KillEm]}
      />
    );
  }
}
