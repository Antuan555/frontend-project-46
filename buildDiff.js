import _ from 'lodash';

const buildDiff = (data1, data2) => {
  const keys = _.union(Object.keys(data1), Object.keys(data2));
  const sortedKeys = _.sortBy(keys);

  const diff = sortedKeys.map((key) => {
    if (_.isObject(data1[key]) && _.isObject(data2[key])) {
      return {
        key,
        type: 'nested',
        children: buildDiff(data1[key], data2[key]),
      };
    }
    if (!Object.hasOwn(data2, key)) {
      return { key, type: 'removed', value: data1[key] };
    }
    if (!Object.hasOwn(data1, key)) {
      return { key, type: 'added', value: data2[key] };
    }
    if (!_.isEqual(data1[key], data2[key])) {
      return {
        key,
        type: 'updated',
        oldValue: data1[key],
        newValue: data2[key],
      };
    }
    return { key, type: 'unchanged', value: data1[key] };
  });

  return diff;
};
export default buildDiff;
