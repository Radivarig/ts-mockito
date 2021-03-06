import { Matcher } from "../matcher/type/Matcher";
import { AbstractMethodStub } from "./AbstractMethodStub";
import { MethodStub } from "./MethodStub";
export declare class ThrowErrorMethodStub extends AbstractMethodStub implements MethodStub {
    protected groupIndex: number;
    private matchers;
    private error;
    private validator;
    constructor(groupIndex: number, matchers: Array<Matcher>, error: Error);
    isApplicable(args: any[]): boolean;
    execute(args: any[]): void;
    getValue(): any;
}
