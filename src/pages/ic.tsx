import React, { useState } from 'react';
import clsx from 'clsx';
import clsxm from '@/lib/clsxm';

import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';
import PersonData from '@/components/PersonData'
import Forms from '@/components/Forms'


/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import Vercel from '~/svg/Vercel.svg';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function RegisterPage() {
  const [mode, setMode] = React.useState<'dark' | 'light'>('light');
  const [file, setFile] = useState(null);

  const submit = (event:any) => {
    const key = sessionStorage.getItem('key')
    const pubkey = sessionStorage.getItem('pubkey')
    const ssc = sessionStorage.getItem('ssc')
    const did = sessionStorage.getItem('did')
    console.log(did)
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
            )}>
              <Forms type="ic"></Forms>
          </div>
        </section>
      </main>
    </Layout>
  );
}
