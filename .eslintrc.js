module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    // 配置vue3 'plugin:vue/vue3-essential
    // 配置vue2 'plugin:vue/essential'
    extends: [
        'plugin:vue/vue3-essential',
        'airbnb-base',
        'eslint:recommended',
        'plugin:prettier/recommended',
        'plugin:jest/recommended',
    ],
    parserOptions: {
        ecmaVersion: 12,
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
    },
    plugins: [
        'vue',
        '@typescript-eslint',
        // 添加prettier 插件
    ],
    rules: {},
}
