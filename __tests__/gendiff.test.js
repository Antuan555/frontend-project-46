import genDiff from '../index.js';
import plane from '../fixtures/gendiffPlane.js';
import stylish from '../fixtures/gendiffStylish.js';
import json from '../fixtures/gendiffJson.js';

describe('gendiff', () => {
  test('gendiffStylish', () => {
    expect(genDiff('file3.yaml', 'file4.json')).toEqual(stylish);
  });

  test('gendiffPlain', () => {
    expect(genDiff('file1.json', 'file2.yml', 'plain')).toEqual(plane);
  });

  test('gendiffJson', () => {
    expect(genDiff('file1.yaml', 'file2.json', 'json')).toEqual(json);
  });
});
