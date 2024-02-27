'use client'
import CourseData from '@/data/music_course.json'
import Link from 'next/link'
import { BackgroundGradient } from './ui/background-gradient'

interface Course{
    id: number,
    title:string,
    description:string,
    price: number,
    isFeatured: boolean,
    instructor:string
}

function FeaturedCourses() {
    const featuredCourses=CourseData.courses.filter((course: Course) => course.isFeatured)
    return (
    <div className='py-12 bg-white text-black'>
        <div className='text-center'>
            <h2 className='text-base text-teal-500 font-semibold tracking-wide uppercase'>FEATURED COURSES</h2>
            <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-black sm:text-4xl'>LEARN WITH THE BEST</p>
        </div>
        <div className='mt-10'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9 justify-center'>
                {featuredCourses.map((course:Course)=>(
                    <div className='flex justify-center' key={course.id}>
                        <BackgroundGradient className='flex flex-col rounded-[22px] bg-black dark:bg-white overflow-hidden h-full max-w-sm'>
                            <div className='p-4 sm:p-6 flex flex-col items-center text-center flex-grow'>
                                <p className='text-lg sm:text-xl text-black mt-5 '>{course.title}</p>
                                <p className='text-sm text-neutral-500 dark:text-neutral-400 flex-grow'>{course.description}</p>
                                <Link href={`/courses/${course.id}`}>
                                    Learn MORE
                                </Link>
                            </div>
                            </BackgroundGradient>
                    </div>
                ))}
            </div>
        </div>
        <div className='mt-20 text-center'>
            <Link href={"/courses"} className='px-4 py-2 rounded border border-neutral-600 text-neutral-700  hover:bg-gray-200 transition duration-200'>
                View All Courses
            </Link>
        </div>
    </div>

    )
}

export default FeaturedCourses