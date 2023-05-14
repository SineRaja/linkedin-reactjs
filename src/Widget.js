import React from 'react'
import './Widget.css';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widget() {

    const newsArticle = (heading, subtitle) => (
            <div className='widgets_article'>
                <div className='widgets_articleleft'>
                    <FiberManualRecordIcon/>
                </div>
                <div className='widgets_articleright'>
                    <h4>{heading}</h4>
                    <p>{subtitle}</p>
                </div>
            </div>
    );


  return (
    <div className='widget'>
        <div className='widgets_header'>
            <h2>LinkedIn News</h2>
            <InfoIcon />
        </div>
        {newsArticle("Coded Daily",'New Page Trending')}
        {newsArticle("ChatGPT",'New Page Trending')}
    </div>
  )
}

export default Widget
