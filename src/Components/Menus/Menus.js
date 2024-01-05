import React from 'react'
import './Menus.css'
import { Link } from 'react-scroll';
import ProfileImg from '../../assets/images/Profile_photo.jpg';
import { FcHome, FcAcceptDatabase, FcTodoList, FcBusinessContact, FcMindMap, FcGraduationCap, FcContacts } from "react-icons/fc";

const Menus = ({toggle}) => {
  return (
    <>
    { toggle ? (
        <>
            <div className='nav-items'>
                <div className='nav-item'>
                    <div className='nav-link'>
                        <Link to='home' spy={true} smooth={true} offset={-100} duration={100}>
                            <FcHome size={'3.8em'} title='Home'/>
                        </Link>
                    </div>
                    <div className='nav-link'>
                        <Link to='about' spy={true} smooth={true} offset={-100} duration={100}>
                            <FcBusinessContact size={'3.8em'} title='About'/>
                        </Link>
                    </div>
                    <div className='nav-link'>
                        <Link to='education' spy={true} smooth={true} offset={-100} duration={100}>
                            <FcGraduationCap size={'3.8em'} title='Education'/>
                        </Link>
                    </div>
                    <div className='nav-link'>
                        <Link to='tech_stack' spy={true} smooth={true} offset={-100} duration={100}>
                            <FcTodoList size={'3.8em'} title='Tech Stack'/>
                        </Link>
                    </div>
                    <div className='nav-link'>
                        <Link to='project' spy={true} smooth={true} offset={-100} duration={100}>
                            <FcAcceptDatabase size={'3.8em'} title='Projects'/>
                        </Link>
                    </div>
                    <div className='nav-link'>
                        <Link to='work_experience' spy={true} smooth={true} offset={-100} duration={100}>
                            <FcMindMap size={'3.8em'} title='Work Experience'/>
                        </Link>
                    </div>
                    <div className='nav-link'>
                        <Link to='contact' spy={true} smooth={true} offset={-100} duration={100}>
                            <FcContacts size={'3.8em'} title='Contact'/>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    ) : (
        <>
            <div className='navbar-profile-pic'>
                <img src={ProfileImg} alt='profile pic'/>
            </div>
            <div className='nav-items'>
                <div className='nav-item'>
                    <div className='nav-link'>
                        <Link to='home' spy={true} smooth={true} offset={-100} duration={100}>
                            <FcHome size={40} />
                            Home
                        </Link>
                    </div>
                    <div className='nav-link'>
                        <Link to='about' spy={true} smooth={true} offset={-100} duration={100}>
                            <FcBusinessContact size={40} />
                            About
                        </Link>
                    </div>
                    <div className='nav-link'>
                        <Link to='education' spy={true} smooth={true} offset={-100} duration={100}>
                            <FcGraduationCap size={40} />
                            Education
                        </Link>
                    </div>
                    <div className='nav-link'>
                        <Link to='tech_stack' spy={true} smooth={true} offset={-100} duration={100}>
                            <FcTodoList size={40} />
                            Tech Stack
                        </Link>
                    </div>
                    <div className='nav-link'>
                        <Link to='project' spy={true} smooth={true} offset={-100} duration={100}>
                            <FcAcceptDatabase size={40} />
                            Projects
                        </Link>
                    </div>
                    <div className='nav-link'>
                        <Link to='work_experience' spy={true} smooth={true} offset={-100} duration={100}>
                            <FcMindMap size={40} />
                            Work Experience
                        </Link>
                    </div>
                    <div className='nav-link'>
                        <Link to='contact' spy={true} smooth={true} offset={-100} duration={100}>
                            <FcContacts size={40} />
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )}
    </>
    )
}

export default Menus