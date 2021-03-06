import { Matcher } from "../matcher/type/Matcher";
import { AbstractMethodStub } from "./AbstractMethodStub";
import { MethodStub } from "./MethodStub";
export declare class CallFunctionMethodStub extends AbstractMethodStub implements MethodStub {
    protected groupIndex: number;
    private matchers;
    private func;
    private validator;
    private functionResult;
    constructor(groupIndex: number, matchers: Array<Matcher>, func: any);
    isApplicable(args: any[]): boolean;
    execute(args: any[]): void;
    getValue(): any;
}
