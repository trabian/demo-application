import _ from 'lodash';

const rgx = new RegExp('[\\(\\)\\-\\ ]', 'g');

const formatPhoneNumber = chars => {
  const flattened = _.flatten([
    chars.length !== 0 ? '(' : '',
    _.slice(chars, 0, 3),
    chars.length > 2 ? ') ' : '',
    _.slice(chars, 3, 6),
    chars.length > 5 ? '-' : '',
    _.slice(chars, 6, chars.length)
  ]);
  return _.join(flattened, '');
}

export const normalizePhoneNumber = (input, prevInput='') => {
  const chars = _.replace(input, rgx, '').split('');
  // handle backspacing with formatting characters
  if(input.length < prevInput.length && _.replace(_.last(prevInput), rgx, '') == '') {
    return formatPhoneNumber(_.initial(chars));
  }

  const count = chars.length < 10 ? chars.length : 10;
  return formatPhoneNumber(chars);
}
