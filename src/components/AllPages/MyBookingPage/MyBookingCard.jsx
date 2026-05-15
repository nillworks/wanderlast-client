'use client';

import Image from 'next/image';
import { CalendarDays, Clock3, Eye, MapPin, Tag, Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const MyBookingCard = ({ booking }) => {
  const {
    imageUrl,
    destinationName,
    departureDate,
    destinationId,
    price,
    _id,
    category,
    duration,
    userImage,
    userName,
    description,
  } = booking;
  const router = useRouter();

  // Handle Cancel Booking
  const handleBooing = async () => {
    const req = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${_id}`,
      {
        method: 'DELETE',
      },
    );

    const res = await req.json();
    if (res.deletedCount > 0) {
      router.refresh();
    }
    console.log(res);
  };

  return (
    <div className="group bg-white border border-gray-200 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300">
      <div className="flex flex-col lg:flex-row">
        {/* left image */}
        <div className="relative w-full lg:w-[340px] xl:w-[380px] h-[240px] sm:h-[280px] lg:h-auto overflow-hidden">
          <Image
            src={imageUrl}
            alt={destinationName}
            fill
            className="object-cover group-hover:scale-105 transition duration-500"
          />
        </div>

        {/* right content */}
        <div className="flex-1 p-5 sm:p-7 flex flex-col justify-between">
          <div>
            {/* top section */}
            <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-5">
              <div className="space-y-4">
                {/* category */}
                <span className="inline-flex items-center gap-2 bg-cyan-50 text-cyan-600 px-4 py-1.5 rounded-full text-sm font-semibold">
                  <Tag size={15} />
                  {category}
                </span>

                {/* title */}
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-tight">
                  {destinationName}
                </h2>

                {/* description */}
                <p className="text-gray-500 leading-relaxed max-w-2xl">
                  {description}
                </p>
              </div>

              {/* price */}
              <div className="bg-cyan-50 px-6 py-4 rounded-2xl h-fit">
                <p className="text-sm text-gray-500 mb-1">Total Price</p>

                <h3 className="text-4xl font-bold text-cyan-600">${price}</h3>
              </div>
            </div>

            {/* booking info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-2xl">
                <div className="bg-white p-3 rounded-xl shadow-sm">
                  <CalendarDays size={18} className="text-cyan-600" />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Departure Date</p>

                  <h4 className="font-semibold text-gray-700">
                    {departureDate}
                  </h4>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-2xl">
                <div className="bg-white p-3 rounded-xl shadow-sm">
                  <Clock3 size={18} className="text-cyan-600" />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Duration</p>

                  <h4 className="font-semibold text-gray-700">{duration}</h4>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-2xl">
                <div className="bg-white p-3 rounded-xl shadow-sm">
                  <MapPin size={18} className="text-cyan-600" />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Booking ID</p>

                  <h4 className="font-semibold text-gray-700 break-all">
                    {_id}
                  </h4>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-2xl">
                <Image
                  src={userImage}
                  alt={userName}
                  width={52}
                  height={52}
                  className="rounded-full border-2 border-white shadow-md"
                />

                <div>
                  <p className="text-sm text-gray-500">Booked By</p>

                  <h4 className="font-semibold text-gray-700">{userName}</h4>
                </div>
              </div>
            </div>
          </div>

          {/* buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-4 mt-8">
            <button
              onClick={handleBooing}
              className="border cursor-pointer border-red-300 text-red-500 px-6 py-3 rounded-2xl flex items-center justify-center gap-2 hover:bg-red-50 transition font-medium"
            >
              <Trash2 size={18} />
              Cancel Booking
            </button>

            <Link href={`/destinationDetails/${destinationId}`}>
              <button className="bg-cyan-500 cursor-pointer hover:bg-cyan-600 transition text-white px-6 py-3 rounded-2xl flex items-center justify-center gap-2 font-medium shadow-lg shadow-cyan-100">
                <Eye size={18} />
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBookingCard;
