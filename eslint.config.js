import js from '@eslint/js';
import eslintPluginSvelte from 'eslint-plugin-svelte';
import globals from 'globals';

export default [
	js.configs.recommended,
	...eslintPluginSvelte.configs['flat/recommended'],
	// extends: [
	//         'eslint:recommended',
	//         'plugin:svelte/recommended',
	//         'plugin:import/recommended',
	//         'plugin:import/errors',
	//         'plugin:import/warnings'
	//     ],
	{
		ignores: ['docs/*'],
		languageOptions: {
			ecmaVersion: 2022,
			sourceType: 'module',
			globals: {
				...globals.browser,
				...globals.node,
				...globals.jest,
			}
		},
		rules: {
			'brace-style': ['error', 'stroustrup', { 'allowSingleLine': true }],
			'indent': ['error', 'tab'],
			'quotes': ['error', 'single', 'avoid-escape'],
			'semi': ['error', 'always'],
			'func-call-spacing': ['error', 'never'],
			'space-before-function-paren': ['error', 'always'],
			'object-curly-spacing': ['error', 'always'],
			'array-bracket-spacing': ['error', 'never'],
			'space-before-blocks': ['error', 'always'],
			'space-in-parens': ['error', 'never'],
			'newline-per-chained-call': ['error', { 'ignoreChainWithDepth': 3 }],
			'no-undef': 'error',
			'no-mixed-spaces-and-tabs': 'error',
			'no-unused-vars': 'error',
			'no-trailing-spaces': 'error',
			'no-multi-spaces': ['error', { 'ignoreEOLComments': true }],
			'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true, 'mode': 'strict' }],
			'no-shadow': 'error',
			'eol-last': 1,
			'curly': 0,
			'no-console': 0,
			'comma-dangle': 0,
			'no-cond-assign': 0,
			'prefer-promise-reject-errors': 'error',
			'prefer-const': ['error', { 'destructuring': 'any', 'ignoreReadBeforeAssign': false }],
			'svelte/no-at-html-tags': 0,
			// 'import/no-unresolved': [2, { 'commonjs': true, 'amd': true }],
			// 'import/named': 2,
			// 'import/namespace': 2,
			// 'import/default': 2,
			// 'import/export': 2,
		}
	}
];
