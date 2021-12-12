import './User.css'
import {CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish} from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function User() {
    return (
        <div className='user'>
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to='/newUser'>
                <button className="addUserBt">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://images.unsplash.com/photo-1563306406-e66174fa3787?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGdpcmx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        alt="" className='userShowTopImg' />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Flora Benciaa</span>
                            <span className="userShowUserTitle">Aeronautical Engineer</span>
                        </div>
                    </div>
                    <div className="userBottomShow">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                        <PermIdentity className='userShowIcon'/>
                        <span className="userShowInfoTitle">annabeck99</span>
                        </div>
                        <div className="userShowInfo">
                        <CalendarToday className='userShowIcon'/>
                        <span className="userShowInfoTitle">10.12.1998</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                        <PhoneAndroid className='userShowIcon'/>
                        <span className="userShowInfoTitle">+1 123 456</span>
                        </div>
                        <div className="userShowInfo">
                        <MailOutline className='userShowIcon'/>
                        <span className="userShowInfoTitle">annabeck99@gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                        <LocationSearching className='userShowIcon'/>
                        <span className="userShowInfoTitle">New York | USA</span>
                        </div>



                    </div>
                </div>
                    <div className="userUpdate">
                        <span className="userUpdateTitle">Edit</span>
                        <form className="userUpdateForm">
                            <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>UserName</label>
                                <input type='text' placeholder='annabeck99' className='userUpdateInput'/>

                            </div>
                            <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input type='text' placeholder='Flora Benciaa' className='userUpdateInput'/>

                            </div>
                            <div className="userUpdateItem">
                                <label>E-Mail</label>
                                <input type='email' placeholder='annabeck99@gmail.com' className='userUpdateInput'/>

                            </div>
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input type='text' placeholder='+1 123 456' className='userUpdateInput'/>

                            </div>
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input type='text' placeholder='New York | USA' className='userUpdateInput'/>

                            </div>
                            </div>

                            <div className="userUpdateRight">
                                <div className="userUpdateUpload">
                                    <img className='userUpdateImg' src="https://images.unsplash.com/photo-1545912452-8aea7e25a3d3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGdpcmx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />

                                    <label htmlFor='file'><Publish className='userUpdateUploadIcon'/></label>
                                    <input type="file" id='file' style={{display:'none'}}/>
                                </div>
                                <button className='userUpdateButton'>Update</button>
                            </div>
                        </form>
                        </div>
                
            </div>
        </div>
        
    )
}
