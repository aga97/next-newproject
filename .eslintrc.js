module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  }, // javascript 환경
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 8, // ECMA 버전
    ecmaFeatures: {
      jsx: true, // jsx 활성화 여부
      tsx: true, // tsx 활성화 여부
    },
  },
  ignorePatterns: ['node_modules/*', '.next/*'], // 무시할 파일/폴더
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
  ], // 확장 라이브러리
  rules: {
    'no-console': 'off', // console.log(사용하는 것 금지)
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-unused-expressions': 0,
    'import/extensions': ['off'],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off', // values returned from a module are of the expected type.
    'no-nested-ternary': 'off', // 삼항연산안에 또 삼항연산 하는 것을 방지
    'react/jsx-filename-extension': 'off', // <> </>쓰는 것 방지
    'spaced-comment': 'off', // 주석 쓰는 것 방지
    'no-unused-variable': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/function-component-definition': 'off',
    'no-unused-vars': 'warn',
    'no-trailing-spaces': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.js'],
    },
  },
};
