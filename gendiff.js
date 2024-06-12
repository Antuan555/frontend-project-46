#!/usr/bin/env node
import { program } from 'commander';
import genDiff from './index.js';

program
  .version('1.0.0')
  .arguments('<filepath1> <filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .helpOption('-h, --help', 'output usage information')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2) => {
    const nameFormat = program.opts().format;
    const diff = genDiff(filepath1, filepath2, nameFormat);
    console.log(diff);
  })
  .parse(process.argv);
