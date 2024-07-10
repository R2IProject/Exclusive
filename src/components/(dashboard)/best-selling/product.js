'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { AiOutlineHeart, AiOutlineEye } from 'react-icons/ai';
import { FaStar } from 'react-icons/fa';
import { fetchProducts } from '../../../../helpers/api-utils';

export default function BestProduct() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchProducts();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchData();
    }, []);

    // Filter products by unique categories
    const uniqueCategories = [];
    const filteredProducts = products.filter((product) => {
        if (!uniqueCategories.includes(product.category)) {
            uniqueCategories.push(product.category);
            return true;
        }
        return false;
    });

    return (
        <div className="pt-10 mb-20 px-5">
            <p className="flex items-center text-red-600 font-bold mb-9">
                <Image src='/images/Rectangle.png' width={20} height={20} className="text-3xl lg:text-5xl mr-2" alt="Rectangle" />
                This Month
            </p>
            <div className="flex justify-between items-center">
                <p className='text-2xl md:text-4xl text-black font-medium'>Best Selling Products</p>
                {/* Larger screens */}
                <div className="hidden lg:flex items-center gap-2">
                    <div className="bg-gray-300 flex items-center justify-center rounded-full">
                        <button className="bg-red-500 hover:bg-red-700 text-white py-4 px-14 rounded">
                            View All
                        </button>
                    </div>
                </div>
                {/* Smaller screens */}
                <div className="flex lg:hidden items-center gap-2">
                    <div className="bg-gray-300 flex items-center justify-center rounded-full">
                        <button className="text-sm bg-red-500 hover:bg-red-700 text-white py-3 px-10 rounded">
                            View All
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex overflow-x-auto no-scrollbar scroll-smooth mt-10 xl:gap-[10px]">
                {filteredProducts.map((product, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 rounded flex flex-col overflow-hidden relative bg-white"
                        style={{ width: '397px', height: '397px' }}
                    >
                        <div className="bg-white border border-gray-100 shadow-sm relative sm:w-[80%] xl:w-full h-[250px] flex items-center justify-center">
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
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    objectFit="contain"
                                />
                            </div>
                        </div>
                        <div className="bg-white py-1">
                            <h2 className="text-lg text-black mb-2">{product.title}</h2>
                            <div className="flex items-center space-x-2 mt-2">
                                <span className="text-red-500">${product.price}</span>
                            </div>
                            <div className="flex items-center space-x-1 mt-2">
                                {[...Array(Math.round(product.rating.rate))].map((_, i) => (
                                    <FaStar key={i} className="text-yellow-500 w-4 h-4" />
                                ))}
                                <span className="text-gray-600 text-sm">{product.rating.count} reviews</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
