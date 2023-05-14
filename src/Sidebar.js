import React from 'react'
import './Sidebar.css'
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function Sidebar() {
    const user = useSelector(selectUser);


    const recentItem = (topic) => (
        <div className='sidebar_recentItem'>
            <span className='sidebar_hash'>#</span>
            <p>{topic}</p>
        </div>
    );

  return (
    <div className='sidebar'>
        <div className='sidebar_top'>
            <img src='https://media.licdn.com/dms/image/C5616AQFjx7Dz9kqN3Q/profile-displaybackgroundimage-shrink_350_1400/0/1644053744120?e=1688601600&v=beta&t=Z2UtExg1PfKKva2s_YXoMG4dlhjkuTqFMMEtLXCw558' 
                alt='' />
            <Avatar src={user.photoUrl} className='sidebar_avatar'>
                {user.email[0]}
            </Avatar>
            <h1>{user.displayName}</h1>
            <h4>{user.email}</h4>
        </div>

        <div className='sidebar_stats'>
            <div className='sidebar_stat'>
                <p>Who Viewed</p>
                <p className='sidebar_statNumber'>2453</p>
            </div>
            <div className='sidebar_stat'>
                <p>View on post</p>
                <p className='sidebar_statNumber'>243</p>
            </div>
        </div>

        <div className='sidebar_buttons'>
            <p>Recent</p>
            {recentItem('reactJS')}
            {recentItem('AngularJS')}
            {recentItem('Python')}
            {recentItem('Django')}
        </div>
      
    </div>
  )
}

export default Sidebar
