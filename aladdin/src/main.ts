export class ClosedRange {
    lower: number;
    upper: number;

    constructor(lower: number, upper: number) {
        if (lower > upper) {
            throw new Error ('error!!');
        }
        this.lower = lower;
        this.upper = upper;
    }

    convert(lower: number, upper: number): string {
        return `[${lower},${upper}]`
    }
}
