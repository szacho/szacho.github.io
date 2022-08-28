import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faKaggle, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"

const SocialMedia = () => (
<ul className="sidebar--social-media">
    <li>
        <a href='https://github.com/szacho/'><FontAwesomeIcon icon={faGithub} className="sidebar--social-media-icon"/></a>    
    </li>
    <li>
        <a href='https://www.kaggle.com/szacho/'><FontAwesomeIcon icon={faKaggle} className="sidebar--social-media-icon"/></a>    
    </li>
    <li>
        <a href='https://www.linkedin.com/in/mszachniewicz/'><FontAwesomeIcon icon={faLinkedinIn} className="sidebar--social-media-icon"/></a>    
    </li>
</ul>
)

export default SocialMedia
