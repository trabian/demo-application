import _ from 'lodash';

import { socialSecurity, phoneNumber } from 'src/helpers/fieldNames';

const normalizePhoneNumber = input => `(${input.substr(0, 3)}) ${input.substr(3, 3)}-${input.substr(6, 10)}`;

// Defines a validator and normalizer that are applied when the field is blurred or focused.  The normalizer is only applied
// if the validator verifies the contents of the field as valid.
const transformMap = {
  [socialSecurity]: {
    blur: {
      validate: (soc) => soc.length === 9,
      normalize: (soc) => soc.substr(0,3) + '-' + soc.substr(3,2) + '-' + soc.substr(5,4),
    },
    focus: {
      validate: (soc) => soc.length === 11,
      normalize: (soc) => _.replace(soc, /[-]/g, '')
    }
  },
  [phoneNumber]: {
    blur: {
      validate: input => /[0-9]+/.test(input) && input.length === 10,
      normalize: normalizePhoneNumber,
    },
    focus: {
      validate: input => input.length === 14,
      normalize: input => _.replace(input, /[^0-9]+/g, ''),
    },
  },
};

export const transformFieldEntry = (field, eventType, text) => {
  const transformers = transformMap[field][eventType];
  return transformers && text && transformers.validate(text) ? transformers.normalize(text) : text;
};

