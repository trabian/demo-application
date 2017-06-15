import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import { blur } from 'redux-form';
import selectionReducer from 'src/reducers/selectionReducer';

const blurType = blur().type;
console.log(blurType);
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
                [action.meta.field]: 'testing'
              }
          };
      }
      return state;
    }
  })
});
