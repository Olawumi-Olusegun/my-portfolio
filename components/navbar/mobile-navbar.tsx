"use client";

import React from 'react'
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Menu, X, } from 'lucide-react'
import { navLinks } from './navLinks'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import BrandLogo from '../BrandLogo';


type Props = {}

function MobileNavbar({}: Props) {
    const pathname = usePathname();
  return (
    <>
    <Sheet>
        <div className="flex items-center justify-between p-4 border-b">
            <BrandLogo href={"/"} />
            <SheetTrigger asChild >
                <Button title='close' className='w-10 h-10 rounded-full p-0 '>
                    <Menu />
                </Button>
            </SheetTrigger>
        </div>
        <SheetContent hideCloseButton side={"left"} className='border-r-0 pt-2 px-0 bg-white '>
            <div className="flex items-center self-center justify-between h-[4rem] px-4 border-b">
                <BrandLogo href={"/"} className='text-black' />
                <SheetClose asChild>
                    <Button title='close' size={"icon"} className='w-10 h-10 rounded-full bg-transparent hover:bg-gray-100 group duration-300 p-0 '>
                        <X className='text-black duration-300 group-hover:text-black' />
                    </Button>
                </SheetClose>
            </div>

            <div className="mt-8">
                <div className="flex flex-col space-y-1 gap-2 w-full">
                    {navLinks.map((link, index) => {
                        const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
                    
                        return (
                            <SheetClose key={index} asChild>
                                <Link href={link.href} >
                                    <Button variant={"ghost"} className={`px-4 py-3 w-full rounded-none justify-start text-black bg-transparent ${isActive && "bg-white/10" }`}>
                                        {link.label}
                                    </Button>
                                </Link>
                            </SheetClose>
                        )
                    })}

                </div>
            </div>
        </SheetContent>
    </Sheet>
    </>
  )
}

export default MobileNavbar