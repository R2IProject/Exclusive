'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { AiOutlineHeart, AiOutlineEye } from 'react-icons/ai';
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { FaStar } from 'react-icons/fa';
import { fetchProducts } from '../../../../helpers/api-utils';

function ExploreProduct() {
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

    // Filter products to only include electronics and jewelry categories
    const filtering = products.filter(product => product.category === 'electronics' || product.category === 'jewelery');

    return (
        <div className="mt-28 relative px-5">
            <p className="flex items-center text-red-600 font-bold">
                <Image src='/images/Rectangle.png' width={20} height={20} className="text-3xl md:text-5xl mr-2" alt="Rectangle" />
                Our Products
            </p>
            <div className="flex justify-between items-center mt-10">
                <p className='text-4xl text-black font-medium'>Explore Our Products</p>
                <div className="hidden md:flex items-center gap-2">
                    <div className="w-8 h-8 bg-gray-300 flex items-center justify-center rounded-full">
                        <GoArrowLeft className="text-black" />
                    </div>
                    <div className="w-8 h-8 bg-gray-300 flex items-center justify-center rounded-full">
                        <GoArrowRight className="text-black" />
                    </div>
                </div>
            </div>
            <div className="grid grid-flow-col grid-rows-2 mt-10 overflow-x-auto no-scrollbar">
                {filtering.map((product, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 rounded flex flex-col overflow-hidden relative"
                        style={{ width: '397px', height: '397px' }}
                    >
                        <div className="bg-white border border-gray-100 shadow-sm relative w-[80%] h-[250px] flex items-center justify-center">
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
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </div>
                        </div>
                        <div className="bg-white">
                            <h2 className="text-lg text-black mb-2">{product.title}</h2>
                            <div className="flex justify-between items-center space-x-2 mt-2">
                                <span className="text-red-500">${product.price}</span>
                                <div className="flex-grow flex items-center space-x-1">
                                    {[...Array(Math.round(product.rating.rate))].map((_, i) => (
                                        <FaStar key={i} className="text-yellow-500 w-4 h-4" />
                                    ))}
                                    <span className="text-gray-600 text-sm">{product.rating.count}</span>
                                </div>
                            </div>
                            {product.colorPicker ? (
                                <div className="flex items-center space-x-1 mt-2">
                                    {product.colorPicker.map((color, index) => (
                                        <span key={index} className={`w-6 h-6 rounded-full`} style={{ backgroundColor: color }}></span>
                                    ))}
                                </div>
                            ) : null}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ExploreProduct;
