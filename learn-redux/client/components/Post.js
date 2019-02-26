import React from 'react';
import Comment from './Comment';

class Post extends React.Component {
  render() {
            // <p>{this.props.comments[this.props.code]}</p>
    const comments = this.props.comments[this.props.code]
    {comments === undefined ? 'not working' : console.log(comments.map(comment => comment.text))}
    console.log(comments);
    // {.map(comment => console.log(comment.text))}
    return (
      <div>
        <p>This is a Post</p>
      </div>

    )
  }
};

export default Post;
