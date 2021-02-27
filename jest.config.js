module.exports = {
    resetMocks: true,
    collectCoverageFrom: ['<rootDir>/src/**/*.(.js|.jsx)'],
    coveragePathIgnorePatterns: [],
    testPathIgnorePatterns: ['/node-modules/'],
    moduleDirectories: [
        'node_modules'
    ]
}