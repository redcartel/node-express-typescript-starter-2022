import { pathsToModuleNameMapper } from 'ts-jest/utils';

const config = {
    preset: "ts-jest",
    modulePathIgnorePatterns: ["<rootDir>/dist/"],
    moduleNameMapper: {
        '^src/(.*)$': '<rootDir>/src/$1'
    }
}

export default config