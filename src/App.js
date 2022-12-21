import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Footer, Sidebar, ThemeSettings, Card } from './components';
import { Growth, Classes, Calendar, Teachers, Resources, Pyramid, Counselors, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Journal, Goals } from './pages'

import { useStateContext } from './contexts/ContextProvider';

import './App.css'

const App = () => {
    const { activeMenu, themeSettings, setThemeSettings, currentColor, currentMode } = useStateContext();

    return (
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
                                <Route path='/' element={<Growth />} />
                                <Route path='/growth' element={<Growth />} />

                                {/* Pages */}
                                <Route path='/classes' element={<Classes />} />
                                <Route path='/teachers' element={<Teachers />} />
                                <Route path='/counselors' element={<Counselors />} />
                                <Route path='/resources' element={<Resources />} />

                                {/* Apps */}
                                <Route path='/kanban' element={<Kanban />} />
                                <Route path='/journal' element={<Journal />} />
                                <Route path='/goals' element={<Goals />} />
                                <Route path='/calendar' element={<Calendar />} />
                                <Route path='/color-picker' element={<ColorPicker />} />

                                {/* Charts */}
                                <Route path='/area' element={<Area />} />
                                <Route path='/pyramid' element={<Pyramid />} />
                            </Routes>
                        </div>
                    </div>

                </div>
            </BrowserRouter >
        </div >
    )
}

export default App