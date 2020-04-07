# jest-three

> Jest testing utilities for [Three.js](https://threejs.org/). Includes a snapshot serializer for Three.js objects.

## Installation

```
npm install --save-dev jest-three
```

## Snapshot Serializer

The easiest way to test [Three.js](https://threejs.org/) objects is with the snapshot serializer. You can register the serializer via the `snapshotSerializers` configuration property in your `jest` configuration like so:

```js
// jest.config.js
module.exports = {
  snapshotSerializers: ["jest-three"],
};
```

Or you can customize the serializer via the `createSnapshotSerializer` method like so:

```js
import { createSnapshotSerializer } from "jest-three";

expect.addSnapshotSerializer(
  createSnapshotSerializer({
    shouldReplaceUUIDs: true,
  })
);
```

You can also import `toJSON` to use the snapshot serializer in one assertion, like so:

```js
import { toJSON } from "jest-three";

expect(toJSON(object)).toMatchSnapshot();
// …where `object` is an instance of `THREE.Object3D`
```

## Factories

We have prepared some factories to create basic [Three.js](https://threejs.org/) objects such as a WebGL renderer, camera and scene.

### `createCamera`

```ts
import { createCamera } from "jest-three";

const config = {};
const camera = createCamera(config);

expect(camera).toBeInstanceOf(THREE.PerspectiveCamera);
```

### `createRenderer`

```ts
import { createRenderer } from "jest-three";

const config = {};
const renderer = createRenderer(config);

expect(renderer).toBeInstanceOf(THREE.WebGLRenderer);
```

> **Note:** Canvas is build with [`canvas`](https://www.npmjs.com/package/canvas).

> **Note:** WebGL context is build with [`gl`](https://www.npmjs.com/package/gl).

### `createScene`

```ts
import { createScene } from "jest-three";

const objA = new THREE.Mesh();
const objB = new THREE.Mesh();
const scene = createScene();

scene.add(objA);
expect(scene.children.length).toBe(1);
expect(scene.children[0]).toBe(objA);

scene.add(objB);
expect(scene.children.length).toBe(2);
expect(scene.children[1]).toBe(objB);
```

## Tests

```bash
$ npm test
```

## Thanks

Thanks to [Dan Kaplun](https://github.com/dbkaplun) who wrote [`three-snapshot-serializer`](https://github.com/dbkaplun/three-snapshot-serializer) which this library is based on.
