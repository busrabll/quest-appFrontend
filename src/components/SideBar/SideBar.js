import React from 'react'
import { Link } from 'react-router-dom';
import "./SideBar.css"
import SideBarOption from '../SideBarOption/SideBarOption';
import HomeIcon from '@mui/icons-material/Home';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

function SideBar() {

  let userId = 5;

  return (
    <div className="sideBar">

        <SideBarOption active Icon={HomeIcon} text={<Link className="link" to="/">Home</Link>}/>
        <SideBarOption active Icon={PermIdentityIcon} text={<Link className="link" to={{ pathname: '/users/' + userId }}>User</Link>}/>
    </div>
  )
}

export default SideBar;