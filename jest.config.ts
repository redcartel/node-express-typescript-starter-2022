const config = {
    preset: "ts-jest",
    modulePathIgnorePatterns: ["<rootDir>/dist/"],
    moduleFileExtensions: [
        "js",
        "ts",
        "json"
    ],
    moduleDirectories: [
        __dirname,
        'src',
        'node_modules'
    ],
    moduleNameMapper: {
        '^src/(.*)$': '<rootDir>/src/$1',
    }
}

export default config