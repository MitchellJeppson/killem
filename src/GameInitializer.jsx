import { SphereGeometry, MeshStandardMaterial, Mesh } from "three";

export default class GameInitializer {
  constructor(scene) {
    this.scene = scene;
  }

  initialize(G, ctx) {
    // playerNumber = G
    // // Generate starting marbles
    // for (let i = 0; i < 5; i++) {
    //   let startingTile = this.scene.getObjectByName(
    //     "Home" + playerNumber + "-" + i
    //   );
    //   const marble = this.placeMarble(
    //     playerColor,
    //     playerNumber,
    //     startingTile,
    //     i
    //   );
    //
    //   // save this data to G?
    // }
  }

  placeMarble(color, number, tile, index) {
    let geometry = new SphereGeometry(
      window.self.SPHERE_SIZE,
      window.self.SPHERE_VERT,
      window.self.SPHERE_HOR
    );
    let material = new MeshStandardMaterial({
      color: color,
      roughness: 0.25,
      metalness: 0.35
    });
    let sphere = new Mesh(geometry, material);

    sphere.name = "marble" + number + "-" + index;
    sphere.position.set(tile.position.x, tile.position.y, tile.position.z);
    sphere.userData = {
      currentTile: tile,
      positionAtStartOfTurn: {
        x: sphere.position.x,
        y: sphere.position.y,
        z: sphere.position.z
      },
      tileAtStartOfTurn: tile,
      homeTile: tile,
      marbleNumber: index
    };

    this.scene.add(sphere);
    return sphere;
  }

  generateMarbles(playerNumber, playerColorHex) {
    console.log("Unimplemented");
  }

  generateTransparentMarbles(color, playerNumber, index) {
    console.log("Unimplemented");
  }
}
