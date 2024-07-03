// /components/RedButton.js
import Link from 'next/link';
import React from 'react';

function Product() {
    return (
        <div className="flex justify-center items-center">
            <button className="bg-red-500 hover:bg-red-600 text-white py-3 px-14 rounded block text-center">
                <Link href='/'>View All Product</Link>
            </button>
        </div>

    );
}

export default Product;
