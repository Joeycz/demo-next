// @ts-ignore
import clsx from 'clsx';
import React, { useState } from 'react';

import clsxm from '@/lib/clsxm';

import Layout from '@/components/layout/Layout';
import PersonData from '@/components/PersonData'

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */


function randomString(length:any, mix = true) {
  const str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const str2 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';
  for (let i = length; i > 0; --i) {
    if (mix) {
      result += str[Math.floor(Math.random() * str.length)];
    } else {
      result += str2[Math.floor(Math.random() * str.length)];
    }
  } 
  return result;
}

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function RegisterPage() {
  const [mode, setMode] = React.useState<'dark' | 'light'>('light');
  const [file, setFile] = useState(null);

  const handleFileChange = (event:any) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    // 在这里可以触发处理文件的操作
    console.log(selectedFile)
    const key = randomString(64);
    const pubkey = randomString(64);
    const ssc = randomString(32, false);
    const did = `did:cuhk:${randomString(18)}`;
    localStorage.setItem('key', key)
    localStorage.setItem('pubkey', pubkey)
    localStorage.setItem('ssc', ssc)
    localStorage.setItem('did', did)
  }
  return (
    <Layout>
      <main>
        <section
            className={clsx(mode === 'dark' ? 'bg-dark' : 'bg-white')}
          >
          <div
            className={clsx(
              'layout min-h-screen py-20 text-center',
              mode === 'dark' ? 'text-white' : 'text-black'
            )}
          >
            <h1 className="font-extrabold tracking-tight text-gray-900 text-3xl md:text-5xl">Upload Supporting Documents</h1>
            {
              (file && file.name) ? (
                <div className='space-x-10 mt-16'>
                  <p className="font-extrabold tracking-tight text-4xl md:text-7xl text-emerald-500">Success</p>
                  <PersonData deregister="0"></PersonData>
                </div>
              ) : (
                <div className='space-x-10 mt-16'>
                  <div className={clsxm(
                    'animated-underline custom-link inline-flex items-center font-medium',
                    'focus:outline-none focus-visible:rounded focus-visible:ring focus-visible:ring-primary-500 focus-visible:ring-offset-2',
                    'border-b border-dotted border-dark hover:border-black/0',
                    'relative',
                    'cursor-pointer'
                  )}>
                    <span className="text-emerald-500">
                      Individual
                    </span>
                    <input onChange={handleFileChange} className="absolute inset-0 opacity-0 cursor-pointer" type="file" />
                  </div>
                  <div  className={clsxm(
                    'animated-underline custom-link inline-flex items-center font-medium',
                    'focus:outline-none focus-visible:rounded focus-visible:ring focus-visible:ring-primary-500 focus-visible:ring-offset-2',
                    'border-b border-dotted border-dark hover:border-black/0',
                    'relative',
                    'cursor-pointer'
                  )}>
                    <span className="text-emerald-500">
                      Business
                    </span>
                    <input onChange={handleFileChange} className="absolute inset-0 opacity-0 cursor-pointer" type="file" />
                  </div>
                </div>
              )
            }
            
          </div>
        </section>
      </main>
    </Layout>
  );
}
