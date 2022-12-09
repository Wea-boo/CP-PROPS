import React from 'react'
import propTypes from "prop-types";

export default function Profile({ AlertName, Fullname, Profession, Biography, UserPic }) {
  return (
    <div style={{borderWidth:'1px', borderColor:'black', width:'50%', borderStyle:'solid', position:'relative'}}>
      <h1>{Fullname}</h1>
      <h4>{Profession}</h4>
      <p style={{ float:'left', width:'60%' }}>{Biography}</p>
      <img src={UserPic} alt="" style={{ float:"right", width:'273px'}}/>
      <button onClick={() => AlertName(Fullname)} style={{marginTop:"20px", marginBottom:'20px', paddingTop:'20px', paddingBottom:'20px', paddingLeft:'40px', paddingRight:'40px', position:'relative', left:'calc(50% - 100px)', backgroundColor:'white', borderStyle:'solid'}}>Say my name</button>

    </div>
  )
}

Profile.propTypes = {
    Fullname: propTypes.string,
    Profession: propTypes.string,
    Biography: propTypes.string,
    UserPic: propTypes.string,
    AlertName: propTypes.func,

}

Profile.defaultProps = {
    Fullname: "Pollienus Auspex",
    Biography: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam nulla facilisi cras fermentum. Proin nibh nisl condimentum id venenatis a. Venenatis a condimentum vitae sapien pellentesque habitant morbi. Vestibulum lectus mauris ultrices eros in. Cursus vitae congue mauris rhoncus aenean vel. Cras tincidunt lobortis feugiat vivamus at. Cras tincidunt lobortis feugiat vivamus. Aliquam vestibulum morbi blandit cursus. Mi bibendum neque egestas congue quisque egestas diam in arcu. Nullam ac tortor vitae purus faucibus ornare. Purus sit amet luctus venenatis lectus magna fringilla urna porttitor. Vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Non sodales neque sodales ut etiam sit amet. Lobortis feugiat vivamus at augue eget arcu dictum varius. Leo vel fringilla est ullamcorper eget nulla facilisi. Ultricies mi eget mauris pharetra et ultrices neque. Sodales ut eu sem integer vitae. Odio facilisis mauris sit amet.",
    Profession: "Roman Senator",
    UserPic: "/roman.jpg"
}


