import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { GiBrain, GiChickenOven } from 'react-icons/gi';
import { BsChat, BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import avatar from '../data/avatar.jpg';
import { Cart, Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';


const Card = () => {
    return (

        <div className="w-max mx-auto">

            <div id="default-carousel" className="relative" data-carousel="static">

                <div class="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96 dark:bg-secondary-dark-bg">

                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                        <span class="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">First Slide</span>
                        <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
                    </div>

                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..."/>
                    </div>

                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                    <div className=' border-color m-4 pr-10'>
                            <div>
                                <p className='mt-1 text-3xl font-semibold'>Depression</p>
                                <p className='text-gray-500 font-semibold'>Overview</p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-10 flex gap-10 flex-wrap justify-center'>
                        <div className='border-r-1 border-color m-4 pr-10'>
                            <div className='mt-8'>
                                <p className='dark:text-gray-200'>
                                    <span className='font-semibold'>Major depressive disorder (MDD)</span><br /> also known simply as depression, is a mental disorder <br /> characterized by at least two weeks of pervasive low mood. <br /> Low self-esteem, loss of interest in normally <br /> enjoyable activities, low energy, and pain <br /> without a clear cause are common symptoms. <br /> Those affected may also occasionally have <br /> delusions or hallucinations. <br />
                                    <a className='text-blue-600' href='https://www.counseling.org/knowledge-center/mental-health-resources/depression'>Additional Resources</a>
                                </p>
                            </div>
                        </div>

                        <div>
                                <div className='rounded-full bg-pink-300'>
                                    <a href='https://www.counseling.org/knowledge-center/mental-health-resources/depression'>
                                        <GiBrain size='10x' color='#f06292ff' />
                                    </a>
                                </div>
                        </div>
                    </div>
                </div>

                <div class="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
                    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                </div>

                <button type="button" class="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-gray-300 dark:bg-secondary-dark-bg group-hover:bg-gray-500 dark:group-hover:bg-gray-100 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                        <span class="hidden">Previous</span>
                    </span>
                </button>
                <button type="button" class="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next>
                    <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-gray-300 dark:bg-secondary-dark-bg group-hover:bg-gray-500 dark:group-hover:bg-gray-100 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                        <span class="hidden">Next</span>
                    </span>
                </button>
            </div>

            <p class="mt-5">This carousel slider component is part of a larger, open-source library of Tailwind CSS components. Learn
                more
                by going to the official <a class="text-blue-600 hover:underline"
                    href="https://flowbite.com/docs/getting-started/introduction/" target="_blank">Flowbite Documentation</a>.
            </p>
            <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
        </div>
    )
}

export default Card
