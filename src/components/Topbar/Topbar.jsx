import React from 'react'
import './Topbar.css'
import {NotificationsNone, Language, Settings} from '@mui/icons-material';



export default function Topbar() {
    return (
        <div className='topbar'>
            <div className='topbarWrapper'> 
            <div className='topLeft'>
                <span className='logo'>Vedhaadmin</span>
                </div>
            <div className='topright'>
                <div className="topbarIconContainer">
                <NotificationsNone/>
                <span className="topbarIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                <Language/>
                <span className="topbarIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                <Settings/>
                <span className="topbarIconBadge"></span>
                </div>
                <img src="https://images.unsplash.com/photo-1566070143658-523a24797109?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGZhc2hpb24lMjBtZW4lMjBzdHlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""  className="topAvatar"/>
            </div>
            </div>
        </div>
    )
}

