// increment likes
export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}

// add a comment
export function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

// delete a comment
export function deleteComment(postId, index) {
  return {
    type: 'DELETE_COMMENT',
    postId,
    index
  }
}