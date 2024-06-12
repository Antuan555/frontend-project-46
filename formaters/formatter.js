import stylish from './stylish.js';
import buildPlain from './plain.js';

export default (diff, format) => {
  switch (format) {
    case 'stylish':
      return stylish(diff);
    case 'plain':
      return buildPlain(diff);
    case 'json':
      return JSON.stringify(diff);
    default:
      throw new Error('invalid data');
  }
};
