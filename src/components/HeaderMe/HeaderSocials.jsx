

import "./Header.css"

// npm install react-icons --save

import { AiFillLinkedin } from "react-icons/ai";

import { BsGithub } from "react-icons/bs"

export const HeaderSocial = () =>{

    return (
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/pooja-waghchaure/" target={"_blank"}><AiFillLinkedin /></a>
            <a href="https://github.com/waghchaurepooja" target={"_blank"}><BsGithub /></a>
        </div>
    )
}