const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    // Fix the pattern - remove the extra forward slashes
    '^@/(.*)$': '<rootDir>/src/$1'
  },
}

module.exports = createJestConfig(customJestConfig)
