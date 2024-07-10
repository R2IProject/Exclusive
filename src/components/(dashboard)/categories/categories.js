import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import Image from "next/image";
import { categories } from '../../../../data/product'

export default function Category() {
    const renderCategories = (categories) => {
        return categories.map((category, index) => (
            <div
                key={index}
                className={`flex flex-col items-center justify-center border p-10 flex-shrink-0 w-32 h-50 md:w-48 md:h-60 lg:w-56 lg:h-72 xl:w-64 xl:h-60 ${category.bgClass ? category.bgClass : 'bg-white'
                    }`}
            >
                {category.icon}
                <p className={`${category.textClass ? category.textClass : 'text-black'} mt-2 text-center`}>
                    {category.name}
                </p>
            </div>
        ));
    };

    return (
        <div className="pt-10 px-5">
            <p className="flex items-center text-red-600 font-bold text-xl md:text-3xl mb-6 md:mb-9">
                <Image src='/images/Rectangle.png' width={20} height={20} className="text-3xl md:text-5xl mr-2" alt="rectangle" />
                Categories
            </p>
            <div className="flex items-center justify-between">
                <p className='text-3xl md:text-4xl text-black font-medium'>
                    Browse By Category
                </p>
                <div className="hidden md:flex items-center gap-4 mt-4">
                    <div className="w-8 h-8 bg-gray-300 flex items-center justify-center rounded-full">
                        <GoArrowLeft className="text-black text-lg" />
                    </div>
                    <div className="w-8 h-8 bg-gray-300 flex items-center justify-center rounded-full">
                        <GoArrowRight className="text-black text-lg" />
                    </div>
                </div>
            </div>
            <div className="hidden lg:flex gap-4 mt-10 overflow-x-auto no-scrollbar scroll-smooth">
                {renderCategories(categories)}
            </div>
            <div className="overflow-x-auto no-scrollbar scroll-smooth grid grid-flow-col gap-4 mt-6 lg:hidden">
                {renderCategories(categories)}
            </div>
        </div>
    );
}
