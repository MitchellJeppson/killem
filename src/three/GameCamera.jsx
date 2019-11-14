import { PerspectiveCamera } from "three";

export default class GameCamera {
  constructor() {
    const camera = new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    camera.position.set(0, 20, 20);
    camera.rotation.x = (-30 * Math.PI) / 180;

    return camera;
  }
}
