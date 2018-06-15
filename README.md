# webpack
モージュールバンドラーwebpackのひな型。テスト環境は、mocha+power assertです。

## 内容
* ES6表記をbabelでトランスパイル
* 開発用サーバーwebpack-dev-server（LiveReloadします）
* テスティングフレームワークは、mocha
* アサーションは、power assert

## 使い方
### ビルド
* npm run build
* /public/js配下にビルドされたbundle.jsが生成されます。

### サーバー起動
* npm run server
* URLは、http://localhost:8080/

### テスト
* npm run test
* /test配下のテストコード（ES6表記）を実行します。

    import assert from "assert";
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


### 本番環境にアップするときは、
* webpack.config.jsの6行目 mode: 'development',を'production'に書き換える

## 参考URL
http://system.blog.uuum.jp/entry/2016/09/16/110000
