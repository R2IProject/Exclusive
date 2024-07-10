import { FiHeadphones, FiSmartphone } from "react-icons/fi";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { RiComputerLine } from "react-icons/ri";
import { CiCamera } from "react-icons/ci";
import { IoWatchOutline } from "react-icons/io5";
import { LuGamepad } from "react-icons/lu";
import Image from "next/image";

export default function Category() {
    const Categories = [
        {
            icons: <FiSmartphone className="text-4xl text-black mt-6" />,
            name: 'Phones'
        },
        {
            icons: <RiComputerLine />,
            name: 'Computers'
        },
        {
            icons: <IoWatchOutline />,
            name: 'Smart Watch'
        },
        {
            icons: <CiCamera />,
            name: 'Camera'
        },
        {
            icons: <FiHeadphones />,
            name: 'HeadPhones'
        },
        {
            icons: <LuGamepad />,
            name: 'Gaming'
        },
    ]

    return (
        <div className="pt-10 px-5">
            <p className="flex items-center text-red-600 font-bold text-xl md:text-3xl mb-6 md:mb-9">
                <Image src='/images/Rectangle.png' width={20} height={20} className="text-3xl md:text-5xl mr-2" />
                Categories
            </p>
            <div className="flex items-center justify-between">
                <p className='text-3xl md:text-4xl text-black font-medium'>
                    Browse By Category
                </p>
                <div className="hidden md:flex items-center gap-4 mt-4">
                    <div className="w-8 h-8 md:w-8 md:h-8 bg-gray-300 flex items-center justify-center rounded-full">
                        <GoArrowLeft className="text-black md:text-lg" />
                    </div>
                    <div className="w-8 h-8 md:w-8 md:h-8 bg-gray-300 flex items-center justify-center rounded-full">
                        <GoArrowRight className="text-black md:text-lg" />
                    </div>
                </div>
            </div>
            {category.map((Categories, index) => {
                <div className="hidden lg:flex gap-4 mt-10">
                    <div className="flex flex-col items-center w-96 h-40 bg-white p-4 rounded border border-gray-300">
                        {Categories.icons}
                        <p className="text-black mt-2">Phones</p>
                    </div>
                </div>
            })}

            <div className="hidden lg:flex gap-4 mt-10">
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

            <div className="overflow-x-auto no-scrollbar scroll-smooth grid grid-flow-col gap-4 mt-6 lg:hidden">
                <div className="flex flex-col items-center justify-center border p-10 w-32 h-50 flex-shrink-0">
                    <FiSmartphone className="text-4xl md:text-4xl text-black mb-2" />
                    <p className="text-black mt-2 text-center">Phones</p>
                </div>
                <div className="flex flex-col items-center justify-center border p-10 w-32 h-50 flex-shrink-0">
                    <RiComputerLine className="text-3xl md:text-4xl text-black mb-2" />
                    <p className="text-black mt-2 text-center">Computers</p>
                </div>
                <div className="flex flex-col items-center justify-center border p-10 w-32 h-50 flex-shrink-0">
                    <IoWatchOutline className="text-3xl md:text-4xl text-black mb-2" />
                    <p className="text-black mt-2 text-center">Smart Watch</p>
                </div>
                <div className="flex flex-col items-center justify-center border bg-red-500 p-10 w-32 h-50 flex-shrink-0">
                    <CiCamera className="text-3xl md:text-4xl text-white mb-2" />
                    <p className="text-white mt-2 text-center">Camera</p>
                </div>
                <div className="flex flex-col items-center justify-center border p-10 w-32 h-50 flex-shrink-0">
                    <FiHeadphones className="text-3xl md:text-4xl text-black mb-2" />
                    <p className="text-black mt-2 text-center">Headphones</p>
                </div>
                <div className="flex flex-col items-center justify-center border p-10 w-32 h-50 flex-shrink-0">
                    <LuGamepad className="text-3xl md:text-4xl text-black mb-2" />
                    <p className="text-black mt-2 text-center">Gaming</p>
                </div>
            </div>
        </div>
    );
}