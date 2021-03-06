import { Mocker } from "./Mock";
import { MethodStub } from "./stub/MethodStub";
export declare class Spy extends Mocker {
    private realMethods;
    constructor(instance: any);
    reset(): void;
    protected getEmptyMethodStub(key: string, args: any[]): MethodStub;
    protected createInstancePropertyDescriptorListener(key: string, descriptor: PropertyDescriptor, prototype: any): void;
    protected createInstanceActionListener(key: string, prototype: any): void;
}
