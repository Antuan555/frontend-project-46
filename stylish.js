import _ from 'lodash';

const indent = (depth, spaces = 4) => ' '.repeat(depth * spaces - 2);
const formatValue = (value, depth) => {
  if (_.isObject(value)) {
    const lines = Object.entries(value).map(
      ([key, val]) => `${indent(depth + 1)}  ${key}: ${formatValue(val, depth + 1)}`,
    );
    return `{\n${lines.join('\n')}\n${indent(depth)}  }`;
  }
  return value;
};

const formatDiff = (diff, depth = 1) => {
  const lines = diff.map((node) => {
    switch (node.type) {
      case 'nested':
        return `${indent(depth)}  ${node.key}: {\n${formatDiff(node.children, depth + 1)}\n${indent(depth)}  }`;
      case 'added':
        return `${indent(depth)}+ ${node.key}: ${formatValue(node.value, depth)}`;
      case 'removed':
        return `${indent(depth)}- ${node.key}: ${formatValue(node.value, depth)}`;
      case 'updated':
        return [
          `${indent(depth)}- ${node.key}: ${formatValue(node.oldValue, depth)}`,
          `${indent(depth)}+ ${node.key}: ${formatValue(node.newValue, depth)}`,
        ].join('\n');
      case 'unchanged':
        return `${indent(depth)}  ${node.key}: ${formatValue(node.value, depth)}`;
      default:
        throw new Error(`Unknown type: ${node.type}`);
    }
  });
  return lines.join('\n');
};

const stylish = (diff) => {
  const formatedDiff = formatDiff(diff);
  return `{\n${formatedDiff}\n}`;
};
export default stylish;
