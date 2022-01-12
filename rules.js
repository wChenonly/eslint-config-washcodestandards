// add your custom rules here
// it is base on https://github.com/vuejs/eslint-config-vue
// and http://eslint.cn/docs/rules/
// and https://eslint.vuejs.org/rules/

module.exports = {
  // 除 vue/strongly-recommended外的自定义的vue规则
  'vue/component-tags-order': ['error', {
    'order': ['style', 'template', 'script']
  }],
  'vue/no-v-html': 'off',
  'vue/max-attributes-per-line': ['warn', {
    'singleline': {
      'max': 2
    },
    'multiline': {
      'max': 1
    }
  }],
  'vue/singleline-html-element-content-newline': ['off', {
    'ignoreWhenNoAttributes': true,
    'ignoreWhenEmpty': true,
    'ignores': ['pre']
  }],
  'vue/no-template-shadow': 'off',
  'vue/no-v-for-template-key': 'off',

  // 除 eslint:recommended外的自定义的js规则

  // 强制getter/setter成对出现在对象中
  // http://eslint.cn/docs/rules/accessor-pairs
  'accessor-pairs': 2,
  // 强制箭头函数的箭头前后使用一致的空格
  // http://eslint.cn/docs/rules/arrow-spacing
  'arrow-spacing': [
    2,
    {
      before: true,
      after: true
    }
  ],
  // 强制在代码块中开括号前和闭括号后有空
  // http://eslint.cn/docs/rules/block-spacing
  'block-spacing': [2, 'always'],
  // 强制在代码块中使用一致的大括号风格
  // http://eslint.cn/docs/rules/brace-style
  'brace-style': [
    2,
    '1tbs',
    {
      allowSingleLine: true
    }
  ],
  // 要求使用骆驼拼写法
  // http://eslint.cn/docs/rules/camelcase
  camelcase: [
    2,
    {
      properties: 'always'
    }
  ],
  // 禁止使用拖尾逗号
  // http://eslint.cn/docs/rules/comma-dangle
  'comma-dangle': [2, 'never'],
  // 	强制在逗号前后使用一致的空格
  'comma-spacing': [
    2,
    {
      before: false,
      after: true
    }
  ],
  'comma-style': [2, 'last'],
  // 强制所有控制语句使用一致的括号风格
  // http://eslint.cn/docs/rules/curly
  curly: [2, 'all'],
  // 强制在点号之前和之后一致的换行
  // http://eslint.cn/docs/rules/dot-location
  'dot-location': [2, 'property'],
  // 禁止文件末尾保留一行空行
  // http://eslint.cn/docs/rules/eol-last
  'eol-last': 2,
  // 要求使用 === 和 !==
  // http://eslint.cn/docs/rules/eqeqeq
  eqeqeq: ['error', 'always', { null: 'ignore' }],

  // 要求回调函数中有容错处理
  // http://eslint.cn/docs/rules/handle-callback-err
  'handle-callback-err': [2, '^(err|error)$'],
  // 强制使用一致的缩进
  // http://eslint.cn/docs/rules/indent
  indent: [
    2,
    2,
    {
      SwitchCase: 1
    }
  ],
  // 强制所有不包含单引号的 JSX 属性值使用单引号
  // http://eslint.cn/docs/rules/jsx-quotes
  'jsx-quotes': [2, 'prefer-single'],
  // 强制在对象字面量的键和值之间使用一致的空格
  // http://eslint.cn/docs/rules/key-spacing
  'key-spacing': [
    2,
    {
      beforeColon: false,
      afterColon: true
    }
  ],
  // 强制在关键字前后使用一致的空格
  // http://eslint.cn/docs/rules/keyword-spacing
  'keyword-spacing': [
    2,
    {
      before: true,
      after: true
    }
  ],
  // 要求构造函数首字母大写
  // http://eslint.cn/docs/rules/new-cap
  'new-cap': [
    2,
    {
      newIsCap: true,
      capIsNew: false
    }
  ],
  // 禁止重复导入模块
  // http://eslint.cn/docs/rules/no-duplicate-imports
  'no-duplicate-case': 2,
  // 禁用 eval()
  // http://eslint.cn/docs/rules/no-eval
  'no-eval': 2,
  // 禁止冗余的括号
  // http://eslint.cn/docs/rules/no-extra-parens
  'no-extra-parens': [2, 'all'],
  // 当数值的小数点之前或之后缺少数字时，该规则将发出警告
  // http://eslint.cn/docs/rules/no-floating-decimal
  'no-floating-decimal': 2,
  // 禁用不必要的嵌套块
  // http://eslint.cn/docs/rules/no-lone-blocks
  'no-lone-blocks': 2,
  // 禁止出现多个空格
  // http://eslint.cn/docs/rules/no-multi-spaces
  'no-multi-spaces': 2,
  // 禁止多行字符串
  // http://eslint.cn/docs/rules/no-multi-str
  'no-multi-str': 2,
  // 不允许多个空行，最多一行
  // http://eslint.cn/docs/rules/no-multiple-empty-lines
  'no-multiple-empty-lines': [
    2,
    {
      max: 1
    }
  ],
  // 禁止使用 Object 构造函数
  // http://eslint.cn/docs/rules/no-new-object
  'no-new-object': 2,
  // 不允许 new require
  // http://eslint.cn/docs/rules/no-new-require
  'no-new-require': 2,
  // 	禁止对 String，Number 和 Boolean 使用 new 操作符
  'no-new-wrappers': 2,
  // 禁用八进制字面量
  // http://eslint.cn/docs/rules/no-octal
  'no-octal': 2,
  // 禁用 __proto__ 属性
  // http://eslint.cn/docs/rules/no-proto
  'no-proto': 2,
  // 禁止多次声明同一变量
  // http://eslint.cn/docs/rules/no-redeclare
  'no-redeclare': 2,
  // 禁止正则表达式字面量中出现多个空格
  // http://eslint.cn/docs/rules/no-regex-spaces
  'no-regex-spaces': 2,
  // 禁止在 return 语句中使用赋值语句，除非使用括号把它们括起来。
  // http://eslint.cn/docs/rules/no-return-assign
  'no-return-assign': [2, 'except-parens'],
  // 禁止自我赋值
  //  http://eslint.cn/docs/rules/no-self-assign
  'no-self-assign': 2,
  // 禁止自身比较
  // http://eslint.cn/docs/rules/no-self-compare
  'no-self-compare': 2,
  // 不允许使用逗号操作符
  // http://eslint.cn/docs/rules/no-sequences
  'no-sequences': 2,
  // 禁止抛出字面量和那些不可能是 Error 对象的表达式
  // http://eslint.cn/docs/rules/no-throw-literal
  'no-throw-literal': 2,
  // 禁用行尾空白
  // http://eslint.cn/docs/rules/no-trailing-spaces
  'no-trailing-spaces': 2,
  // 禁用未声明的变量
  // http://eslint.cn/docs/rules/no-undef
  'no-undef': 2,
  // 不允许初始化变量值为 undefined
  // http://eslint.cn/docs/rules/no-undef-init
  'no-undef-init': 2,
  // 禁止可以在有更简单的可替代的表达式时使用三元操作符
  // http://eslint.cn/docs/rules/no-unneeded-ternary
  'no-unneeded-ternary': [
    2,
    {
      defaultAssignment: false
    }
  ],
  // 禁用不必要的 .call() 和 .apply()
  // http://eslint.cn/docs/rules/no-useless-call
  'no-useless-call': 2,
  // 禁止在对象中使用不必要的计算属性
  // http://eslint.cn/docs/rules/no-useless-computed-key
  'no-useless-computed-key': 2,
  // 禁用不必要的转义
  // http://eslint.cn/docs/rules/no-useless-escape
  'no-useless-escape': 0,
  // 禁止属性前有空白
  // http://eslint.cn/docs/rules/no-whitespace-before-property
  'no-whitespace-before-property': 2,
  // 强制操作符使用一致的换行符风格， 要求把换行符放在操作符前面
  // http://eslint.cn/docs/rules/operator-linebreak
  'operator-linebreak': [
    2,
    'before',
    {
      overrides: {
        '?': 'before',
        ':': 'before'
      }
    }
  ],
  'padded-blocks': [2, 'never'],
  // 强制尽可能地使用单引号
  // http://eslint.cn/docs/rules/quotes
  quotes: [
    2,
    'single',
    {
      avoidEscape: true,
      allowTemplateLiterals: true
    }
  ],
  // 禁止使用分号
  // http://eslint.cn/docs/rules/semi
  semi: [2, 'never'],
  // 强制分号之后有空格，禁止分号之前有空格。
  // http://eslint.cn/docs/rules/semi-spacing
  'semi-spacing': [
    2,
    {
      before: false,
      after: true
    }
  ],
  'space-before-blocks': [2, 'always'],
  // 	强制在 function的左括号之前使用一致的空格
  // http://eslint.cn/docs/rules/space-before-function-paren
  'space-before-function-paren': [2, 'never'],
  // 强制在圆括号内使用一致的空格
  // http://eslint.cn/docs/rules/space-in-parens
  'space-in-parens': [2, 'never'],
  // 要求操作符周围有空格
  // http://eslint.cn/docs/rules/space-infix-ops
  'space-infix-ops': 2,
  // 强制在一元操作符前后使用一致的空格
  // http://eslint.cn/docs/rules/space-unary-ops
  'space-unary-ops': [
    2,
    {
      words: true,
      nonwords: false
    }
  ],
  // 要求在注释前有1个空白
  // http://eslint.cn/docs/rules/spaced-comment
  'spaced-comment': [2, 'always'],
  // 禁止模板字符串中使用空格
  // http://eslint.cn/docs/rules/template-curly-spacing
  'template-curly-spacing': [2, 'never'],
  // 需要把立即执行的函数包裹起来
  // http://eslint.cn/docs/rules/wrap-iife
  'wrap-iife': [2, 'outside'],
  // 禁止Yoda条件
  // http://eslint.cn/docs/rules/yoda
  yoda: [2, 'never'],
  // 要求使用 const 声明那些声明后不再被修改的变量
  // http://eslint.cn/docs/rules/prefer-const
  'prefer-const': 2,
  // 强制在花括号中使用一致的空格
  // http://eslint.cn/docs/rules/object-curly-spacing
  'object-curly-spacing': [
    2,
    'always',
    {
      objectsInObjects: false
    }
  ],
  // 禁止在括号内使用空格
  // http://eslint.cn/docs/rules/array-bracket-spacing
  'array-bracket-spacing': [2, 'never']
}