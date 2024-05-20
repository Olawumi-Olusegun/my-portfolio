
import React, { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'
import Link, { LinkProps } from 'next/link'

interface BrandLogo extends LinkProps, HTMLAttributes<HTMLAnchorElement>{}

function BrandLogo({ href = "/", className, ...props }: BrandLogo) {
  return (
    <>
     <Link href={href} className={cn('text-lg hover:animate-pulse font-bold text-black', className)} {...props}>
        <code>
            {`</developer/>`}
        </code>
     </Link>
    </>
  )
}

export default BrandLogo