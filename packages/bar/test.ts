import { F1 } from "foo";
import { b1 } from "./src/index";

export const xyz = () => {
  if (global.window.__DEV__) {
    console.log("gere", b1);
    return (
      global.window?.getHostOffsetFunctionOverride &&
      global.window?.getHostOffsetFunctionOverride(global.window)
    );
  }

  return 0;
};

console.log(F1);
