# eslint-config-washcodestandards

包含vue2，vue3，eslint代码检测

食用

```javascript
// 1，先安装依赖
npm install --save-dev eslint-config-washcodestandards eslint eslint-plugin-vue husky lint-staged babel-eslint

eslint-config-washcodestandards     // 封装的代码规范配置文件，不再代码中各自自定义规范。统一。
eslint                             // 代码检测的插件
eslint-plugin-vue                  // 使得eslint也可以检查vue文件
husky                              // git钩子插件，可以在git操作的时候，注入一些想要干的活
lint-stage                         // 在代码提交之前，进行代码规则检查能够确保进入git库的代码都是符合代码规则的。但是整个项目上运行lint速度会很慢，lint-staged能够让lint只检测暂存区的文件，所以速度很快

babel-eslint                       // 一些比较新的语法或者特性，利用bable去解析


// 2，打开.eslintrc.js文件，若没有则创建，里面放如下代码，此文件为eslit配置文件
module.exports = {
  parser: 'vue-eslint-parser',
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: ['washcodestandards', 'washcodestandards/vue3rules'],//如果脚手架是大于3的使用这个
  extends: ['washcodestandards', 'washcodestandards/vue2rules'],//如果脚手架是小于3的使用这个
  plugins: [],
  // add your custom rules here
  rules: {}
}

// 3，打开.eslintignore文件，若没有则创建，里面放如下代码，此文件为eslit校验需要忽略的文件。
node_modules


// 4，打开package.json文件

// a,对于脚手架vue-cil小于3的项目

// 在scripts区域增加如下代码
"scripts": {
    xxxxxxxx，
	"lint-fix": "eslint --fix ./src --ext .js,.vue",
 },

// 食用方法：然后每次修改完代码，先运行npm run lint-fix，等到校验通过，在提交代码，push到远程仓库。若校验没通过，则修改问题，直到通过，再次提交代码

// b,对于脚手架vue-cil大于3的项目

// 在scripts区域增加如下代码
"scripts": {
    xxxxxxxx，
     "lint-fix": "vue-cli-service lint",
    "pre-commit": "lint-staged",
 },
// 然后在scripts后面紧跟着
 "gitHooks": {
    "pre-commit": "lint-staged"
  },
  "lint-staged": {
    "src/**/*.{js,vue}": [
      "vue-cli-service lint"
    ]
  }

// 食用方法： 正常修改代码，正常git add .提交到暂存区，正常commit代码，在commit的时候，会自动调用githooks钩子，然后运行lint-staged校验暂存区的代码。这样不用每次都专门运行校验命令，而且每次只是校验了暂存区的代码，速度非常快

         // 如果想要校验所有的代码，那么直接运行 npm run lint-fix即可。
```
