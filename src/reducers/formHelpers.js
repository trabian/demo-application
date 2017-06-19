import _ from 'lodash';

import { socialSecurity, phoneNumber } from 'src/helpers/fieldNames';

const normalizePhoneNumber = input => `(${input.substr(0, 3)}) ${input.substr(3, 3)}-${input.substr(6, 10)}`;

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

const focusMap = {
  [socialSecurity]: {
    validate: (soc) => soc.length === 11,
    normalize: (soc) => _.replace(soc, /[-]/g, '')
  },
  [phoneNumber]: {
    validate: input => input.length === 14,
    normalize: input => _.replace(input, /[^0-9]+/g, ''),
  },
};

export const blurFieldEntry = (field, text) => {
  const blurMapVal = blurMap[field];
  if(blurMapVal && blurMapVal.validate(text)){
    return blurMapVal.normalize(text);
  }
  return text;
};

export const focusFieldEntry = (field, text) => {
  const focusMapVal = focusMap[field];
  console.log('field: ', field, 'text: ', text);
  if(focusMapVal && text && focusMapVal.validate(text)){
    return focusMapVal.normalize(text);
  }
  return text;
};
