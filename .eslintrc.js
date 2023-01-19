module.exports = {
    env: {
        browser: true,
        es6: true,
        jest: true,
        "jest/globals": true,
        node: true,
    },
    extends: ["plugin:sonarjs/recommended", "plugin:unicorn/recommended"],
    globals: {
        JSX: true,
    },
    ignorePatterns: ["*.js"],
    root: true,
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
    },
    plugins: [
        "@typescript-eslint",
        "node",
        "no-secrets",
        "eslint-comments",
        "ramda",
        "react",
        "react-hooks",
        "import",
        "jest",
        "jest-formatting",
        "simple-import-sort",
        "sonarjs",
        "unicorn",
    ],
    overrides: [
        {
            files: ["*.js"],
            rules: {
                "@typescript-eslint/no-require-imports": "error",
                "@typescript-eslint/no-unsafe-assignment": "error",
                "@typescript-eslint/no-unsafe-call": "error",
                "@typescript-eslint/no-unsafe-member-access": "error",
                "@typescript-eslint/no-unsafe-return": "error",
                "@typescript-eslint/no-var-requires": "error",
                "@typescript-eslint/strict-boolean-expressions": [
                    "error",
                    {
                        allowString: true,
                        allowNullableString: true,
                        allowNullableBoolean: true,
                    },
                ],
                "import/named": "error",
                "import/no-commonjs": "error",
                "import/unambiguous": "error",
                "node/global-require": "error",
                "node/no-unsupported-features/es-builtins": "error",
                "node/no-unsupported-features/es-syntax": "error",
                "node/no-unsupported-features/node-builtins": "error",
            },
        },
    ],
    rules: {
        "for-direction": "error",
        "getter-return": "error",
        "no-async-promise-executor": "error",
        "no-await-in-loop": "error",
        "no-compare-neg-zero": "error",
        "no-cond-assign": "error",
        "no-constant-condition": "error",
        "no-control-regex": "error",
        "no-debugger": "error",
        "no-dupe-args": "error",
        "no-dupe-keys": "error",
        "no-duplicate-case": "error",
        "no-empty": [
            "error",
            {
                allowEmptyCatch: true,
            },
        ],
        "no-empty-character-class": "error",
        "no-ex-assign": "error",
        "no-extra-boolean-cast": "error",
        "no-extra-semi": "error",
        "no-func-assign": "error",
        "no-import-assign": "error",
        "no-inner-declarations": "error",
        "no-invalid-regexp": "error",
        "no-irregular-whitespace": "error",
        "no-loss-of-precision": "error",
        "no-misleading-character-class": "error",
        "no-obj-calls": "error",
        "no-promise-executor-return": "error",
        "no-prototype-builtins": "error",
        "no-regex-spaces": "error",
        "no-setter-return": "error",
        "no-sparse-arrays": "error",
        "no-template-curly-in-string": "error",
        "no-unexpected-multiline": "error",
        "no-unreachable": "error",
        "no-unreachable-loop": "error",
        "no-unsafe-finally": "error",
        "no-unsafe-negation": "error",
        "no-unsafe-optional-chaining": "error",
        "no-unused-private-class-members": "error",
        "no-useless-backreference": "error",
        "require-atomic-updates": "error",
        "use-isnan": "error",
        "valid-typeof": "error",
        "accessor-pairs": "error",
        "array-callback-return": "error",
        "block-scoped-var": "error",
        "class-methods-use-this": "error",
        complexity: [
            "error",
            {
                max: 50,
            },
        ],
        "consistent-return": "error",
        curly: "error",
        "default-case": "error",
        "default-case-last": "error",
        "default-param-last": "error",
        "dot-location": ["error", "property"],
        "dot-notation": "error",
        eqeqeq: "error",
        "grouped-accessor-pairs": "error",
        "guard-for-in": "error",
        "max-classes-per-file": ["error", 3],
        "no-alert": "error",
        "no-caller": "error",
        "no-case-declarations": "error",
        "no-constructor-return": "error",
        "no-div-regex": "error",
        "no-else-return": "error",
        "no-empty-function": "error",
        "no-empty-pattern": "error",
        "no-eq-null": "error",
        "no-eval": "error",
        "no-extend-native": "error",
        "no-extra-bind": "error",
        "no-extra-label": "error",
        "no-fallthrough": "error",
        "no-floating-decimal": "error",
        "no-global-assign": "error",
        "no-implicit-coercion": ["error", { boolean: false }],
        "no-implicit-globals": "error",
        "no-implied-eval": "error",
        "no-invalid-this": "error",
        "no-iterator": "error",
        "no-labels": "error",
        "no-lone-blocks": "error",
        "no-loop-func": "error",
        "no-multi-spaces": "error",
        "no-multi-str": "error",
        "no-new": "error",
        "no-new-func": "error",
        "no-new-wrappers": "error",
        "no-nonoctal-decimal-escape": "error",
        "no-octal": "error",
        "no-octal-escape": "error",
        "no-param-reassign": "error",
        "no-proto": "error",
        "no-redeclare": "error",
        "no-restricted-properties": "error",
        "no-return-assign": "error",
        "no-return-await": "error",
        "no-script-url": "error",
        "no-self-assign": "error",
        "no-self-compare": "error",
        "no-sequences": "error",
        "no-throw-literal": "error",
        "no-unmodified-loop-condition": "error",
        "no-unused-expressions": "error",
        "no-unused-labels": "error",
        "no-useless-call": "error",
        "no-useless-catch": "error",
        "no-useless-concat": "error",
        "no-useless-escape": "error",
        "no-useless-return": "error",
        "no-void": "error",
        "no-with": "error",
        "prefer-named-capture-group": "error",
        "prefer-object-has-own": "error",
        "prefer-promise-reject-errors": "error",
        "prefer-regex-literals": "error",
        radix: "error",
        "require-await": "error",
        "require-unicode-regexp": "error",
        "vars-on-top": "error",
        "wrap-iife": "error",
        yoda: "error",
        strict: "error",
        "init-declarations": "error",
        "no-delete-var": "error",
        "no-label-var": "error",
        "no-restricted-globals": [
            "error",
            "addEventListener",
            "blur",
            "close",
            "closed",
            "confirm",
            "defaultStatus",
            "defaultstatus",
            "event",
            "external",
            "find",
            "focus",
            "frameElement",
            "frames",
            "history",
            "innerHeight",
            "innerWidth",
            "length",
            "location",
            "locationbar",
            "menubar",
            "moveBy",
            "moveTo",
            "name",
            "onblur",
            "onerror",
            "onfocus",
            "onload",
            "onresize",
            "onunload",
            "open",
            "opener",
            "opera",
            "outerHeight",
            "outerWidth",
            "pageXerrorset",
            "pageYerrorset",
            "parent",
            "print",
            "removeEventListener",
            "resizeBy",
            "resizeTo",
            "screen",
            "screenLeft",
            "screenTop",
            "screenX",
            "screenY",
            "scroll",
            "scrollbars",
            "scrollBy",
            "scrollTo",
            "scrollX",
            "scrollY",
            "self",
            "status",
            "statusbar",
            "stop",
            "toolbar",
            "top",
        ],
        "no-shadow": "error",
        "no-shadow-restricted-names": "error",
        "no-undef-init": "error",
        "no-unused-vars": [
            "warn",
            {
                varsIgnorePattern: "^_",
                argsIgnorePattern: "^_",
                destructuredArrayIgnorePattern: "^_",
            },
        ],
        "no-use-before-define": "error",
        "array-bracket-newline": ["error", "consistent"],
        "array-bracket-spacing": ["error", "never"],
        "array-element-newline": ["error", "consistent"],
        "block-spacing": "error",
        "brace-style": "error",
        camelcase: "error",
        "capitalized-comments": "error",
        "comma-dangle": ["error", "always-multiline"],
        "comma-spacing": "error",
        "comma-style": "error",
        "computed-property-spacing": "error",
        "consistent-this": "error",
        "eol-last": "error",
        "func-call-spacing": "error",
        "func-name-matching": "error",
        "func-names": "error",
        "func-style": [
            "error",
            "declaration",
            {
                allowArrowFunctions: true,
            },
        ],
        "id-denylist": "error",
        "id-length": [
            "error",
            {
                min: 2,
                exceptions: ["x", "y", "a", "b", "_", "t", "i", "j"],
                properties: "never",
            },
        ],
        "id-match": "error",
        "jsx-quotes": "error",
        "key-spacing": [
            "error",
            {
                mode: "minimum",
            },
        ],
        "keyword-spacing": "error",
        "line-comment-position": "error",
        "lines-around-comment": ["error", { beforeBlockComment: false }],
        "lines-between-class-members": "error",
        "max-depth": ["error", 7],
        "max-len": [
            "error",
            {
                code: 120,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
                ignoreComments: true,
                ignoreTrailingComments: true,
            },
        ],
        "max-lines": [
            "error",
            {
                max: 1000,
            },
        ],
        "max-lines-per-function": [
            "error",
            {
                max: 1000,
                skipBlankLines: true,
                skipComments: true,
                IIFEs: false,
            },
        ],
        "max-nested-callbacks": "error",
        "max-params": [
            "error",
            {
                max: 9,
            },
        ],
        "max-statements": [
            "error",
            {
                max: 30,
            },
        ],
        "max-statements-per-line": [
            "error",
            {
                max: 2,
            },
        ],
        "multiline-comment-style": "error",
        "multiline-ternary": "off",
        "new-cap": "error",
        "new-parens": "error",
        "newline-per-chained-call": "error",
        "no-array-constructor": "error",
        "no-bitwise": "error",
        "no-continue": "error",
        "no-inline-comments": "error",
        "no-lonely-if": "error",
        "no-mixed-operators": "error",
        "no-mixed-spaces-and-tabs": "error",
        "no-multi-assign": "error",
        "no-multiple-empty-lines": [
            "error",
            {
                max: 3,
                maxBOF: 0,
                maxEOF: 0,
            },
        ],
        "no-negated-condition": "error",
        "no-new-object": "error",
        "no-plusplus": "error",
        "no-restricted-syntax": ["error", "BinaryExpression[operator='in']"],
        "no-tabs": "error",
        "no-trailing-spaces": "error",
        "no-unneeded-ternary": "error",
        "no-whitespace-before-property": "error",
        "nonblock-statement-body-position": "error",
        "object-curly-newline": "error",
        "one-var": ["error", "never"],
        "one-var-declaration-per-line": "error",
        "operator-assignment": "error",
        "operator-linebreak": "error",
        "padding-line-between-statements": "error",
        "prefer-exponentiation-operator": "error",
        "prefer-object-spread": "error",
        "quote-props": [
            "error",
            "as-needed",
            {
                numbers: true,
            },
        ],
        quotes: "error",
        semi: "error",
        "semi-spacing": "error",
        "semi-style": "error",
        "sort-keys": "error",
        "sort-vars": "error",
        "space-before-blocks": "error",
        "space-before-function-paren": "off",
        "space-in-parens": "error",
        "space-infix-ops": "error",
        "space-unary-ops": "error",
        "spaced-comment": [
            "error",
            "always",
            {
                exceptions: ["/", "*", "-", "* "],
                markers: ["/", "?"],
            },
        ],
        "switch-colon-spacing": "error",
        "template-tag-spacing": "error",
        "unicode-bom": "error",
        "wrap-regex": "error",
        "arrow-body-style": ["error", "as-needed"],
        "arrow-parens": ["error", "always"],
        "arrow-spacing": [
            "error",
            {
                before: true,
                after: true,
            },
        ],
        "constructor-super": "error",
        "generator-star-spacing": ["error", "after"],
        "no-class-assign": "error",
        "no-confusing-arrow": [
            "error",
            {
                allowParens: true,
            },
        ],
        "no-const-assign": "error",
        "no-console": "warn",
        "no-dupe-class-members": "error",
        "no-dupe-else-if": "error",
        "no-duplicate-imports": "error",
        "no-new-symbol": "error",
        "no-restricted-exports": "error",
        "no-restricted-imports": "error",
        "no-this-before-super": "error",
        "no-useless-computed-key": "error",
        "no-useless-constructor": "error",
        "no-useless-rename": "error",
        "no-var": "error",
        "object-shorthand": ["error", "always"],
        "prefer-arrow-callback": "error",
        "prefer-const": "error",
        "prefer-destructuring": [
            "error",
            {
                array: false,
            },
        ],
        "prefer-numeric-literals": "error",
        "prefer-rest-params": "error",
        "prefer-spread": "error",
        "prefer-template": "error",
        "require-yield": "error",
        "rest-spread-spacing": "error",
        "symbol-description": "error",
        "template-curly-spacing": "error",
        "yield-star-spacing": "error",
        "ramda/always-simplification": "error",
        "ramda/any-pass-simplification": "error",
        "ramda/both-simplification": "error",
        "ramda/complement-simplification": "error",
        "ramda/compose-pipe-style": "error",
        "ramda/compose-simplification": "error",
        "ramda/cond-simplification": "error",
        "ramda/either-simplification": "error",
        "ramda/eq-by-simplification": "error",
        "ramda/filter-simplification": "error",
        "ramda/if-else-simplification": "error",
        "ramda/map-simplification": "error",
        "ramda/merge-simplification": "error",
        "ramda/no-redundant-and": "error",
        "ramda/no-redundant-not": "error",
        "ramda/no-redundant-or": "error",
        "ramda/pipe-simplification": "error",
        "ramda/prefer-both-either": "error",
        "ramda/prefer-complement": "error",
        "ramda/prefer-ramda-boolean": "error",
        "ramda/prop-satisfies-simplification": "error",
        "ramda/reduce-simplification": "error",
        "ramda/reject-simplification": "error",
        "ramda/set-simplification": "error",
        "ramda/unless-simplification": "error",
        "ramda/when-simplification": "error",
        "require-jsdoc": [
            "error",
            {
                require: {
                    FunctionDeclaration: true,
                    MethodDefinition: true,
                    ClassDeclaration: true,
                    ArrowFunctionExpression: true,
                    FunctionExpression: true,
                },
            },
        ],
        "eslint-comments/no-aggregating-enable": "error",
        "eslint-comments/no-duplicate-disable": "error",
        "eslint-comments/no-unlimited-disable": "error",
        "eslint-comments/no-unused-enable": "error",
        "eslint-comments/no-restricted-disable": "error",
        "eslint-comments/require-description": "error",
        "no-secrets/no-secrets": [
            "error",
            {
                tolerance: 6,
            },
        ],
        "@typescript-eslint/adjacent-overload-signatures": "error",
        "@typescript-eslint/array-type": "error",
        "@typescript-eslint/await-thenable": "error",
        "@typescript-eslint/ban-tslint-comment": "error",
        "@typescript-eslint/ban-ts-comment": [
            "error",
            {
                "ts-ignore": "allow-with-description",
                "ts-expect-error": "allow-with-description",
            },
        ],
        "@typescript-eslint/ban-types": [
            "error",
            {
                types: {
                    Array: {
                        fixWith: "any[]",
                        message: "use something like `any[]` instead",
                    },
                },
            },
        ],
        "@typescript-eslint/class-literal-property-style": "error",
        "@typescript-eslint/consistent-indexed-object-style": [
            "error",
            "index-signature",
        ],
        "@typescript-eslint/consistent-type-assertions": "error",
        "@typescript-eslint/consistent-type-exports": "error",
        "@typescript-eslint/consistent-type-definitions": ["error", "type"],
        "@typescript-eslint/consistent-type-imports": "error",
        "@typescript-eslint/explicit-function-return-type": "error",
        "@typescript-eslint/explicit-member-accessibility": "error",
        "@typescript-eslint/explicit-module-boundary-types": "error",
        "@typescript-eslint/member-delimiter-style": "error",
        "@typescript-eslint/member-ordering": "error",
        "@typescript-eslint/method-signature-style": "error",
        "@typescript-eslint/no-base-to-string": "error",
        "@typescript-eslint/no-confusing-non-null-assertion": "error",
        "@typescript-eslint/no-confusing-void-expression": "error",
        "@typescript-eslint/no-dynamic-delete": "error",
        "@typescript-eslint/no-empty-interface": "error",
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/no-extra-non-null-assertion": "error",
        "@typescript-eslint/no-extraneous-class": "error",
        "@typescript-eslint/no-floating-promises": [
            "error",
            { ignoreVoid: true },
        ],
        "@typescript-eslint/no-for-in-array": "error",
        "@typescript-eslint/no-inferrable-types": "error",
        "@typescript-eslint/no-invalid-void-type": "error",
        "@typescript-eslint/no-meaningless-void-operator": "error",
        "@typescript-eslint/no-misused-new": "error",
        "@typescript-eslint/no-namespace": "error",
        "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
        "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
        "@typescript-eslint/no-non-null-assertion": "error",
        "@typescript-eslint/no-parameter-properties": "error",
        "@typescript-eslint/no-redundant-type-constituents": "error",
        "@typescript-eslint/no-require-imports": "error",
        "@typescript-eslint/no-this-alias": "error",
        "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
        "@typescript-eslint/no-unnecessary-qualifier": "error",
        "@typescript-eslint/no-unnecessary-type-arguments": "error",
        "@typescript-eslint/no-unnecessary-type-assertion": "error",
        "@typescript-eslint/no-unnecessary-type-constraint": "error",
        "@typescript-eslint/no-var-requires": "error",
        "@typescript-eslint/non-nullable-type-assertion-style": "error",
        "@typescript-eslint/prefer-as-const": "error",
        "@typescript-eslint/prefer-enum-initializers": "error",
        "@typescript-eslint/prefer-for-of": "error",
        "@typescript-eslint/prefer-function-type": "error",
        "@typescript-eslint/prefer-includes": "error",
        "@typescript-eslint/prefer-literal-enum-member": "error",
        "@typescript-eslint/prefer-namespace-keyword": "error",
        "@typescript-eslint/prefer-nullish-coalescing": "error",
        "@typescript-eslint/prefer-optional-chain": "error",
        "@typescript-eslint/prefer-readonly": "error",
        "@typescript-eslint/prefer-reduce-type-parameter": "error",
        "@typescript-eslint/prefer-regexp-exec": "error",
        "@typescript-eslint/prefer-return-this-type": "error",
        "@typescript-eslint/prefer-string-starts-ends-with": "error",
        "@typescript-eslint/prefer-ts-expect-error": "error",
        "@typescript-eslint/promise-function-async": "error",
        "@typescript-eslint/require-array-sort-compare": [
            "error",
            {
                ignoreStringArrays: true,
            },
        ],
        "@typescript-eslint/restrict-plus-operands": "error",
        "@typescript-eslint/sort-type-union-intersection-members": "error",
        "@typescript-eslint/strict-boolean-expressions": [
            "error",
            {
                allowString: true,
                allowNullableString: true,
                allowNullableBoolean: true,
            },
        ],
        "@typescript-eslint/switch-exhaustiveness-check": "error",
        "@typescript-eslint/triple-slash-reference": "error",
        "@typescript-eslint/type-annotation-spacing": "error",
        "@typescript-eslint/typedef": "error",
        "@typescript-eslint/unbound-method": "error",
        "@typescript-eslint/unified-signatures": "error",
        "@typescript-eslint/brace-style": ["error", "1tbs"],
        "@typescript-eslint/comma-dangle": ["error", "always-multiline"],
        "@typescript-eslint/comma-spacing": "error",
        "@typescript-eslint/default-param-last": "error",
        "@typescript-eslint/dot-notation": "error",
        "@typescript-eslint/func-call-spacing": "error",
        "@typescript-eslint/indent": [
            "error",
            4,
            {
                SwitchCase: 1,
            },
        ],
        "@typescript-eslint/init-declarations": "error",
        "@typescript-eslint/keyword-spacing": "error",
        "@typescript-eslint/lines-between-class-members": [
            "error",
            "always",
            {
                exceptAfterSingleLine: true,
            },
        ],
        "@typescript-eslint/no-array-constructor": "error",
        "@typescript-eslint/no-dupe-class-members": "error",
        "@typescript-eslint/no-duplicate-imports": "error",
        "@typescript-eslint/no-empty-function": "error",
        "@typescript-eslint/no-extra-semi": "error",
        "@typescript-eslint/no-implied-eval": "error",
        "@typescript-eslint/no-invalid-this": "error",
        "@typescript-eslint/no-loop-func": "error",
        "@typescript-eslint/no-loss-of-precision": "error",
        "@typescript-eslint/no-redeclare": "error",
        "@typescript-eslint/no-restricted-imports": "error",
        "@typescript-eslint/no-shadow": "error",
        "@typescript-eslint/no-throw-literal": "error",
        "@typescript-eslint/no-unused-expressions": "error",
        "@typescript-eslint/no-use-before-define": "error",
        "@typescript-eslint/no-useless-constructor": "error",
        "@typescript-eslint/no-useless-empty-export": "error",
        "@typescript-eslint/object-curly-spacing": [
            "error",
            "always",
            {
                arraysInObjects: true,
            },
        ],
        "@typescript-eslint/padding-line-between-statements": "error",
        "@typescript-eslint/quotes": [
            "error",
            "double",
            {
                avoidEscape: true,
            },
        ],
        "@typescript-eslint/require-await": "error",
        "@typescript-eslint/return-await": "error",
        "@typescript-eslint/semi": "error",
        "@typescript-eslint/space-before-blocks": "error",
        "@typescript-eslint/space-infix-ops": "error",
        "react/boolean-prop-naming": "error",
        "react/button-has-type": "error",
        "react/default-props-match-prop-types": "error",
        "react/destructuring-assignment": "error",
        "react/display-name": "error",
        "react/forbid-dom-props": "error",
        "react/forbid-elements": "error",
        "react/forbid-foreign-prop-types": "error",
        "react/forbid-prop-types": "error",
        "react/function-component-definition": [
            "error",
            {
                namedComponents: "arrow-function",
                unnamedComponents: "arrow-function",
            },
        ],
        "react/iframe-missing-sandbox": "error",
        "react/hook-use-state": "error",
        "react/no-access-state-in-setstate": "error",
        "react/no-adjacent-inline-elements": "error",
        "react/no-array-index-key": "error",
        "react/no-arrow-function-lifecycle": "error",
        "react/no-children-prop": "error",
        "react/no-danger": "error",
        "react/no-danger-with-children": "error",
        "react/no-deprecated": "error",
        "react/no-did-mount-set-state": ["error", "disallow-in-func"],
        "react/no-did-update-set-state": ["error", "disallow-in-func"],
        "react/no-direct-mutation-state": "error",
        "react/no-find-dom-node": "error",
        "react/no-invalid-html-attribute": "error",
        "react/no-is-mounted": "error",
        "react/no-multi-comp": "error",
        "react/no-namespace": "error",
        "react/no-redundant-should-component-update": "error",
        "react/no-render-return-value": "error",
        "react/no-set-state": "error",
        "react/no-string-refs": "error",
        "react/no-this-in-sfc": "error",
        "react/no-typos": "error",
        "react/no-unescaped-entities": "error",
        "react/no-unknown-property": "error",
        "react/no-unsafe": "error",
        "react/no-unstable-nested-components": "error",
        "react/no-unused-class-component-methods": "error",
        "react/no-unused-prop-types": "error",
        "react/no-unused-state": "error",
        "react/no-will-update-set-state": ["error", "disallow-in-func"],
        "react/prefer-es6-class": "error",
        "react/prefer-exact-props": "error",
        "react/prefer-read-only-props": "error",
        "react/prefer-stateless-function": "error",
        "react/prop-types": "error",
        "react/react-in-jsx-scope": "error",
        "react/require-optimization": "error",
        "react/require-render-return": "error",
        "react/self-closing-comp": "error",
        "react/sort-comp": "error",
        "react/sort-prop-types": "error",
        "react/state-in-constructor": ["error", "never"],
        "react/static-property-placement": "error",
        "react/style-prop-object": "error",
        "react/void-dom-elements-no-children": "error",
        "react/jsx-boolean-value": "error",
        "react/jsx-child-element-spacing": "error",
        "react/jsx-closing-bracket-location": "error",
        "react/jsx-closing-tag-location": "error",
        "react/jsx-curly-brace-presence": [
            "error",
            {
                props: "ignore",
                children: "always",
                propElementValues: "always",
            },
        ],
        "react/jsx-curly-newline": "off",
        "react/jsx-curly-spacing": "error",
        "react/jsx-equals-spacing": "error",
        "react/jsx-filename-extension": [
            "error",
            {
                extensions: [".jsx", ".tsx"],
            },
        ],
        "react/jsx-first-prop-new-line": ["error", "multiline"],
        "react/jsx-fragments": ["error", "syntax"],
        "react/jsx-handler-names": "error",
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
        "react/jsx-key": "error",
        "react/jsx-max-depth": [
            "error",
            {
                max: 25,
            },
        ],
        "react/jsx-no-bind": [
            "error",
            {
                allowArrowFunctions: true,
                ignoreRefs: true,
            },
        ],
        "react/jsx-no-comment-textnodes": "error",
        "react/jsx-no-constructed-context-values": "error",
        "react/jsx-no-duplicate-props": "error",
        "react/jsx-no-literals": "error",
        "react/jsx-no-script-url": "error",
        "react/jsx-no-target-blank": "error",
        "react/jsx-no-useless-fragment": "error",
        "react/jsx-pascal-case": "error",
        "react/jsx-props-no-multi-spaces": "error",
        "react/jsx-sort-default-props": "error",
        "react/jsx-sort-props": "error",
        "react/jsx-tag-spacing": "error",
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "react/jsx-wrap-multilines": "error",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "error",
        "import/default": "error",
        "import/named": "error",
        "import/namespace": "error",
        "import/no-absolute-path": "error",
        "import/no-cycle": "error",
        "import/no-dynamic-require": "error",
        "import/no-relative-packages": "error",
        "import/no-relative-parent-imports": "error",
        "import/no-restricted-paths": "error",
        "import/no-self-import": "error",
        "import/no-unused-modules": "error",
        "import/no-useless-path-segments": "error",
        "import/no-webpack-loader-syntax": "error",
        "import/export": "error",
        "import/no-deprecated": "error",
        "import/no-extraneous-dependencies": "error",
        "import/no-mutable-exports": "error",
        "import/no-named-as-default": "error",
        "import/no-named-as-default-member": "error",
        "import/no-amd": "error",
        "import/no-commonjs": "error",
        "import/no-import-module-exports": "error",
        "import/no-nodejs-modules": "error",
        "import/dynamic-import-chunkname": "error",
        "import/exports-last": "error",
        "import/first": "error",
        "import/group-exports": "error",
        "import/max-dependencies": [
            "error",
            {
                max: 40,
            },
        ],
        "import/newline-after-import": "error",
        "import/no-anonymous-default-export": "error",
        "import/no-duplicates": "error",
        "import/no-named-default": "error",
        "import/no-namespace": "error",
        "simple-import-sort/exports": "error",
        "simple-import-sort/imports": "error",
        "jest/consistent-test-it": ["error", { fn: "test" }],
        "jest/expect-expect": "error",
        "jest/max-nested-describe": "error",
        "jest/no-alias-methods": "error",
        "jest/no-commented-out-tests": "error",
        "jest/no-conditional-expect": "error",
        "jest/no-deprecated-functions": "error",
        "jest/no-disabled-tests": "error",
        "jest/no-done-callback": "error",
        "jest/no-duplicate-hooks": "error",
        "jest/no-export": "error",
        "jest/no-focused-tests": "error",
        "jest/no-hooks": "error",
        "jest/no-identical-title": "error",
        "jest/no-interpolation-in-snapshots": "error",
        "jest/no-jasmine-globals": "error",
        "jest/no-large-snapshots": "error",
        "jest/no-mocks-import": "error",
        "jest/no-restricted-matchers": [
            "error",
            {
                resolves:
                    "use `expect(await promise)` instead. Jest allows you to test a promise resolve value using `await expect().resolves`. For consistency and readability this rule bans `expect().resolves` in favor of `expect(await promise)`.",
                toMatchSnapshot:
                    "Use `toMatchInlineSnapshot()` instead in order to make snapshot tests more manageable and reviewable by writing the snapshots inline in the test file.",
                toThrowErrorMatchingSnapshot:
                    "Use `toThrowErrorMatchingInlineSnapshot()` instead in order to make snapshot tests more manageable and reviewableby writing the snapshots inline in the test file.",
            },
        ],
        "jest/no-standalone-expect": "error",
        "jest/no-test-prefixes": "error",
        "jest/no-test-return-statement": "error",
        "jest/prefer-called-with": "error",
        "jest/prefer-comparison-matcher": "error",
        "jest/prefer-equality-matcher": "error",
        "jest/prefer-expect-assertions": "error",
        "jest/prefer-expect-resolves": "error",
        "jest/prefer-hooks-on-top": "error",
        "jest/prefer-lowercase-title": "error",
        "jest/prefer-spy-on": "error",
        "jest/prefer-strict-equal": "error",
        "jest/prefer-to-be": "error",
        "jest/prefer-to-contain": "error",
        "jest/prefer-to-have-length": "error",
        "jest/prefer-todo": "error",
        "jest/require-hook": "error",
        "jest/require-to-throw-message": "error",
        "jest/require-top-level-describe": "error",
        "jest/valid-describe-callback": "error",
        "jest/valid-expect": "error",
        "jest/valid-expect-in-promise": "error",
        "jest/valid-title": "error",
        "jest/unbound-method": "error",
        "jest-formatting/padding-around-after-all-blocks": "error",
        "jest-formatting/padding-around-after-each-blocks": "error",
        "jest-formatting/padding-around-before-all-blocks": "error",
        "jest-formatting/padding-around-before-each-blocks": "error",
        "jest-formatting/padding-around-describe-blocks": "error",
        "jest-formatting/padding-around-expect-groups": "error",
        "jest-formatting/padding-around-test-blocks": "error",
        "jest-formatting/padding-around-all": "error",
        "node/handle-callback-err": "error",
        "node/no-callback-literal": "error",
        "node/no-exports-assign": "error",
        "node/no-extraneous-import": "error",
        "node/no-extraneous-require": "error",
        "node/no-missing-require": "error",
        "node/no-new-require": "error",
        "node/no-path-concat": "error",
        "node/no-process-exit": "error",
        "node/no-unpublished-bin": "error",
        "node/no-unpublished-import": "error",
        "node/no-unpublished-require": "error",
        "node/no-unsupported-features/es-builtins": "error",
        "node/no-unsupported-features/node-builtins": "error",
        "node/process-exit-as-throw": "error",
        "node/shebang": "error",
        "node/no-deprecated-api": "error",
        "node/callback-return": "error",
        "node/exports-style": "error",
        "node/global-require": "error",
        "node/no-mixed-requires": "error",
        "node/no-process-env": "error",
        "node/no-restricted-import": ["error", ["left-pad"]],
        "node/no-restricted-require": ["error", ["left-pad"]],
        "node/no-sync": "error",
        "node/prefer-global/buffer": "error",
        "node/prefer-global/console": "error",
        "node/prefer-global/process": "error",
        "node/prefer-global/text-decoder": "error",
        "node/prefer-global/text-encoder": "error",
        "node/prefer-global/url": "error",
        "node/prefer-global/url-search-params": "error",
        "node/prefer-promises/dns": "error",
        "node/prefer-promises/fs": "error",
        "sonarjs/prefer-immediate-return": "off",
        "sonarjs/cognitive-complexity": "off",
        "unicorn/filename-case": [
            "error",
            { cases: { pascalCase: true, camelCase: true } },
        ],
        "unicorn/no-nested-ternary": "off",
        "unicorn/no-useless-undefined": "off",
    },
    settings: {
        react: {
            version: "16.8",
        },
        jest: {
            version: 26,
        },
    },
};
