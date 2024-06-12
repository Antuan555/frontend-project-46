#!/usr/bin/env node
import { program } from 'commander';
import genDiff from './index.js';
import stylish from './stylish.js';

program
  .version('1.0.0')
  .arguments('<filepath1> <filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .helpOption('-h, --help', 'output usage information')
  .option('-f, --format [type]', 'output format', 'stylish')
  .action((filepath1, filepath2, options) => {
    const diff = genDiff(filepath1, filepath2);
    const format = options.format === 'stylish' ? stylish(diff) : 'Unknown format';
    console.log(format);
  })
  .parse(process.argv);
