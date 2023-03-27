import * as React from 'react';

import Header from './Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = React.useState<'dark' | 'light'>('light');
  // Put Header or Footer Here
  return (
    <>
      <Header></Header>
      {children}
      <section className='body-font tails-selected-element mt-16 bg-white text-gray-700'>
        <div className='layout flex flex-col items-center border-t py-8 sm:flex-row'>
          <a
            className='logo select-none text-xl font-black leading-none text-gray-900'
            href='/'
          >
            TrustLink
          </a>
          <span className='mt-4 inline-flex items-center justify-center space-x-5 sm:ml-auto sm:mt-0 sm:justify-start'>
            © FTEC5520 Group Project 2023
          </span>
        </div>
      </section>
    </>
  );
}
