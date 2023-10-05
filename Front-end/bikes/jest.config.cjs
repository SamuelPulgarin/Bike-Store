module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js'],
    setupFilesAfterEnv: ['<rootDir>/src/__test__/setupTests.js'],
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
        "\\.(jpg|jpeg|png|gif|webp|svg)$": "jest-transform-stub",
    },
}