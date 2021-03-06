import { MethodStub } from "./MethodStub";
export declare class CallThroughMethodStub implements MethodStub {
    private instance;
    private method;
    private result;
    constructor(instance: any, method: Function);
    getGroupIndex(): number;
    isApplicable(args: any[]): boolean;
    execute(args: any[]): void;
    getValue(): any;
}
