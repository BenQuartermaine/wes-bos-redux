import React from 'react';
// import { addComment } from '../actions/actionCreators';

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

  handleSubmit(event) {
    event.preventDefault()
    const author = this.author;
    const comment = this.comment;
    const code = this.props.code;
    this.props.addComment(code, author, comment);
    this.form.reset();
  };  

  render() {
    return (
      <div key={this.props.comment} className="comments">
      {
        this.props.comments.map(this.renderComments)
      }
        <form ref={(input) => this.form = input}onSubmit={this.handleSubmit.bind(this)} className="comment-form" action="submit" >
          <input ref={(input) => this.author = input} type="textarea" placeholder="author" />
          <input ref={(input) => this.comment = input} className="comment-form" type="textarea" placeholder="comment" />
          <button>submit</button>
        </form>
      </div>
    )
  }
};

export default Comment;
