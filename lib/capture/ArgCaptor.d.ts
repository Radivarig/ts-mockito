import { MethodAction } from "../MethodAction";
export declare class ArgCaptor {
    private actions;
    constructor(actions: MethodAction[]);
    first(): any;
    second(): any;
    third(): any;
    beforeLast(): any;
    last(): any;
    byCallIndex(index: number): any;
}
export interface ArgCaptor1<T> {
    first(): [T];
    second(): [T];
    third(): [T];
    beforeLast(): [T];
    last(): [T];
    byCallIndex(index: number): [T];
}
export interface ArgCaptor2<T0, T1> {
    first(): [T0, T1];
    second(): [T0, T1];
    third(): [T0, T1];
    beforeLast(): [T0, T1];
    last(): [T0, T1];
    byCallIndex(index: number): [T0, T1];
}
export interface ArgCaptor3<T0, T1, T2> {
    first(): [T0, T1, T2];
    second(): [T0, T1, T2];
    third(): [T0, T1, T2];
    beforeLast(): [T0, T1, T2];
    last(): [T0, T1, T2];
    byCallIndex(index: number): [T0, T1, T2];
}
export interface ArgCaptor4<T0, T1, T2, T3> {
    first(): [T0, T1, T2, T3];
    second(): [T0, T1, T2, T3];
    third(): [T0, T1, T2, T3];
    beforeLast(): [T0, T1, T2, T3];
    last(): [T0, T1, T2, T3];
    byCallIndex(index: number): [T0, T1, T2, T3];
}
export interface ArgCaptor5<T0, T1, T2, T3, T4> {
    first(): [T0, T1, T2, T3, T4];
    second(): [T0, T1, T2, T3, T4];
    third(): [T0, T1, T2, T3, T4];
    beforeLast(): [T0, T1, T2, T3, T4];
    last(): [T0, T1, T2, T3, T4];
    byCallIndex(index: number): [T0, T1, T2, T3, T4];
}
export interface ArgCaptor6<T0, T1, T2, T3, T4, T5> {
    first(): [T0, T1, T2, T3, T4, T5];
    second(): [T0, T1, T2, T3, T4, T5];
    third(): [T0, T1, T2, T3, T4, T5];
    beforeLast(): [T0, T1, T2, T3, T4, T5];
    last(): [T0, T1, T2, T3, T4, T5];
    byCallIndex(index: number): [T0, T1, T2, T3, T4, T5];
}
export interface ArgCaptor7<T0, T1, T2, T3, T4, T5, T6> {
    first(): [T0, T1, T2, T3, T4, T5, T6];
    second(): [T0, T1, T2, T3, T4, T5, T6];
    third(): [T0, T1, T2, T3, T4, T5, T6];
    beforeLast(): [T0, T1, T2, T3, T4, T5, T6];
    last(): [T0, T1, T2, T3, T4, T5, T6];
    byCallIndex(index: number): [T0, T1, T2, T3, T4, T5, T6];
}
export interface ArgCaptor8<T0, T1, T2, T3, T4, T5, T6, T7> {
    first(): [T0, T1, T2, T3, T4, T5, T6, T7];
    second(): [T0, T1, T2, T3, T4, T5, T6, T7];
    third(): [T0, T1, T2, T3, T4, T5, T6, T7];
    beforeLast(): [T0, T1, T2, T3, T4, T5, T6, T7];
    last(): [T0, T1, T2, T3, T4, T5, T6, T7];
    byCallIndex(index: number): [T0, T1, T2, T3, T4, T5, T6, T7];
}
export interface ArgCaptor9<T0, T1, T2, T3, T4, T5, T6, T7, T8> {
    first(): [T0, T1, T2, T3, T4, T5, T6, T7, T8];
    second(): [T0, T1, T2, T3, T4, T5, T6, T7, T8];
    third(): [T0, T1, T2, T3, T4, T5, T6, T7, T8];
    beforeLast(): [T0, T1, T2, T3, T4, T5, T6, T7, T8];
    last(): [T0, T1, T2, T3, T4, T5, T6, T7, T8];
    byCallIndex(index: number): [T0, T1, T2, T3, T4, T5, T6, T7, T8];
}
export interface ArgCaptor10<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9> {
    first(): [T0, T1, T2, T3, T4, T5, T6, T7, T8, T9];
    second(): [T0, T1, T2, T3, T4, T5, T6, T7, T8, T9];
    third(): [T0, T1, T2, T3, T4, T5, T6, T7, T8, T9];
    beforeLast(): [T0, T1, T2, T3, T4, T5, T6, T7, T8, T9];
    last(): [T0, T1, T2, T3, T4, T5, T6, T7, T8, T9];
    byCallIndex(index: number): [T0, T1, T2, T3, T4, T5, T6, T7, T8, T9];
}
