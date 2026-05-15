'use client';
import { authClient, useSession } from '@/lib/auth-client';
import { DateField, Label, toast } from '@heroui/react';

import { ArrowRight, Check } from 'lucide-react';
import { useState } from 'react';

const BookingCard = ({ destinationInfo }) => {
  const {
    price,
    category,
    description,
    destinationName,
    duration,
    imageUrl,
    _id,
  } = destinationInfo;
  const { data } = useSession();
  const user = data?.user;
  const [departureDate, setDepartureDate] = useState('');

  // Handle Date
  const handleDateChange = value => {
    if (value) {
      const formattedDate = `${value.year}-${String(value.month).padStart(
        2,
        '0',
      )}-${String(value.day).padStart(2, '0')}`;

      setDepartureDate(formattedDate);
    }
  };

  //  handle booking information
  const handleBookingInfo = async () => {
    const bookingData = {
      departureDate,
      userId: user.id,
      userImage: user.image,
      userName: user.name,
      destinationId: _id,
      destinationName,
      price,
      category,
      description,
      duration,
      imageUrl,
    };

    const { data: tokenData } = await authClient.token();

    const req = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${tokenData?.token}`,
      },
      body: JSON.stringify(bookingData),
    });

    const res = await req.json();
    if (res.acknowledged) {
      toast.success('Booking confirmed successfully!', {
        description:
          'Your destination has been added to your booking list successfully.',
        variant: 'success',
      });
    }

    if (!res.acknowledged) {
      toast.danger('Booking failed', {
        description:
          'Something went wrong while adding your booking. Please try again.',
        variant: 'danger',
      });

      return;
    }
  };

  return (
    <div className="lg:col-span-1">
      <div className="border border-gray-100 rounded-2xl p-6 shadow-xl shadow-gray-100/50 sticky top-6">
        <p className="text-gray-500 text-sm mb-1">Starting from</p>
        <div className="flex items-baseline gap-1 mb-6">
          <span className="text-3xl font-bold text-cyan-500">${price}</span>
          <span className="text-gray-400 text-sm font-normal">per person</span>
        </div>

        <div className="mb-6">
          <div className="mb-6">
            <DateField
              onChange={handleDateChange}
              className="w-full"
              name="date"
            >
              <Label className="mb-2 block text-sm font-medium text-gray-600">
                Select Date
              </Label>

              <DateField.Group className="w-full p-3 bg-gray-50 border border-gray-100 rounded-lg text-gray-600 focus-within:border-cyan-500 focus-within:ring-2 focus-within:ring-cyan-100 transition-all">
                <DateField.Input className="outline-none">
                  {segment => (
                    <DateField.Segment
                      segment={segment}
                      className="text-gray-700"
                    />
                  )}
                </DateField.Input>
              </DateField.Group>
            </DateField>
          </div>
        </div>

        <button
          onClick={handleBookingInfo}
          className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3.5 rounded-lg flex items-center justify-center gap-2 transition-all mb-6"
        >
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
  );
};

export default BookingCard;
