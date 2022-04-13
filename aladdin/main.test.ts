import { ClosedRange } from "./src/main"

describe('整数閉区間クラスtest', () => {

  //beforeEach(() => {
  //  const range = new ClosedRange(3, 7);
  //});

  describe('整数閉区間クラスは下端点(a)と上端点(b)を有する', () => {

    test('下端点と上端点が存在する', () => {
      const range = new ClosedRange(3, 7);
      expect(range.lower).toBe(3)
      expect(range.upper).toBe(7)
    })

    describe('整数閉区間クラスは下端点(a)と上端点(b)の関係性', () => {

      test('下端点 < 上端点は正常', () => {
        const range = new ClosedRange(3, 7);
        expect(range.upper).toBeGreaterThan(3)
      })

      test('下端点 > 上端点は例外', () => {
        //無名関数わたさないとオブジェクト作成時点で例外になる。
        expect(() => new ClosedRange(7, 3)).toThrow('error!!')
      })

      test('下端点 = 上端点は正常', () => {
        const range = new ClosedRange(3, 3);
        expect(range.lower).toBe(range.upper)
      })

    })
  })

  describe('下端点と上端点を文字列表記で返す', () => {

    test('3,7を渡すと文字列[3,7]を返す', () => {
      expect(new ClosedRange(3, 7).convert(3,7)).toEqual('[3,7]')
    })

  })

})
