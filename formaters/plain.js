import _ from 'lodash';

const formatValue = (value) => {
  if (_.isObject(value) && !_.isArray(value)) {
    return '[complex value]';
  }
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  return String(value);
};

const buildPlain = (diff, parent = '') => {
  const lines = diff.map((node) => {
    const fullPath = parent ? `${parent}.${node.key}` : node.key;

    switch (node.type) {
      case 'nested':
        return buildPlain(node.children, fullPath);
      case 'added':
        return `Property '${fullPath}' was added with value: ${formatValue(node.value)}`;
      case 'removed':
        return `Property '${fullPath}' was removed`;
      case 'updated':
        return `Property '${fullPath}' was updated. From ${formatValue(node.oldValue)} to ${formatValue(node.newValue)}`;
      case 'unchanged':
        return null;
      default:
        throw new Error(`Unknown type: ${node.type}`);
    }
  });

  return lines.filter(Boolean).join('\n');
};

export default buildPlain;
