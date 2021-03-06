import { Matcher } from "./Matcher";
export declare class ObjectContainingMatcher extends Matcher {
    private expectedValue;
    constructor(expectedValue: any);
    match(value: Object): boolean;
    toString(): string;
}
