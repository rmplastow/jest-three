import { Object3D } from "three";
import { Configuration } from "./toJSON";
export default function createSnapshotSerializer(options?: Configuration): {
    test(object: any): boolean;
    print(object: Object3D, printer: Function): any;
};
