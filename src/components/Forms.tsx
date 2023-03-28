import React, { useState } from 'react';
import { ImSpinner2 } from 'react-icons/im';

import clsxm from '@/lib/clsxm';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

function randomString(length: any, mix = true) {
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

export default function Forms(props: any) {
  const [mode, setMode] = React.useState<'dark' | 'light'>('light');
  const [file, setFile] = useState(null);
  const [did, setDid] = useState('');
  const [key, setKey] = useState('');
  const [ssc, setSsc] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState('');
  const [success, setSuccess] = useState('');
  const [subsuccess, setSubsuccess] = useState('');

  const submit = (event: any) => {
    const lkey = localStorage.getItem('key');
    const lpubkey = localStorage.getItem('pubkey');
    const lssc = localStorage.getItem('ssc');
    const ldid = localStorage.getItem('did');

    if (props.type === 'did') {
      setLoading('Sending to Authentication Service Provider Node');
      if (ldid === did && key === lpubkey) {
        console.log('Success');
        setTimeout(() => {
          setLoading('');
          setSuccess('Success');
        }, 2000);
      } else {
        console.log('fail', did, key, ldid, lpubkey);
        setTimeout(() => {
          setLoading('');
          setError('Wrong Data');
        }, 5000);
      }
    } else if (props.type === 'ic' && !props.subtype) {
      setLoading('Sending to ldentity and Attribute Provider Node');
      if (ldid === did && ssc === lssc) {
        console.log('Success');
        setTimeout(() => {
          setLoading('');
          setSuccess('DID Activated<br />Real Name Authentication Completed');
        }, 2000);
      } else {
        console.log('fail', did, key, ldid, lkey);
        setTimeout(() => {
          setLoading('');
          setError('Wrong Data');
        }, 5000);
      }
    } else if (props.type === 'ic' && props.subtype === 'sr') {
      setLoading('Sending to Service Provider Node');
      setTimeout(() => {
        setLoading('Sending to Authentication Service Provider Node');
      }, 2000);
      setTimeout(() => {
        setLoading('');
        setSubsuccess('Identity Authentication Completed');
      }, 4000);
      setTimeout(() => {
        setLoading('Sending to Service Provider Node');
      }, 6000);
      setTimeout(() => {
        setLoading('');
        setSuccess('Real Estate Transaction is Available');
      }, 8000);
      return;
    }
  };
  const handleDidChange = (event: any) => {
    console.log(event.target.value);
    setDid(event.target.value);
  };
  const handleKeyChange = (event: any) => {
    console.log(event.target.value);
    setKey(event.target.value);
  };
  const handleSscChange = (event: any) => {
    console.log(event.target.value);
    setSsc(event.target.value);
  };
  return (
    <>
      {error && (
        <p className='text-4xl font-extrabold tracking-tight text-red-500 md:text-7xl'>
          {error}
        </p>
      )}
      {subsuccess && (
        <p className='text-4xl font-extrabold tracking-tight text-emerald-500 md:text-7xl'>
          {subsuccess}
        </p>
      )}
      {loading ? (
        <>
          <div
            className={clsxm('flex justify-center', {
              'text-white': false,
              'text-black': true,
              'text-primary-500': false,
            })}
          >
            <ImSpinner2 className='h-20 w-20 animate-spin fill-gray-200' />
          </div>
          <p className='text-2xl font-extrabold tracking-tight text-gray-500 md:text-4xl'>
            {loading}
          </p>
        </>
      ) : success || subsuccess ? (
        <>
          {success && (
            <p className='text-4xl font-extrabold tracking-tight text-emerald-500 md:text-7xl'  dangerouslySetInnerHTML={{ __html: success }}></p>
          )}
          {props.type === 'ic' && !props.subtype && (
            <>
              <div className='mt-6'>
                <h3>Digital Certificate:</h3>
                <div className='mt-2 break-words bg-gray-200 py-1 px-4 text-emerald-500'>
                  Digital Certificate
                </div>
              </div>
              <div className='mt-6'>
                <h3>VC:</h3>
                <div className='mt-2 break-words bg-gray-200 py-1 px-4 text-emerald-500'>
                  VC
                </div>
              </div>
            </>
          )}
        </>
      ) : (
        <>
          {props.type === 'ic' && (
            <div>
              <div className='mx-4 w-full pb-8'>
                <div className='flex w-full flex-col gap-1 rounded-t-md px-4 py-3'>
                  <div className='flex w-full items-center justify-between'>
                    <h3 className='cursor-pointer truncate text-3xl font-bold text-gray-900'>
                      SSC
                    </h3>
                  </div>
                </div>
                <div className='w-full max-w-5xl'></div>
                <div className='relative mx-4 mt-2 rounded-md shadow-sm'>
                  <textarea
                    onChange={handleSscChange}
                    autoComplete='off'
                    className='block w-full rounded-md border-0 py-2 pr-10 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6'
                    data-dl-input-translation='true'
                    style={{ height: '40px !important' }}
                    placeholder='you can get your SSC in personal center'
                  ></textarea>
                </div>
              </div>
            </div>
          )}
          {props.type === 'did' && (
            <div>
              <div className='mx-4 w-full pb-8'>
                <div className='flex w-full flex-col gap-1 rounded-t-md px-4 py-3'>
                  <div className='flex w-full items-center justify-between'>
                    <h3 className='cursor-pointer truncate text-3xl font-bold text-gray-900'>
                      Public Key
                    </h3>
                  </div>
                </div>
                <div className='w-full max-w-5xl'></div>
                <div className='relative mx-4 mt-2 rounded-md shadow-sm'>
                  <textarea
                    onChange={handleKeyChange}
                    autoComplete='off'
                    className='block w-full rounded-md border-0 py-2 pr-10 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6'
                    data-dl-input-translation='true'
                    style={{ height: '40px !important' }}
                    placeholder='you can get your Public Key in personal center'
                  ></textarea>
                </div>
              </div>
            </div>
          )}
          {(props.type === 'did' || props.type === 'ic') && (
            <div>
              <div className='mx-4 w-full pb-8'>
                <div className='flex w-full flex-col gap-1 rounded-t-md px-4 py-3'>
                  <div className='flex w-full items-center justify-between'>
                    <h3 className='cursor-pointer truncate text-3xl font-bold text-gray-900'>
                      DID
                    </h3>
                  </div>
                </div>
                <div className='w-full max-w-5xl'></div>
                <div className='relative mx-4 mt-2 rounded-md shadow-sm'>
                  <textarea
                    onChange={handleDidChange}
                    autoComplete='off'
                    className='block w-full rounded-md border-0 py-2 pr-10 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6'
                    data-dl-input-translation='true'
                    style={{ height: '40px !important' }}
                    placeholder='you can get your DID in personal center'
                  ></textarea>
                </div>
              </div>
            </div>
          )}
        </>
      )}
      {(props.subtype ? !(success || subsuccess) : !success) && (
        <div>
          <button
            disabled={!!loading}
            onClick={submit}
            className='mt-10 rounded-md bg-emerald-500 py-2 px-4 text-sm font-semibold text-white ring-inset ring-emerald-900 hover:bg-emerald-400 disabled:bg-gray-500 disabled:opacity-50'
          >
            Send
          </button>
        </div>
      )}
    </>
  );
}
