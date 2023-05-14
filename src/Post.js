import React, {forwardRef} from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
import InputOption from './InputOption'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import RepeatIcon from '@mui/icons-material/Repeat';
import SendIcon from '@mui/icons-material/Send';


const Post= forwardRef(({name, description,  messsage, photoUrl}, ref) => {
  return (
    <div ref={ref} className='post'>
        <div className='post_header'>
      <Avatar src={photoUrl}>{name[0]}</Avatar>
      <div className='post_info'>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
      </div>

      <div className='post_body'>
        <p>{messsage}</p>
      </div>

      <div className='post_button'>
        <InputOption Icon={ThumbUpAltIcon} title='Like' color='gray'
         />
          <InputOption Icon={InsertCommentIcon} title='Comment' color='gray'
         />
          <InputOption Icon={RepeatIcon} title='Repost' color='gray'
         />
          <InputOption Icon={SendIcon} title='Send' color='gray'
         />
      </div>
    </div>
  )
})

export default Post
