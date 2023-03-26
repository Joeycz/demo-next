import React, { useState } from 'react';
import clsx from 'clsx';
import clsxm from '@/lib/clsxm';

import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import PersonData from '@/components/PersonData'
import { ImSpinner2 } from 'react-icons/im';


/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import Vercel from '~/svg/Vercel.svg';


function randomString(length:any, mix = true) {
  var str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var str2 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var result = '';
  for (var i = length; i > 0; --i) {
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

export default function Forms(props:any) {
  const [mode, setMode] = React.useState<'dark' | 'light'>('light');
  const [file, setFile] = useState(null);
  const [did, setDid] = useState('');
  const [key, setKey] = useState('');
  const [ssc, setSsc] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState('');
  const [success, setSuccess] = useState('');
  const [subsuccess, setSubsuccess] = useState('');

  const submit = (event:any) => {
    const lkey = localStorage.getItem('key')
    const lpubkey = localStorage.getItem('pubkey')
    const lssc = localStorage.getItem('ssc')
    const ldid = localStorage.getItem('did')

    if (props.type === 'did') {
      setLoading('Sending to Authentication Service Provider Node')
      if (ldid === did && key === lkey) {
        console.log('Success')
        setTimeout(() => {
          setLoading('')
          setSuccess('success')
        }, 2000)
      } else {
        console.log('fail', did, key, ldid, lkey)
        setTimeout(() => {
          setLoading('')
          setError('Wrong Data')
        }, 5000)
      }
    } else if (props.type === 'ic' && !props.subtype) {
      setLoading('Sending to ldentity and Attribute Provider Node')
      if (ldid === did && ssc === lssc) {
        console.log('Success')
        setTimeout(() => {
          setLoading('')
          setSuccess('DID Activated. Real Name Authentication Completed')
        }, 2000)
      } else {
        console.log('fail', did, key, ldid, lkey)
        setTimeout(() => {
          setLoading('')
          setError('Wrong Data')
        }, 5000)
      }
    } else if (props.type === 'ic' && props.subtype === 'sr') {
      setLoading('Sending to Service Provider Node')
      setTimeout(() => {
        setLoading('Sending to Authentication Service Provider Node')
      }, 2000)
      setTimeout(() => {
        setLoading('')
        setSubsuccess('Identity Authentication Completed')
      }, 4000)
      setTimeout(() => {
        setLoading('sending to Service Provider Node')
      }, 6000)
      setTimeout(() => {
        setLoading('')
        setSuccess('Real Estate Transaction is available')
      }, 8000)
      return
      if (ldid === did && ssc === lssc) {
        setTimeout(() => {
          setLoading('Sending to Authentication Service Provider Node')
        }, 2000)
        setTimeout(() => {
          setLoading('')
          setSubsuccess('Identity Authentication Completed')
        }, 4000)
        setTimeout(() => {
          setLoading('sending to Service Provider Node')
        }, 6000)
        setTimeout(() => {
          setLoading('')
          setSuccess('Real Estate Transaction is available')
        }, 8000)
      } else {
        console.log('fail', did, key, ldid, lkey)
        setTimeout(() => {
          setLoading('')
          setError('Wrong Data')
        }, 5000)
      }
    }
  }
  const handleDidChange = (event:any) => {
    console.log(event.target.value)
    setDid(event.target.value)
  }
  const handleKeyChange = (event:any) => {
    console.log(event.target.value)
    setKey(event.target.value)
  }
  const handleSscChange = (event:any) => {
    console.log(event.target.value)
    setSsc(event.target.value)
  }
  return (
    <>
      {
        error && (
          <p className="font-extrabold tracking-tight text-4xl md:text-7xl text-red-500">{ error }</p>
        )
      }
      {subsuccess && (<p className="font-extrabold tracking-tight text-4xl md:text-7xl text-emerald-500">{ subsuccess }</p>)
      }
      {
        loading ? (
          <>
            <div
              className={clsxm(
                'flex justify-center',
                {
                  'text-white': false,
                  'text-black': true,
                  'text-primary-500': false,
                }
              )}
            >
              <ImSpinner2 className='animate-spin w-20 h-20 fill-gray-200' />
            </div>
            <p className="font-extrabold tracking-tight text-2xl md:text-4xl text-gray-500">{ loading }</p>
          </>
        ) :
          (success || subsuccess) ? (
            <>
              {success && (<p className="font-extrabold tracking-tight text-4xl md:text-7xl text-emerald-500">{ success }</p>)
              }
              { props.type === 'did' && (
                  <div className="mt-6">
                    <h3>DID:</h3>
                    <div className="text-emerald-500 bg-gray-200 py-1 px-4 mt-2 break-words">{ did }</div>
                  </div>
                )
              }
              { props.type === 'ic' && !props.subtype && (
                  <>
                    <div className="mt-6">
                      <h3>Digital Certificate:</h3>
                      <div className="text-emerald-500 bg-gray-200 py-1 px-4 mt-2 break-words">{ 'Digital Certificate' }</div>
                    </div>
                    <div className="mt-6">
                      <h3>VC:</h3>
                      <div className="text-emerald-500 bg-gray-200 py-1 px-4 mt-2 break-words">{ 'VC' }</div>
                    </div>
                  </>
                )
              }
            </>
          ) : (
            <>
              {
                props.type === 'ic' && (
                  <div>
                    <div className="w-full pb-8 mx-4">
                      <div className="w-full rounded-t-md px-4 py-3 flex flex-col gap-1">
                        <div className="w-full flex justify-between items-center">
                          <h3 className="truncate text-3xl font-bold text-gray-900 cursor-pointer">Ssc</h3>
                        </div>
                      </div>
                      <div className="w-full max-w-5xl"></div>
                      <div className="relative mt-2 mx-4 rounded-md shadow-sm">
                        <textarea onChange={handleSscChange} autoComplete="off" className="shadow-md block w-full rounded-md border-0 py-2 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6" data-dl-input-translation="true" style={{height: '40px !important'}} placeholder="you can get your did in personal center"></textarea>
                      </div>
                    </div>
                  </div>
                )
              }
              {
                props.type === 'did' && (
                  <div>
                    <div className="w-full pb-8 mx-4">
                      <div className="w-full rounded-t-md px-4 py-3 flex flex-col gap-1">
                        <div className="w-full flex justify-between items-center">
                          <h3 className="truncate text-3xl font-bold text-gray-900 cursor-pointer">Public Key</h3>
                        </div>
                      </div>
                      <div className="w-full max-w-5xl"></div>
                      <div className="relative mt-2 mx-4 rounded-md shadow-sm">
                        <textarea onChange={handleKeyChange} autoComplete="off" className="shadow-md block w-full rounded-md border-0 py-2 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6" data-dl-input-translation="true" style={{height: '40px !important'}} placeholder="you can get your did in personal center"></textarea>
                      </div>
                    </div>
                  </div>
                )
              }
              {
                (props.type === 'did' || props.type === 'ic') && (
                  <div>
                    <div className="w-full pb-8 mx-4">
                      <div className="w-full rounded-t-md px-4 py-3 flex flex-col gap-1">
                        <div className="w-full flex justify-between items-center">
                          <h3 className="truncate text-3xl font-bold text-gray-900 cursor-pointer">DID</h3>
                        </div>
                      </div>
                      <div className="w-full max-w-5xl"></div>
                      <div className="relative mt-2 mx-4 rounded-md shadow-sm">
                        <textarea onChange={handleDidChange} autoComplete="off" className="shadow-md block w-full rounded-md border-0 py-2 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6" data-dl-input-translation="true" style={{height: '40px !important'}} placeholder="you can get your did in personal center"></textarea>
                      </div>
                    </div>
                  </div>
                )
              }
            </>
          )
      }
      {
        (props.subtype ? !(success || subsuccess) : !success) && (
          <div>
            <button disabled={!!loading} onClick={submit} className="mt-10 rounded-md bg-emerald-500 py-2 px-4 text-sm font-semibold text-white ring-inset ring-emerald-900 hover:bg-emerald-400 disabled:bg-gray-500 disabled:opacity-50">Send</button>
          </div>
        )
      }
    </>
  );
}
