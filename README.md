# webpack
モージュールバンドラーwebpackでワンランク上の開発ライフ。

## 内容
* ES6表記をbabelでトランスパイル
* 開発用サーバーwebpack-dev-server（LiveReloadします）
* テスティングフレームワークは、mocha
* アサーションは、power assert
* デフォルトでは、jQueryが入っています。必要ない場合は、package.jsonから削除してinstallして下さい。

## 使い方
### インストール
* 管理者権限でGit Bash起動
* ```npm install```を実行してください。

### ソースの配置
* /src/js配下に開発コードを配置。app.jsがアプリ本体。
* /src/js/modules配下に、モジュール化したソースを配置

### 開発サーバー起動
* ```npm run server:dev```（./node_modules/.bin/webpack-dev-server --config webpack.development.config.js --hot --inline）
* URLは、http://localhost:8080/

### 開発ビルド
* ```npm run dev-build```（webpack --watch --config webpack.development.config.jsを実行。watchオプションでファイル変更されたら自動ビルド）
* /public/js配下にビルドされたbundle.jsが生成されます。

### 本番ビルド
* ```npm run prod-build```（webpack --config webpack.production.config.jsを実行）
* ソースファイルが、/public/js配下に結合＋ミニファイされて出力されます。(bundle.js)

### テスト
* ```npm run test```（mocha --require babel-core/register）
* /test配下のテストコードを実行します。以下のようなES6表記もOK。

    ```import assert from "assert";
    import taxCalculator from "../src/js/modules/tax-calculator";
    import additionCalculator from "../src/js/modules/addition-calculator";

    describe("サンプル計算", () => {
        it("tax-calculator", () => {
            assert.equal(taxCalculator(1000, 1.08), 1080);
        });
        it("addition-calculator", () => {
            assert.equal(additionCalculator(200, 200), 400);
        });
    });

## 使用ツール（プラグイン）
* webpack  
https://webpack.js.org/
* babel-core  
https://www.npmjs.com/package/babel-core
* webpack-dev-server  
https://github.com/webpack/webpack-dev-server
* uglifyjs-webpack-plugin  
https://github.com/webpack-contrib/uglifyjs-webpack-plugin
* mocha  
https://mochajs.org/
* power assert  
https://github.com/power-assert-js/power-assert

## 参考URL
http://system.blog.uuum.jp/entry/2016/09/16/110000  
https://qiita.com/chibi929/items/bf62556d042871c4a6c6  
https://qiita.com/soarflat/items/28bf799f7e0335b68186  
https://blog.mismithportfolio.com/web/20161104webpackrelease  
https://blog.unsweets.net/2016/03/webpack2.html  
https://ics.media/entry/17376  

