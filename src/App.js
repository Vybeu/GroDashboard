import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Footer, Sidebar, ThemeSettings, Card } from './components';
import { Growth, Classes, Calendar, Teachers, Resources, Pyramid, Counselors, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Journal, Goals, SignIn } from './pages';
import Protected from './components/Protected';

import { useStateContext } from './contexts/ContextProvider';

import './App.css'
import { AuthContextProvider } from './contexts/AuthContextProvider';

const App = () => {
    const { activeMenu, themeSettings, setThemeSettings, currentColor, currentMode } = useStateContext();

    return (
        <AuthContextProvider>
            <div className={currentMode === 'Dark' ? 'dark' : ''}>
                <BrowserRouter>
                    <div className="flex relative dark:bg-main-dark-bg">
                        <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
                            <TooltipComponent content="Settings" position="Top">
                                <button type="button" className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white" style={{ background: currentColor, borderRadius: '50%' }} onClick={() => setThemeSettings(true)}>
                                    <FiSettings />
                                </button>
                            </TooltipComponent>
                        </div>
                        {activeMenu ? (
                            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
                                <Sidebar />
                            </div>
                        ) : (
                            <div className='w-0 dark-bg-secondary-dark-bg'>
                                <Sidebar />
                            </div>
                        )}
                        <div className={
                            `dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
                            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                                <Navbar />
                            </div>

                            {themeSettings && <ThemeSettings />}

                            <div>
                                <Routes>
                                    {/* Dashboard */}
                                    <Route path='/' element={<SignIn />} />
                                    <Route path='/growth' element={<Protected> <Growth /> </Protected>} />

                                    {/* Pages */}
                                    <Route path='/classes' element={<Protected><Classes /></Protected>} />
                                    <Route path='/teachers' element={<Protected> <Teachers /> </Protected>} />
                                    <Route path='/counselors' element={<Protected> <Counselors /> </Protected>} />
                                    <Route path='/resources' element={<Protected> <Resources /> </Protected>} />

                                    {/* Apps */}
                                    <Route path='/kanban' element={<Protected> <Kanban /> </Protected>} />
                                    <Route path='/journal' element={<Protected> <Journal /> </Protected>} />
                                    <Route path='/goals' element={<Protected> <Goals /> </Protected>} />
                                    <Route path='/calendar' element={<Protected> <Calendar /> </Protected>} />
                                    <Route path='/color-picker' element={<Protected> <ColorPicker /> </Protected>} />

                                    {/* Charts */}
                                    <Route path='/area' element={<Protected> <Area /> </Protected>} />
                                    <Route path='/pyramid' element={<Protected> <Pyramid /> </Protected>} />
                                </Routes>
                            </div>
                        </div>

                    </div>
                </BrowserRouter >
            </div >
        </AuthContextProvider>
    )
}

export default App