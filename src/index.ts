import ts from "typescript";
import path from "path";

export interface ICompilerOptions {
  context: string;
  tsconfig: string;
}

class Compiler {
  private __options!: ICompilerOptions;
  private __parsed!: ts.ParsedCommandLine;
  private __app!: ts.Program;

  private get filenames() {
    return this.__parsed.fileNames;
  }

  private get options() {
    return this.__parsed.options;
  }

  constructor(options: Partial<ICompilerOptions>) {
    this.__options = {
      context: options.context ?? process.cwd(),
      tsconfig: options.tsconfig ?? "tsconfig.json",
    };
    const confpath = path.resolve(this.__options.context, this.__options.tsconfig);
    this.__parsed = loadProgramConfig(confpath);
    this.__app = ts.createProgram({ rootNames: this.filenames, options: this.options });
  }

  public read(filename: string) {
    const realname = path.resolve(this.__options.context, filename);
    if (!this.filenames.includes(realname)) {
      throw Error("sourcefile not found");
    }
    return this.__app.getSourceFile(realname);
  }

  public printFile(sourcefile: ts.SourceFile) {
    const printer = ts.createPrinter();
    return printer.printFile(sourcefile);
  }
}

function loadProgramConfig(configFile: string, compilerOptions?: ts.CompilerOptions) {
  const tsconfig = ts.readConfigFile(configFile, ts.sys.readFile).config || {};
  tsconfig.compilerOptions = {
    ...tsconfig.compilerOptions,
    ...compilerOptions,
  };
  return ts.parseJsonConfigFileContent(tsconfig, ts.sys, path.dirname(configFile));
}

export default Compiler;
