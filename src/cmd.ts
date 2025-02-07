#!/usr/bin/env node
import massarg from "massarg"
import chalk from "chalk"
import { LogLevel, ScaffoldCmdConfig } from "./types"
import { Scaffold } from "./scaffold"
import path from "path"
import fs from "fs/promises"

export async function parseCliArgs(args = process.argv.slice(2)) {
  const pkg = JSON.parse((await fs.readFile(path.join(__dirname, "package.json"))).toString())

  return (
    massarg<ScaffoldCmdConfig & { help: boolean; extras: string[] }>()
      .main(Scaffold)
      .option({
        name: "name",
        aliases: ["n"],
        description:
          "Name to be passed to the generated files. {{name}} and {{Name}} inside contents and file names will be replaced accordingly.",
        isDefault: true,
        required: true,
      })
      .option({
        name: "output",
        aliases: ["o"],
        description: `Path to output to. If --create-sub-folder is enabled, the subfolder will be created inside this path. ${chalk.reset`${chalk.white`(default: current dir)`}`}`,
        required: true,
      })
      .option({
        name: "templates",
        aliases: ["t"],
        array: true,
        description:
          "Template files to use as input. You may provide multiple files, each of which can be a relative or absolute path, " +
          "or a glob pattern for multiple file matching easily.",
        required: true,
      })
      .option({
        name: "overwrite",
        aliases: ["w"],
        boolean: true,
        defaultValue: false,
        description: "Enable to override output files, even if they already exist.",
      })
      .option({
        name: "data",
        aliases: ["d"],
        description: "Add custom data to the templates. By default, only your app name is included.",
        parse: (v) => JSON.parse(v),
      })
      .option({
        name: "create-sub-folder",
        aliases: ["s"],
        boolean: true,
        defaultValue: false,
        description: "Create subfolder with the input name",
      })
      .option({
        name: "sub-folder-name-helper",
        aliases: ["sh"],
        description: "Default helper to apply to subfolder name when using `--create-sub-folder true`.",
      })
      .option({
        name: "quiet",
        aliases: ["q"],
        boolean: true,
        defaultValue: false,
        description: "Suppress output logs (Same as --verbose 0)",
      })
      .option({
        name: "verbose",
        aliases: ["v"],
        defaultValue: LogLevel.Info,
        description:
          "Determine amount of logs to display. The values are: " +
          `${chalk.bold`0 (none) | 1 (debug) | 2 (info) | 3 (warn) | 4 (error)`}. ` +
          "The provided level will display messages of the same level or higher.",
        parse: Number,
      })
      .option({
        name: "dry-run",
        aliases: ["dr"],
        boolean: true,
        defaultValue: false,
        description:
          "Don't emit files. This is good for testing your scaffolds and making sure they " +
          "don't fail, without having to write actual file contents or create directories.",
      })
      // .example({
      //   input: `yarn cmd -t examples/test-input/Component -o examples/test-output -d '{"property":"myProp","value":"10"}'`,
      //   description: "Usage",
      //   output: "",
      // })
      .help({
        binName: "simple-scaffold",
        useGlobalColumns: true,
        usageExample: "[options]",
        header: [`Create structured files based on templates.`].join("\n"),
        footer: [
          `Version:  ${pkg.version}`,
          `Copyright © Chen Asraf 2017-${new Date().getFullYear()}`,
          ``,
          `Documentation: ${chalk.underline`https://casraf.blog/simple-scaffold`}`,
          `NPM: ${chalk.underline`https://npmjs.com/package/simple-scaffold`}`,
          `GitHub: ${chalk.underline`https://github.com/chenasraf/simple-scaffold`}`,
        ].join("\n"),
      })
      .parse(args)
  )
}

parseCliArgs()
