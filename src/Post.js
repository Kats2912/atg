import React from 'react'

function Post() {
  return (
    <div className='post'>
        <img className='postPic'/>
        <div className='postHeading'>Article</div>
        <div className='postNews'>
            News
            <div onClick={''} className='post3Dots'>...</div>
        </div>
        <div className='postDescription'>
            afjifjifiwjfijfjwfwijwijwjifif

        </div>
        <div>
            <img className='postImage' />
           <div className='postName'> Sarthak Kamra</div>
          <div className='postViews'>  1.4k views</div>
            <button className='postButton'></button>
        </div>
    </div>
  )
}

export default Post