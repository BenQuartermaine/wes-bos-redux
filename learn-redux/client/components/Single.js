import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

class Single extends React.Component {
  render() {
    const index = this.props.posts.findIndex(post => post.code === this.props.params.postId);
    const post = this.props.posts[index];
    
    return (
      <div className="single-photo">
        <Photo 
          post={post} 
          i={index} 
          key={post.code} 
          comments={this.props.comments}
          increment={this.props.increment}
        />
        <Comments comments={this.props.comments[post.code]}/>
        <form action="submit">
          <input className="comment-form" type="textarea" placeholder="author" />
          <input className="comment-form" type="textarea" placeholder="comment" />
        </form>
      </div>
    )
  }
}

export default Single;
