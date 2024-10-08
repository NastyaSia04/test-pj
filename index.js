import _ from 'lodash';

import app from './src/index.js';

app();

const fn = (a, b) => {
  const c = a + b;
  return c;
};

console.log(_.last(['one', 'two']));
