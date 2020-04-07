// @ts-ignore
import * as library from "../dist/lib";

describe("three-jest", () => {
  it("should expose functions", () => {
    const functions = Object.keys(library);

    expect(functions).toContain("createCamera");
    expect(functions).toContain("createRenderer");
    expect(functions).toContain("createScene");
    expect(functions).toContain("createSnapshotSerializer");
    expect(functions).toContain("toJSON");

    expect(functions).toContain("default");
  });
});
