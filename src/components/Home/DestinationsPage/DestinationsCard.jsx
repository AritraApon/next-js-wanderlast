import Image from "next/image";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "@heroui/react";

const DestinationsCard = ({ destination }) => {

    const {_id, destinationName, country, category, price, duration, departureDate, imageUrl, description } = destination;

    return (
        <div>
            <div className="border p-3 shadow rounded-lg hover:scale-105 transition duration-300 ">
                <div>
                    <Image src={imageUrl} alt={destinationName} width={400} height={300} className="rounded-lg object-cover mx-auto h-60" />

                </div>

                <div className="my-4 space-y-3 p-3">
                    <div>
                        <div className="flex items-center gap-1"><FaMapMarkerAlt /> <span>{country}</span></div>
                    </div>


                    <div className="flex justify-between items-center ">

                        <div className="space-y-1">
                            <h2 className="text-xl font-bold">{destinationName}</h2>
                            <p className="flex items-center gap-2 text-sm text-gray-500"><FaCalendarAlt /> {departureDate}</p>
                        </div>

                        <div>
                            <p> <span className="text-xl font-bold">${price}</span>/person </p>
                        </div>
                    </div>


                </div>

                <div className="mb-3">
                    <Link href={`/destinations/${_id}`} className='text-lg font-semibold text-blue-500'>
                        Book now
                        <Link.Icon />
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default DestinationsCard;