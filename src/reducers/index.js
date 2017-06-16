import { combineReducers } from 'redux';
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

const normalizeMap = {
  [socialSecurity]: formatSocial,
  [phoneNumber]: ()=> console.log('phone'),
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
