import Link from 'next/link';
import React from 'react';

function Product() {
    return (
        <div className="flex justify-center items-center mt-10">
            <button className="bg-black lg:bg-red-500 text-white py-3 px-14 rounded block text-center">
                <Link href='/'>View All Product</Link>
            </button>
        </div>

    );
}

export default Product;
