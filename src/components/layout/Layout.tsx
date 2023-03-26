import * as React from 'react';
import Header from './Header'
import Button from '@/components/buttons/Button';
import ButtonLink from '@/components/links/ButtonLink';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = React.useState<'dark' | 'light'>('light');
  // Put Header or Footer Here
  return (  
    <>
      <Header></Header>
      {children}
      <section className="text-gray-700 bg-white body-font tails-selected-element mt-16">
        <div className="container flex flex-col items-center py-8 mx-auto max-w-6xl sm:flex-row border-t">
          <a className="text-xl font-black leading-none text-gray-900 select-none logo" href="/">TrustLink
</a>
          <span className="inline-flex justify-center mt-4 space-x-5 sm:ml-auto sm:mt-0 sm:justify-start items-center">© 5520 DID system 2023</span>
        </div>
      </section>
    </>
  );
}
