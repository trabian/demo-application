import _ from 'lodash';
import { getIn } from 'zaphod/compat';
import { blur, focus } from 'redux-form';

import { socialSecurity, phoneNumber } from 'src/helpers/fieldNames';

const blurType = blur().type;
const focusType = focus().type;

const normalizePhoneNumber = input => `(${input.substr(0, 3)}) ${input.substr(3, 3)}-${input.substr(6, 10)}`;

// Defines a validator and normalizer that are applied when the field is blurred or focused.  The normalizer is only applied
// if the validator verifies the contents of the field as valid.
const transformMap = {
  [socialSecurity]: {
    [blurType]: {
      validate: (soc) => soc.length === 9,
      normalize: (soc) => soc.substr(0,3) + '-' + soc.substr(3,2) + '-' + soc.substr(5,4),
    },
    [focusType]: {
      validate: (soc) => soc.length === 11,
      normalize: (soc) => _.replace(soc, /[-]/g, ''),
    },
  },
  [phoneNumber]: {
    [blurType]: {
      validate: input => /[0-9]+/.test(input) && input.length === 10,
      normalize: normalizePhoneNumber,
    },
    [focusType]: {
      validate: input => input.length === 14,
      normalize: input => _.replace(input, /[^0-9]+/g, ''),
    },
  },
};

export const transformFieldEntry = (field, eventType) => (text='') => {
  const transformers = getIn(transformMap, [field, eventType]);
  return transformers && text && transformers.validate(text) ? transformers.normalize(text) : text;
};
