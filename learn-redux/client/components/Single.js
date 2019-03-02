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
        <Comments 
          addComment={this.props.addComment}
          comments={this.props.comments[post.code]}
        />
      </div>
    )
  }
}

export default Single;
