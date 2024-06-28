import Link from 'next/link'
import React from 'react'

// Logo
import logo from "./dojo-logo.png";
import Image from "next/image";


export default function Navbar() {
  return (
    <nav>
        
        <Image
        src={logo}
        alt="Dojo Logo"
        width={70}
        quality={100}
        placeholder="blur"
      />


      <h1>ABC Company</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  )
}
