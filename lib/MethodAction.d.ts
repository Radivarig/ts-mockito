import { Matcher } from "./matcher/type/Matcher";
export declare class MethodAction {
    methodName: string;
    args: any[];
    private static globalCallIndex;
    private callIndex;
    constructor(methodName: string, args: any[]);
    isApplicable(methodName: string, matchers: Matcher[]): boolean;
    getCallIndex(): number;
    hasBeenCalledBefore(action: MethodAction): boolean;
}
