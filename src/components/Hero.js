import React from 'react';
import ManShopping from '../img/man_shopping.png';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
  <section className='h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24'>
    <div className='container mx-auto flex justify-around'>
      <div className='flex flex-col justify-center'>
        <div className='font-semibold flex items-center uppercase'>
          <div className='w-10 h-[2px] bg-orange-600 mr-3'></div>New Trend
        </div>
          <h1 className='text-[70px] leading-[1.1] font-light mb-4'>
          SUPER SALE SALE SALE<br />
            <span className='font-semibold'>MENS</span>
          </h1>
          <Link to={'/'} className='self-start uppercase font-semibold border-b-2 border-primary'>
          Discover More!
          </Link>
      </div>
      <div className='hidden lg:block'>
        <img src={ManShopping} alt='' />
      </div>
    </div>
  </section>
  );
};

export default Hero;
