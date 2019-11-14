import { WebGLRenderer } from "three";

export default class GameRenderer {
  constructor(app) {
    const renderer = new WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    app.mount.appendChild(renderer.domElement);

    return renderer;
  }
}
