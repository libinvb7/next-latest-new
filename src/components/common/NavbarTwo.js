"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react';

const NavbarTwo = () => {

  return (
    <section className='  text-3xl sticky top-0 py-3 z-[99] w-[100%] bg-white' >
        <div className='container mx-auto '>
        <div className='flex justify-between items-center '>
            <div>
            <Link href="/"><Image src="/assets/images/Datapoint_logo.png" className='bg-white rounded-lg p-2' alt="data point logo" width={150} height={50}/></Link>
                
            </div>
            <div className="flex justify-between items-center gap-10">
                <div>
                    <ul className='hidden xl:flex justify-between items-center gap-5'>
                        <li className='text-lg text-[#115991]'  > <Link href="/about">Features</Link> </li>
                        <li className='text-lg text-[#115991]'  > <Link href="/manufacturing-balanced-scorecard-software">industries</Link></li>
                        <li className='text-lg text-[#115991]'  > <Link href="/about">Features</Link></li>
                        <li className='text-lg text-[#115991]'  > <Link href="/about">Features</Link></li>
                        <li className='text-lg text-[#115991]'  > <Link href="/about">Features</Link></li>
                        <li className='text-lg text-[#115991]'  > <Link href="/about">Features</Link></li>
                    </ul>
                </div>
                <div className='hidden xl:flex  items-center gap-3  '>
                    <button className="btn border border-[#115991]  text-[#115991]" >Get Started</button>
                    <button className='btn btn-primary'>Book a Demo</button>
                </div>
            </div>
        </div>


    </div>
    </section>
  )
}

export default NavbarTwo