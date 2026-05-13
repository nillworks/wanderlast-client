'use client';

import { useState } from 'react';
import Link from 'next/link';
import ActiveLink from './ActiveLink';
import { useSession } from '@/lib/auth-client';
import UserMenu from '../AllPages/authUi/UserMenu';

const navLinks = [
  { id: 1, name: 'Home', path: '/' },
  { id: 2, name: 'Destinations', path: '/destinations' },
  { id: 3, name: 'My Bookings', path: '/bookings' },
];

const authLinks = [
  { id: 1, name: 'Login', path: '/signin' },
  { id: 2, name: 'Sign Up', path: '/signup' },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const { data } = useSession();
  const user = data?.user;

  return (
    <nav className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-2">
        <div className="flex items-center justify-between h-16">
          {/* Left Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <ActiveLink key={link.id} href={link.path} name={link.name} />
            ))}
          </div>

          {/* Logo */}
          <Link href="/" className="text-3xl font-bold text-cyan-600">
            Wanderlast
          </Link>

          {/* Right Menu */}
          <div className="hidden md:flex items-center gap-6">
            {/* Authenticated User */}
            {user ? (
              <UserMenu user={user} />
            ) : (
              <>
                {authLinks.map(link => (
                  <ActiveLink key={link.id} href={link.path} name={link.name} />
                ))}
              </>
            )}
          </div>

          {/* Mobile Button */}
          <button onClick={() => setOpen(!open)} className="md:hidden">
            {open ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            open ? 'max-h-[500px] opacity-100 pb-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-4 pt-2">
            {navLinks.map(link => (
              <ActiveLink key={link.id} href={link.path} name={link.name} />
            ))}

            {/* Auth section */}
            {user ? (
              <UserMenu user={user} />
            ) : (
              authLinks.map(link => (
                <ActiveLink key={link.id} href={link.path} name={link.name} />
              ))
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
