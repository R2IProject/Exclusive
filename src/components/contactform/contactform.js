import React from 'react';
import { MdLocalPhone, MdOutlineEmail } from "react-icons/md";

const ContactForm = () => {
    return (
        <main className='px-24 py-10 ml-28'>
            <h2 className="text-gray-400 mt-16 mb-32">Home / <span className="text-black">Contact</span></h2>
            <div className="flex justify-center items-center">
                <div className="flex space-x-8 w-full">
                    <div className="p-6 bg-white rounded-lg shadow-lg">
                        <div className="mb-8">
                            <div className="flex items-center mb-7">
                                <div className="bg-red-500 p-2 rounded-full">
                                    <MdLocalPhone className="h-6 w-6 text-white" />
                                </div>
                                <div className="ml-2 text-gray-700 font-semibold">
                                    Call To Us
                                </div>
                            </div>
                            <p className="text-gray-600">We are available 24/7, 7 days a week.</p>
                            <p className="text-gray-600">Phone: +8801611112222</p>
                        </div>
                        <hr className="my-4" />
                        <div>
                            <div className="flex items-center mb-7">
                                <div className="bg-red-600 p-2 rounded-full">
                                    <MdOutlineEmail className="h-6 w-6 text-white" />
                                </div>
                                <div className="ml-2 text-gray-700 font-semibold">
                                    Write To Us
                                </div>
                            </div>
                            <p className="text-gray-600">Fill out our form and we will contact</p>
                            <p className="text-gray-600">you within 24 hours.</p>
                            <p className="text-gray-600 mt-3">Emails: customer@exclusive.com</p>
                            <p className="text-gray-600 mt-3">Emails: support@exclusive.com</p>
                        </div>
                    </div>
                    <div className="w-2/3 p-6 rounded-lg bg-white shadow-lg">
                        <form>
                            <div className="flex space-x-4 mb-4">
                                <input
                                    type="text"
                                    placeholder="Your Name *"
                                    className="w-1/3 p-2 border border-gray-300 rounded"
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email *"
                                    className="w-1/3 p-2 border border-gray-300 rounded"
                                />
                                <input
                                    type="text"
                                    placeholder="Your Phone *"
                                    className="w-1/3 p-2 border border-gray-300 rounded"
                                />
                            </div>
                            <textarea
                                placeholder="Your Message"
                                className="w-full p-2 border border-gray-300 rounded mb-4"
                                rows="6"
                            ></textarea>
                            <div className="flex justify-end mt-9">
                                <button
                                    type="submit"
                                    className="bg-red-500 text-white rounded px-9 py-3 "
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ContactForm;
