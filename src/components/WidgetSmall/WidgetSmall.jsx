import './WidgetSmall.css'
import React from 'react'
import {Visibility} from '@mui/icons-material';

export default function WidgetSmall() {
    return (
        <div className='widgetsmall'>
            <span className="widgetsmalltitle">New Join Members</span>
            <ul className="widgetsmallList">
                <li className="widgetsmallListItem">
                    <img src="https://images.unsplash.com/photo-1581092456330-2e593838bb25?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHNvZnR3YXJlJTIwZW5naW5lZXIlMjBnaXJsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" className="widgetsmallImage" />
                    <div className="widgetsmallUser">
                        <span className="widgetsmallUserName">Nithilaa Guruvam</span>
                        <span className="widgetsmallUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetsmallButton">
                        <Visibility/>
                        Display
                    </button>
                </li>
                <li className="widgetsmallListItem">
                    <img src="https://images.unsplash.com/photo-1581092456330-2e593838bb25?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHNvZnR3YXJlJTIwZW5naW5lZXIlMjBnaXJsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" className="widgetsmallImage" />
                    <div className="widgetsmallUser">
                        <span className="widgetsmallUserName">Nithilaa Guruvam</span>
                        <span className="widgetsmallUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetsmallButton">
                        <Visibility/>
                        Display
                    </button>
                </li>
                <li className="widgetsmallListItem">
                    <img src="https://images.unsplash.com/photo-1581092456330-2e593838bb25?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHNvZnR3YXJlJTIwZW5naW5lZXIlMjBnaXJsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" className="widgetsmallImage" />
                    <div className="widgetsmallUser">
                        <span className="widgetsmallUserName">Nithilaa Guruvam</span>
                        <span className="widgetsmallUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetsmallButton">
                        <Visibility/>
                        Display
                    </button>
                </li>
                <li className="widgetsmallListItem">
                    <img src="https://images.unsplash.com/photo-1581092456330-2e593838bb25?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHNvZnR3YXJlJTIwZW5naW5lZXIlMjBnaXJsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" className="widgetsmallImage" />
                    <div className="widgetsmallUser">
                        <span className="widgetsmallUserName">Nithilaa Guruvam</span>
                        <span className="widgetsmallUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetsmallButton">
                        <Visibility/>
                        Display
                    </button>
                </li>
                <li className="widgetsmallListItem">
                    <img src="https://images.unsplash.com/photo-1581092456330-2e593838bb25?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHNvZnR3YXJlJTIwZW5naW5lZXIlMjBnaXJsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" className="widgetsmallImage" />
                    <div className="widgetsmallUser">
                        <span className="widgetsmallUserName">Nithilaa Guruvam</span>
                        <span className="widgetsmallUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetsmallButton">
                        <Visibility className='widgetsmallIcon'/>
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}
