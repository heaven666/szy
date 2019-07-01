module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/recommended',
    '@vue/standard'
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'off' : 'off',
    // 新版本eslint对于正则表达式的校验更加严格，因为版本升级导致，暂时禁用
    'no-useless-escape': 'off',
    // 箭头函数只有一个参数时，可以省略圆括号
    'arrow-parens': 'off',
    // 禁用html属性必须换行的风格
    'vue/max-attributes-per-line': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
