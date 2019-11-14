import OrbitControls from "./OrbitControls";

export default class GameControls {
  constructor(camera, renderer) {
    const controls = new OrbitControls(camera, renderer.domElement);

    controls.screenSpacePanning = false;
    controls.maxDistance = 40;
    controls.minDistance = 17;
    controls.maxPolarAngle = Math.PI / 2.6;
    controls.minPolarAngle = Math.PI / 6;
    controls.enabled = false;
    controls.panEnabled = false;

    return controls;
  }
}

export const keyDownHandler = (event, app) => {
  if (event.which === 17) {
    event.preventDefault();
    event.stopPropagation();
    app.controls.enabled = true;
  }
};

export const keyUpHandler = (event, app) => {
  if (event.which === 17) {
    event.preventDefault();
    event.stopPropagation();
    app.controls.enabled = false;
  }
};
