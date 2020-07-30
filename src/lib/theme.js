import { theme as defaultTheme } from '@chakra-ui/core';
import { mergeDeepRight } from 'ramda';

const fonts = {
  heading: `'Barlow', sans-serif`,
  body: `'Barlow', sans-serif`,
};

const colors = {
  offWhite: '#f4f7f6',
};

const theme = mergeDeepRight(defaultTheme, { fonts, colors });

export default theme;
