import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import { blur } from 'redux-form';
import selectionReducer from 'src/reducers/selectionReducer';
import { socialSecurity, phoneNumber } from 'src/helpers/fieldNames';

const validationMap = {
    [socialSecurity]: 
    [phoneNumber]:
};

const normalizeMap = {
  [socialSecurity]: /* social security format function */,
  [phoneNumber]: /* phone number format function */
};

const blurType = blur().type;
export default combineReducers({
  selected: selectionReducer,
  router: routerReducer,
  form: formReducer.plugin({
    apply: (state, action)=>{
      if(action.type === blurType){
        console.log(state);
          return {
            ...state,
              values:{
                ...state.values,
                [action.meta.field]: validationMap[action.meta.field](action.payload)
              }
          };
      }
      return state;
    }
  })
});
