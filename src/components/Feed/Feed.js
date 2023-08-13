import React, { useEffect, useState } from 'react';
import "./Feed.css"
import TweetBox from '../TweetBox/TweetBox';
import Post from '../Post/Post';

function Feed() {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/posts")
      .then(res => res.json())
      .then(
        (result) => {
          setLoading(true);
          setPosts(result);
        },
        (error) => {
          setLoading(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error</div>;
  } else if (!loading) {
    return <div>Loading...</div>;
  } else {

    return (
      <div className="feed">


        <div className="feed__header">
          <h2>Home</h2>
        </div>

        <TweetBox />

        {posts.map(post => (
          <Post
            title={post.title}
            text={post.text}
          />
        ))}

      </div>
    )
  }
}

export default Feed;