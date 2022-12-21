import React, { useEffect } from 'react';
import { GiChickenOven } from 'react-icons/gi';


const FoodCard = () => {
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
                                    <span className='font-semibold'>Eating Disorders</span><br /> are serious conditions related to persistent eating <br /> behaviors that negatively impact your health, your <br /> emotions and your ability to function in important areas of <br /> life. The most common eating disorders are <br /> anorexia nervosa, bulimia nervosa and binge-eating <br /> disorder. <br />
                                    <a className='text-blue-600' href='https://www.healthline.com/nutrition/common-eating-disorders'>Additional Resources</a>
                                </p>
                            </div>
                        </div>

                        <div>
                                <div className='rounded-3xl bg-orange-300'>
                                    <a href='https://www.healthline.com/nutrition/common-eating-disorders'>
                                        <GiChickenOven size='10x' color='brown' />
                                    </a>
                                </div>
                        </div>
                    </div>
                </div>

        </div>
    )
}

export default FoodCard
