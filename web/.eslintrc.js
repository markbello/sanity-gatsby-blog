module.exports = {
  extends: ['eslint-config-amex', 'plugin:react/recommended'],
  rules: {
    'react/prop-types': 0,
  },
  settings: {
    react: {
      pragma: 'React',
      version: '16.8.4'
    }
  }
}
