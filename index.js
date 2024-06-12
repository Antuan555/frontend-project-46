import path from 'path';
import fs from 'fs';
import yaml from 'js-yaml';
import buildDiff from './buildDiff.js';

const parseFile = (file) => {
  const pathResolve = path.resolve(process.cwd(), file);
  const content = fs.readFileSync(pathResolve, 'utf-8');
  let parse;
  if (file.includes('.json')) {
    parse = JSON.parse(content);
  } else if (file.includes('.yaml') || file.includes('.yml')) {
    parse = yaml.load(content);
  } else {
    throw new Error(`Unsupported file extension: ${content}`);
  }
  return parse;
};

const genDiff = (filepath1, filepath2) => {
  const data1 = parseFile(filepath1);
  const data2 = parseFile(filepath2);

  return buildDiff(data1, data2);
};

export default genDiff;
