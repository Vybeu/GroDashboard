import React from 'react';
import { BiBlanket } from 'react-icons/bi';
import { GoPrimitiveDot } from 'react-icons/go';
import {GiBrain} from 'react-icons/gi';
import { IoIosMore } from 'react-icons/io';
import {RiLeafLine} from 'react-icons/ri';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

import { Stacked, Pie, Button, LineChart, SparkLine } from '../components';
import { resourceData, medicalproBranding, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Resources = () => {
    const { currentColor } = useStateContext();
    return (
        <div className='mt-12'>
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

            {/* <div className='flex gap-10 flex-wrap justify-center'>
                <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-77'>

                    <div className='mt-10 flex gap-10 flex-wrap justify-center'>
                        <div className=' border-color m-4 pr-10'>
                            <div>
                                <p className='mt-1 text-3xl font-semibold'>Resources</p>
                                <p className='text-gray-500 font-semibold'>Overview</p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-10 flex gap-10 flex-wrap justify-center'>
                        <div className='border-r-1 border-color m-4 pr-10'>
                            <div className='mt-8'>
                                <p>
                                    Please use these resources if you need help, <br/> know someone that needs help, or are <br /> just interested in learning more. <br/>
                                    If you, or someone you know are <br /> contemplating suicide, please dial <br />988 to be connected to a crisis <br /> counselor who is trained to assist.
                                </p>
                            </div>
                        </div>

                        <div>
                            <div>
                                <RiLeafLine size='10x' color='#44b644' />
                            </div>
                        </div>

                    </div>
                </div>
            </div> */}
            <div className='flex gap-10 flex-wrap justify-center'>
                <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-77'>

                    <div className='mt-10 flex gap-10 flex-wrap justify-center'>
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
                                <p>
                                Major depressive disorder (MDD),<br /> also known simply as depression, is a mental disorder <br /> characterized by at least two weeks of pervasive low mood. <br /> Low self-esteem, loss of interest in normally <br /> enjoyable activities, low energy, and pain <br /> without a clear cause are common symptoms. <br /> Those affected may also occasionally have <br /> delusions or hallucinations. <br />
                                <a className='text-blue-600' href='https://www.counseling.org/knowledge-center/mental-health-resources/depression'>Additional Resources</a>
                                </p>
                            </div>
                        </div>

                        <div>
                            {/* <Stacked width='320px' height='360px' /> */}
                            <div>
                                
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resources