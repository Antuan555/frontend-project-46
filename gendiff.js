#!/usr/bin/env node
import { program } from 'commander';
import path from 'path';
import fs from 'fs';

const action = (args) => args.map((e) => {
  const pathFile = path.resolve(process.cwd(), e);
  const data = fs.readFileSync(pathFile);
  console.log(JSON.parse(data));
  return JSON.parse(data);
});

program
  .version('0.0.1')
  .arguments('<filepath1> <filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .helpOption('-h, --help', 'output usage information')
  .option('-f, --format [type]', 'output format')
  .parse(process.argv);

const { args } = program;
action(args);
