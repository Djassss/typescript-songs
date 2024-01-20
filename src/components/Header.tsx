import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../img/LogoYellow.png'; 
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import {  faGithub, faYahoo } from '@fortawesome/free-brands-svg-icons';
import { faG } from '@fortawesome/free-solid-svg-icons';

interface socials  {
  id: number;
  to: string;
  icon: any;
}
const icon: socials[] = [
  {
    id: 1,
    icon: faGithub,
    to: "https://github.com/Djassss?tab=repositories"
  },
  {
    id: 2,
    icon: faYahoo,
    to: "https://www.yahoo.com/"
  },
  {
    id: 3,
    icon: faG,
    to: "/"
  }
]

const userIcon = icon.map(({id, icon, to}) => 
<li className='socials-li' key={id}>
  <Link className='socials' to={to} target='_blank'><FontAwesomeIcon icon={icon}/>
  </Link>
</li>
)





const Header = () => {

  return (
<>
    <header>
       <img style={{
         marginRight: "200px"
        }} src={Logo}/>
        <ul className='header-ul'>
            {userIcon}
        </ul>
    </header>
</>
  )
}

export default Header