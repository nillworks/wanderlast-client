import { Plane, Globe, TrendingUp, DollarSign } from 'lucide-react';
import ProfileCard from './ProfileCard';
import StatisticsSection from './StatisticsSection';

export default function ProfilePage() {
  const stats = [
    {
      id: 1,
      title: 'Total Bookings',
      value: '12',
      icon: <Plane size={22} />,
      bg: 'bg-sky-100',
      color: 'text-sky-500',
    },
    {
      id: 2,
      title: 'Countries Visited',
      value: '18',
      icon: <Globe size={22} />,
      bg: 'bg-green-100',
      color: 'text-green-500',
    },
    {
      id: 3,
      title: 'Upcoming Trips',
      value: '2',
      icon: <TrendingUp size={22} />,
      bg: 'bg-orange-100',
      color: 'text-orange-500',
    },
    {
      id: 4,
      title: 'Total Spent',
      value: '$15,750',
      icon: <DollarSign size={22} />,
      bg: 'bg-pink-100',
      color: 'text-pink-500',
    },
  ];

  return (
    <div className="px-4 py-10 md:px-8 lg:px-16">
      {/* Heading */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-800 md:text-5xl">
          My Profile
        </h1>

        <p className="mt-3 text-sm text-gray-500 md:text-base">
          Manage your account settings and travel preferences
        </p>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Left */}
        <div className="lg:col-span-1">
          <ProfileCard />
        </div>

        {/* Right */}
        <div className="lg:col-span-2">
          <StatisticsSection stats={stats} />
        </div>
      </div>
    </div>
  );
}
