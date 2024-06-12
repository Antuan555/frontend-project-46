import genDiff from '../index.js';

describe('gendiff', () => {
  test('gendiff1', () => {
    expect(JSON.stringify(genDiff('file1.json', 'file2.json'))).toEqual('"{\\n  - follow: false\\n    host: hexlet.io\\n  - proxy: 123.234.53.22\\n  - timeout: 50\\n  + timeout: 20\\n  + verbose: true\\n}"');
  });
  test('gendiff1', () => {
    expect(JSON.stringify(genDiff('file1.yaml', 'file2.yml'))).toEqual('"{\\n  - follow: false\\n    host: hexlet.io\\n  - proxy: 123.234.53.22\\n  - timeout: 50\\n  + timeout: 20\\n  + verbose: true\\n}"');
  });
});
