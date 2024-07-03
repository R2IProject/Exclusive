import Image from "next/image";
import { AiOutlineHeart, AiOutlineEye } from 'react-icons/ai';
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { FaStar } from 'react-icons/fa';
import products from '../../../data/product';

export default function Product({ type }) {
    function FilterArray(obj) {
        if (obj.type === 'best-selling') {
            return obj;
        }
    }
    const filtering = products.filter(FilterArray);

    return (
        <div className="pt-10 mb-10">
            <p className="flex items-center text-red-600 font-bold mb-9">
                <Image src='/images/Rectangle.png' width={20} height={20} className="text-3xl md:text-5xl mr-2" />
                This Month
            </p>
            <div className="flex justify-between items-center">
                <p className='text-4xl text-black font-medium'>Best Selling Products</p>
                <div className="flex items-center gap-2">
                    <div className="bg-gray-300 flex items-center justify-center rounded-full">
                        <button
                            className="bg-red-500 hover:bg-red-700 text-white py-4 px-14 rounded">
                            View All
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex overflow-x-auto gap-6 no-scrollbar scroll-smooth mt-20">
                {filtering.map((product, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 rounded flex flex-col overflow-hidden relative bg-white"
                        style={{ width: '397px', height: '397px' }}
                    >
                        <div className="bg-[#F5F5F5] relative w-full h-[250px] flex items-center justify-center">
                            {product.discount ?
                                <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded">{product.discount}</div>
                                : null
                            }
                            <div className="absolute top-2 right-2 flex flex-col space-y-2">
                                <AiOutlineHeart className="text-black w-7 h-7 bg-white rounded-full p-1" />
                                <AiOutlineEye className="text-black w-7 h-7 bg-white rounded-full p-1" />
                            </div>
                            <div className="relative w-[172px] h-[190px]">
                                <Image
                                    src={product.src}
                                    alt={product.alt}
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </div>
                        </div>
                        <div className="bg-white">
                            <h2 className="text-lg font-bold mb-2">{product.name}</h2>
                            <p className="text-gray-600 text-sm">{product.description}</p>
                            <div className="flex items-center space-x-2 mt-2">
                                <span className="text-red-500">{product.price}</span>
                                {product.discounted ? <span className="text-gray-400 line-through" >{product.discounted}</span> : null}

                            </div>
                            <div className="flex items-center space-x-1 mt-2">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} className="text-yellow-500 w-4 h-4" />
                                ))}
                                <span className="text-gray-600 text-sm">{product.star}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
