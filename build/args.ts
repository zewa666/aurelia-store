import yargs from "yargs";
import { IBuildTargetFormat } from "./shared";

// tslint:disable-next-line:interface-name
export interface IArguments {
  target: string;
  format: IBuildTargetFormat[];
}

export const args: IArguments = yargs
  .options(
    "target",
    {
      alias: "t",
      description: "target module dir to copy build results into (eg. \"--target ../other-module\" to copy build results into \"../other-module/node_modules/this-module/dist/…\" whenever they change)"
    }
  )
  .options("format", {
    alias: "f",
    array: true,
    description: "format to compile to (eg. \"es2015\", \"commonjs\", …). Can be set muliple times to compile to multiple formats. Default is all formats."
  })
  .argv as any;
