module.exports = {
    clearMocks: true,
    coverageDirectory: '.coverage',
    moduleNameMapper: {
        '^components(.*)$': '<rootDir>/components$1',
    },
    setupFilesAfterEnv: ['./config/jest.setup.js'],
};
