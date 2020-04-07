import { Object3D } from "three";
export interface Configuration {
    shouldReplaceUUIDs?: boolean;
}
export default function toJSON(object: Object3D, config?: Configuration): any;
