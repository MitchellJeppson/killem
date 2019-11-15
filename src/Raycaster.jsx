import * as THREE from "three";

export default class Raycaster {
  constructor(scene, camera) {
    this.raycaster = new THREE.Raycaster();
    this.camera = camera;
    this.mouse = new THREE.Vector2();
    this.scene = scene;

    window.addEventListener("dblclick", this.onMousedown, false);
  }

  onMouseDown = event => {
    event.stopPropagation();
    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    window.requestAnimationFrame(this.checkSelection);
  };

  checkSelection = () => {
    this.raycaster.setFromCamera(this.mouse, this.camera);
    const intersectedMarble = this.raycaster.intersectObjects(
      this.scene.children
    )[0];
    if (intersectedMarble && intersectedMarble.object.name.includes("marble"))
      return;

    if (intersectedMarble.object.userData.playerNumber === 0) {
      if (intersectedMarble.object.name === "marble") {
        console.log("clicked own marble");
        //player clicked on one of their own marbles
      } else if (intersectedMarble.object.name === "transparentMarble") {
        console.log("clicked own tranparent marble");
        //player clicked on one of their own transparentmarbles
      }
    }
    this.renderer.render(this.scene, this.camera);
  };
}
