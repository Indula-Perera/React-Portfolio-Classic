import React from 'react';
import { FaGithub, FaFacebookF, FaLinkedinIn, FaTwitter, FaDev } from 'react-icons/fa';
import { SiHashnode } from 'react-icons/si'

const HeaderSocials = () => {
    return (
        <div className='home__socials'>
            <a href='https://github.com/Indula-Perera' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaGithub />
            </a>

            {/* <a href='#' className='home__social-link' target='_blank' rel='noreferrer'>
                <SiHashnode />
            </a> */}

            {/* <a href='#' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaDev />
            </a> */}

            <a href='https://www.linkedin.com/in/indula-perera' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaLinkedinIn />
            </a>

            <a href='https://web.facebook.com/githmin.perer' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaFacebookF />
            </a>

            {/* <a href='#' className='home__social-link' target='__blank' rel='noreferrer'>
                <FaTwitter />
            </a> */}
        </div>
    );
};

export default HeaderSocials;
