// output的path必须为绝对路径，因此采用node动态获取绝对路径
// node获取绝对路径语法：1. 引用核心包-path, __dirname当前文件坐在路径  然后拼接 path.resolve(__dirname,'dist')
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath:'dist/'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        // css-loader只负责加载css文件，并不解析样式，style-loader可以解析样式，即将样式添加到dom中
        // 使用多个loader时是从右向左的
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }], //正确加载顺序
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 当加载的图片小于limit时，会将图片编译成base64字符串形式，不需要文件来存储
              // 若大于limit则会使用file-loader对图片进行加载,而file-loader不需要配置，只需要安装一下就行了，但是需要图片需要打包存储，否则显示加载成功但是图片显示不出来
              limit: 8192,
              name:'img/[name].[hash:8].[ext]'
            },
          },
        ],
      },
    ],
  },
};
