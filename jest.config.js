/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    verbose: true, // 실행 중에 각 개별 테스트를 보고해야 하는지 여부
    preset: 'ts-jest',
    testEnvironment: 'jsdom', // 테스트에 사용할 테스트 환경
    roots: ['<rootDir>/src'], // Jest가 테스트와 모듈을 스캔해야 하는 루트 디렉터리
    testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'], // 테스트 적용 폴더 및 파일 확장자
    resolver: '<rootDir>/jest/resolver.js',
    testPathIgnorePatterns: ['<rootDir>/node_modules/'],
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest',
        '^.+\\.scss$': 'jest-scss-transform', // scss 트랜스폼
    },
    moduleNameMapper: {
        // 모듈 alias tsconfig와 동일하게 지정할 것
        '^@/(.*)$': '<rootDir>/src/$1',
        '^@styles/(.*)$': '<rootDir>/src/styles/$1',
        '^@comp/(.*)$': '<rootDir>/src/components/$1',
        '^@container/(.*)$': '<rootDir>/src/containers/$1',
        '^@api/(.*)$': '<rootDir>/src/core/api/$1',
        '^@store/(.*)$': '<rootDir>/src/core/store/$1',
        '^@utils/(.*)$': '<rootDir>/src/core/utils/$1',
    },
    setupFilesAfterEnv: ['./src/setupTests.ts'],
}
