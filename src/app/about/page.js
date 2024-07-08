import { AboutCarousel, Services } from "@/components/Item";
import Image from "next/image";
import { CiDollar } from "react-icons/ci";
import { FaSackDollar } from "react-icons/fa6";
import { MdOutlineShoppingBag } from "react-icons/md";
import { PiHouseLight } from "react-icons/pi";

export default function AboutPage() {
    return (
        <main className='pl-24 mb-44'>
            <h2 className="text-gray-400 mt-16">Home / <span className="text-black">About</span></h2>
            <div className="flex mt-44">
                <div className="flex-1">
                    <h3 className="text-6xl text-black font-medium">Our Story</h3>
                    <div className="text-black text-16 mt-10">
                        <p>Launched in 2015, Exclusive is South Asia's premier online shopping</p>
                        <p>marketplace with an active presence in Bangladesh. Supported</p>
                        <p>by a wide range of tailored marketing, data, and service solutions,</p>
                        <p>Exclusive has 10,500 sellers and 300 brands and serves 3</p>
                        <p>million customers across the region.</p>
                    </div>
                    <div className="text-black text-16 mt-8">
                        <p>Exclusive has more than 1 Million products to offer, growing at a</p>
                        <p>very fast rate. Exclusive offers a diverse assortment in categories</p>
                        <p>ranging from consumer goods.</p>
                    </div>
                </div>
                <div className="flex-1 -mt-36 flex justify-end items-start">
                    <Image src='/images/shopping.png' alt="Shopping image" width={800} height={400} className="rounded-lg" />
                </div>
            </div>
            <div className="flex gap-4 my-32 pr-24">
                <div className="flex flex-col items-center w-100 h-56 bg-white p-4 rounded border border-gray-300">
                    <PiHouseLight className="text-8xl text-white border-8 rounded-full bg-black p-4" />
                    <p className="text-black mt-2 font-bold text-3xl">10.5K</p>
                    <p className="text-black mt-2">Sallers active our site</p>
                </div>
                <div className="flex flex-col items-center w-100 h-56 bg-white p-4 rounded border border-gray-300">
                    <CiDollar className="text-8xl text-white border-8 rounded-full bg-black p-4" />
                    <p className="text-black mt-2 font-bold text-3xl">33k</p>
                    <p className="text-black mt-2">Monthly Product Sale</p>
                </div>
                <div className="flex flex-col items-center w-100 h-56 bg-white p-4 rounded border border-gray-300">
                    <MdOutlineShoppingBag className="text-8xl text-white border-8 rounded-full bg-black p-4" />
                    <p className="text-black mt-2 font-bold text-3xl">45.5k</p>
                    <p className="text-black mt-2">Customer active in our site</p>
                </div>
                <div className="flex flex-col items-center w-100 h-56 bg-white p-4 rounded border border-gray-300">
                    <FaSackDollar className="text-8xl text-white border-8 rounded-full bg-black p-4" />
                    <p className="text-black mt-2 font-bold text-3xl">25k</p>
                    <p className="text-black mt-2">Anual gross sale in our site</p>
                </div>
            </div>
            <AboutCarousel />
            <div className="pr-24">
                <Services />
            </div>
        </main>
    )
}
