'use client';

import { useState } from 'react';
import { Avatar } from '@heroui/react';
import { useRouter } from 'next/navigation';
import { signOut } from '@/lib/auth-client';

const UserMenu = ({ user }) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleSignOut = async () => {
    signOut();
    router.push('/signin');
  };

  return (
    <div className="relative">
      {/* Avatar Button */}
      <button
        onClick={() => setOpen(!open)}
        className="rounded-full focus:outline-none"
      >
        <Avatar>
          <Avatar.Image
            alt={user?.name}
            src={user?.image}
            className="cursor-pointer"
          />
          <Avatar.Fallback>
            {user?.name?.slice(0, 2).toUpperCase()}
          </Avatar.Fallback>
        </Avatar>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-3 w-48 bg-white border border-gray-200 shadow-lg rounded-xl overflow-hidden z-50">
          {/* Profile */}
          <button
            onClick={() => {
              router.push('/user-profile');
              setOpen(false);
            }}
            className="w-full cursor-pointer text-left px-4 py-2 hover:bg-gray-100 transition"
          >
            View Profile
          </button>

          {/* Divider */}
          <div className="h-[1px] bg-gray-100" />

          {/* Sign out */}
          <button
            onClick={handleSignOut}
            className="w-full text-left cursor-pointer px-4 py-2 text-red-500 hover:bg-red-50 transition"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
