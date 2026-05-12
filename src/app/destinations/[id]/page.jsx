import DestinationsDetailsCard from '@/components/Home/DestinationsPage/DestinationsDetailsCard';
import { getDestinationsDetailsData } from '@/lib/destinationsData';
import React from 'react';

const DestinationsDetailsPage =async({params}) => {
      const {id} = await params ;
     const detailsData = await getDestinationsDetailsData(id)


    return (
        <div className='container mx-auto my-20'>

          <div>
      <DestinationsDetailsCard  detailsData={detailsData }  />
          </div>
        </div>
    );
};

export default DestinationsDetailsPage;