import React from 'react'
import './Footer.css'
import wave from '../../img/wave.png';
import { AiFillGithub, AiOutlineMail } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { Link } from 'react-scroll';


const Footer = () => {

  return (
    <div className='footer' id='Footer'>
        <img src={wave} alt='' style={{width:'100%'}}/>
        <div className='f-content'>
            <span>archanak24krishnan@gmail.com</span>
            <div className='f-icons'>
            <a href="https://github.com/Archana-ks/" target='_blank'><AiFillGithub color='white' size='3rem'/></a>
             <a href="https://www.linkedin.com/in/archana-k-22927a281/" target='_blank'><BsLinkedin color='white' size='3rem'/></a>
            {/* <a href="https://mail.google.com/mail/u/0/?hl=en-GB&tf=cm&fs=1&to=selvamurugaiah100@gmail.com" target='_blank'><AiOutlineMail color='white' size='3rem'/></a> */}

            </div>
            <Link spy={true} to="Navbar" smooth={true} className="active">
             <button className='btn'>⬆️Home</button>
            </Link>
        </div>

    </div>
  )
}

export default Footer