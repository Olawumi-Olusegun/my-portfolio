
import React from 'react'
import { Button } from '@/components/ui/button'
import BrandLogo from './BrandLogo'

type Props = {}

function Header({}: Props) {
  return (
    <header className='text-black max-w-screen-xl px-4 py-2 mx-auto flex items-center justify-between '>
         <BrandLogo href={"/"} />
         <Button className='rounded-full bg-black hover:text-black text-white '>Hire me</Button>
    </header>
  )
}

export default Header