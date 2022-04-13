import { strict as assert } from "assert";
import { ClosedRange } from "./closed_range.mjs";

test("Hold upper and lower", () => {
  const lower = 1;
  const upper = 2;
  const closedRange = new ClosedRange(lower, upper);
  assert.equal(closedRange.lower, lower);
  assert.equal(closedRange.upper, upper);
});

test("The lower is greater than the upper", () => {
  const lower = 2;
  const upper = 1;
  assert.throws(
    () => {
      // eslint-disable-next-line no-new
      new ClosedRange(lower, upper);
    },
    {
      message: "Upper is greater than lower"
    }
  );
});

test("Two closed range is equivalent", () => {
  const lower = 1;
  const upper = 2;

  const closedRange = new ClosedRange(lower, upper);
  const targetClosedRange = new ClosedRange(lower, upper);
  assert.equal(closedRange.equal(targetClosedRange), true);

  targetClosedRange.setUpper(4);
  targetClosedRange.setLower(3);
  assert.equal(closedRange.equal(targetClosedRange), false);
});

test("Two closed range is equivalent", () => {
  const closedRange = new ClosedRange(1, 2);
  const subClosedRange = new ClosedRange(3, 4);
  assert.equal(closedRange.contain(subClosedRange), false);
});
