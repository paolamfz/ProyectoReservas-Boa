module.exports = {
  preset: 'jest-playwright-preset',
  testMatch: ['**/*.test.ts'],
  transform: {
      '^.+\\.tsx?$': 'babel-jest',
    },
};