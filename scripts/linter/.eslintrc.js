module.exports = {
    "parserOptions": {
        "ecmaVersion": 5
    },
    "extends": "airbnb-base/legacy", // use for ESLint5
    "plugins": [
    ],
    "env": {
		"browser": true,
        "jquery": true
    },
    "globals": {
        "oj": true,
        "define": true,
		"require": true
    },
    "rules": {
		"space-before-function-paren": ["error", "never"],
        "no-trailing-spaces": ["error", {"ignoreComments": true}],
        "no-unused-vars": ["error", { "args": "none" }],
        "semi": ["error", "always"],
        "comma-dangle": "off",
        "func-names": "off",
        "linebreak-style": "off",
        "no-use-before-define" : ["error", {"functions" : false, "classes" : true}],
        "no-plusplus": ["error", {"allowForLoopAfterthoughts": true }],
        "no-underscore-dangle": "off", 
        "vars-on-top": "off",
        "max-len": ['error', 100, 2, {
          ignoreUrls: true,
          ignoreComments: true,
          ignoreRegExpLiterals: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
        }],        
    }
}