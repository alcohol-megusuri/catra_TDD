const Range = require("./range");

const range = new Range(3, 7);

describe("整数閉区間クラスのメソッド", () => {
  test("整数閉区間の文字列表記に変換する", () => {
    expect(range.convert()).toBe("[3,7]");
  });

  describe("整数閉区間クラスは指定した整数を含むかどうかを判定する", () => {
    test("入力が整数でないときはエラーを返す", () => {
      expect(() => range.include(1.1)).toThrow();
    });
    test("閉区間に含まれるときがtrueを返す", () => {
      expect(range.include(4)).toBe(true);
    });
    test("下端点より小さいときはfalseを返す", () => {
      expect(range.include(1)).toBe(false);
    });
    test("上端点より大きい場合はfalseを返す", () => {
      expect(range.include(10)).toBe(false);
    });
  });
});
