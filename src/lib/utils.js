import { tap, map, addIndex } from 'ramda';

// eslint-disable-next-line no-console
export const trace = (msg) => tap((x) => console.log(msg, x));

export const mapIndexed = addIndex(map);
