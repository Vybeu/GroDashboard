import React, { useEffect } from 'react';
import { TbBarbell } from 'react-icons/tb';



const StrengthCard = () => {
    return (

        <div className="w-max mx-auto pt-5">
            <div class="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96 dark:bg-secondary-dark-bg">
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                    <div className=' border-color m-4 pr-10'>
                            <div>
                                <p className='mt-1 text-3xl font-semibold'>Depression</p>
                                <p className='text-gray-500 font-semibold'>Overview</p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-10 flex gap-10 flex-wrap justify-center pr-5'>
                        <div className='border-r-1 border-color m-4 pr-10'>
                            <div className='mt-8'>
                                <p className='dark:text-gray-200'>
                                    <span className='font-semibold'>Exercise</span><br /> Exercise has many benefits, <br /> not only for your physical health <br /> but also your mental health. In your <br /> brain, exercise stimulates chemicals <br /> that improve your mood and the parts <br /> of the brain responsible for memory <br /> and learning. <br />
                                    <a className='text-blue-600' href='https://www.betterhealth.vic.gov.au/health/healthyliving/exercise-and-mental-health'>Additional Resources</a>
                                </p>
                            </div>
                        </div>

                        <div>
                                <div className='rounded-3xl bg-red-300'>
                                    <a href='https://www.betterhealth.vic.gov.au/health/healthyliving/exercise-and-mental-health'>
                                        <TbBarbell size='10x' color='darkGreen' />
                                    </a>
                                </div>
                        </div>
                    </div>
                </div>

        </div>
    )
}

export default StrengthCard
