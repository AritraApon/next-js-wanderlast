"use client";

import { authClient } from "@/lib/auth-client"; // Tomar auth config file
import { useRouter } from "next/navigation";
import { MapPin, Plane, Globe, TrendingUp, DollarSign, Edit, } from "lucide-react";
import Image from "next/image";
import EditModal from "./EditModal";

export default function ProfilePage() {
    const { data: session, isPending } = authClient.useSession();
    const router = useRouter();

    if (isPending) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

    if (!session) {
        router.push("/login");
        return null;
    }

    const { user } = session;

    // Dummy statistics (Eigulo database theke dynamic-ly ante hobe)
    const stats = [
        { label: "Total Bookings", value: "12", icon: <Plane className="text-cyan-500" />, bg: "bg-cyan-50" },
        { label: "Countries Visited", value: "18", icon: <Globe className="text-green-500" />, bg: "bg-green-50" },
        { label: "Upcoming Trips", value: "2", icon: <TrendingUp className="text-orange-500" />, bg: "bg-orange-50" },
        { label: "Total Spent", value: "$15,750", icon: <DollarSign className="text-purple-500" />, bg: "bg-purple-50" },
    ];

    return (
        <div className="max-w-6xl mx-auto p-6 md:p-12">
            <header className="mb-8">
                <h1 className="text-4xl font-serif text-slate-800">My Profile</h1>
                <p className="text-slate-500 mt-2">Manage your account settings and travel preferences</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left Column: Profile Card */}
                <div className="bg-white border rounded-lg p-6 shadow-sm flex flex-col items-center">
                    <div className="relative mb-4">
                        <Image
                    src={(user?.image && user.image.includes('@') === false) ? user.image : "/avatar.png"}
                            alt={user.name}
                            width={300}
                            height={300}
                            className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                        />
                        <button className="absolute bottom-1 right-1 bg-cyan-500 p-2 rounded-full text-white shadow-md hover:bg-cyan-600 transition">
                            <Edit size={16} />
                        </button>
                    </div>

                    <h2 className="text-xl font-bold text-slate-800">{user.name}</h2>
                    <div className="flex items-center text-slate-500 text-sm mt-1">

                        <span>{user?.email}</span>
                    </div>

                    <div className="w-full mt-6 pt-6 border-t space-y-3">
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-400">Member since</span>
                            <span className="font-bold text-slate-700">
                                {new Date(user.createdAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                            </span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-400">Nationality</span>
                            <span className="font-bold text-slate-700">United States</span>
                        </div>
                    </div>

                 <EditModal/>
                </div>

                {/* Right Column: Statistics Grid */}
                <div className="md:col-span-2">
                    <h3 className="text-lg font-bold text-slate-800 mb-4">Travel Statistics</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {stats.map((stat, index) => (
                            <div key={index} className="bg-white border rounded-lg p-6 flex justify-between items-center shadow-sm">
                                <div>
                                    <p className="text-slate-400 text-sm mb-1">{stat.label}</p>
                                    <p className="text-2xl font-bold text-slate-800">{stat.value}</p>
                                </div>
                                <div className={`${stat.bg} p-3 rounded-full`}>
                                    {stat.icon}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}