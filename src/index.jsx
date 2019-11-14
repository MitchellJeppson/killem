import React from "react";
import { render } from "react-dom";
import { Client } from "boardgame.io/client";
import { TicTacToe } from "./game";
import HeadsUpDisplay from "./HeadsUpDisplay";
import Controls, * as controlsCallbacks from "./three/GameControls";
import Camera from "./three/GameCamera";
import Scene from "./three/GameScene";
import Renderer from "./three/GameRenderer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.controls = undefined;
  }
  state = {
    playerID: null
  };

  componentDidMount() {
    const KillEmClient = Client({
      game: TicTacToe,
      debug: true,
      multiplayer: {
        server: "http://18.224.209.168:8000"
      }
    });

    const scene = new Scene();
    const renderer = new Renderer(this);
    const camera = new Camera();
    this.controls = new Controls(camera, renderer);

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

render(<App />, document.getElementById("root"));
