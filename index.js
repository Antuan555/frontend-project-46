import path from 'path';
import fs from 'fs';
import yaml from 'js-yaml';
import buildDiff from './buildDiff.js';
import formatter from './formaters/formatter.js';

const parseFile = (file) => {
  const pathResolve = path.resolve('files', file);
  const content = fs.readFileSync(pathResolve, 'utf-8');

  if (file.includes('.json')) {
    return JSON.parse(content);
  }
  if (file.includes('.yaml') || file.includes('.yml')) {
    return yaml.load(content);
  }
  const extName = path.extname(pathResolve);
  throw new Error(`Unsupported file extension: ${extName}`);
};

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const data1 = parseFile(filepath1);
  const data2 = parseFile(filepath2);

  return formatter(buildDiff(data1, data2), format);
};

export default genDiff;
