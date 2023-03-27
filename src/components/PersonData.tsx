import { Tooltip } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';

import Button from '@/components/buttons/Button';

export default function PersonData(props: any) {
  const [copyStatus, setCopyStatus] = useState('');
  const [key, setKey] = React.useState('');
  const [pubkey, setPubkey] = React.useState('');
  const [ssc, setSsc] = React.useState('');
  const [did, setDid] = React.useState('');
  const getData = () => {
    if (typeof window !== 'undefined') {
      setKey(localStorage.getItem('key') || '');
      setPubkey(localStorage.getItem('pubkey') || '');
      setSsc(localStorage.getItem('ssc') || '');
      setDid(localStorage.getItem('did') || '');
    }
  };
  useEffect(() => {
    // 在客户端使用 localStorage
    if (typeof window !== 'undefined') {
      getData();
    }
  }, []);

  const clear = () => {
    localStorage.clear();
    getData();
  };
  const copyToClipboard = (text: any) => {
    console.log('copyToClipboard', text);
    navigator.clipboard.writeText(text);
    setCopyStatus('Copied!');
  };
  // Put Header or Footer Here
  return (
    <div className='my-20 px-40 text-left'>
      <div className='mt-6'>
        <h3>Private Key:</h3>
        <Tooltip className='!w-full' content={copyStatus} trigger='click'>
          <div
            onClick={() => copyToClipboard(key)}
            className='group relative mt-2 break-words bg-gray-200 py-1 px-4 text-emerald-500'
          >
            {key}
            <span
              className='absolute right-0 mx-auto -translate-x-1 translate-y-0 rounded-md bg-gray-600 px-2 py-1 text-xs  
    text-gray-100 opacity-0 transition-opacity group-hover:opacity-50'
            >
              Click to copy
            </span>
          </div>
        </Tooltip>
      </div>
      <div className='mt-6'>
        <h3>Public Key:</h3>
        <Tooltip className='!w-full' content={copyStatus} trigger='click'>
          <div
            onClick={() => copyToClipboard(pubkey)}
            className='group relative mt-2 break-words bg-gray-200 py-1 px-4 text-emerald-500'
          >
            {pubkey}
            <span
              className='absolute right-0 mx-auto -translate-x-1 translate-y-0 rounded-md bg-gray-600 px-2 py-1 text-xs  
      text-gray-100 opacity-0 transition-opacity group-hover:opacity-50'
            >
              Click to copy
            </span>
          </div>
        </Tooltip>
      </div>
      <div className='mt-6'>
        <h3>SSC (Self-Signed Certificate):</h3>
        <Tooltip className='!w-full' content={copyStatus} trigger='click'>
          <div
            onClick={() => copyToClipboard(ssc)}
            className='group relative mt-2 break-words bg-gray-200 py-1 px-4 text-emerald-500'
          >
            {ssc}
            <span
              className='absolute right-0 mx-auto -translate-x-1 translate-y-0 rounded-md bg-gray-600 px-2 py-1 text-xs  
      text-gray-100 opacity-0 transition-opacity group-hover:opacity-50'
            >
              Click to copy
            </span>
          </div>
        </Tooltip>
      </div>
      <div className='mt-6'>
        <h3>DID:</h3>
        <Tooltip className='!w-full' content={copyStatus} trigger='click'>
          <div
            onClick={() => copyToClipboard(did)}
            className='group relative mt-2 break-words bg-gray-200 py-1 px-4 text-emerald-500'
          >
            {did}
            <span
              className='absolute right-0 mx-auto -translate-x-1 translate-y-0 rounded-md bg-gray-600 px-2 py-1 text-xs  
      text-gray-100 opacity-0 transition-opacity group-hover:opacity-50'
            >
              Click to copy
            </span>
          </div>
        </Tooltip>
      </div>
      {props.deregister !== '0' && (
        <div className='mt-6'>
          <Button variant='light' onClick={clear}>
            Deregister
          </Button>
        </div>
      )}
    </div>
  );
}
