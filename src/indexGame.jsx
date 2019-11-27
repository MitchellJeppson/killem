import React from "react";
import { Client } from "boardgame.io/client";
import { KillEm } from "./game";
import HeadsUpDisplay from "./HeadsUpDisplay";
import Controls, * as controlsCallbacks from "./three/GameControls";
import Camera from "./three/GameCamera";
import Scene from "./three/GameScene";
import Renderer from "./three/GameRenderer";
import GameInitializer from "./GameInitializer";
import Raycaster from "./Raycaster";
import { SocketIO } from "boardgame.io/multiplayer";

class KillEmBoard extends React.Component {
  constructor(props) {
    super(props);
    // this.controls = undefined;
  }

  componentDidMount() {
    const KillEmClient = Client({
      game: KillEm,
      debug: true,
      multiplayer: SocketIO({ server: "https://localhost:8000" }),
      // multiplayer: {
      //   server: "http://localhost:8000"
      // }
      numPlayers: 2
    });

    const scene = new Scene();
    const renderer = new Renderer(this);
    const camera = new Camera();
    this.controls = new Controls(camera, renderer);
    new Raycaster(scene, camera);

    KillEmClient.moves.setupGame();

    var animate = () => {
      requestAnimationFrame(animate);

      this.controls.update();
      renderer.render(scene, camera);
    };
    animate();
  }
  render() {
    return (
      <React.Fragment>
        <div
          style={{
            overflowX: "hidden",
            overflowY: "hidden"
          }}
          onKeyDown={e => controlsCallbacks.keyDownHandler(e, this)}
          onKeyUp={e => controlsCallbacks.keyUpHandler(e, this)}
          ref={ref => (this.mount = ref)}
        />
        {console.log(this)}
        <HeadsUpDisplay />
      </React.Fragment>
    );
  }
}

export default KillEmBoard;
