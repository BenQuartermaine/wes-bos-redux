import React from 'react';
// import { addComment } from '../actions/actionCreators';

class Comments extends React.Component {
  renderComments(comment, i) {
   return <div>
      <p onClick={console.log('working')} className="comment" key={i}>
        <strong>{comment.user}</strong>
        {comment.text}
        <span className="remove-comment"> &times;</span>
      </p>
    </div>
  };

  handleSubmit(event) {
    event.preventDefault()
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    const code = this.props.code;
    this.props.addComment(code, author, comment);
    this.refs.form.reset();
  };  

  render() {
    return (
      <div key={this.props.comment} className="comments">
      {
        this.props.comments.map(this.renderComments)
      }
        <form ref='form' onSubmit={this.handleSubmit.bind(this)} className="comment-form" action="submit" >
          <input ref='author' type="textarea" placeholder="author" />
          <input ref='comment' className="comment-form" type="textarea" placeholder="comment" />
          <input type="submit" hidden />
        </form>
      </div>
    )
  }
};

export default Comments;
