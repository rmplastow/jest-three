module.exports = {
  moduleFileExtensions: ["ts", "js"],

  transform: {
    ".ts": "ts-jest"
  },

  testEnvironment: "node",
  testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",

  coveragePathIgnorePatterns: ["/node_modules/", "/test/"],
  collectCoverageFrom: ["src/*.{js,ts}"]
};
