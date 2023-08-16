import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./Post.css"
import { Avatar, IconButton } from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PublishIcon from '@mui/icons-material/Publish';

function Post({ title, text, userId, userName }) {


  const [liked, setLiked] = useState(false);
  
  const handleLike = () => {

    setLiked(!liked);
  }

  return (
    <div className="post">
      <div className="post__avatar">
        <Link className="link" to={{ pathname: '/users/' + userId }}>
          <Avatar aria-label='recipe'>
            {userName.charAt(0).toUpperCase()}
          </Avatar>
        </Link>
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              {title}
            </h3>

          </div>
          <div className="post__headerDescription">
            <p>{text}</p>
          </div>
        </div>
        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize='small' />
          <RepeatIcon fontSize='small' />
          <IconButton onClick={handleLike} aria-label='add to favorites'>
          <FavoriteIcon style={ liked? {color: "red"} : null } fontSize='small' />
          </IconButton>
          <PublishIcon fontSize='small' />

        </div>
      </div>

    </div>
  )
}

export default Post;