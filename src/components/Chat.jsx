import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import { HiLocationMarker } from 'react-icons/hi';
import { AiOutlineLink } from 'react-icons/ai';
import { TbLeaf } from 'react-icons/tb';

const Chat = () => {
    return (
        <div>
            <div className='flex flex-col justify-center antialiased dark:bg-secondary-dark-bg dark:text-gray-200 bg-gray-50 text-gray-600 min-h-screen p-4'>
                <div className='h-full'>
                    <div className='relative max-w-[340px] mx-auto bg-white shadow-lg rounded-lg'>
                        <header className='pt-6 pb-4 px-5 border-b border-color'>
                            <div className='flex justify-between items-center mb-3'>
                                <div className='flex items-center'>
                                    <a className='inline-flex items-start mr-3' href='#'>
                                        <FaUserCircle size='42px' />
                                    </a> 
                                    <div className='pr-1'>
                                        <a className='inline-flex text-gray-800 hover:text-gray-900' href='#'>
                                            <h2 className='text-xl leading-snug font-bold'>Adam Soros</h2>
                                        </a>
                                        <a className='block text-sm font-medium hover:text-indigo-500' href='#'>@adam.soros</a>
                                    </div>
                                </div>
                                <div className='relative inline-flex flex-shrink-0'>
                                    <button className='text-gray-400 hover:text-gray-500 rounded-full focus:ring-0 outline-none focus:outline-none'>
                                        <span className='sr-only'>Settings</span>
                                        <div className='w-4 h-4 pl-2 pr-5'>
                                            <FiSettings size='24px' />
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <div className='flex flex-wrap justify-center sm:justify-start space-x-4'>
                                <div className='flex items-center'>
                                    <HiLocationMarker size='20px' />
                                    <span className='text-sm whitespace-nowrap ml-2'>Orem, Utah</span>
                                </div>
                                <div className='flex items-center'>
                                    <AiOutlineLink size='20px' />
                                    <a className='text-sm font-medium whitespace-nowrap text-indigo-500 hover:text-indigo-800 ml-2'>adam.soros@gro.net</a>
                                </div>
                            </div>
                        </header>
                        <div className='py-3 px-5'>
                            <h3 className='text-xs font-semibold uppercase text-gray-400 mb-1'>Chats</h3>
                            <div className='divide-y divide-gray-200'>
                                <button className='w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50'>
                                    <div className='flex items-center'>
                                        <FaUserCircle size='32px' className='mr-3' />
                                        <div>
                                            <h4 className='text-sm font-semibold text-gray-900'>Julie Roberts</h4>
                                            <div className='text-[13px]'>
                                                Hello, there!
                                            </div>
                                        </div>
                                    </div>
                                </button>
                                <button className='w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50'>
                                    <div className='flex items-center'>
                                        <FaUserCircle size='32px' className='mr-3' />
                                        <div>
                                            <h4 className='text-sm font-semibold text-gray-900'>Jack Ryan </h4>
                                            <div className='text-[13px]'>
                                                Call me when you're free!
                                            </div>
                                        </div>
                                    </div>
                                </button>
                                <button className='w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50'>
                                    <div className='flex items-center'>
                                        <FaUserCircle size='32px' className='mr-3' />
                                        <div>
                                            <h4 className='text-sm font-semibold text-gray-900'>Dr. Lindsey</h4>
                                            <div className='text-[13px]'>
                                                Video Call Ended 2 hrs ago
                                            </div>
                                        </div>
                                    </div>
                                </button>
                                <button className='w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50'>
                                    <div className='flex items-center'>
                                        <FaUserCircle size='32px' className='mr-3' />
                                        <div>
                                            <h4 className='text-sm font-semibold text-gray-900'>Mr. White</h4>
                                            <div className='text-[13px]'>
                                                Hi, Michael just wanted to remind you...
                                            </div>
                                        </div>
                                    </div>
                                </button>
                                <button className='w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50'>
                                    <div className='flex items-center'>
                                        <FaUserCircle size='32px' className='mr-3' />
                                        <div>
                                            <h4 className='text-sm font-semibold text-gray-900'>Text Reminders</h4>
                                            <div className='text-[13px]'>
                                                Have a wonderful day!
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <button className='absolute bottom-5 right-5 inline-flex items-center text-sm font-medium text-white bg-green-500 hover:bg-green-600 rounded-full text-center px-3 py-2 shadow-lg focus:outline-none focus-visible:ring-2'>
                            <TbLeaf />
                            <span>New Chat</span>
                        </button>
                    </div>
                </div> 
            </div>  
        </div>
    )
}

export default Chat
