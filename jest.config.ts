import { pathsToModuleNameMapper } from 'ts-jest/utils';

const config = {
    preset: "ts-jest",
    testEnvironment: "node",
    moduleDirectories: ["node_modules", "."],
    roots: ["./"],
    modulePathIgnorePatterns: ["<rootDir>/dist/"],
    moduleNameMapper: {
        'src/(.*)$': '<rootDir>/src/$1'
    }
}

export default config