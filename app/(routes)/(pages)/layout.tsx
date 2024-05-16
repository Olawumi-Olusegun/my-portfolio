

import Navbar from '@/components/navbar/Navbar';
import React from 'react'

function MainLayout({ children, }: Readonly<{ children: React.ReactNode;}>) {
  return (
    <div className='w-full'>
        <Navbar />
        <main className='w-full bg-white'>
            {children}
        </main>
    </div>
  )
}

export default MainLayout