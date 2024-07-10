'use client'

import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import React, { useState } from 'react';
import Link from 'next/link';
import { IoCartOutline } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import { Search } from 'react-feather';
import Image from 'next/image';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="p-2 md:px-24 py-2 md:py-4 flex items-center justify-between lg:shadow-md">
            <div className='flex items-center space-x-2 lg:hidden'>
                <Link href='/'>
                    <Image src="/images/exclusive-removebg-preview.png" width={60} height={20} className="lg:hidden" />
                </Link>
                <div className="relative flex items-center bg-gray-100">
                    <input
                        type="text"
                        placeholder="What are you looking for?"
                        className="flex pl-4 pr-8 p-2 focus:outline-none text-gray-700 w-32 md:w-48"
                    />
                    <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-900" />
                </div>
            </div>
            <div className="hidden lg:flex text-xl text-black font-bold">
                <p>Exclusive</p>
            </div>
            <div className="hidden lg:flex ml-0 lg:ml-32 space-x-4 text-black">
                <Link href="/">
                    <p className="hover:underline cursor-pointer">Home</p>
                </Link>
                <Link href="/contact">
                    <p className="hover:underline cursor-pointer">Contact</p>
                </Link>
                <Link href="/about">
                    <p className="hover:underline cursor-pointer">About</p>
                </Link>
                <Link href="/signup">
                    <p className="hover:underline cursor-pointer">Sign Up</p>
                </Link>
            </div>

            <div className="hidden lg:flex items-center space-x-4 ">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="What are you looking for?"
                        className="pl-4 pr-8 py-2 bg-gray-100 focus:outline-none text-gray-700"
                    />
                    <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-900" />
                </div>
                <Link href='/wishlists'>
                    <GoHeart className="h-6 w-6 text-gray-700" />
                </Link>
                <Link href='/cart'>
                    <IoCartOutline className="h-6 w-6 text-gray-700" />
                </Link>
            </div>


            <div className="flex items-center space-x-3 mr-2 lg:hidden">
                <Link href='/wishlists'>
                    <GoHeart className="h-6 w-6 text-gray-700" />
                </Link>
                <Link href='/cart'>
                    <IoCartOutline className="h-6 w-6 text-gray-700" />
                </Link>
                <RxHamburgerMenu onClick={toggleModal} className="w-6 h-6 lg:hidden text-black" />
            </div>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex justify-center items-start mt-10 sm:mt-0">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm">

                        <nav className="flex flex-row space-x-4 text-black sp:space-x-2">
                            <Link href="/">
                                <p className="hover:underline cursor-pointer">Home</p>
                            </Link>
                            <Link href="/contact">
                                <p className="hover:underline cursor-pointer">Contact</p>
                            </Link>
                            <Link href="/about">
                                <p className="hover:underline cursor-pointer">About</p>
                            </Link>
                            <Link href="/signup">
                                <p className="hover:underline cursor-pointer">Sign Up</p>
                            </Link>
                            <button onClick={toggleModal} className=" text-gray-700">
                                <AiOutlineClose className="w-6 h-6" />
                            </button>
                        </nav>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
