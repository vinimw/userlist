import nextJest from "next/jest.js";
import type { Config } from "jest";

const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
  testEnvironment: "jsdom",

  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],

  collectCoverage: true,

  collectCoverageFrom: [
    "app/components/**/*.{ts,tsx}",
    "app/services/**/*.{ts,tsx}",
  ],

  coverageDirectory: "coverage",

  coverageProvider: "v8",

  coverageReporters: ["text", "lcov", "html"],

  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
};

export default createJestConfig(config);
