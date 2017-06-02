import { curry, Inline, Flex } from 'jsxstyle';

import * as colors from './colors';

export const Container = curry(Flex, {
  paddingTop: 30,
  flexDirection: 'column',
  justifyContent: 'flex-start',
  width: '80vw',
  margin: '0 auto',
});

export const Heading = curry(Inline, {
  color: colors.primary_text,
  fontSize: '2.8em',
  alignSelf: 'flex-start'
});
