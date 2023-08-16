import React, { useState } from 'react'
import "./TweetBox.css"
import { Link } from 'react-router-dom';
import { Avatar, Button } from '@mui/material';
import { PostWithAuth } from '../services/HttpService';

function TweetBox({ title, userId, userName }) {


    const [text, setText] = useState("");

    const savePost = () => {
        PostWithAuth("http://localhost:8082/api/posts", {
            title: title,
            userId: userId,
            text: text,
        })

            .then((res) => res.json())
            .catch((err) => console.log("error"))
    };

    const sendTweet = e => {
        e.preventDefault();
        savePost();
        /*console.log(text)*/
    }

    const handleText = (value) => {
        setText(value);
    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Link className="link" to={{ pathname: '/users/' + userId }}>
                        <Avatar aria-label='recipe'>
                            {userName.charAt(0).toUpperCase()}
                        </Avatar>
                    </Link>
                    <input
                        onChange={(e) => handleText(e.target.value)}
                        value={text}
                        placeholder="What's Happening"
                        type="text" />

                </div>
                <Button onClick={sendTweet} type='submit' className="tweetBox__tweetButton">Tweet</Button>
            </form>

        </div>
    )
}

export default TweetBox;