export const b1 = "b1";
export const b2 = "b2";
export const b3 = "b2";

declare global {
  interface Window {
    getHostOffsetFunctionOverride?(hostWindow: Window): number;
    __DEV__: boolean;
  }
}

export const newFunc = (x: string): void => {
  if (window.__DEV__) {
    console.log("gere");
  }

  console.log(x);
};

export type XYZ = {
  a: string;
};

export const newFunc2 = (x: XYZ): void => {
  console.log("Hi", x);
};

export type CXYZ = XYZ & {
  z: string;
};
