import { VscSend } from "react-icons/vsc";
import { BiLogoFacebook, BiLogoInstagram } from "react-icons/bi";
import { RiLinkedinLine } from "react-icons/ri";
import { FiTwitter } from "react-icons/fi";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-black text-white py-8 md:py-10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center md:text-left">
                {/* Exclusive */}
                <div className="space-y-4 md:space-y-6">
                    <div className="text-gray-400 font-bold text-lg">Exclusive</div>
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="text-white">Subscribe</a>
                        </li>
                        <li>
                            <a href="#" className="text-white">Get 10% off your first order</a>
                        </li>
                        <li>
                            <div className="flex items-center border border-white rounded p-1 mx-auto md:mx-0 w-full max-w-xs md:max-w-none">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="bg-black text-white placeholder-white outline-none px-2 flex-grow"
                                />
                                <button className="text-white px-2">
                                    <VscSend className="text-2xl" />
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Support */}
                <div className="space-y-4 md:space-y-6">
                    <div className="text-gray-400 font-bold text-lg">Support</div>
                    <ul className="space-y-2">
                        <li>
                            <p className="text-white">111 Bijoy Sarani, Dhaka<br />DH 1515, Bangladesh</p>
                        </li>
                        <li>
                            <a href="mailto:exclusive@gmail.com" className="text-white">exclusive@gmail.com</a>
                        </li>
                        <li>
                            <p className="text-white">+88015-88888-9999</p>
                        </li>
                    </ul>
                </div>

                {/* Account */}
                <div className="space-y-4 md:space-y-6">
                    <div className="text-gray-400 font-bold text-lg">Account</div>
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="text-white">My Account</a>
                        </li>
                        <li>
                            <a href="#" className="text-white">Login / Register</a>
                        </li>
                        <li>
                            <a href="#" className="text-white">Cart</a>
                        </li>
                        <li>
                            <a href="#" className="text-white">Wishlist</a>
                        </li>
                        <li>
                            <a href="#" className="text-white">Shop</a>
                        </li>
                    </ul>
                </div>

                {/* Quick Links */}
                <div className="space-y-4 md:space-y-6">
                    <div className="text-gray-400 font-bold text-lg">Quick Links</div>
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="text-white">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="text-white">Terms of Use</a>
                        </li>
                        <li>
                            <a href="#" className="text-white">FAQ</a>
                        </li>
                        <li>
                            <a href="#" className="text-white">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Download App */}
            <div className="container mx-auto mt-8 md:mt-12 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
                <div className="text-white font-bold text-lg mb-4 md:mb-0">Download App</div>
                <div className="flex space-x-4 mb-4 md:mb-0">
                    <a href="#" className="text-white">
                        <BiLogoFacebook className="text-2xl" />
                    </a>
                    <a href="#" className="text-white">
                        <FiTwitter className="text-2xl" />
                    </a>
                    <a href="#" className="text-white">
                        <BiLogoInstagram className="text-2xl" />
                    </a>
                    <a href="#" className="text-white">
                        <RiLinkedinLine className="text-2xl" />
                    </a>
                </div>
                <div className="flex flex-col items-center md:flex-row md:items-center">
                    <img src="/images/qrcode.png" alt="QR code" className="w-20 h-20 md:w-24 md:h-24 mb-4 md:mb-0" />
                    <div className="flex flex-col md:flex-row md:ml-4 space-y-2 md:space-x-4 md:space-y-0 items-center">
                        <a href="#" className="text-white">
                            <img src="/images/googleplay.png" alt="Google Play" className="w-22 h-9" />
                        </a>
                        <a href="#" className="text-white">
                            <img src="/app-store-black.svg" alt="App Store" className="w-34 h-10" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center text-gray-500 mt-6 md:mt-8">
                &copy; Copyright Rimel 2022. All rights reserved.
            </div>
        </footer>
    );
}
