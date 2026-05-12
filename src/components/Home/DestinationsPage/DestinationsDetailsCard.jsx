import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiEdit } from 'react-icons/ci';
import { FaMapMarkerAlt, FaStar, FaCalendarAlt, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import EditButton from './EditButton';
import CancelButton from './CancelButton';

const DestinationsDetailsCard = ({ detailsData }) => {
    // Data check korar jonno optional chaining use kora bhalo
    if (!detailsData) return <div className="text-center py-10">Loading...</div>;

    const { destinationName, country, price, duration, departureDate, imageUrl, description ,category} = detailsData;

    return (
        <div className="max-w-7xl mx-auto p-4 md:p-8">
            {/* Top Navigation */}
            <div className="flex justify-between items-center mb-6">
                <Link href={'/destinations'}><button className="text-gray-500 hover:text-black flex items-center gap-2">
                    ← Back to Destinations
                </button></Link>


                <div className="flex gap-3">
                   <EditButton detailsData={detailsData} />
                  <CancelButton detailsData={detailsData}  />


                </div>
            </div>

            {/* Banner Image */}
            <div className="relative w-full h-[300px] md:h-[500px] rounded-xl overflow-hidden mb-8">
                <Image
                    src={imageUrl || "/placeholder-image.jpg"}
                    alt={destinationName}
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                {/* Left Side: Details */}
                <div className="lg:col-span-2">
                    <div className="flex items-center gap-2 text-gray-500 mb-2">
                        <FaMapMarkerAlt className="text-sm" />
                        <span className="text-sm font-medium uppercase tracking-wider">{country}</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{destinationName}</h1>

                    <div className="flex items-center gap-6 mb-8 text-gray-700">
                        <div className="flex items-center gap-1">
                            <FaStar className="text-yellow-400" />
                            <span className="font-bold">4.9</span>
                            <span className="text-gray-400">(234 reviews)</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaCalendarAlt className="text-gray-400" />
                            <span className="font-medium">{duration}</span>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <section>
                            <h3 className="text-2xl font-bold mb-3">Overview</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                {description}
                            </p>
                        </section>

                        <section>
                            <h3 className="text-2xl font-bold mb-4">Highlights</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    "Luxury beachfront accommodation",
                                    "Traditional Balinese spa treatment",
                                    "Sunrise trek to Mount Batur",
                                    "Visit Uluwatu Temple at sunset",
                                    "Private beach dinner experience"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3 text-gray-700">
                                        <FaCheckCircle className="text-cyan-500 shrink-0" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>

                {/* Right Side: Booking Sidebar */}
                <div className="lg:col-span-1">
                    <div className="sticky top-24 border rounded-2xl p-6 shadow-sm bg-white">
                        <div className="mb-6">
                            <span className="text-gray-500 block">Starting from</span>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-bold text-cyan-600">${price}</span>
                                <span className="text-gray-500">per person</span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="p-3 bg-gray-50 border rounded-lg text-gray-700 font-medium">
                                {new Date(departureDate).toLocaleDateString()}
                            </div>

                            <button className="w-full py-4 bg-cyan-600 hover:bg-cyan-700 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all">
                                Book Now <FaArrowRight />
                            </button>
                        </div>

                        <div className="mt-6 space-y-3">
                            <div className="flex items-center gap-3 text-sm text-gray-600">
                                <FaCheckCircle className="text-green-500" />
                                <span>Free cancellation up to 7 days</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-gray-600">
                                <FaCheckCircle className="text-green-500" />
                                <span>Travel insurance included</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-gray-600">
                                <FaCheckCircle className="text-green-500" />
                                <span>24/7 customer support</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DestinationsDetailsCard;


