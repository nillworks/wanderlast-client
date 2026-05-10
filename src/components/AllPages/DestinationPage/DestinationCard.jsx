// components/DestinationCard.jsx
import { MapPin, Calendar, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

export default function DestinationCard({ destination }) {
  return (
    <div className="group border border-gray-100 rounded-lg overflow-hidden transition-all hover:shadow-md bg-white">
      {/* Image Section */}
      <div className="relative h-56 w-full">
        <Image
          width={400}
          height={400}
          src={destination.image}
          alt={destination.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded flex items-center gap-1 text-sm font-bold shadow-sm">
          {destination.rating} <span className="text-yellow-500">★</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5">
        <div className="flex items-center gap-1 text-gray-500 text-xs mb-2">
          <MapPin size={14} className="text-gray-400" /> {destination.location}
        </div>

        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-800 leading-tight">
            {destination.title}
          </h3>
          <div className="text-right">
            <p className="text-lg font-bold text-gray-900">
              ${destination.price}
            </p>
            <p className="text-[10px] text-gray-500 uppercase">/Person</p>
          </div>
        </div>

        <div className="flex items-center gap-1 text-gray-600 text-sm mb-5">
          <Calendar size={16} className="text-gray-400" />{' '}
          {destination.duration}
        </div>

        <button className="flex cursor-pointer items-center gap-1 text-cyan-500 font-bold text-xs uppercase tracking-widest group-hover:gap-2 transition-all">
          Book Now <ArrowUpRight size={18} />
        </button>
      </div>
    </div>
  );
}
