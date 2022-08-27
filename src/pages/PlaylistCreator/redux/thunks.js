import actions from './actions';

export const selectItemById = (id) => async (
  dispatch
) => {
    dispatch(actions.selectItem(id));
}


export default {
  selectItemById,
};