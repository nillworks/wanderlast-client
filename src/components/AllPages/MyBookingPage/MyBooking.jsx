import getMyBookingData from '@/lib/getMyBookingData';
import MyBookingCard from './MyBookingCard';

const MyBooking = async () => {
  const bookingData = await getMyBookingData();
  const bookings = bookingData?.allBookingData;

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="mb-10">
        <h1 className="text-5xl font-bold text-gray-900">My Bookings</h1>

        <p className="text-gray-500 mt-3">
          Manage and view your upcoming travel plans
        </p>
      </div>

      <div className="space-y-5">
        {bookings.length === 0 ? (
          <div className="flex flex-col border border-[#ddd] rounded-lg items-center justify-center py-10 text-center">
            <p className="text-lg font-semibold text-gray-600">
              No bookings available
            </p>
            <p className="text-sm text-gray-400 mt-1">
              You haven’t booked anything yet.
            </p>
          </div>
        ) : (
          <div className="grid gap-4">
            {bookings.map(booking => (
              <MyBookingCard key={booking._id} booking={booking} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MyBooking;
