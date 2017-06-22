import { CHECKED } from 'src/actions/';
export default (state=false, action) => {
  if(action.type === CHECKED){
    return !state;
  }
  return state;
}
