import * as THREE from "three";
import createRenderer from "../src/createRenderer";

describe("createRenderer", () => {
  // Hide THREE.WebGLRenderer warnings about unsupported extensions:
  const originalConsoleWarn = console.warn;
  beforeAll(() => {
    console.warn = (...args: any[]) => {
      if (!/THREE/.test(args[0])) {
        originalConsoleWarn.call(console, ...args);
      }
    };
  });

  it("should create a THREE.WebGLRenderer", () => {
    const renderer = createRenderer();

    expect(renderer).toBeInstanceOf(THREE.WebGLRenderer);
  });
});
