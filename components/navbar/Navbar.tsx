"use client";

import React from 'react'
import { useMediaQuery } from "usehooks-ts"
import DesktopNavbar from './desktop-navbar';
import MobileNavbar from './mobile-navbar';

type Props = {}

function Navbar({}: Props) {
  
  const isDesktop = useMediaQuery("(min-width: 750px)", {
    initializeWithValue: false,
  });


  return (
    <>
      { isDesktop ? <DesktopNavbar /> : <MobileNavbar /> }
    </>
  )
}

export default Navbar