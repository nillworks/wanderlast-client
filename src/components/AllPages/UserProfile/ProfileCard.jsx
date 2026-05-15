'use client';

import { useSession } from '@/lib/auth-client';
import { Camera, MapPin } from 'lucide-react';
import Image from 'next/image';
import EditProfile from './EditProfile';

function ProfileCard() {
  const { data } = useSession();
  const user = data?.user;

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-md transition hover:shadow-xl">
      {/* Image */}
      <div className="flex flex-col items-center">
        <div className="relative">
          <Image
            src={user?.image}
            alt="profile"
            width={110}
            height={110}
            className="h-28 w-28 rounded-full object-cover ring-4 ring-cyan-100"
          />

          {/* Camera */}
          <button className="absolute bottom-1 right-1 rounded-full bg-cyan-500 p-2 text-white shadow-lg transition hover:scale-110">
            <Camera size={16} />
          </button>
        </div>

        <h2 className="mt-5 text-2xl font-bold text-gray-800">{user?.name}</h2>
      </div>

      {/* Divider */}
      <div className="my-6 border-t border-gray-200"></div>

      {/* Info */}
      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <p className="text-gray-500">Email</p>
          <p className="font-semibold text-gray-800">{user?.email}</p>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-gray-500">Account created</p>
          <p className="font-semibold text-gray-800">
            {user?.createdAt &&
              new Date(user.createdAt).toLocaleString('en-GB', {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
              })}
          </p>
        </div>
      </div>
      <EditProfile />
    </div>
  );
}

export default ProfileCard;
