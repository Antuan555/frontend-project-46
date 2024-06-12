import path from "path";
import fs from 'fs';
import _ from "lodash";
const genDiff = (file1, file2) => {
	const args = [file1, file2]
  const obj = args.map((e) => {
    const pathFile = path.resolve(process.cwd(), e);
    const data = fs.readFileSync(pathFile);
    const parse = JSON.parse(data);
    return parse;
  });
  const keysFile1 = Object.keys(obj[0]);
  const filterArr = keysFile1.filter((e) => {
    if (Object.hasOwn(obj[1], e) && obj[0][e] === obj[1][e]) {
      return e;
    }
		return false;
  });
  const mappingArr = filterArr.map((e) => `  ${e}`);
  const filterArr2 = Object.entries(obj[0]).filter((e) => `  ${e[0]}` === mappingArr[0]);
  const resArr = filterArr2.map((e) => {
    const result = `  ${e[0]}`;
    return [result, e[1]];
  });
  Object.entries(obj[0]).map((e) => {
    if (`  ${e[0]}` !== mappingArr[0]) {
      e[0] = `- ${e[0]}`;
      return resArr.push(e);
    }
    return false;
  });
  Object.entries(obj[1]).map((e) => {
    if (`  ${e[0]}` !== mappingArr[0]) {
      e[0] = `+ ${e[0]}`;
      return resArr.push(e);
    }
    return false;
  });
  const sort = _.sortBy(resArr, (el) => el[0][2]);
  const joinArr = sort.map((e) => `  ${e.join(': ')}`);
	return `{
${joinArr.join('\n')}
}`;
};
export default genDiff