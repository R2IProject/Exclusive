import { AiOutlineTruck } from "react-icons/ai";
import { LuShieldCheck } from "react-icons/lu";
import { RiCustomerServiceLine } from "react-icons/ri";

export default function Services() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-52 ">
            <div className="flex flex-col items-center text-center">
                <AiOutlineTruck className="text-8xl text-white border-8 rounded-full bg-black p-4" />
                <h3 className="text-xl font-bold mt-4 text-black">FREE AND FAST DELIVERY</h3>
                <p className="text-gray-600">Free delivery for all orders over $140</p>
            </div>
            <div className="flex flex-col items-center text-center">
                <RiCustomerServiceLine className="text-8xl text-white border-8 rounded-full bg-black p-4" />
                <h3 className="text-xl font-bold mt-4 text-black">24/7 CUSTOMER SERVICE</h3>
                <p className="text-gray-600">Friendly 24/7 customer support</p>
            </div>
            <div className="flex flex-col items-center text-center">
                <LuShieldCheck className="text-8xl text-white border-8 rounded-full bg-black p-4" />
                <h3 className="text-xl font-bold mt-4 text-black">MONEY BACK GUARANTEE</h3>
                <p className="text-gray-600">We return money within 30 days</p>
            </div>
        </div>
    )

}

