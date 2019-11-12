import React from "react";
import {render} from "react-dom";
import {Client} from "boardgame.io/react";
import {TicTacToe} from "./game";
import * as THREE from "three";
import OrbitControls from './OrbitControls';
import sceneJson from './scene';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.controls = undefined;
    this.keyDownHandler = this.keyDownHandler.bind(this);
    this.keyUpHandler = this.keyUpHandler.bind(this);
  }
  state = {
    playerID: null
  };

  keyDownHandler = (event) => {

    if (event.which === 17) {
      event.preventDefault();
      event.stopPropagation();
      this.controls.enabled = true;
    }
  }

  keyUpHandler = (event) => {
    if (event.which === 17) {
      event.preventDefault();
      event.stopPropagation();
      this.controls.enabled = false;
    }
  }

  componentDidMount() {

    const KillEmClient = Client({
      game: TicTacToe,
      debug: true,
      multiplayer: {
        server: "http://18.224.209.168:8000"
      }
    });

    const scene = new THREE.ObjectLoader().parse(sceneJson);

    scene.traverse(function(child) {
      if (child.name.startsWith("MoveTile") || child.name.startsWith("Home")) {
        //Add black edges to moving tiles
        var geometry = new THREE.EdgesGeometry(child.geometry);
        var material = new THREE.LineBasicMaterial({color: 0x000000, linewidth: 2});
        var edges = new THREE.LineSegments(geometry, material);
        child.add(edges);
      }
    });

    // RENDERER
    const renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    this.mount.appendChild(renderer.domElement);

    // CAMERA
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    camera.position.set(0, 20, 20);
    camera.rotation.x = -30 * Math.PI / 180;

    this.controls = new OrbitControls(camera, renderer.domElement);
    this.controls.screenSpacePanning = false;
    this.controls.maxDistance = 40;
    this.controls.minDistance = 17;
    this.controls.maxPolarAngle = Math.PI / 2.6;
    this.controls.minPolarAngle = Math.PI / 6;
    this.controls.enabled = false;
    this.controls.panEnabled = false;

    console.log(KillEmClient);
    const {G} = KillEmClient.getState();

    var animate = () => {
      requestAnimationFrame(animate);

      scene.traverse((child) => {
        if (child.name.startsWith("marble") && child.userData.animate === true) {}
      });

      this.controls.update();
      renderer.render(scene, camera);
    }
    animate();

  }
  render() {
    return (< div style = {{overflowX:"hidden", overflowY:"hidden"}}onKeyDown = {
      this.keyDownHandler
    }
    onKeyUp = {
      this.keyUpHandler
    }
    ref = {
      ref => (this.mount = ref)
    } />);
  }
}

render(< App / >, document.getElementById("root"));
