import * as THREE from "three";
import createSnapshotSerializer from "../src/createSnapshotSerializer";

expect.addSnapshotSerializer(createSnapshotSerializer());

describe("createSnapshotSerializer", () => {
  it("should create a JSON snapshot for a THREE.Object3D", () => {
    const obj = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshBasicMaterial({ color: "green" })
    );

    expect(obj).toMatchSnapshot();
  });
});
