require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
    root: true,
    'extends': [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/eslint-config-typescript',
        '@vue/eslint-config-prettier/skip-formatting'
    ],
    parser: "vue-eslint-parser",
    parserOptions: {
        ecmaVersion: 'latest'
    },
    plugins: ['prettier', 'unused-imports'],
    rules: {
        'prettier/prettier': ['warn', require('./.prettierrc')],
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-array-constructor': 'off',
        semi: ['error', 'always'],
        'unused-imports/no-unused-imports': 2,
        'unused-imports/no-unused-vars': 1,
        'lines-between-class-members': [
            'error',
            'always',
            {
                exceptAfterSingleLine: true,
            },
        ],
        'padding-line-between-statements': [
            'error',
            {
                blankLine: 'always',
                prev: ['const', 'let', 'var'],
                next: '*',
            },
            {
                blankLine: 'always',
                prev: ['*'],
                next: ['const', 'let', 'var'],
            },
            {
                blankLine: 'never',
                prev: ['const', 'let', 'var'],
                next: ['const', 'let', 'var'],
            },
            {
                blankLine: 'always',
                prev: ['block-like'],
                next: ['*'],
            },
            {
                blankLine: 'always',
                prev: ['*'],
                next: ['block-like'],
            },
            {
                blankLine: 'always',
                prev: 'directive',
                next: '*',
            },
            {
                blankLine: 'never',
                prev: 'directive',
                next: 'directive',
            },
        ],
    },
};