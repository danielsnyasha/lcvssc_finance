import Image from 'next/image';
import {Loader2} from 'lucide-react';
import { SignIn, ClerkLoading, ClerkLoaded } from "@clerk/nextjs";

export default function Page() {
  return(
    <div className='min-h-screen grid grid-cols-1 flex-row lg:grid-cols-2'>
      <div className="h-full lg:flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-4 pt-16">
          <h1 className='font-bold text-3xl text-[#2e2a47]'>Welcome Back!</h1>
          <p className="text-base text-[#7e8ca0]">Log in or Create account to get back to your dashboard!</p>
          
          </div>
          <div className="flex items-center justify-center mt-8">
            <ClerkLoaded>
          <SignIn path="/sign-in" />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="text-green-600 animate-spin text-muted-foreground"/>
          </ClerkLoading>
          </div >

    
    </div>
    <div className='h-full bg-gray-300 hidden lg:flex items-center justify-center '>
      <Image src='/logoipsum-299.svg' alt='logo' height={100} width={100}/>

    </div>

    </div>



  ) 
}