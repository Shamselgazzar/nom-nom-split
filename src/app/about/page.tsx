import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className='bg-slate-50'>
      <MaxWidthWrapper className='py-16 flex flex-col lg:flex-row items-center text-center lg:text-left'>
        <div className='lg:w-1/2 lg:pr-12 mb-8 lg:mb-0'>
          <h4
            className='font-bold !leading-tight text-balance tracking-tight
            text-gray-800 text-5xl md:text-6xl lg:text-7xl '
          >
            About NomNomSplit
          </h4>
          <p className='text-lg text-gray-700 leading-relaxed mt-2'>
            NomNomSplit is a revolutionary food sharing app designed to simplify
            the process of splitting bills and expenses among friends, family,
            or colleagues. Our mission is to make dining together hassle-free
            and enjoyable for everyone involved.
          </p>
        </div>
        <div className='lg:w-1/2 flex justify-end'>
          <Image
            src='/Collab-bro.svg'
            alt='About NomNomSplit'
            width={550}
            height={300}
            className='rounded-lg'
          />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default AboutPage;
