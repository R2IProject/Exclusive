import { VscSend } from "react-icons/vsc";
import { BiLogoFacebook, BiLogoTwitter, BiLogoInstagram, BiLogoLinkedin } from "react-icons/bi";
export default function Footer() {
    return (
        <footer className="bg-black text-white py-10 mt-44">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
                <div className="flex flex-col space-y-4 md:space-y-6">
                    <div className="text-gray-400 font-bold text-lg">Exclusive</div>
                    <ul className="space-y-2 text-white">
                        <li>
                            <a href="#" className="text-white">Subscribe</a>
                        </li>
                        <li>
                            <a href="#" className="text-white">Get 10% off your first order</a>
                        </li>
                        <li>
                            <div className="flex items-center border border-white rounded p-1 w-full">
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

                <div className="flex flex-col space-y-4 md:space-y-6">
                    <div className="text-gray-400 font-bold text-lg">Support</div>
                    <ul className="space-y-2 text-white">
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

                <div className="flex flex-col space-y-4 md:space-y-6">
                    <div className="text-gray-400 font-bold text-lg">Account</div>
                    <ul className="space-y-2 text-white">
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

                <div className="flex flex-col space-y-4 md:space-y-6">
                    <div className="text-gray-400 font-bold text-lg">Quick Links</div>
                    <ul className="space-y-2 text-white">
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

                <div className="flex flex-col space-y-4 md:space-y-6">
                    <div className="text-white font-bold text-lg">Download App</div>
                    <div className="flex flex-col space-y-2 text-white">
                        <a href="#" className="text-white">Save $3 with App New User Only</a>
                        <div className="flex space-x-4 items-start">
                            <img src="/images/qrcode.png" alt="QR code" className="w-20 h-20" />
                            <div className="flex flex-col space-y-2">
                                <a href="#" className="text-white">
                                    <img src="/images/googleplay.png" alt="Google Play" className="w-22 h-9" />
                                </a>
                                <a href="#" className="text-white">
                                    <img src="/app-store-black.svg" alt="App Store" className="w-34 h-10" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex space-x-4 ">
                        <a href="#" className="text-white">
                            <BiLogoFacebook className="text-2xl" />
                        </a>
                        <a href="#" className="text-white">
                            <BiLogoTwitter className="text-2xl" />
                        </a>
                        <a href="#" className="text-white">
                            <BiLogoInstagram className="text-2xl" />
                        </a>
                        <a href="#" className="text-white">
                            <BiLogoLinkedin className="text-2xl" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="text-center text-gray-500 mt-4">
                &copy; Copyright Rimel 2022. All rights reserved.
            </div>
        </footer>
    );
}
