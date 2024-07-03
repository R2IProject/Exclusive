// components/Navbar.js
import React from 'react';
import Link from 'next/link';
import { IoCartOutline } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import { Search } from 'react-feather';

const Navbar = () => {
    return (
        <nav className=" px-24 flex items-center justify-between p-4 shadow-md">
            <div className="text-xl text-black font-bold">Exclusive</div>
            <div className="flex ml-32 space-x-4 text-black">
                <Link href="/">
                    <p className="hover:underline">Home</p>
                </Link>
                <Link href="/contact">
                    <p className="hover:underline">Contact</p>
                </Link>
                <Link href="/about">
                    <p className="hover:underline">About</p>
                </Link>
                <Link href="/signup">
                    <p className="hover:underline">Sign Up</p>
                </Link>
            </div>
            <div className="flex items-center space-x-4">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="What are you looking for?"
                        className="pl-4 pr-8 py-2 bg-gray-100 focus:outline-none text-gray-700"
                    />
                    <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-900" />
                </div>
                <GoHeart className="h-6 w-6 text-gray-700" />
                <IoCartOutline className="h-6 w-6 text-gray-700" />
            </div>
        </nav>
    );
};

export default Navbar;
