'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'About Us', href: '/about' },
  { name: 'Events', href: '/events' },
  { name: 'Resources', href: '/resources' },
  { name: 'Membership', href: '/membership' }
];

export default function NavLink() {
  const pathname = usePathname();
  return (
    <>
        {links.map((link) => {
        return (
        <Link
            key={link.name}
            href={link.href}
            className={clsx(
            'flex h-[48px] grow items-center justify-center gap-2 p-3 text-sm font-medium hover:bg-white hover:text-emerald-800 md:flex-none md:p-2 md:px-3',
            {
                'bg-white text-emerald-800': pathname === link.href,
            },
            )}
        >
            <p className="block">{link.name}</p>
        </Link>
        );
    })}
    </>
  );
}
