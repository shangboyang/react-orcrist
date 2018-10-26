module.exports = {
  "root": true,
  "extends": [
    "airbnb-base",
    "plugin:react/recommended"
  ],
  "env": {
    "browser": true,
    "node": true
  },
  "globals": {
    "window": false,
    "define": false,
    "location": false,
    "document": false,
    "navigator": false,
    "localStorage": false,
    "sessionStorage": false,
    "setTimeout": false,
    "wx": false,
    "$$": false,
  },
  "rules": {
    "no-debugger": process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "no-global-assign": ["error"],
    "indent": ["error", 2, {
      "SwitchCase": 1,
      "VariableDeclarator": {
        "var": 2,
        "let": 2,
        "const": 3
      },
      "MemberExpression": 1,
      "FunctionExpression": {
        "body": 1,
        "parameters": 2
      },
      "CallExpression": {
        "arguments": 1
      },
      "ArrayExpression": 1,
      "ObjectExpression": 1
    }],
    "no-unused-expressions": ["warn", {
      "allowShortCircuit": true,
      "allowTernary": true
    }],
    "no-restricted-globals": 0, // 禁用特定的全局变量 (no-restricted-globals),
    // 要求或禁止使用拖尾逗号 (comma-dangle)
    "comma-dangle": ["error", {
      "arrays": "only-multiline",
      "objects": "only-multiline",
      "imports": "only-multiline",
      "exports": "only-multiline",
      "functions": "never"
    }], 
    // 优先使用数组和对象解构 (prefer-destructuring)
    "prefer-destructuring": ["error", {
      "object": false, // 强制对象
      "array": false
    }], 
    // 禁用行尾空白 (no-trailing-spaces)
    // "no-trailing-spaces": ["error", {
    //   "skipBlankLines": true,
    //   "ignoreComments": true
    // }], 
    "max-len": ["warn", {
      "code": 120,
    }],
    "no-restricted-syntax": 0, // 禁止使用特定的语法 (no-restricted-syntax)
    "no-bitwise": 0,
    "no-mixed-operators": 0,
    "no-useless-constructor": 0,
    "react/prop-types": 0, // react prop-types
    "import/no-unresolved": 0,
    "no-new": 0,
    "react/no-string-refs": 0,
    // "global-require": 0
  },
  "settings": {
    "react": {
      // default to "createReactClass"
      "createClass": "createReactClass", // Regex for Component Factory to use,
      "pragma": "React", // Pragma to use, default to "React"
      "version": "16.0", // React version, default to the latest React stable release
      "flowVersion": "0.53" // Flow version
    },
    "propWrapperFunctions": ["forbidExtraProps"]
    // The names of any functions used to wrap the
    // propTypes object, e.g. `forbidExtraProps`.
    // If this isn't set, any propTypes wrapped in
    // a function will be skipped.
  }
};
