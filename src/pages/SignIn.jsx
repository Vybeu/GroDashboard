import React, { useEffect } from 'react';
import { GoogleButton } from 'react-google-button';
import { UserAuth } from '../contexts/AuthContextProvider';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const { googleSignIn, user } = UserAuth();
    const navigate = useNavigate();

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn()
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        if (user !== null) {
            navigate('/growth');
        }
    }, [user?.displayName])

    return (
        <div className='mt-12'>
            <div className='flex flex-wrap lg:flex-nowrap justify-center'>
                <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center'>
                    <div className='flex justify-between items-center'>
                        <div>
                            <p className='font-bold text-gray-400'>Please</p>
                            <p className='text-2xl'>Login Here</p>
                        </div>
                    </div>
                    <div className='mt-6'>
                        <GoogleButton onClick={handleGoogleSignIn} />
                    </div>
                </div>
            </div>
        </div>
    )
}

//     return (
//         <div>
//             <GoogleButton onClick={handleGoogleSignIn} />
//         </div>
//     )
// }

export default SignIn