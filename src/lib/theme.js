import React from 'react';
import { theme as defaultTheme } from '@chakra-ui/core';
import { mergeDeepRight } from 'ramda';

const fonts = {
  heading: `'Barlow', sans-serif`,
  body: `'Barlow', sans-serif`,
};

const colors = {
  gray: { 0: '#f4f7f6' },
};

const icons = {
  external_link: {
    path: (
      <path
        fill="currentColor"
        d="M13.84,14V9.801C8.492,8.463,4.42,9.041,0.408,12.144c-0.05,0.038-0.101,0.078-0.15,0.117 c-0.137,0.104-0.192,0.103-0.226,0.077c-0.035-0.027-0.055-0.066,0.014-0.234c0.092-0.228,0.196-0.445,0.298-0.658 C3.208,5.443,7.902,4.2,13.84,4.2V0l8.4,7L13.84,14z"
      ></path>
    ),
    viewBox: '0 0 22 14',
  },
};

const theme = mergeDeepRight(defaultTheme, { fonts, colors, icons });

export default theme;
