export const select = (cardTitle)=>{
  return {
    type: 'select', //all action types will be exported as constants in another file.
    payload: cardTitle
  }
};
