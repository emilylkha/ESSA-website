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
    <>  
    <div>
        <div className="flex grow items-center justify-between px-10">
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
            <div className="hidden md:flex grow items-center justify-center gap-2">
                <NavLink isOpen={isOpen} toggle={toggle}/>
            </div>
            <div className="hidden md:flex bg-black text-white rounded hover:bg-gray-800 font-bold py-2 px-4 rounded">Contact Us</div>
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
        {isOpen && (
            <div className="md:hidden">
                <NavLink isOpen={isOpen} toggle={toggle}/>
            </div>
        )}

    </div>
    </>
  );
}
