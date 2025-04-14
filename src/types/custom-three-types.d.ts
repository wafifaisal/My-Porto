declare module "three/examples/jsm/loaders/FontLoader" {
  import { Loader } from "three";
  import { Font } from "three/examples/jsm/loaders/FontLoader.js";

  export class FontLoader extends Loader {
    load(
      url: string,
      onLoad: (font: Font) => void,
      onProgress?: (event: ProgressEvent) => void,
      onError?: (event: ErrorEvent) => void
    ): void;
  }
}

declare module "three/examples/jsm/geometries/TextGeometry" {
  import { ExtrudeGeometry, ExtrudeGeometryParameters } from "three";
  import { Font } from "three/examples/jsm/loaders/FontLoader.js";

  export interface TextGeometryParameters extends ExtrudeGeometryParameters {
    font: Font;
    size?: number;
    height?: number;
    curveSegments?: number;
    bevelEnabled?: boolean;
    bevelThickness?: number;
    bevelSize?: number;
    bevelOffset?: number;
    bevelSegments?: number;
  }

  export class TextGeometry extends ExtrudeGeometry {
    constructor(text: string, parameters: TextGeometryParameters);
  }
}
