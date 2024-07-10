// src/components/product/product-item.js
import Image from 'next/image';
import { AiOutlineHeart, AiOutlineEye } from 'react-icons/ai';
import { FaStar } from 'react-icons/fa';
import classes from './product-item.module.css'

const ProductItem = ({ product }) => {
    return (
        <div
            key={product.id}
            className="flex-shrink-0 rounded flex flex-col overflow-hidden relative"
            style={{ width: '100%', maxWidth: '397px', height: 'auto' }}
        >
            <div className="bg-white border border-gray-200 shadow-sm relative w-full h-[250px] md:h-[300px] flex items-center justify-center">
                {product.discount && (
                    <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded">
                        {product.discount}
                    </div>
                )}
                <div className="absolute top-2 right-2 flex flex-col space-y-2">
                    <AiOutlineHeart className="text-black w-7 h-7 bg-white rounded-full p-1" />
                    <AiOutlineEye className="text-black w-7 h-7 bg-white rounded-full p-1" />
                </div>
                <div className="relative w-full h-[172px] md:h-[190px]">
                    <Image
                        src={product.image}
                        alt={product.title}
                        layout="fill"
                        objectFit="contain"
                        className={classes.productimage}
                    />
                </div>
            </div>
            <div className="bg-white mt-5">
                <h2 className="text-sm md:text-xl mb-2" style={{ color: 'rgba(0, 0, 0, 1)' }}>{product.title}</h2>
                <div className="flex items-center space-x-2 mt-2">
                    <span className="text-red-500">${product.price}</span>
                    {product.discount && (
                        <span className="text-gray-400 line-through">{product.discount}</span>
                    )}
                </div>
                <div className="flex items-center space-x-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-500 w-4 h-4" />
                    ))}
                    <span className="text-gray-600 text-sm">{product.rating.rate}</span>
                </div>
            </div>
        </div >
    );
};

export default ProductItem;
