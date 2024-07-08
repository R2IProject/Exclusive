import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
    return (
        <main className="p-24">
            <p className="text-gray-400">Home / <span className="text-black">Cart</span></p>
            <div className="flex flex-row justify-between border rounded-md text-black shadow-md p-5 mt-14">
                <div className="w-[10%] mt-2 overflow-hidden text-ellipsis whitespace-nowrap ">
                    <p>Product</p>
                </div>
                <div className="w-[10%]overflow-hidden text-ellipsis whitespace-nowrap">
                    <p className="mt-2">Price</p>
                </div>
                <div className="w-[6%] pl-4">
                    <p className="mt-2">Quantity</p>
                </div>
                <div className="w-[10%]overflow-hidden text-ellipsis whitespace-nowrap">
                    <p className="mt-2">Subtotal</p>
                </div>
            </div>
            <div className="flex flex-row justify-between border rounded-md text-black shadow-md p-5 mt-14">
                <div className="w-[10%] mt-2 overflow-hidden text-ellipsis whitespace-nowrap ">
                    <div className="flex">
                        <Image src='/images/flash/IPS LCD Gaming Monitor.png' width={40} height={40} className="mr-4" />
                        <p>LCD Monitor</p>
                    </div>
                </div>
                <div className="w-[10%]overflow-hidden text-ellipsis whitespace-nowrap">
                    <p className="mt-2">$650</p>
                </div>
                <div className="w-[6%]">
                    <input type="number" placeholder="1" min='1' className=" rounded border border-gray-500 text-gray-500 p-2 max-w-20" />
                </div>
                <div className="w-[10%]overflow-hidden text-ellipsis whitespace-nowrap">
                    <p className="mt-2">$650</p>
                </div>
            </div>
            <div className="flex flex-row justify-between border rounded-md text-black shadow-md p-5 mt-14">
                <div className="w-[10%] mt-2 overflow-hidden text-ellipsis whitespace-nowrap ">
                    <div className="flex">
                        <Image src='/images/flash/HAVIT HV-G92 Gamepad.png' width={40} height={40} className="mr-4" />
                        <p>H1 Gamepad</p>
                    </div>
                </div>
                <div className="w-[10%]overflow-hidden text-ellipsis whitespace-nowrap">
                    <p className="mt-2">$550</p>
                </div>
                <div className="w-[6%]">
                    <input type="number" placeholder="1" min='1' className=" rounded border border-gray-500 text-gray-500 p-2 max-w-20" />
                </div>
                <div className="w-[10%]overflow-hidden text-ellipsis whitespace-nowrap">
                    <p className="mt-2">$1100</p>
                </div>
            </div>

            {/* ========================================================================================================================================= */}

            <div className="flex justify-between text-black mt-8">
                <button className="border border-black rounded py-3 px-16">Return To Shop</button>
                <button className="border border-black rounded py-3 px-16">Update Card</button>
            </div>
            <div className="mt-20 flex justify-between items-start">
                <div className="flex items-center space-x-4">
                    <input placeholder="Coupon Code" className="border border-black rounded py-3 pr-16 pl-5" />
                    <button className="border rounded text-white bg-red-500 py-3 px-8">Apply Coupon</button>
                </div>
                <div className="border border-black rounded text-black px-10 pb-5 w-[600px] h-[300px]">
                    <h1 className="text-2xl my-5">Cart Total</h1>
                    <div className="flex flex-row justify-between border-b-2 mb-3 pb-2">
                        <p>Subtotal:</p>
                        <p>$1750</p>
                    </div>
                    <div className="flex flex-row justify-between border-b-2 mb-3 pb-2">
                        <h1>Shipping:</h1>
                        <p>Free</p>
                    </div>
                    <div className="flex flex-row justify-between mb-3 pb-2">
                        <p>Total</p>
                        <p>$1750</p>
                    </div>
                    <Link href='/checkout'>
                        <button className="rounded border bg-red-500 text-white py-3 px-16 ml-24">Process to checkout</button>
                    </Link>
                </div>
            </div>
        </main>
    )
}