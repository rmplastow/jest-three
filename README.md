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
  snapshotSerializers: ["jest-three"]
};
```

Or you can customize the serializer via the `createSerializer` method like so:

```js
import { createSerializer } from "jest-three";

expect.addSnapshotSerializer(
  createSerializer({
    shouldReplaceUUIDs: true
  })
);
```

You can also import `toJSON` to use the snapshot serializer in one assertion, like so:

```js
import { toJSON } from "jest-three";

expect(toJSON(object)).matchesSnapshot();
// …where `object` is an instance of `THREE.Object3D`
```

## Thanks

Thanks to [Dan Kaplun](https://github.com/dbkaplun) who wrote [`three-snapshot-serializer`](https://github.com/dbkaplun/three-snapshot-serializer) which this library is based on.
