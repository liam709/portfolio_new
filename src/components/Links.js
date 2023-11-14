import React from "react";
import GithubLogo from './github.svg';
import LinkedInLogo from './linkedin.svg';

export default function Links() {
    return (
        <div className="flex flex-row mt-16">
            <a href = "https://github.com/liam709"><img className = 'h-8'src = {GithubLogo} alt = "Github Logo"></img></a>
            <a href = "https://www.linkedin.com/in/liamk709"><img className="h-8 ml-5" src = {LinkedInLogo} alt = "Linkedin Logo"></img></a>
        </div>
    )
}