import React from "react";
import { render } from "react-dom";
import { Client } from "boardgame.io/react";
import { TicTacToe } from "./game";
import * as THREE from "three";
import OrbitControls from 'three-orbit-controls';

let orbitControls = OrbitControls(THREE);

const KillEmClient = Client({
    game: TicTacToe,
    debug: true,
    multiplayer: { server: "http://18.224.209.168:8000" },
});

const scene = null;

new THREE.ObjectLoader().load(
    "scene.json",
    function(e) {
        scene = e;
    }
);

document.addEventListener('keydown', (e) => {
    if (e.code.startsWith("Control")) {
        window.self.controls.enabled = true;
    }
});

document.addEventListener('keyup', (e) => {
    if (e.code.startsWith("Control")) {
        window.self.controls.enabled = false;
    }
});

scene.traverse(function(child) {
    if (child.name.startsWith("MoveTile") || child.name.startsWith("Home")) {
        //Add black edges to moving tiles
        var geometry = new THREE.EdgesGeometry(child.geometry);
        var material = new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 2 });
        var edges = new THREE.LineSegments(geometry, material);
        child.add(edges);
    }
});


// RENDERER
let container = document.getElementById('mainPane');
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('mainPane').style.top = (window.innerHeight) / 2 + "px";
container.appendChild(renderer.domElement);



// CAMERA 
const camera = new THREE.PerspectiveCamera(74, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 20, 20);
camera.rotation.x = -30 * Math.PI / 180;

const controls = new OrbitControls(camera, renderer.domElement);
controls.screenSpacePanning = false;
controls.minDistance = 15;
controls.maxDistance = 40;
controls.maxPolarAngle = Math.PI / 2.6;
controls.minPolarAngle = Math.PI / 6;
controls.enabled = false;


// ANIMATION LOGGIC
let rotation = 0;

function animate() {
    requestAnimationFrame(animate);

    const { G } = KillEmClient.getState();

    scene.traverse((child) => {
        if (child.name.startsWith("marble") && child.userData.animate === true) {

        }
    });

    controls.update();
    renderer.render(scene, camera);
}


class App extends React.Component {
    state = { playerID: null };

    render() {
        if (this.state.playerID === null) {
            return (
                <div id="mainPane"></div>
            );
        }
        return (
            <div id="mainPane"></div>
        );
    }
}

render(<App />, document.getElementById("root"));
