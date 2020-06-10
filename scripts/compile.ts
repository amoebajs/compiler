import path from "path";
import Compiler from "../src";

const compiler = new Compiler({
  context: path.resolve(__dirname, "../demo"),
  tsconfig: "tsconfig.json",
});

const demo = compiler.read("component.tsx");

console.log(compiler.printFile(demo));
