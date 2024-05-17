import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { buttonVariants } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='bg-slate-100'>
      <MaxWidthWrapper className='pt-5 pb-10 flex flex-col lg:flex-row justify-between items-center'>
        <div className='lg:w-1/2'>
          <h1
            className='relative w-fit mt-16 font-bold !leading-tight text-balance tracking-tight
            text-gray-800 text-5xl md:text-6xl lg:text-7xl lg:text-left text-center'
          >
            Calculate your share of <span className='bg-blue-500'>food</span> in
            seconds
          </h1>
          <p className='mt-4 mb-10 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap'>
            Sign up and create a session or enter a session without having to
            sign up.
            <span className='font-semibold'>It is that easy!</span> With
            NomNomSplit, calculating your share of food has never been easier.
          </p>
          <div className='flex flex-col lg:flex-row lg:w-10/12 gap-4 w-2/3 mx-auto lg:mx-0'>
            <Link
              href={''}
              className={`${buttonVariants({
                size: 'lg',
                variant: 'outline',
              })} lg:flex-1`}
            >
              Enter a session
            </Link>
            <Link
              href={''}
              className={`${buttonVariants({
                size: 'lg',
                variant: 'default',
              })} lg:flex-1`}
            >
              Sign up now
            </Link>
          </div>
        </div>
        <div>
          <Image
            src='/Calculator-bro.svg'
            alt={''}
            width={600}
            height={600}
          ></Image>
        </div>
      </MaxWidthWrapper>
      <div>
        <footer>
          <p  className="text-right">Illustrations by <a href="https://storyset.com/work" target="_blank">Storyset</a></p>
        </footer>
      </div>
    </div>
  );
}
