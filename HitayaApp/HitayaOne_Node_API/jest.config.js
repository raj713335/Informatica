module.exports = {
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageProvider: 'v8',
    coverageReporters: [
        'json',
        'text',
        'lcov',
        'clover'
    ],
    preset: 'ts-jest',
    setupFiles: ['dotenv/config'],
    testEnvironment: 'node'
};
