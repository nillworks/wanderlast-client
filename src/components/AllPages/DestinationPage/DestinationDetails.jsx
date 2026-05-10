'use client';
import React from 'react';
import {
  ArrowLeft,
  Edit3,
  Trash2,
  Star,
  Clock,
  MapPin,
  Check,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const DestinationDetails = ({ existingData }) => {
  const {
    name = existingData.destinationName,
    location = existingData.country,
    rating = 4.9,
    reviews = 234,
    duration = existingData.duration,
    price = existingData.price,
    description = existingData.description,
    image = existingData.imageUrl,
  } = existingData || {};

  return (
    <div className="max-w-7xl mx-auto shadow px-4 mt-5 mb-5 rounded-lg border border-[#ddd] py-6 font-sans text-slate-800">
      {/* Top Header Section */}
      <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
        <Link href={`/destinations`}>
          <button className="flex cursor-pointer items-center text-gray-500 hover:text-black transition">
            <ArrowLeft size={18} className="mr-2" />
            Back to Destinations
          </button>
        </Link>
        <div className="flex gap-3">
          <button className=" cursor-pointer flex items-center px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition">
            <Edit3 size={16} className="mr-2 text-gray-600" />
            Edit
          </button>
          <button className=" cursor-pointer flex items-center px-6 py-2 border border-red-200 text-red-500 rounded-md hover:bg-red-50 transition">
            <Trash2 size={16} className="mr-2" />
            Cancel
          </button>
        </div>
      </div>

      {/* Hero Image Section */}
      <div className="relative w-full h-[300px] md:h-[450px] rounded-2xl overflow-hidden mb-8">
        <Image
          width={400}
          height={400}
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left Column: Details */}
        <div className="lg:col-span-2">
          <div className="flex items-center text-gray-500 mb-2">
            <MapPin size={16} className="mr-1" />
            <span className="text-sm uppercase tracking-wide font-medium">
              {location}
            </span>
          </div>

          <h1 className="text-4xl font-bold mb-4">{name}</h1>

          <div className="flex items-center gap-6 mb-8">
            <div className="flex items-center">
              <Star size={18} className="text-green-500 fill-green-500 mr-1" />
              <span className="font-bold">{rating}</span>
              <span className="text-gray-400 ml-1">({reviews} reviews)</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Clock size={18} className="mr-2" />
              <span className="font-medium">{duration}</span>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold mb-3">Overview</h3>
            <p className="text-gray-600 leading-relaxed">
              {description} Experience luxury resorts, tropical landscapes, and
              unforgettable sunsets.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-4">
              {[
                'Luxury beachfront accommodation',
                'Traditional Balinese spa treatment',
                'Sunrise trek to Mount Batur',
                'Visit Uluwatu Temple at sunset',
                'Private beach dinner experience',
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="mt-1 bg-green-50 p-0.5 rounded">
                    <Check size={14} className="text-green-600" />
                  </div>
                  <span className="text-gray-600 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Booking Card */}
        <div className="lg:col-span-1">
          <div className="border border-gray-100 rounded-2xl p-6 shadow-xl shadow-gray-100/50 sticky top-6">
            <p className="text-gray-500 text-sm mb-1">Starting from</p>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-3xl font-bold text-cyan-500">${price}</span>
              <span className="text-gray-400 text-sm font-normal">
                per person
              </span>
            </div>

            <div className="mb-6">
              <input
                type="text"
                defaultValue="05/15/2026"
                className="w-full p-3 bg-gray-50 border border-gray-100 rounded-lg text-gray-600 focus:outline-none"
              />
            </div>

            <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3.5 rounded-lg flex items-center justify-center gap-2 transition-all mb-6">
              Book Now <ArrowRight size={18} />
            </button>

            <div className="space-y-3 border-t pt-6">
              {[
                'Free cancellation up to 7 days',
                'Travel insurance included',
                '24/7 customer support',
              ].map((text, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-sm text-gray-500"
                >
                  <Check size={16} className="text-green-500" />
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetails;
