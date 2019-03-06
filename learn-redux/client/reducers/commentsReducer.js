function postComments(state, action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [...state,{
        text: action.comment,
        user: action.author
      }];
    case 'DELETE_COMMENT':
      const i = action.index
      return [
        ...state.slice(0, i),
        ...state.slice(i + 1)
      ];
    default:
      return state;
  }
};

function comments(state = [], action) {
  if (typeof action.postId !== 'undefined') {
    return { 
      ...state,
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state;
};

export default comments;
