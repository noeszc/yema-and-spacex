import * as R from 'ramda';

// eslint-disable-next-line no-console
export const trace = (msg) => R.tap((x) => console.log(msg, x));

export const mapIndexed = R.addIndex(R.map);

export const randomInt = R.curry(
  (min = 0, max = 1) => Math.floor(Math.random() * (max - min + 1)) + min,
);

export const dotPath = R.useWith(R.path, [R.split('.')]);

export const getPath = R.useWith(R.ap, [R.map(dotPath), R.of]);

export const truncate = R.curry((string, length = 30, separator = '...') =>
  R.when(
    R.propSatisfies(R.gt(R.__, length), 'length'),
    R.pipe(R.take(length), R.append(separator), R.join('')),
  )(string),
);
