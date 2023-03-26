import * as React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';
import ButtonLink from '@/components/links/ButtonLink';

const links = [
  { href: '/register', label: 'Register' },
  { href: '/center', label: 'Personal Center' },
];

export default function Header() {
  return (
    <header className='sticky top-0 z-50 bg-white backdrop-blur-xl'>
      <div className='layout flex h-14 items-center justify-between'>
        <UnstyledLink href='/' className='font-bold hover:text-gray-600'>
        TrustLink
        </UnstyledLink>
        <nav>
          <ul className='flex items-center justify-between space-x-4'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <ButtonLink
                  variant='dark'
                  href={href}
                >
                  { label }
                </ButtonLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
