import React, { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils';


interface ContainerWrapperProps extends HTMLAttributes<HTMLDivElement>{}

function ContainerWrapper({className, children, ...props}: ContainerWrapperProps) {
  return (
    <div className={cn('w-full text-black max-w-screen-xl px-4  mx-auto', className)} {...props}>
        {children}
    </div>
  )
}

export default ContainerWrapper