import Input from '@/components/Input';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState, type FC, useCallback } from 'react';
import { signIn } from "next-auth/react"
import {FcGoogle} from 'react-icons/fc'
const Auth: FC = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const [variant, setVariant] = useState('login');

    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login');
      }, [setVariant]);

      const login = useCallback(async () => {
        try {
          await signIn('credentials', {
            email,
            password,
            redirect: true,
            callbackUrl: '/profiles'
          });
    
        } catch (error) {
          console.log(error);
        }
      }, [email, password]);

      const register = useCallback(async () => {
        try {
          await axios.post('/api/register', {
            email,
            name,
            password
          });
    
          login();
        } catch (error) {
            console.log(error);
        }
      }, [email, name, password, login]);
    

  return (
<div className='relative h-full w-full bg-[url("/hero.jpg")] bg-no-repeat bg-fixed bg-center bg-cover'> 
<div className='bg-neutral-200 w-full h-full lg:bg-opacity-20'>
    <div className='px-12 py-5 '>
        <div className='h-10 w-48 relative '>
        <Image src='/logo.svg' fill alt="logo" />
        </div>    
    </div>
    <div className='flex justify-center'>
        <div className='bg-neutral-200 bg:opacity-10 px-16 py-12 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full'>
            <h2 className='text-neutral-900 text-4xl mb-8  font-semibold'>
                {variant === "login" ? "Sign in" : "Register"}
            </h2>
            <div className='flex flex-col gap-4'>
            {variant === 'register' && (
                <Input
                  id="name"
                  type="text"
                  label="Username"
                  value={name}
                  onChange={(e: any) => setName(e.target.value)} 
                />
              )}
              <Input
                id="email"
                type="email"
                label="Email address or phone number"
                value={email}
                onChange={(e: any) => setEmail(e.target.value)} 
              />
              <Input
                type="password" 
                id="password" 
                label="Password" 
                value={password}
                onChange={(e: any) => setPassword(e.target.value)} 
              />
            </div>
            <button 
            onClick={variant === "login" ? login : register}
            className="bg-blue-600 py-3 text-white rounded-md w-full mt-5 hover:bg-blue-500 transition"> {variant === 'login' ? 'Login' : 'Sign up'}</button>
            <div className='flex items-center justify-center mt-5 gap-5 w-full'>
              <span className='border-b-2 border-neutral-500 h-1 w-5'></span>
              <span>or</span>
              <span className='border-b-2 border-neutral-500 h-1 w-5'></span>

            </div>
            <div className='flex items-center justify-center mt-5 gap-5'>
              
              <button
              className='w-full  bg-blue-600 flex items-center justify-center cursor-pointer rounded-md py-3 text-white   hover:bg-blue-500 transition'
              onClick={() => signIn('google', { callbackUrl: '/profiles' })}
              ><FcGoogle /> <span className='ml-2'>Google</span></button>
              
              </div>
            <p className='text-neutral-500 mt-4'> 
            {variant === 'login' ? 'First time using Netflix?' : 'Already have an account?'} 
            <span onClick={toggleVariant} className='text-neutral-900 hover:underline cursor-pointer ml-1'> {variant === 'login' ? 'Create an account' : 'Login'}
            </span>
            </p>   
        </div>
    </div>
</div>
</div>
)
}

export default Auth