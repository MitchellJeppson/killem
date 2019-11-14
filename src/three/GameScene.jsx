import sceneJson from "./scene";
import {
  ObjectLoader,
  EdgesGeometry,
  LineBasicMaterial,
  LineSegments
} from "three";

export default class GameScene {
  constructor() {
    const scene = new ObjectLoader().parse(sceneJson);
    scene.traverse(function(child) {
      if (child.name.startsWith("MoveTile") || child.name.startsWith("Home")) {
        //Add black edges to moving tiles
        var geometry = new EdgesGeometry(child.geometry);
        var material = new LineBasicMaterial({
          color: 0x000000,
          linewidth: 2
        });
        var edges = new LineSegments(geometry, material);
        child.add(edges);
      }
    });
    return scene;
  }
}
