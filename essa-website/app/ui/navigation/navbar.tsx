'use client'

import { usePathname } from 'next/navigation';
import NavLink from './navlinks';
import Link from 'next/link';
import Image from 'next/image';

export default function NavBar() {
  const pathname = usePathname();
  return (
    <>
        <div className="flex grow items-center space-around">
            <Link
                key={"ESSA-Logo"}
                href={"/"}>
                <Image
                    src="/ESSALogo.png"
                    alt="Economics Students Society of Australia Logo"
                    width={100}
                    height={24}
                />
            </Link>
            <div className="flex grow items-center justify-center gap-2">
                <NavLink />
            </div>
        </div>
    </>
  );
}
