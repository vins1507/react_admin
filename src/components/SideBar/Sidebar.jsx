import React from 'react'
import './Sidebar.css'
import {LineStyle, Timeline, TrendingUp, Person, Storefront, AttachMoney,AssessmentOutlined,
    MailOutlined, AutoAwesomeMotionOutlined, ChatBubbleOutlineOutlined, WorkOutlineOutlined, ReportOutlined} from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        <div className='sidebar'>
           <div className="sidebarWrapper">
               <div className="sidebarMenu">
                   <h3 className="sidebarTitle">Dashboard</h3>
                   <ul className="sidebarList">
                       <Link to='/' className="link">
                       <li className="sidebarListItem active">

                       <LineStyle className='sidebarIcon'/>
                       Home
                       </li>
                       </Link>
                       <li className="sidebarListItem">

                       <Timeline className='sidebarIcon'/>
                       Analytics
                       </li>
                       <li className="sidebarListItem">

                       <TrendingUp className='sidebarIcon'/>
                       Sales
                       </li>
                   </ul>
               </div>

               <div className="sidebarMenu">
                   <h3 className="sidebarTitle">QuickMenu</h3>
                   <ul className="sidebarList">
                       <Link to="/users" className='link'>
                       <li className="sidebarListItem active">
                       <Person className='sidebarIcon'/>
                       Users
                       </li>
                       </Link>
                       <Link to="/products" className='link'>
                       <li className="sidebarListItem">
                       <Storefront className='sidebarIcon'/>
                       Products
                       </li>
                       </Link>

                       <li className="sidebarListItem">
                       <AttachMoney className='sidebarIcon'/>
                       Transactions
                       </li>
                       <li className="sidebarListItem">

                       <AssessmentOutlined className='sidebarIcon'/>
                       Reports
                       </li>
                       
                   </ul>
               </div>

               <div className="sidebarMenu">
                   <h3 className="sidebarTitle">Notification</h3>
                   <ul className="sidebarList">
                       <li className="sidebarListItem active">

                       <MailOutlined className='sidebarIcon'/>
                       Mail
                       </li>
                       <li className="sidebarListItem">

                       <AutoAwesomeMotionOutlined className='sidebarIcon'/>
                       Feedback
                       </li>
                       <li className="sidebarListItem">

                       <ChatBubbleOutlineOutlined className='sidebarIcon'/>
                       Messages
                       </li>
                   </ul>
               </div>

               <div className="sidebarMenu">
                   <h3 className="sidebarTitle">Staff</h3>
                   <ul className="sidebarList">
                       <li className="sidebarListItem active">

                       <WorkOutlineOutlined className='sidebarIcon'/>
                       Manage
                       </li>
                       <li className="sidebarListItem">

                       <Timeline className='sidebarIcon'/>
                       Analytics
                       </li>
                       <li className="sidebarListItem">

                       <ReportOutlined className='sidebarIcon'/>
                       Reports
                       </li>
                   </ul>
               </div>


           </div>
        </div>
    )
}
