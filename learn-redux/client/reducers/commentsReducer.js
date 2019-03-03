function postComments(state, action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [...state,{
        text: action.comment,
        user: action.author
      }];
    case 'DELETE_COMMENT':
      console.log('removing a comment');
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
