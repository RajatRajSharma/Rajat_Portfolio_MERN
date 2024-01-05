import React from 'react'
import { useTheme } from '../../context/ThemeContext'
import './Home.css'
import Typewriter from 'typewriter-effect'
import Resume from '../../assets/docs/Resume.pdf'
import { BsFillMoonStarsFill } from "react-icons/bs";
import { IoSunny } from "react-icons/io5";

const Home = () => {
  const [theme, setTheme] = useTheme()
  //handle theme
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"))
  }
  return (
    <>
        <div className='container-fluid home-container' id='home'>
          <div className='theme-btn' onClick={handleTheme}>
            {theme === 'light' ? (<BsFillMoonStarsFill size={30}/>) : (<IoSunny size={35}/>)}
          </div>
          <div className='container home-content'>
            <h1>Hi👋, I am <br/>Rajat raj Sharma</h1>
            <h2 className="custom-heading">
              <Typewriter 
                options={{
                  strings: ["Full-Stack Developer!", "MERN Stack Developer!", "Web Scraping Developer!", "Django-Stack Developer!"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h2>
          </div>
          <div className='home-buttons'>
              <a className='btn btn-hire' 
              href='https://api.whatsapp.com/send?phone=7666374530'
              rel="noreferrer"
              target='_blank'
              >Hire me</a>
              <a className='btn btn-cv' href={Resume} >My Resume</a>
            </div>
        </div>
    </>
  )
}

export default Home