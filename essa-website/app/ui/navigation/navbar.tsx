// NavBar at the top of screen
'use client'

import NavLink from './navlinks';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
        {/* Nav Bar - Hamburger for Mobile Users, NavLinks for Desktop*/}
        <div className="flex grow items-center justify-between px-10">
            {/* ESSA Logo */}
            <Link
                key={"ESSA-Logo"}
                href={"/"}>
                <Image
                    src="/essa-logo.png"
                    alt="Economics Students Society of Australia Logo"
                    width={64}
                    height={40}
                />
            </Link>
            {/* Nav Links for Desktop, closed for Mobile to save space*/}
            <div className="hidden md:flex grow items-center justify-center gap-2">
                <NavLink toggle={toggle}/>
            </div>
            {/* Contact Us */}
            <div className="hidden md:flex bg-black text-white rounded hover:bg-gray-800 font-bold py-2 px-4 rounded">Contact Us</div>
            {/* Hamburger Menu for Mobile - toggle DropDown on and off */}
            <div className="md:hidden">
                <button onClick={toggle}>
                    {isOpen ? (
                    <XMarkIcon className="h-6 w-6" />
                    ) : (
                    <Bars3Icon className="h-6 w-6" />
                    )}
                </button>
            </div>
        </div>
        {/* Drop Down Links for Mobile Users */}
        {isOpen && (
            <div className="md:hidden">
                <NavLink toggle={toggle}/>
            </div>
        )}
    </div>
  );
}
