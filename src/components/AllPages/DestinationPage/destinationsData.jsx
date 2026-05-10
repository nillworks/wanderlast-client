import DestinationCard from './DestinationCard';
import FilterSection from './FilterSection';

// Sample Data Array
const destinationsData = [
  {
    id: 1,
    title: 'Bali Paradise',
    location: 'Nepal',
    price: 2700,
    duration: '7 Days/6 Nights',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4',
  },
  {
    id: 2,
    title: 'Bali Paradise',
    location: 'Nepal',
    price: 2700,
    duration: '7 Days/6 Nights',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62',
  },
  {
    id: 3,
    title: 'Bali Paradise',
    location: 'Nepal',
    price: 2700,
    duration: '7 Days/6 Nights',
    rating: 4.5,
    image:
      'https://thumbs.dreamstime.com/b/drone-shot-scenic-coastal-view-east-bali-paradise-coastline-aerial-445361053.jpg',
  },
  {
    id: 4,
    title: 'Bali Paradise',
    location: 'Nepal',
    price: 2700,
    duration: '7 Days/6 Nights',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368',
  },
  {
    id: 5,
    title: 'Bali Paradise',
    location: 'Nepal',
    price: 2700,
    duration: '7 Days/6 Nights',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
  },
  {
    id: 6,
    title: 'Bali Paradise',
    location: 'Nepal',
    price: 2700,
    duration: '7 Days/6 Nights',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9',
  },
];

export default function DestinationsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* Header Area */}
        <header className="mb-12">
          <h1 className="text-5xl font-serif text-gray-900 mb-4 tracking-tight">
            Explore All Destinations
          </h1>
          <p className="text-gray-500 text-lg">
            Find your perfect travel experience from our curated collection
          </p>
        </header>

        {/* Filter Section Component */}
        <FilterSection />

        {/* Counter */}
        <div className="flex items-center gap-2 mb-8">
          <span className="text-gray-700 font-semibold">
            Showing {destinationsData.length} destinations
          </span>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinationsData.map(dest => (
            <DestinationCard key={dest.id} destination={dest} />
          ))}
        </div>
      </main>
    </div>
  );
}
