import getFeaturedData from '@/lib/getFeaturedData';
import DestinationCard from './DestinationCard';
import FilterSection from './FilterSection';
import { Button } from '@heroui/react';
import { Plus } from 'lucide-react';
import Link from 'next/link';

export default async function DestinationsPage() {
  const data = await getFeaturedData();
  const destinationsData = data.allWanderlustData;

  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* Header Area */}
        <div className="flex items-start justify-between">
          <header className="mb-12">
            <h1 className="text-5xl font-serif text-gray-900 mb-4 tracking-tight">
              Explore All Destinations
            </h1>
            <p className="text-gray-500 text-lg">
              Find your perfect travel experience from our curated collection
            </p>
          </header>
          <div>
            <Link href={`/add-new-travel-package`}>
              <Button>
                <Plus />
                Add Destinations
              </Button>
            </Link>
          </div>
        </div>

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
            <DestinationCard key={dest._id} destination={dest} />
          ))}
        </div>
      </main>
    </div>
  );
}
