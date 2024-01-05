import React,{useState} from 'react'
import './MobileNav.css'
import { RxHamburgerMenu } from "react-icons/rx";
import { MdMenuOpen } from "react-icons/md";
import { Link } from 'react-scroll';
import { FcHome, FcAcceptDatabase, FcTodoList, FcBusinessContact, FcMindMap, FcGraduationCap, FcContacts } from "react-icons/fc";

const MobileNav = () => {
    const [open, setOpen] = useState(false);
    //handle open
    const handleOpen = () => {
        setOpen(!open);
    };
    // handle menu click
    const handleMenuClick = () => {
        setOpen(false);
    };
  return (
    <>
        <div className='mobile-nav'>
            <div className='mobile nav-header'>
                {open ? (<MdMenuOpen size={40} className='menu-icon' onClick={handleOpen}/>) 
                : (<RxHamburgerMenu size={40} className='menu-icon' onClick={handleOpen}/>)}
                <span className='mobile-nav-title'>Rajat's Portfolio</span>
            </div>
            {open && (
                <div className='mobile-nav-menu'>
                    <div className='nav-items'>
                        <div className='nav-item'>
                            <div className='nav-link'>
                                <Link to='home' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick} >
                                    <FcHome size={40} />
                                    Home
                                </Link>
                            </div>
                            <div className='nav-link'>
                                <Link to='about' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick} >
                                    <FcBusinessContact size={40} />
                                    About
                                </Link>
                            </div>
                            <div className='nav-link'>
                                <Link to='education' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick} >
                                    <FcGraduationCap size={40} />
                                    Education
                                </Link>
                            </div>
                            <div className='nav-link'>
                                <Link to='tech_stack' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick} >
                                    <FcTodoList size={40} />
                                    Tech Stack
                                </Link>
                            </div>
                            <div className='nav-link'>
                                <Link to='project' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick} >
                                    <FcAcceptDatabase size={40} />
                                    Projects
                                </Link>
                            </div>
                            <div className='nav-link'>
                                <Link to='work_experience' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick} >
                                    <FcMindMap size={40} />
                                    Work Experience
                                </Link>
                            </div>
                            <div className='nav-link'>
                                <Link to='contact' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick} >
                                    <FcContacts size={40} />
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </>
  )
}

export default MobileNav