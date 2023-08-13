import React from 'react'
import "./TweetBox.css"
import { Avatar, Button } from '@mui/material';

function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="images/user.png" />
                    <input placeholder="What's Happening" type="text" />

                </div>
                <Button className="tweetBox__tweetButton">Tweet</Button>
            </form>

        </div>
    )
}

export default TweetBox;