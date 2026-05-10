'use client';

import { useState } from 'react';
import Link from 'next/link';
import ActiveLink from './ActiveLink';

const navLinks = [
  {
    id: 1,
    name: 'Home',
    path: '/',
  },
  {
    id: 2,
    name: 'Destinations',
    path: '/destinations',
  },
  {
    id: 3,
    name: 'My Bookings',
    path: '/bookings',
  },
  {
    id: 4,
    name: 'Admin',
    path: '/admin',
  },
];

const authLinks = [
  {
    id: 1,
    name: 'Login',
    path: '/login',
  },
  {
    id: 2,
    name: 'Sign Up',
    path: '/signup',
  },
];

const NavBer = () => {
  const [open, setOpen] = useState(false);

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
            <ActiveLink href="/profile" name="Profile" />

            {authLinks.map(link => (
              <ActiveLink key={link.id} href={link.path} name={link.name} />
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)}>
              {open ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
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

            <ActiveLink href="/profile" name="Profile" />

            {authLinks.map(link => (
              <ActiveLink key={link.id} href={link.path} name={link.name} />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBer;
