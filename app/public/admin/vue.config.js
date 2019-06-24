// eslint-disable-next-line
var path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

let publicPath = '/'
if (process.env.NODE_ENV === 'production') {
  publicPath = '/'
}

// 当前运行的平台
const platform = process.env.VUE_APP_PLATFORM
console.log(platform)
let outputDir = ''
// 对于不同的平台，输出的产物位置不一样
// if (platform === 'web') {
outputDir = 'dist'
// }
// outputDir = 'dist_electron/bundled'

module.exports = {
  // 用法和webpack的output.publicPath一致
  publicPath,
  // 输出产物的路径，运行vue-cli-service build时生成的构建文件的目录
  outputDir,
  // 是否使用包含运行时和编译器的 Vue 构建版本，需要使用的话，需要加入$vue别名，在webpack配置项里
  // 这个选项设置成true，在vue组件里可以使用template选项
  runtimeCompiler: false,
  // 类似于vue-cli2.0的特殊babel转译，因为babel-loader会忽略所有的node_modules中的文件夹，想通过babel显示转译一个依赖，譬如引用了element-ui的源代码
  transpileDependencies: [
    resolve('node_modules/element-ui/packages'),
    resolve('node_modules/element-ui/src')
  ],
  // 是否需要sourceMap
  productionSourceMap: false,
  // 在开发环境通过eslint-loader在每次保存时lint代码，默认为true
  lintOnSave: true,
  css: {
    // 默认情况下，只有 *.module.[ext] 结尾的文件才会被视作 CSS Modules 模块。设置为 true 后你就可以去掉文件名中的 .module 并将所有的 *.(css|scss|sass|less|styl(us)?) 文件视为 CSS Modules 模块。
    modules: false,
    // 是否将组件中的 CSS 提取至一个独立的 CSS 文件中 (而不是动态注入到 JavaScript 中的 inline 代码)。
    // 同样当构建 Web Components 组件时它总是会被禁用 (样式是 inline 的并注入到了 shadowRoot 中)。
    // 当作为一个库构建时，你也可以将其设置为 false 免得用户自己导入 CSS。
    // 提取 CSS 在开发环境模式下是默认不开启的，因为它和 CSS 热重载不兼容。然而，你仍然可以将这个值显性地设置为 true 在所有情况下都强制提取。
    extract: process.env.NODE_ENV === 'production',
    // 是否开启css source map
    sourceMap: false,
    // 向 CSS 相关的 loader 传递选项
    loaderOptions: {}
  },
  devServer: {
    // 设置主机地址
    // host: 'localhost',
    // 设置默认端口
    port: 9528,
    // 设置代理
    proxy: {
      '/api': {
        // target: 'http://172.16.5.208:8080',
        target: 'http://172.16.5.243:8080',
        ws: true,
        changeOrigin: true,
        pathRewrite: { '^/api': '' }
      }
    },
    // eslint报错时，在控制台打出警告，浏览器显示错误
    overlay: {
      warnings: true,
      errors: true
    }
  },
  configureWebpack: {
    // 如果是web，target设成web
    // 如果是electron，target设成electron-renderer
    target: 'web'
    // config.plugins = [
    // 替换VUE_APP 写法,采用自己的环境变量
    // new webpack.DefinePlugin({
    //   'process.env': ENV_DEVELOPMENT
    // })
    // ]
    // plugins: [
    //   // 设置云盘自己的env，默认等于process.env
    //   // 保留原先的process.env
    //   // 在web环境下，global.env默认等于process.env
    //   // 在desk环境下，global.env从配置文件读取，读取不到，默认等于process.env
    //   new webpack.DefinePlugin({
    //     'window.globalEnv': JSON.stringify(process.env)
    //   })
    // ]
  },
  pluginOptions: {
    // electronBuilder: {
    //   builderOptions: {
    //     // options placed here will be merged with default configuration and passed to electron-builder
    //     appId: 'org.simulatedgreg.electron-vue',
    //     productName: process.env.VUE_APP_PRODUCT_NAME,
    //     asar: {
    //       smartUnpack: true
    //     },
    //     nsis: {
    //       oneClick: false,
    //       perMachine: false,
    //       allowToChangeInstallationDirectory: true,
    //       deleteAppDataOnUninstall: true
    //     },
    //     publish: [
    //       {
    //         provider: 'generic',
    //         url: ''
    //       }
    //     ],
    //     // win: {
    //     //   icon: 'portal.ico',
    //     //   target: [
    //     //     {
    //     //       target: 'nsis',
    //     //       arch: [
    //     //         'ia32'
    //     //       ]
    //     //     }
    //     //   ]
    //     // }
    //   },
    //   // 更改electron的mainProcess需要的entry file路径
    //   // 更改完之后，electron的打包报错，会找不到main.js文件，
    //   // 最后经过验证，发现background.js和main.js需要在一个目录下
    //   // background.js作为electron的主进程入口文件
    //   // main.js作为electron的渲染进程入口文件
    //   // mainProcessFile: 'src/electron/background.js',
    //   mainProcessTypeChecking: false
    // }
  }
}
