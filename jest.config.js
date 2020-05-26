module.exports = {
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/index.ts'
  ],
  coverageDirectory: 'coverage',
  clearMocks: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
}