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
