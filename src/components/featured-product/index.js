'use client'
import Image from 'next/image';
import products from '../../../data/product';
import { Services } from '../Item';

function FeaturedSection() {
    const featuredProducts = products.filter(product => product.type === 'featured');

    return (
        <div className="mt-10">
            <p className="flex items-center text-red-600 font-bold">
                <Image src='/images/Rectangle.png' width={20} height={20} className="text-3xl md:text-5xl mr-2" />
                Featured
            </p>
            <div className="flex justify-between items-center mt-10 mb-14">
                <p className='text-4xl text-black font-medium'>Explore Our Products</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {featuredProducts.map((product, index) => (
                    <div
                        key={index}
                        className={`relative bg-black text-white overflow-hidden flex flex-col justify-end ${product.name === 'PlayStation 5' ? 'col-span-2 row-span-2 lg:col-span-2 lg:row-span-2' :
                            product.name === 'Womens Collections' ? 'col-span-2' :
                                product.name === 'Perfume' ? 'lg:col-start-4 lg:row-start-2' : ''
                            }`}
                        style={{ height: product.name === 'PlayStation 5' ? '824px' : '400px' }}
                    >
                        <Image
                            src={product.src}
                            alt={product.alt}
                            layout="responsive"
                            width={500}
                            height={0} 
                            objectFit="cover"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="relative z-10 p-4 bg-gradient-to-t from-black via-transparent to-transparent">
                            <h2 className="text-xl lg:text-2xl font-bold">{product.name}</h2>
                            <p className="text-sm mt-4">{product.description}</p>
                            {product.description1 ? <p className="text-sm mb-4">{product.description1}</p> : null}

                            <a href={product.link} className="text-white py-2">Shop Now</a>
                        </div>
                    </div>
                ))}
            </div>
            <Services/>
        </div>
    );
}

export default FeaturedSection;
