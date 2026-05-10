import AddFromData from '@/components/AllPages/AddNewTravelPackage/AddFromData';
import postFeaturedData from '@/lib/postFeaturedData';

const AddNewTravelPackage = () => {
  return (
    <section className="container mx-auto px-2 py-10">
      <div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Add New Travel Package
        </h2>
      </div>

      <AddFromData postAction={postFeaturedData} />
    </section>
  );
};

export default AddNewTravelPackage;
