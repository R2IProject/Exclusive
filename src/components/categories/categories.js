import { FiHeadphones, FiSmartphone } from "react-icons/fi";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { RiComputerLine } from "react-icons/ri";
import { CiCamera } from "react-icons/ci";
import { IoWatchOutline } from "react-icons/io5";
import { LuGamepad } from "react-icons/lu";
import Image from "next/image";

export default function Category() {
    return (
        <div className="pt-10 mb-10">
            <p className="flex items-center text-red-600 font-bold mb-9">
                <Image src='/images/Rectangle.png' width={20} height={20} className="text-3xl md:text-5xl mr-2" />
                Categories
            </p>
            <div className="flex justify-between items-center">
                <p className='text-4xl text-black font-medium'>Browse By Category</p>
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gray-300 flex items-center justify-center rounded-full">
                        <GoArrowLeft className="text-black" />
                    </div>
                    <div className="w-8 h-8 bg-gray-300 flex items-center justify-center rounded-full">
                        <GoArrowRight className="text-black" />
                    </div>
                </div>
            </div>
            <div className="flex gap-4 mt-10">
                <div className="flex flex-col items-center w-96 h-40 bg-white p-4 rounded border border-gray-300">
                    <FiSmartphone className="text-4xl text-black mt-6" />
                    <p className="text-black mt-2">Phones</p>
                </div>
                <div className="flex flex-col items-center w-96 h-40 bg-white p-4 rounded border border-gray-300">
                    <RiComputerLine className="text-4xl text-black mt-6" />
                    <p className="text-black mt-2">Computers</p>
                </div>
                <div className="flex flex-col items-center w-96 h-40 bg-white p-4 rounded border border-gray-300">
                    <IoWatchOutline className="text-4xl text-black mt-6" />
                    <p className="text-black mt-2">Smart Watch</p>
                </div>
                <div className="flex flex-col items-center w-96 h-40 bg-red-500 p-4 rounded border border-gray-300">
                    <CiCamera className="text-4xl text-white mt-6" />
                    <p className="text-white mt-2">Camera</p>
                </div>
                <div className="flex flex-col items-center w-96 h-40 bg-white p-4 rounded border border-gray-300">
                    <FiHeadphones className="text-4xl text-black mt-6" />
                    <p className="text-black mt-2">Headphones</p>
                </div>
                <div className="flex flex-col items-center w-96 h-40 bg-white p-4 rounded border border-gray-300">
                    <LuGamepad className="text-4xl text-black mt-6" />
                    <p className="text-black mt-2">Gaming</p>
                </div>
            </div>
        </div>

    );
}
