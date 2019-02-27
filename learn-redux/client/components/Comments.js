import React from 'react';

class Comment extends React.Component {
  renderComments(comment, i) {
   return <div>
      <p className="comment" key={i}>
        <strong>{comment.user}</strong>
        {comment.text}
        <button className="remove-comment">&times;</button>
      </p>
    </div>
  }

  render() {
    return (
      <div className="comments">
      {
        this.props.comments.map(this.renderComments)
      }
      </div>
    )
  }
};

export default Comment;
