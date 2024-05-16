"use client";

import React from 'react'
import { navLinks } from './navLinks';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';
import BrandLogo from '../BrandLogo';

type Props = {}

function DesktopNavbar({}: Props) {
  return (
    <header className='fixed inset-0 flex items-center w-full h-16 backdrop-blur-md backdrop-brightness-150 bg-white/80 border-b'>
        <nav className='text-black max-w-screen-xl px-4 mx-auto  flex items-center justify-between w-full '>
            <BrandLogo href={"/home"} />
            <div className="flex items-center gap-3">
                {navLinks.map((link, index) => (
                    <Link href={link.href} key={index}>
                        {link.label}
                    </Link>
                ))}
            </div>
            <div className="flex item-center gap-2">
                <a className='p-2 rounded-fullmin-h-10 min-w-10 flex items-center justify-center ' href='https://github.com/Olawumi-Olusegun' target='_blank'> 
                    <Github className='rounde-full hover:animate-pulse' size={20} /> 
                </a>
                <Link href={"#contact"} >
                <Button className='rounded-full bg-black hover:text-white text-white '>Hire me</Button>
                </Link>
            </div>
        </nav>
    </header>
    
  )
}

export default DesktopNavbar