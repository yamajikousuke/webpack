// output.pathに絶対パスを指定する必要があるため、pathモジュールを読み込んでおく
const path = require('path');

module.exports = {
  // モードの設定、v4系以降はmodeを指定しないと、webpack実行時に警告が出る
  mode: 'development',
  // エントリーポイントの設定
  entry: './src/js/app.js',
  // 出力の設定
  output: {
    // 出力するファイル名
    filename: 'bundle.js',
    // 出力先のパス（v2系以降は絶対パスを指定する必要がある）
    path: path.join(__dirname, 'public/js')
  },
  //liveReload
  //https://blog.unsweets.net/2016/03/webpack2.html
  devServer: {
      contentBase: path.resolve(__dirname, "public"),
      publicPath: '/js/',
      watchContentBase: true
  },
  //ソースマップ
  //開発環境ではcheap-module-eval-source-map、本番環境ではcheap-module-source-map
  devtool: 'cheap-module-eval-source-map',
  // ローダーの設定
  module: {
    rules: [
      {
        // ローダーの処理対象ファイル
        test: /\.js$/,
        // ローダーの処理対象から外すディレクトリ
        exclude: /node_modules/,
        use: [
          {
            // 利用するローダー
            loader: 'babel-loader',
            // ローダーのオプション
            // 今回はbabel-loaderを利用しているため
            // babelのオプションを指定しているという認識で問題ない
            options: {
              presets: [['env', { modules: false }]]
            }
          }
        ]
      }
    ]
  },
};
