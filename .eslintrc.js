module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    extends: ['@nuxtjs/eslint-config-typescript', 'plugin:nuxt/recommended', 'prettier'],
    plugins: [],
    // add your custom rules here
    rules: {
        'vue/require-default-prop': 'off',
        'vue/no-v-html': 'off',
        'no-console': 'off',
        camelcase: 'off',
        'import/no-mutable-exports': 'off'
    }
}
