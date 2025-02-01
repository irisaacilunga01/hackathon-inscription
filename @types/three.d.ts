import * as THREE from "three";
import { Object3DNode } from "@react-three/fiber";

declare module "@react-three/fiber" {
  interface ThreeElements {
    // Ajoutez ici les types que vous utilisez
    object3D: Object3DNode<THREE.Object3D, typeof THREE.Object3D>;
  }
}
