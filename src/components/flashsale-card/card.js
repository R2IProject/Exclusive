'use client'
import Image from 'next/image';
import products from '../../../data/product';
import { AiOutlineHeart, AiOutlineEye } from 'react-icons/ai';
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { FaStar } from 'react-icons/fa';

function FlashSales() {
  const filtering = products.filter(product =>
    ['flash', 'best-selling', 'explore'].includes(product.type)
  );
  return (
    <div className="mt-10 relative">
      <p className="flex items-center text-red-600 font-bold">
        <Image src='/images/Rectangle.png' width={20} height={20} className="text-3xl md:text-5xl mr-2" />
        Today's
      </p>
      <div className="flex justify-between items-center">
        <p className='text-4xl text-black font-medium'>Flash Sales</p>
        <div className="flex-grow flex ml-24">
          <div className="flex items-center gap-4 pb-8">
            <div className="text-4xl font-bold text-left">
              <span className='text-xs text-black'>Days</span> <br />
              <span className="text-4xl text-black">03 <span className='text-red-600'>:</span></span>
            </div>
            <div className="text-4xl font-bold text-left">
              <span className='text-xs text-black'>Hour</span><br />
              <span className="text-4xl text-black">23 <span className='text-red-600'>:</span></span>
            </div>
            <div className="text-4xl font-bold text-left">
              <span className='text-xs text-black'>Minutes</span><br />
              <span className="text-4xl text-black">19 <span className='text-red-600'>:</span></span>
            </div>
            <div className="text-4xl font-bold text-left">
              <span className='text-xs text-black'>Seconds</span><br />
              <span className="text-4xl text-black">56 </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gray-300 flex items-center justify-center rounded-full">
            <GoArrowLeft className="text-black" />
          </div>
          <div className="w-8 h-8 bg-gray-300 flex items-center justify-center rounded-full">
            <GoArrowRight className="text-black" />
          </div>
        </div>
      </div>
      <div className="flex overflow-x-auto no-scrollbar gap-6">
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
                {product.discounted ? <span className="text-gray-400 line-through">{product.discounted}</span> : null}
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
  );
}

export default FlashSales;
