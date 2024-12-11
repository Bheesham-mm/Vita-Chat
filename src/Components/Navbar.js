import React from 'react';
import userImage from '../assets/images/Ellipse 1.png'
import homeIcon from '../assets/images/codicon_home.png'
import messageIcon from '../assets/images/Vector.png'
import bellIcon from '../assets/images/bx_bell.png'
import settingIcon from '../assets/images/ci_settings.png'
import LogoutIcon from '../assets/images/majesticons_door-exit.png'

function Navbar() {
    return (
        <div className='container pt-6 pb-6 flex shadow-lg flex-col m-6 w-16 rounded-lg bg-violet-700 '>
            <div>
                <div className="userImage cursor-pointer  flex items-center justify-center">
                    <img src={userImage} alt="" className='w-9' />
                </div>
            </div>
            <nav className='mt-12'>
                <ul className='flex flex-col items-center justify-between mb-12 gap-2'>
                    <li className='cursor-pointer w-full h-12 flex justify-center items-center hover:bg-violet-500'><img className='w-6' src={homeIcon} alt="Homeicon" /></li>
                    <li
                        style={{
                            borderRight: '0.3pc solid #FFEB3B',
                            background: '#ffeb3b24',
                            paddingLeft: '3px'
                        }}
                        className='cursor-pointer w-full h-12 flex justify-center items-center hover:bg-violet-500'><img className='w-6' src={messageIcon} alt="messsages" /></li>
                    <li className='cursor-pointer w-full h-12 flex justify-center items-center hover:bg-violet-500'><img className='w-6' src={bellIcon} alt="SMS" /></li>
                    <li className='cursor-pointer w-full h-12 flex justify-center items-center hover:bg-violet-500'><img className='w-6' src={settingIcon} alt="Setting" /></li>
                </ul>
            </nav>
            <div className='flex justify-center items-center text-center mt-14'>
                <img src={LogoutIcon} className='cursor-pointer hover:bg-violet-600 w-6' alt="LogOut" />
            </div>
        </div>
    );
}

export default Navbar;
