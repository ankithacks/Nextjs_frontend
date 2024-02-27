import React from 'react'
import Link from 'next/link'
import { Spotlight } from './ui/Spotlight'
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:p-0 mb-24'>
        <div className='p-4 relative z-10 w-full text-center'>
        <Spotlight
        className="-top-40 right-5 md:left-60 md:-top-20"
        fill="violet"
      />
            <h1 className='mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-violet-500 to bg-white'>MASTER THE ART OF MUSIC </h1>
            <p className='mt-4 font-normal text-base md:text-lg text-neutral-500 max-w-lg mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat odit error saepe dolores laboriosam, rerum maiores doloribus vero accusamus at asperiores perspiciatis a inventore quibusdam officiis? Neque inventore fuga assumenda!</p>
            <div className='mt-5'>
                <Link href={'/courses'}>
                    <Button borderRadius='2.56rem' className='bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800'>EXPLORE NOW</Button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default HeroSection