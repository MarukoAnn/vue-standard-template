module.exports = {
    moduleFileExtensions: ['vue', 'js', 'ts'],
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.vue$': 'vue-jest', // vue文件使用vue-jest转换
        '^.+\\.ts$': 'ts-jest', // ts 文件使用ts-jest转换
    },
    // 匹配 __test__目录下的 .js/.ts 文件 或者其他目录下的 xx.test.js/ts xx.spec.js/ts
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts)$',
}
