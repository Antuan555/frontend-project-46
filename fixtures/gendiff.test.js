import genDiff from "../index.js";

describe('gendiff', () => {
	test('gendiff1', () => {
		expect(JSON.stringify(genDiff('file1.json', 'file2.json'))).toEqual("\"{\\n  - follow: false\\n    host: hexlet.io\\n  - proxy: 123.234.53.22\\n  - timeout: 50\\n  + timeout: 20\\n  + verbose: true\\n}\"");
	});

	//test('jsonDiffYAML-JS', () => {
	//  expect(gendiff('file3.yaml', 'file4.json', 'json')).toEqual(JSONResult);
	//});

	//test('stylishDiffJS-JS', () => {
	//  expect(gendiff('file5.json', 'file6.json', 'stylish')).toEqual(stylishResult);
	//});
});