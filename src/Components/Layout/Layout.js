// rafce -> react arrow function with export
import React, {useState} from 'react'
import Home from '../../pages/Home/Home'
import { FaArrowRightToBracket , FaArrowRightFromBracket } from "react-icons/fa6";
import './Layout.css'
import Menus from '../Menus/Menus';

const Layout = () => {
    const[toggle,setToggle] = useState(true)
    //change toggle
    const handleToggle = () => {
        setToggle(!toggle)
    }
  return (
    <>
        <div className='sidebar-section'>
            <div className={ `${toggle ? 'sidebar' : 'sidebar-toggle sidebar'}`}>
                <div className='sidebar-toggle-icons'>
                    <p onClick={handleToggle} className={`${toggle ? '' : 'flipped'}`}>
                        {
                            toggle? ( <FaArrowRightToBracket size={'4em'} />) : ( <FaArrowRightFromBracket size={'4em'} />) 
                        }
                    </p>
                </div>
                <Menus toggle={toggle} />
            </div>
            <div className='back-gif'>
                <div className='container' style={{ paddingRight:"0px"}}>
                    <Home />
                </div>
            </div>
        </div>
    </>
  )
}

export default Layout