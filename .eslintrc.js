const config = {
  ignorePatterns: 'src/api/*',
  overrides: [
    {
      parserOptions: {
        ecmaVersion: 2020,
        project: ['tsconfig.json'],
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
          module: true,
        },
      },
      extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:react/jsx-runtime',
      ],
      files: ['**/*.ts?(x)'],

      plugins: [
        'react',
        '@typescript-eslint',
        'react-hooks',
        'simple-import-sort',
        'eslint-plugin-import',
        'unused-imports',
      ],
      rules: {
        'import/no-duplicates': ['error', { considerQueryString: true }],
        eqeqeq: ['error', 'always'],
        curly: ['error', 'all'],
        'no-cond-assign': 'error',
        'no-unreachable': 'error',
        'no-mixed-operators': 'warn',
        'comma-dangle': ['error', 'always-multiline'],
        'block-spacing': ['error', 'always'],
        'brace-style': ['error', '1tbs'],
        'padding-line-between-statements': 'off',
        'no-unused-expressions': 'off',
        'react/display-name': 'off',
        'linebreak-style': 0,
        'sort-imports': 'off',
        'no-fallthrough': 'off',
        'import/order': 'off',
        'no-shadow': 'off',
        'no-undef': 'off',

        'react/jsx-boolean-value': ['error', 'never'],
        'react/prop-types': 'off',
        'react-hooks/exhaustive-deps': 'off',

        '@typescript-eslint/no-shadow': ['error'],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-misused-promises': 'off',
        '@typescript-eslint/no-unsafe-enum-comparison': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-inferrable-types': [
          'error',
          {
            ignoreParameters: true,
            ignoreProperties: true,
          },
        ],
        '@typescript-eslint/ban-types': [
          'error',
          {
            extendDefaults: true,
            types: {
              '{}': false,
            },
          },
        ],
        'no-restricted-imports': [
          'error',
          {
            patterns: [
              {
                group: ['antd'],
                message: 'Please use @antd instead.',
              },
              {
                group: ['lodash'],
                message: 'Please use @lodash instead.',
              },
            ],
          },
        ],
        '@typescript-eslint/padding-line-between-statements': [
          'error',
          {
            blankLine: 'always',
            prev: '*',
            next: ['interface', 'type'],
          },
          {
            blankLine: 'always',
            prev: ['const', 'let', 'var'],
            next: '*',
          },
          {
            blankLine: 'any',
            prev: ['const', 'let', 'var'],
            next: ['const', 'let', 'var'],
          },
          {
            blankLine: 'always',
            prev: ['default'],
            next: '*',
          },
          {
            blankLine: 'always',
            prev: ['block-like'],
            next: '*',
          },
        ],
        'simple-import-sort/exports': 'error',
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              ['^\\u0000'],
              [
                '^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)',
              ],
              ['^react', '^@?\\w', '^(@antd|@lodash)(/.*|$)'],
              ['^(@components|@interfaces|@navigation|@screens|@assets|@enums|@utils)(/.*|$)'],
              ['^(@components|@interfaces|@navigation|@screens|@assets|@enums|@utils)(/.*|$)'],
              ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
              ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
              ['^.+\\.s?css$'],
            ],
          },
        ],
        'unused-imports/no-unused-imports': 'error',
        quotes: ['error', 'single'],
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
      'babel-module': {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.android.js', '.android.tsx', '.ios.js', '.ios.tsx'],
        alias: {
          '@components': './src/components',
          '@interfaces': './src/interfaces',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@assets': './src/assets',
          '@enums': './src/enums',
          '@utils': './src/utils',
        },
      },
    },
    react: {
      version: '17.0.2',
    },
  },
};

module.exports = (() => {
  if (!!process.env.NO_PROJECT) {
    const [overridesSection] = config.overrides;
    overridesSection.extends = overridesSection.extends.filter(
      (x) => x !== 'plugin:@typescript-eslint/recommended-requiring-type-checking',
    );
    delete overridesSection.parserOptions.project;
  }

  return config;
})();
