import React from 'react';
import {TbBrandGithub} from 'react-icons/tb';
import {TbBrandLinkedin} from 'react-icons/tb';
import {TbBrandTwitter} from 'react-icons/tb';
import {TbBrandInstagram} from 'react-icons/tb';


const LeftSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-4 text-textGreen">
        <div className="flex flex-col gap-4">
            <a href="https://github.com/Jess-be-you" target="_blank" rel="noreferrer">
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300'>
                    <TbBrandGithub /></span>
            </a>
            <a href="https://www.linkedin.com/in/jesmi-p-j-740925236/" target="_blank" rel="noreferrer">
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300'>
                    <TbBrandLinkedin /></span>
            </a>
            <a href="https://twitter.com/p_jesmi?t=CSdXRzPUSjWuO26BzA2dbQ&s=08" target="_blank" rel="noreferrer">
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300'>
                    <TbBrandTwitter /></span>
            </a>
            <a href="https://www.instagram.com/jesmi_payyapilly/" target="_blank" rel="noreferrer">
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300'>
                    <TbBrandInstagram /></span>
            </a>
        </div>
        <div className='w-[2px] h-32 bg-textDark'></div>
    </div>
  )
}

export default LeftSide