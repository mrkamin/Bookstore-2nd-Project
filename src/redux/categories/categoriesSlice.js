const checkStatus = 'checkStatus';

const initialState = [];

function reducer(store = initialState, action = {}) {
  switch (action.type) {
    case checkStatus:
      return 'Under construction';

    default:
      return store;
  }
}

export const checkCurentStatus = () => ({
  type: checkStatus,
});

export default reducer;
