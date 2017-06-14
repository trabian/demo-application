import { curry, Inline, Flex } from 'jsxstyle';

import * as colors from 'src/helpers/colors';

export const Container = curry(Flex, {
  paddingTop: 30,
  flexDirection: 'column',
  justifyContent: 'flex-start',
  width: '80vw',
  margin: '0 auto',
});

export const Heading = curry(Inline, {
  color: colors.basic,
  fontSize: '2.8em',
  alignSelf: 'flex-start'
});
