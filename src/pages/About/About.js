import React from 'react'
import './About.css'
import ProfileImg from '../../assets/images/Profile_photo.jpg';

const About = () => {
  return (
    <>
        <div className='about' id='about'>
            <div className='row'>
                <div className='col-md-3 col-xl-3 col-lg-3 col-sm-2 col-xs-12 about-img px-0 mx-0'>
                   <img src={ProfileImg} alt="Profile_image" /> 
                </div>
                <div className='col-lg-9 col-md-9 col-sm-9 col-xs-12 about-content px-0 mx-0'>
                    <h1>Personal Prelude</h1>
                    <p>
                        Hey there! 👋 I'm Rajat Raj Sharma, a spirited third-year IT student at PVG's College of Engineering and Technology in Pune, India. 🚀 My focus and enthusiasm lie in the dynamic realm of Full Stack Web Development, spanning technologies like MERN and Django, as well as the intriguing world of 🌐🔍Web Scraping.
                        <br/><br/> I've been on a quest to explore and master the intricacies of crafting exceptional web solutions. 💻 My journey is marked by a dedication to honing my skills and a commitment to learning. 
                        <br/><br/> Now, I'm on the lookout for an internship in web development and web scraping, eager to embrace new challenges and contribute to innovative projects. If there's an opportunity that aligns with my passion, I'm all ears! Let's connect and explore the possibilities. 🚀🌟</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default About