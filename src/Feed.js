import React, { useEffect, useState } from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import InputOption from  './InputOption'
import ImageIcon from '@mui/icons-material/Image';
import EventNoteIcon from '@mui/icons-material/EventNote';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import { db } from './firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';

function Feed() {
  const user = useSelector(selectUser);
  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([])

  useEffect(() => {
    db.collection("posts").orderBy("timestamp","desc").onSnapshot((snapshot)=> 
      setPosts(
        snapshot.docs.map((doc)=>(
        {
          id: doc.id,
          data: doc.data(),
        }
      ))
    )
    );
  }, []);

const sendPost = e => {
  e.preventDefault();
  db.collection('posts').add({
    name: user.displayName,
    description: user.email,
    messsage:input,
    photoUrl: user.photoUrl || '',
    timestamp: firebase.firestore.FieldValue.serverTimestamp()

  });

  setInput("");
  

}


  return (
    <div className='feed'> 
      <div className='feed_inputContainer'>
        <div className='feed_input'>
            <CreateIcon />
            <form>
                <input value={input} onChange={e => setInput(e.target.value)} type='text'/>
                <button onClick={sendPost} type='submit'>Send</button>
            </form>
        </div>
        <div className='feed_inputOptions'>
            <InputOption Icon={ImageIcon} title='Photo'  color='#70b5f9' />
            <InputOption Icon={SmartDisplayIcon} title='Video'  color='#5f9b41' />
            <InputOption Icon={EventNoteIcon} title='Audio event'  color='#c37d16' />
            <InputOption Icon={CalendarViewDayIcon} title='Write article'  color='#e16745' />

        </div>
      </div>

      {/* Post */}
      <FlipMove>
        {posts.map(({ id, data:{name, description, messsage, photoUrl}})=>(
          <Post
          key= {id}
          name={name}
          description={description}
          messsage={messsage}
          photoUrl={photoUrl}
          />
        ))}
      </FlipMove>

    </div>
  )
}

export default Feed
