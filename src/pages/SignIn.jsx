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
        if(user !== null) {
            navigate('/growth');
        }
    }, [user?.displayName])

  return (
    <div>
        <GoogleButton onClick={handleGoogleSignIn} />
    </div>
  )
}

export default SignIn