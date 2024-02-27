'use client';
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTEstimonials=[
    {
        quote:'joining the music school transformed any understanding of music and helped me to truly discover my own sound. The instructors are world-class.',
        name:'Alex johnston',
        title:'Guitar Student'
    },
    {
        quote:'joining the music school transformed any understanding of music and helped me to truly discover my own sound. The instructors are world-class.',
        name:'Alex johnston',
        title:'piano Student'
    },
    {
        quote:'joining the music school transformed any understanding of music and helped me to truly discover my own sound. The instructors are world-class.',
        name:'Alex johnston',
        title:'drum Student'
    },
    {
        quote:'joining the music school transformed any understanding of music and helped me to truly discover my own sound. The instructors are world-class.',
        name:'Alex johnston',
        title:'sitar Student'
    },
    {
        quote:'joining the music school transformed any understanding of music and helped me to truly discover my own sound. The instructors are world-class.',
        name:'Alex johnston',
        title:'test Student'
    }
]
function Testimonial() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
    <h2 className="text-3xl font-bold text-center mb-8 z-10">Our Testimonials</h2>
    <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">

    <div className="w-full max-w-6xl">
        <InfiniteMovingCards
            items={musicSchoolTEstimonials}
            direction="right"
            speed="slow"
            />
        </div>
    </div>
    </div>
  )
}

export default Testimonial