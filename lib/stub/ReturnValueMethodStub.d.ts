import { Matcher } from "../matcher/type/Matcher";
import { AbstractMethodStub } from "./AbstractMethodStub";
import { MethodStub } from "./MethodStub";
export declare class ReturnValueMethodStub extends AbstractMethodStub implements MethodStub {
    protected groupIndex: number;
    private matchers;
    private returns;
    private validator;
    constructor(groupIndex: number, matchers: Array<Matcher>, returns: any);
    isApplicable(args: any[]): boolean;
    execute(args: any[]): void;
    getValue(): any;
}
