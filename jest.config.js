module.exports = {
    preset: '@playwright/test',
    testMatch: ['**/Test/**/*.spec.ts'],
    transform: {
        '^.+\\.tsx?$': 'babel-jest',
      },
};