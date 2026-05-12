import DestinationsCard from "@/components/Home/DestinationsPage/DestinationsCard";
import { destinationsData } from "@/lib/destinationsData";


const DestinationPage =async () => {
    const data = await destinationsData();
    console.log("Destinations Data:", data);
    return (
        <div className="container mx-auto">
            <div className="text-center my-10 space-y-3">
                 <h1 className="text-3xl font-bold ">Explore All Destinations</h1>
                 <p>Find your perfect travel experience from our curated collection</p>
            </div>
            <div className="w-7xl mx-auto my-10 grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    data.map(destination => <DestinationsCard key={destination._id  } destination={destination} />)
                }
            </div>

        </div>
    );
};

export default DestinationPage;