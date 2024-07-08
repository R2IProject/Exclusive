import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
    return (
        <div className="flex min-h-screen">
            <div className="flex items-center justify-center">
                <Image src="/images/signin.png" width={900} height={500} alt="Shopping" />
            </div>
            <div className="flex flex-col justify-center items-center w-1/2 p-8">
                <div className="max-w-md w-full">
                    <h2 className="text-3xl font-semibold mb-6 text-black">Log In to Exclusive</h2>
                    <p className="mb-4 text-gray-600">Enter your details below</p>
                    <form className="space-y-4 flex flex-col">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="p-2 border-b-2 border-gray-300 text-black"
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="p-2 border-b-2 border-gray-300 text-black"
                        />
                    </form>
                    <div className="mt-10 flex justify-between">
                        <button type="submit" className="bg-red-500 text-white py-4 px-14 rounded">
                            Log In
                        </button>
                        <button className="flex items-center justify-center text-red-600">
                            Forget Password?
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}