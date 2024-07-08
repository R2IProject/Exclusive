'use client'

import Image from "next/image";
import { useState } from "react";

export default function CheckoutPage() {
    const [paymentMethod, setPaymentMethod] = useState('bank');

    return (
        <main className="p-8 md:p-24">
            <p className="text-gray-400">
                Account / My Account / Product / View Cart / <span className="text-gray-900 opacity-100">CheckOut</span>
            </p>
            <h1 className="text-black mt-10 text-3xl md:text-5xl">Billing Details</h1>
            <div className="flex flex-col md:flex-row justify-between mt-10">
                <div className="w-full md:w-7/12 text-black flex flex-col">
                    <div className="mb-6">
                        <label className="text-gray-500">First Name<span className="text-red-500">*</span></label>
                        <input type="text" className="border rounded-md bg-gray-100 border-gray-300 w-full p-2 mt-1" required />
                    </div>
                    <div className="mb-6">
                        <label className="text-gray-500">Company Name</label>
                        <input type="text" className="border rounded-md bg-gray-100 border-gray-300 w-full p-2 mt-1" />
                    </div>
                    <div className="mb-6">
                        <label className="text-gray-500">Street Address<span className="text-red-500">*</span></label>
                        <input type="text" className="border rounded-md bg-gray-100 border-gray-300 w-full p-2 mt-1" required />
                    </div>
                    <div className="mb-6">
                        <label className="text-gray-500">Apartment, floor, etc. (optional)</label>
                        <input type="text" className="border rounded-md bg-gray-100 border-gray-300 w-full p-2 mt-1" />
                    </div>
                    <div className="mb-6">
                        <label className="text-gray-500">Town / City<span className="text-red-500">*</span></label>
                        <input type="text" className="border rounded-md bg-gray-100 border-gray-300 w-full p-2 mt-1" required />
                    </div>
                    <div className="mb-6">
                        <label className="text-gray-500">Phone Number<span className="text-red-500">*</span></label>
                        <input type="number" className="border rounded-md bg-gray-100 border-gray-300 w-full p-2 mt-1" required />
                    </div>
                    <div className="mb-6">
                        <label className="text-gray-500">Email Address<span className="text-red-500">*</span></label>
                        <input type="email" className="border rounded-md bg-gray-100 border-gray-300 w-full p-2 mt-1" required />
                    </div>
                </div>
                <div className="w-full md:w-4/12 text-black flex flex-col p-4 rounded-lg">
                    <div className="flex items-center mb-4 mr-14">
                        <Image src='/images/flash/IPS LCD Gaming Monitor.png' width={60} height={60} alt="LCD Monitor" />
                        <p className="ml-10 mr-56">LCD Monitor</p>
                        <p>$650</p>
                    </div>
                    <div className="flex justify-between items-center mb-4 mr-14">
                        <Image src='/images/flash/HAVIT HV-G92 Gamepad.png' width={60} height={60} alt="H1 Gamepad" />
                        <p className="ml-10 mr-56">H1 Gamepad</p>
                        <p>$550</p>
                    </div>
                    <div className="flex justify-between items-center mb-4 pb-4 border-b-2 mr-14">
                        <p>Subtotal:</p>
                        <p>$1200</p>
                    </div>
                    <div className="flex justify-between items-center mb-4 pb-4 border-b-2 mr-14">
                        <p>Shipping:</p>
                        <p>Free</p>
                    </div>
                    <div className="mb-4 flex justify-between mr-14">
                        <p className="mb-4">Total</p>
                        <p>$1750</p>
                    </div>
                    <div className="mb-5">
                        <div className="flex items-center mb-4">
                            <input
                                type="radio"
                                name="paymentMethod"
                                value="bank"
                                checked={paymentMethod === 'bank'}
                                onChange={() => setPaymentMethod('bank')}
                                className="mr-2"
                            />
                            <label className="text-gray-500">Bank</label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="radio"
                                name="paymentMethod"
                                value="cod"
                                checked={paymentMethod === 'cod'}
                                onChange={() => setPaymentMethod('cod')}
                                className="mr-2"
                            />
                            <label className="text-gray-500">Cash on Delivery</label>
                        </div>
                    </div>
                    <div className="flex mb-4">
                        <input
                            placeholder="Coupon Code"
                            className="border rounded-l border-gray-400 py-2 px-7 mr-4"
                        />
                        <button className="border rounded-r text-white bg-red-600 px-14 py-3">Apply Coupon</button>
                    </div>
                    <div className="flex">
                        <button className="border rounded text-white bg-red-600 py-2 px-12">Place Order</button>
                    </div>
                </div>
            </div>
        </main>
    );
}
