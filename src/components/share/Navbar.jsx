'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react"; // install:

const Navbar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const getLinkStyle = (path) =>
        pathname === path
            ? "text-blue-600 border-b-2 border-blue-600 pb-1 font-semibold"
            : "text-gray-700 hover:text-blue-500 transition-all";

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Destinations", href: "/destinations" },
        { name: "My Bookings", href: "/my-bookings" },
        { name: "Admin", href: "/admin" },
    ];

    const authLinks = [
        { name: "Profile", href: "/profile" },
        { name: "Login", href: "/login" },
        { name: "Sign Up", href: "/signup" },
    ];

    return (
        <div className="bg-slate-50 sticky top-0 z-50 shadow-sm">
            <nav className="max-w-7xl container mx-auto  flex justify-between items-center p-4">

                {/* 1. Mobile Menu Button (Left side on Mobile) */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* 2. Desktop Links (Left side) */}
                <div className="hidden md:block">
                    <ul className="flex items-center gap-6">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link href={link.href} className={getLinkStyle(link.href)}>
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* 3. Logo (Center) */}
                <div className="flex-shrink-0">
                    <Link href="/">
                        <Image
                            src="/assets/Wanderlast.png"
                            alt="Wanderlust Logo"
                            width={100}
                            height={40}
                            priority
                        />
                    </Link>
                </div>

                {/* 4. Desktop Auth Links (Right side) */}
                <div className="hidden md:block">
                    <ul className="flex items-center gap-6">
                       <li className={getLinkStyle('/profile')}><Link href="/profile">Profile</Link></li>
                       <li className={getLinkStyle('/login')}><Link href="/login">LogIn</Link></li>
                       <li className={getLinkStyle('/singup')}><Link href="/signup"> SingUp</Link></li>
                    </ul>
                </div>

                {/* Mobile Login Icon (Visible only on mobile right side) */}
                <div className="md:hidden text-sm font-medium text-blue-600">
                    <Link href="/login">Login</Link>
                </div>
            </nav>

            {/* --- Mobile Sidebar / Dropdown --- */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-screen border-t" : "max-h-0"}`}>
                <ul className="flex flex-col gap-4 p-5 bg-white">
                    {[...navLinks, ...authLinks].map((link) => (
                        <li key={link.href} onClick={() => setIsOpen(false)}>
                            <Link href={link.href} className={`block text-lg ${getLinkStyle(link.href)}`}>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;