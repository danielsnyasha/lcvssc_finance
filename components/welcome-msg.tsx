'use client';

import {useUser, ClerkLoading, ClerkLoaded} from '@clerk/nextjs';





const WelcomeMsg = () => {
    const {user, isLoaded} = useUser();
    return ( 
    <div className='space-y-2'>
        <h2 className='text-xl lg:text-4xl text-white font-medium'>
            Welcome Back{isLoaded ? ", " : " "}  {user?.firstName} ! 👋

        </h2>
        <p className='text-sm lg:text-base text-[#89b6fd]'> This is your Financial Overview Report </p>
    </div> );
}
 
export default WelcomeMsg;