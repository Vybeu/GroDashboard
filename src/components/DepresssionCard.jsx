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


const DepressionCard = () => {
    return (

        <div className="w-max mx-auto">
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
                                    <span className='font-semibold'>Major depressive disorder (MDD)</span><br /> also known simply as depression, is a mental disorder <br /> characterized by at least two weeks of pervasive low mood. <br /> Low self-esteem, loss of interest in normally <br /> enjoyable activities, low energy, and pain <br /> without a clear cause are common symptoms. <br /> Those affected may also occasionally have <br /> delusions or hallucinations. <br />
                                    <a className='text-blue-600' href='https://www.counseling.org/knowledge-center/mental-health-resources/depression'>Additional Resources</a>
                                </p>
                            </div>
                        </div>

                        <div>
                                <div className='rounded-3xl bg-pink-300'>
                                    <a href='https://www.counseling.org/knowledge-center/mental-health-resources/depression'>
                                        <GiBrain size='10x' color='#f06292ff' />
                                    </a>
                                </div>
                        </div>
                    </div>
                </div>

        </div>
    )
}

export default DepressionCard
