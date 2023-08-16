import React, { useEffect, useState } from 'react';
import "./Home.css"
import TweetBox from '../TweetBox/TweetBox';
import Post from '../Post/Post';

function Home() {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [liked, setLiked] = useState(false);

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

                <TweetBox
                    userId={2}
                    userName={"busra"}
                    title={"deneme"}
                    text={"deneme metin"}
                />

                {posts.map(post => (
                    <Post
                        userId={post.userId}
                        userName={post.userName}
                        title={post.title}
                        text={post.text}
                    />
                ))}

            </div>
        )
    }
}

export default Home;