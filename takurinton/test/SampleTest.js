const assert = require("assert");
const { CloseRange } = require("../lib/sample");

// MEMO: テストケースに「正しい」という表現は NG、正しいが何かを示すのがテスト

describe("閉区間のテスト", () => {
  let range;
  beforeEach(() => {
    range = new CloseRange(3, 8);
  });

  describe("例外を投げる", () => {
    it("lower の方が upper より大きかったらエラー", () => {
      assert.throws(
        () => {
          new CloseRange(7, 1);
        },
        { message: "lower より upper の方が大きいのでエラー" }
      );
    });
  });

  describe("閉区間を返すことができる", () => {
    it("閉区間を文字列で返すことができる", () => {
      assert.equal("[3,8]", range.closeRangeToString());
    });
    it("閉区間をリストで返すことができる", () => {
      assert.deepEqual([3, 4, 5, 6, 7, 8], range.closeRange());
    });
  });

  describe("指定した数字がインスタンスの配列に含まれるかどうか", () => {
    it("指定した数字がインスタンスの配列に含まれれば true", () => {
      assert.equal(true, range.contains(3));
    });
    it("[3,8] に10は含まれていないので false", () => {
      assert.equal(false, range.contains(10));
    });
  });

  describe("引数の配列がインスタンスの配列と等価か", () => {
    it("引数の配列がインスタンスの配列と等価 true", () => {
      assert.equal(true, range.equals(range));
    });
    it("[3,8] に対して [1,2] を渡すと等価ではないので false", () => {
      assert.equal(false, range.equals(new CloseRange(1, 2)));
    });
  });

  describe("引数の配列がインスタンスの配列に包含するか", () => {
    it("引数の配列がインスタンスの配列に包含すれば true", () => {
      assert.equal(true, range.inclusion(range));
    });
    it("[3,8] に対して [10,20] を渡すと包含していないので false", () => {
      assert.equal(false, range.inclusion(new CloseRange(10, 20)));
    });
  });
});
