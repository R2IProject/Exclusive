import Image from "next/image";
import products from "../../../../data/product";
import { IoTrashOutline } from "react-icons/io5";
import { AiOutlineEye } from "react-icons/ai";
import { FaStar } from "react-icons/fa";

export default function WishList() {
    const wishlist = products.filter(product => product.wish === 'wish');
    const Justforya = products.filter(product => product.just === 'just')
    return (
        <main className="p-24">
            <div className="text-black flex justify-between flex-row">
                <p className="font-medium">Wishlist (4)</p>
                <button className="rounded-md border border-gray-400 py-3 px-10 text-black">Move All to Bag</button>
            </div>

            {/* =================================================================================================================================== */}

            <div className="grid grid-flow-col grid-rows-1 gap-6 mt-10 overflow-x-auto no-scrollbar">
                {wishlist.map((product, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 rounded flex flex-col overflow-hidden relative bg-white"
                        style={{ width: '397px', height: '397px' }}
                    >
                        <div className="bg-[#F5F5F5] relative w-full h-[250px] flex items-center justify-center">
                            {product.discount && (
                                <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded">
                                    {product.discount}
                                </div>
                            )}
                            {product.new && (
                                <div className={`absolute top-2 ${product.discount ? 'left-16' : 'left-2'} bg-green-500 text-white px-2 py-1 rounded`}>
                                    {product.new}
                                </div>
                            )}
                            <div className="absolute top-2 right-2 flex flex-col space-y-2">
                                <IoTrashOutline className="text-black w-7 h-7 bg-white rounded-full p-1" />
                            </div>
                            <div className="relative w-[172px] h-[190px]">
                                <Image
                                    src={product.src}
                                    alt={product.alt}
                                    fill
                                    objectFit="contain"
                                />
                            </div>
                        </div>
                        <div className="bg-white p-4">
                            <p className="text-gray-600 text-sm">{product.description}</p>
                            <div className="flex items-center space-x-2 mt-2">
                                <span className="text-red-500">{product.price}</span>
                                {product.discounted ? <span className="text-gray-400 line-through">{product.discounted}</span> : null}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* =================================================================================================================================== */}

            <div className="flex justify-between flex-row text-black mt-10">
                <p className="flex items-center font-medium">
                    <Image src='/images/Rectangle.png' width={20} height={20} className="text-3xl md:text-5xl mr-2" />
                    Just For You
                </p>
                <button className="border border-gray-400 rounded-md py-3 px-10">See All</button>
            </div>
            <div className="grid grid-flow-col grid-rows-1 gap-6 mt-10 overflow-x-auto no-scrollbar">
                {Justforya.map((product, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 rounded flex flex-col overflow-hidden relative bg-white"
                        style={{ width: '397px', height: '397px' }}
                    >
                        <div className="bg-[#F5F5F5] relative w-full h-[250px] flex items-center justify-center">
                            {product.discount && (
                                <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded">
                                    {product.discount}
                                </div>
                            )}
                            {product.new && (
                                <div className={`absolute top-2 ${product.discount ? 'left-16' : 'left-2'} bg-green-500 text-white px-2 py-1 rounded`}>
                                    {product.new}
                                </div>
                            )}

                            <div className="absolute top-2 right-2 flex flex-col space-y-2">
                                <AiOutlineEye className="text-black w-7 h-7 bg-white rounded-full p-1" />
                            </div>
                            <div className="relative w-[172px] h-[190px]">
                                <Image
                                    src={product.src}
                                    alt={product.alt}
                                    fill
                                    objectFit="contain"
                                />
                            </div>
                        </div>
                        <div className="bg-white p-4">
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
        </main>
    )
}