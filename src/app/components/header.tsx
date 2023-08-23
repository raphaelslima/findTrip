'use client'

import React, { useState } from "react";

import Image from "next/image";
import {signIn, signOut, useSession} from 'next-auth/react'

import {AiOutlineMenu} from 'react-icons/ai'

const Header = () =>{
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const {status, data} = useSession()
    const handleLogin = () => signIn()
    const handleLogout = () => {
        setMenuIsOpen(!menuIsOpen)
        signOut()
    }
    const handleMenuClick = () => setMenuIsOpen(!menuIsOpen)

    return (
        <header className="container mx-auto p-5 py-0 h-[93px] flex justify-between items-center">
            <div className="relative h-[32px] w-[182px]">
            <Image src='/logo.png' alt="Full Stack Week" fill/>
            </div>

            {
                
            status === 'unauthenticated' && 
                (
                <button 
                    className="text-primary text-sm font-semibold" 
                    onClick={() => handleLogin()}>
                        Login
                </button>)
            }

            {
                status === 'authenticated' && data.user &&(
                    <div className="flex items-center gap-3 border-grayLighter border border-solid py-2 px-3 rounded-full relative">
                        <AiOutlineMenu size={16} className='cursor-pointer' onClick={() => handleMenuClick()} />

                        <Image width={32} height={32} src={data.user.image!} alt={data.user.name!} className="rounded-full shadow-md"/>

                        {menuIsOpen && (
                            <div className="absolute top-14 left-0 w-full h-full bg-white rounded-lg shadow-md flex fex-col justify-center items-center">
                                <button className="text-primary text-sm font-sembold" onClick={()=> handleLogout()}>
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                )
            }
        </header>
    )
}

export default Header