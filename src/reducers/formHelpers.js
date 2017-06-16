import _ from 'lodash';
import { socialSecurity, phoneNumber } from 'src/helpers/fieldNames';

const normalizePhoneNumber = input => {
  const chars = _.replace(input, /[^0-9]+/, '');
  const flattened = _.flatten([
    chars.length !== 0 ? '(' : '',
    _.slice(chars, 0, 3),
    chars.length > 2 ? ') ' : '',
    _.slice(chars, 3, 6),
    chars.length > 5 ? '-' : '',
    _.slice(chars, 6, 10)
  ]);

  return _.join(flattened, '');
};

// Defines a validator and normalizer that are applied when the field is blurred.  The normalizer is only applied
// if the validator verifies the contents of the field as valid.
const blurMap = {
  [socialSecurity]: {
    validate: (soc) => soc.length === 9,
    normalize: (soc) => soc.substr(0,3) + '-' + soc.substr(3,2) + '-' + soc.substr(5,4),
  },
  [phoneNumber]: {
    validate: input => /[0-9]+/.test(input) && input.length === 10,
    normalize: normalizePhoneNumber,
  },
};

export const blurFieldEntry = ( field, text ) => {
  if( blurMap[field] && blurMap[field].validate(text) ){
    return blurMap[field].normalize(text);
  }
  return text;
};
