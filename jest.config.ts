import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  testPathIgnorePatterns: ["<rootDir>/build/", "<rootDir>/node_modules/"],
};

export default config;
