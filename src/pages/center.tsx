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
            <PersonData></PersonData>
            
          </div>
        </section>
      </main>
    </Layout>
  );
}
