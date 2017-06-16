import { combineReducers } from 'redux';
import _ from 'lodash';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import { blur } from 'redux-form';

import selectionReducer from 'src/reducers/selectionReducer';
import { socialSecurity, phoneNumber } from 'src/helpers/fieldNames';

const validateSocial = (soc) => {
  return soc.length === 9;
};

const formatSocial = (soc) => {
  if( validateSocial(soc) ){
    return soc.substr(0,3) + '-' + soc.substr(3,2) + '-' + soc.substr(5,4);
  }
  return soc;
};

const formatPhoneNumber = input => {
  if(validatePhoneNumber(input)) {
    return normalizePhoneNumber(input);
  }
  return input;
}

const validatePhoneNumber = input => /[0-9]+/.test(input) && input.length === 10;

const stripPhoneNumber = input => _.replace(input, new RegExp('[^0-9]+', 'g'), '');

const normalizePhoneNumber = input => {
  const chars = stripPhoneNumber(input).split('');
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

const normalizeMap = {
  [socialSecurity]: formatSocial,
  [phoneNumber]: formatPhoneNumber,
};

const setFieldEntry = (field, text) => {
  if( normalizeMap[field] ){
    return normalizeMap[field](text);
  }
  return text;
};

const blurType = blur().type;
export default combineReducers({
  selected: selectionReducer,
  router: routerReducer,
  form: formReducer.plugin({
    apply: (state, action)=>{
      if(action.type === blurType){
          return {
            ...state,
              values:{
                ...state.values,
                [action.meta.field]: setFieldEntry( action.meta.field, action.payload )
              }
          };
      }
      return state;
    }
  })
});
