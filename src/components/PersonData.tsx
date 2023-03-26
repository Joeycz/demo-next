import React, { useEffect } from 'react';
import Button from '@/components/buttons/Button';

export default function PersonData(props:any) {
  const [mode, setMode] = React.useState<'dark' | 'light'>('light');
  const [key, setKey] = React.useState('');
  const [pubkey, setPubkey] = React.useState('');
  const [ssc, setSsc] = React.useState('');
  const [did, setDid] = React.useState('');
  const getData = () => {
    if (typeof window !== 'undefined') {
      setKey(localStorage.getItem('key') || '')
      setPubkey(localStorage.getItem('pubkey') || '')
      setSsc(localStorage.getItem('ssc') || '')
      setDid(localStorage.getItem('did') || '')
    }
  }
  useEffect(() => {
    // 在客户端使用 localStorage
    if (typeof window !== 'undefined') {
      getData()
    }
  }, []);

  

  const clear = () => {
    localStorage.clear()
    getData()
  }
  // Put Header or Footer Here
  return (  
    <div className="text-left px-40 my-20">
      <div className="mt-6">
        <h3>Private Key:</h3>
        <div className="text-emerald-500 bg-gray-200 py-1 px-4 mt-2 break-words">{ key }</div>
      </div>
      <div className="mt-6">
        <h3>Public Key:</h3>
        <div className="text-emerald-500 bg-gray-200 py-1 px-4 mt-2 break-words">{ pubkey }</div>
      </div>
      <div className="mt-6">
        <h3>SC (Self-Signed Certificate):</h3>
        <div className="text-emerald-500 bg-gray-200 py-1 px-4 mt-2 break-words">{ ssc }</div>
      </div>
      <div className="mt-6">
        <h3>DID:</h3>
        <div className="text-emerald-500 bg-gray-200 py-1 px-4 mt-2 break-words">{ did }</div>
      </div>
      {props.deregister !== '0' && (<div className="mt-6">
        <Button variant='light' onClick={clear}>Deregister</Button>
      </div>)
      }
    </div>
  );
}
