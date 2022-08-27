import TYPES from './types';

const selectItem = (id) => {
  return {
    type: TYPES.SELECT_ITEM,
    payload: id,
  }
}



export default {
  selectItem,
};