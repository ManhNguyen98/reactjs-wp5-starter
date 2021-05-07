module.exports = {
  extends: 'airbnb',
  plugins: [
    'react',
  ],
  rules: {
    'react/destructuring-assignment': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-one-expression-per-line': 0,
    'no-script-url': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'no-console': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
  globals: {
    document: true,
    window: true,
  },
};
