const config = {
    preset: "ts-jest",
    modulePathIgnorePatterns: ["<rootDir>/dist/"],
    moduleNameMapper: {
        '^src/(.*)$': '<rootDir>/src/$1'
    }
}

export default config