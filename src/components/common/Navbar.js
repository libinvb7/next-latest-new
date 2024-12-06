"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [navbarColor, setNavbarColor] = useState('transparent');
    const [color, setColor] = useState('#fff');
    const [borderColor, setborderColor] = useState('#fff');

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          setNavbarColor('#fff'); 
          setColor(' #115991')
          setborderColor(' border-white')
        } else {
          setNavbarColor('transparent'); 
          setColor(' #fff')
          setborderColor(' border-[#115991]')
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      
      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  return (
    <section className='  text-3xl fixed top-0 py-3 z-[99] w-full' style={{ backgroundColor: navbarColor, transition: 'background-color 0.3s ease' }}>
        <div className='container mx-auto '>
        <div className='flex justify-between items-center '>
            <div>
            <Link href="/"><Image src="/assets/images/Datapoint_logo.png" className='bg-white rounded-lg p-2' alt="data point logo" width={150} height={50}/></Link>
                
            </div>
            <div className="flex justify-between items-center gap-10">
                <div>
                    <ul className='hidden xl:flex justify-between items-center gap-5'>
                        <li className='text-lg '  style={{ color: color, transition: 'color 0.3s ease' }}> <Link href="/about">Features</Link> </li>
                        <li className='text-lg ' style={{ color: color, transition: 'color 0.3s ease' }} > <Link href="/manufacturing-balanced-scorecard-software">industries</Link></li>
                        <li className='text-lg ' style={{ color: color, transition: 'color 0.3s ease' }} > <Link href="/about">Features</Link></li>
                        <li className='text-lg ' style={{ color: color, transition: 'color 0.3s ease' }} > <Link href="/about">Features</Link></li>
                        <li className='text-lg ' style={{ color: color, transition: 'color 0.3s ease' }} > <Link href="/about">Features</Link></li>
                        <li className='text-lg ' style={{ color: color, transition: 'color 0.3s ease' }} > <Link href="/about">Features</Link></li>
                    </ul>
                </div>
                <div className='hidden xl:flex  items-center gap-3  '>
                    <button className={`btn ${borderColor}`} style={{ color: color, transition: 'color 0.3s ease', }}>Get Started</button>
                    <button className='btn btn-orange'>Book a Demo</button>
                </div>
            </div>
        </div>


    </div>
    </section>
  )
}

export default Navbar