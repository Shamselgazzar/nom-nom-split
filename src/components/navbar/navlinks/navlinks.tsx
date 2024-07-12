'use client';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

function NavLinks() {
  const links = [
    { href: '/', name: 'Home' },
    { href: '/about', name: 'About' },
    { href: '/contact', name: 'Contact' },
  ];
  const pathName = usePathname();
  return (
    <div className='space-x-4'>
      {links.map(link => (
        <Link
          key={link.name}
          href={link.href}
          className={clsx('pb-1 transition-all duration-75  ease-linear hover:border-b-2 hover:border-blue-200',{
            'border-b-2 border-blue-400': pathName === link.href,
          })}
        >
          {' '}
          {link.name}
        </Link>
      ))}
    </div>
  );
}

export default NavLinks;
