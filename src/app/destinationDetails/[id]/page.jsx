import DestinationDetails from '@/components/AllPages/DestinationPage/DestinationDetails';
import getDetailsData from '@/lib/getDetailsData';

const destinationDetailsPage = async ({ params }) => {
  const { id } = await params;
  const existingData = await getDetailsData(id);

  return (
    <div className="px-2">
      <DestinationDetails existingData={existingData} />
    </div>
  );
};

export default destinationDetailsPage;
