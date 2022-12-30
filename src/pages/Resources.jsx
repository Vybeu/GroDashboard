import React from 'react';
import { BiBlanket } from 'react-icons/bi';
import { GoPrimitiveDot } from 'react-icons/go';
import { GiBrain } from 'react-icons/gi';
import { IoIosMore } from 'react-icons/io';
import { RiLeafLine } from 'react-icons/ri';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

import { Button } from '../components';
import { resourceData, resourceSmall } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Resources = () => {
    const { currentColor } = useStateContext();
    return (
        <div className='mt-12å'>
            <div className='flex flex-wrap lg:flex-nowrap justify-center'>
                <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center'>
                    <div className='flex justify-between items-center'>
                        <div>
                            <p className='font-bold text-gray-400'>My</p>
                            <p className='text-2xl'>Resources</p>
                        </div>
                    </div>
                    <div className='mt-6'>
                        <a href='https://www.mentalhealth.gov/'>
                            <Button
                                color='white'
                                bgColor={currentColor}
                                text='See All'
                                borderRadius='10px'
                                size='md'
                            />
                        </a>
                    </div>
                </div>

                <div className='flex m-3 flex-wrap justify-center gap-1 items-center'>
                    {resourceData.map((item) => (
                        <div key={item.title}
                            className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl'>
                            <button type='button' style={{ color: item.iconColor, backgroundColor: item.iconBg }} className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl' onClick={{}}>
                                {item.icon}
                            </button>
                            <p className='mt-3'>
                                <span className='text-lg font-semibold'>
                                    {item.amount}
                                </span>
                                <span className={`text-sm text-${item.pcColor} ml-2`}>
                                    {item.percentage}
                                </span>
                            </p>
                            <p className='text-sms text-gray-400 mt-1'>
                                {item.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className='flex m-3 flex-wrap justify-center gap-1 items-center'>
                {resourceSmall.map((item) => (
                    <div key={item.title}
                        className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl'>
                        <button type='button' style={{ color: item.iconColor, backgroundColor: item.iconBg }} className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl' onClick={{}}>
                            <a href={item.link}> {item.icon} </a>
                        </button>
                        <p className='mt-3'>
                            <span className='text-lg font-semibold'>
                                {item.amount}
                            </span>
                            <span className={`text-sm text-${item.pcColor} ml-2`}>
                                {item.percentage}
                            </span>
                        </p>
                        <p className='text-sms text-gray-400 mt-1'>
                            {item.title}
                        </p>
                    </div>
                ))}
            </div>

            {/* <DepressionCard />
            <FoodCard />
            <AnxietyCard /> */}

        </div >
    )
}

export default Resources