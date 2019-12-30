module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    // An array of file extensions your modules use
    moduleFileExtensions: ['js', 'ts', 'json'],
    // The glob patterns Jest uses to detect test files
    testMatch: [
        // '**/?(*.)+(spec|test).js?(x)',
        '**/?(*.)+(spec|test).ts?(x)',
    ],
};
