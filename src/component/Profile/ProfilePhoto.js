import React from 'react';
import mypic from "./mypic.jpg"

const ProfilePhoto =()=>{
    return(
        <div >
     <img id = 'pic' src={mypic} width={150} alt="mypic"/>
     </div>
     )
};
export default ProfilePhoto;