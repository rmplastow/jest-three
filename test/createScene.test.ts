import * as THREE from "three";
import createScene from "../src/createScene";

describe("createScene", () => {
  it("should create a THREE.Scene", () => {
    const scene = createScene();

    const objA = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshBasicMaterial({ color: "green" })
    );

    const objB = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshBasicMaterial({ color: "green" })
    );

    scene.add(objA);
    expect(scene.children.length).toBe(1);
    expect(scene.children[0]).toBe(objA);

    scene.add(objB);
    expect(scene.children.length).toBe(2);
    expect(scene.children[1]).toBe(objB);
  });
});
