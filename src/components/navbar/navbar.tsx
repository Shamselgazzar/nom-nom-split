import Link from 'next/link';
import React from 'react';
import MaxWidthWrapper from '../MaxWidthWrapper';
import { Salad } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className='bg-neutral-100'>
      <MaxWidthWrapper className='flex justify-between py-4 items-center'>
        <Link href='/' className='flex items-center gap-0.5'>
          <Salad className='shrink-0 text-blue-600 antialiased w-6 h-6 inline' />
          <div className='text-xl'>
            NomNom<span className='text-blue-600 font-semibold'>Split</span>
          </div>
        </Link>
          <div className='space-x-4'>
            <Link href='/'>Homepage</Link>
            <Link href='/about'>About</Link>
            <Link href='/contact'>Contact</Link>
          </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
