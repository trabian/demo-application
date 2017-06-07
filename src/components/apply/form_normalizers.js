import _ from 'lodash';

export const stripPhoneNumber = input => _.replace(input, /[^0-9]+/, '');

const formatPhoneNumber = chars => {
  const flattened = _.flatten([
    chars.length !== 0 ? '(' : '',
    _.slice(chars, 0, 3),
    chars.length > 2 ? ') ' : '',
    _.slice(chars, 3, 6),
    chars.length > 5 ? '-' : '',
    _.slice(chars, 6, 10)
  ]);
  return _.join(flattened, '');
}

export const normalizePhoneNumber = (input, prevInput='') => {
  const chars = stripPhoneNumber(input).split('');
  // handle backspacing with formatting characters
  if(input.length < prevInput.length && /[^0-9]+/.test(_.last(prevInput))) {
    return formatPhoneNumber(_.initial(chars));
  }

  const count = chars.length < 10 ? chars.length : 10;
  return formatPhoneNumber(chars);
}
