'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import ProductItem from '@/components/product/product-item';
import { fetchProducts } from '../../../../helpers/api-utils';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';

function FlashSales() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };

    fetchData();
  }, []);

  return (
    <div className="mt-10 relative px-5 lg:pr-24">
      <p className="flex items-center text-red-600 font-bold text-xl lg:text-3xl">
        <Image
          src="/images/Rectangle.png"
          width={20}
          height={20}
          className="text-3xl lg:text-5xl mr-2"
          alt="rectangle"
        />
        Today's
      </p>
      <div className="lg:flex flex-row xl:flex-row justify-between items-center mt-4">
        <p className="text-4xl lg:text-5xl text-black font-medium lg:mb-0">
          Flash Sale
        </p>
        {/* Smaller screens */}
        <div className="lg:hidden">
          <div className="flex items-center gap-2 pb-4">
            <div className="text-lg font-bold text-left">
              <span className="text-xs text-black">Days</span> <br />
              <span className="text-3xl text-black">
                03 <span className="text-red-600">:</span>
              </span>
            </div>
            <div className="text-lg font-bold text-left">
              <span className="text-xs text-black">Hours</span>
              <br />
              <span className="text-3xl text-black">
                23 <span className="text-red-600">:</span>
              </span>
            </div>
            <div className="text-lg font-bold text-left">
              <span className="text-xs text-black">Minutes</span>
              <br />
              <span className="text-3xl text-black">
                19 <span className="text-red-600">:</span>
              </span>
            </div>
            <div className="text-lg font-bold text-left">
              <span className="text-xs text-black">Seconds</span>
              <br />
              <span className="text-3xl text-black">56</span>
            </div>
          </div>
          {/* <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-300 flex items-center justify-center rounded-full">
              <GoArrowLeft className="text-black text-sm" />
            </div>
            <div className="w-8 h-8 bg-gray-300 flex items-center justify-center rounded-full">
              <GoArrowRight className="text-black text-sm" />
            </div>
          </div> */}
        </div>
        {/* Larger screens */}
        <div className="hidden lg:flex-grow lg:flex lg:flex-row lg:relative lg:left-44 lg:items-center lg:gap-4">
          <div className="flex items-center gap-2 pb-8">
            <div className="text-2xl font-bold text-left">
              <span className="text-xs text-black">Days</span> <br />
              <span className="text-4xl text-black">
                03 <span className="text-red-600">:</span>
              </span>
            </div>
            <div className="text-2xl font-bold text-left">
              <span className="text-xs text-black">Hours</span><br />
              <span className="text-4xl text-black">
                23 <span className="text-red-600">:</span>
              </span>
            </div>
            <div className="text-2xl font-bold text-left">
              <span className="text-xs text-black">Minutes</span><br />
              <span className="text-4xl text-black">
                19 <span className="text-red-600">:</span>
              </span>
            </div>
            <div className="text-2xl font-bold text-left">
              <span className="text-xs text-black">Seconds</span><br />
              <span className="text-4xl text-black">56</span>
            </div>
          </div>
          <div className="flex items-center absolute right-0 gap-2 pr-20">
            <div className="w-8 h-8 bg-gray-300 flex items-center justify-center rounded-full">
              <GoArrowLeft className="text-black text-l g" />
            </div>
            <div className="w-8 h-8 bg-gray-300 flex items-center justify-center rounded-full">
              <GoArrowRight className="text-black text-l g" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex overflow-x-auto no-scrollbar mt-4 l g:mt-6 gap-6">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default FlashSales;
