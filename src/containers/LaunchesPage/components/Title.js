import styled from '@emotion/styled';
import { Text } from '@chakra-ui/core';
import { getPath } from 'lib/utils';

const Title = styled(Text)`
  display: inline-block;
  position: relative;
  font-weight: 800;
  z-index: 1;
  font-size: ${({ theme }) => getPath(['fontSizes.xl'], theme)};
  padding: 0 5px;
  &::before {
    content: '';
    display: block;
    height: 5px;
    position: absolute;
    width: 100%;
    background: ${({ highlightColor, theme }) =>
      getPath([`colors.${highlightColor}`], theme)};
    top: 55%;
    left: 0;
    transform: translateY(-50%);
    z-index: -1;
  }
`;

export default Title;
