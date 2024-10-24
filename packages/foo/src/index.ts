import { b1, newFunc, newFunc2, type CXYZ } from "bar";

export const F1 = "f2";
export const F2 = (): any => newFunc(b1);
export const F4 = (): void => newFunc2({ a: "a" });
export const F5 = (): void => console.log("f5");
export const F6 = (a: CXYZ): void => console.log(a);
