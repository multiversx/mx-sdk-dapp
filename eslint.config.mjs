import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import jestPlugin from 'eslint-plugin-jest';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: [
      'build/**',
      'dist/**',
      'node_modules/**',
      '.snapshots/**',
      '**/*.min.js'
    ]
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx}', '**/*.{test,spec}.{js,ts,tsx}'],
    languageOptions: {
      globals: {
        ...Object.fromEntries(
          Object.entries({
            ...globals.browser,
            ...globals.node,
            ...globals.jest
          }).map(([key, value]) => [key.trim(), value])
        )
      },
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        },
        project: './tsconfig.json'
      }
    },
    plugins: {
      import: importPlugin,
      prettier: prettierPlugin,
      jest: jestPlugin,
      '@typescript-eslint': tseslint.plugin
    },
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx']
      },
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
          moduleDirectory: ['node_modules', 'src/']
        },
        typescript: {
          alwaysTryTypes: true
        }
      }
    },
    rules: {
      ...jestPlugin.configs.recommended.rules,
      ...pluginJs.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      'import/order': [
        'warn',
        {
          groups: ['builtin', 'external', 'internal'],
          pathGroups: [
            {
              pattern: 'react',
              group: 'external',
              position: 'before'
            }
          ],
          'newlines-between': 'ignore',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true
          }
        }
      ],
      'prettier/prettier': ['error', { endOfLine: 'lf' }],
      '@typescript-eslint/indent': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-use-before-define': [
        'error',
        { functions: false, classes: false }
      ],
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_'
        }
      ],
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      'linebreak-style': ['error', 'unix'],
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      'no-unused-vars': ['off'],
      'no-prototype-builtins': 'off',
      'jest/no-mocks-import': 'off',
      'no-async-promise-executor': 'off',
      'object-curly-newline': 'off',
      'arrow-body-style': 'off',
      'implicit-arrow-linebreak': 'off',
      'func-names': 'off',
      curly: ['error', 'all'],
      'operator-linebreak': 'off',
      'function-paren-newline': 'off',
      'no-shadow': 'warn',
      '@typescript-eslint/no-shadow': 'warn'
    }
  }
];
