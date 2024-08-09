import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import routes from '../routes/routes';
import clsx from 'clsx';
import powerOff from '../assets/icons/sidebar/power-off.svg'

const Sidebar = () => {
    const location = useLocation();

    return (
        <div className='h-full bg-violet-600 flex flex-col items-center justify-between pb-3'>
            {/* <Image src='https://picsum.photos/50' className='m-2' alt='Profile Image' /> */}
            <div>
                <div className='w-[50px] m-2 aspect-square flex items-center justify-center text-white font-bold text-2xl'>S</div>
                <div className='flex flex-col mt-4 w-full'>
                    {routes.map((route, index) => (
                        <Link
                            key={index}
                            to={route.path}
                            className={clsx(
                                'w-full flex justify-around aspect-square py-3 text-white items-center relative',
                                location.pathname === route.path ? 'border-l-partial bg-violet-950' : ''
                            )}
                        >
                            <img src={route.icon} alt={`${route.title} icon`} className='w-[20px]' />
                            {/* <p className='text-wrap'>{route.name}</p> */}
                        </Link>
                    ))}
                </div>
            </div>
            <div className='aspect-square w-[50px] bg-red-400 flex items-center justify-center rounded-md'>
                <img src={powerOff} alt={`power off icon`} className='w-[30px]' />
            </div>
        </div>
    );
};

export default Sidebar;
