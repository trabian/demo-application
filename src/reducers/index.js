import { combineReducers } from 'redux';
import _ from 'lodash';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import { blur } from 'redux-form';

import selectionReducer from 'src/reducers/selectionReducer';
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

const blurFieldEntry = ( field, text ) => {
  if( blurMap[field].validate(text) ){
    return blurMap[field].normalize(text);
  }
  return text;
};

const blurType = blur().type;

export default combineReducers({
  selected: selectionReducer,
  router: routerReducer,
  form: formReducer.plugin({
    apply: (state, action) => {
      if(action.type === blurType) {
        return {
          ...state,
          values: {
            ...state.values,
            [action.meta.field]: blurFieldEntry( action.meta.field, action.payload )
          }
        };
      }
      return state;
    }
  })
});
