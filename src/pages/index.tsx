import * as React from 'react';

import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      <main>
        <section className='bg-[rgba(0,0,0,0.5)] bg-[url("/images/bg.png")] bg-blend-multiply'>
          <div className='layout relative flex min-h-screen flex-col items-center justify-center text-center'>
            <div className='mx-auto max-w-lg pt-20 pb-28 text-center md:max-w-none'>
              <h1 className='text-4xl font-extrabold tracking-tight text-white lg:text-7xl'>
                <span className='inline md:block'>
                  Endless possibilities with your secure digital identity
                </span>
              </h1>
              <div className='mx-auto mt-3 text-2xl font-light text-white md:mt-6 md:max-w-lg md:text-4xl'>
                Blockchain Digital Identity Platform
              </div>
              <a href='/register'>
                <button className='mt-10 rounded-md bg-emerald-500 py-2 px-4 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-emerald-900 hover:bg-emerald-400'>
                  Register
                </button>
              </a>
            </div>
          </div>
        </section>
        <section className='bg-white'>
          <div className='layout relative mt-16 flex flex-col items-center justify-center text-center'>
            <div className='mx-auto w-full max-w-lg px-4 text-left md:max-w-none'>
              <div className='flex justify-between'>
                <div>
                  <h2>DID Register</h2>
                  <ArrowLink className='text-emerald-500' href='/did'>
                    DID Register
                  </ArrowLink>
                </div>
                <div>
                  <h2>Identity Certification</h2>
                  <ArrowLink className='text-emerald-500' href='/ic'>
                    Identity Certification
                  </ArrowLink>
                </div>
                <div>
                  <h2>Service And Resource</h2>
                  <div>
                    <ArrowLink className='text-emerald-500' href='/sr'>
                      Real Estate Transaction
                    </ArrowLink>
                  </div>
                  <div>
                    <ArrowLink className='text-emerald-500' href='/sr'>
                      Provident Fund Access
                    </ArrowLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
