
module.exports = {
  collectCoverage: true,
  coverageReporters: [
    'lcov',
    'text'
  ],
  projects: [
    {
      displayName: 'client',
      testPathIgnorePatterns: [
        '/node_modules/',
        '/dist/'
      ],
      transform: {
        '^.+\\.[t|j]sx?$': 'ts-jest'
      },
      moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
      globals: {
        'ts-jest': {
          // Need to overrite jsx config to "react" when running tests
          tsConfig: './test/tsconfig.jest.json'
        }
      },
      testMatch: [
        '<rootDir>/{src,pages}/**/*.test.{ts,tsx,js,jsx}'
      ],
      setupFilesAfterEnv: [
        './test/jest-setup.ts'
      ]
    }
  ]
}