import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen">
      <div className="flex items-center justify-center">
        <Image src="/images/signin.png" width={900} height={500} alt="Shopping" />
      </div>
      <div className="flex flex-col justify-center items-center w-1/2 p-8">
        <div className="max-w-md w-full">
          <h2 className="text-3xl font-semibold mb-6 text-black">Create an account</h2>
          <p className="mb-4 text-gray-600">Enter your details below</p>
          <form className="space-y-4 flex flex-col">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="p-2 border border-gray-300 rounded text-black"
            />
            <input
              type="email"
              name="email"
              placeholder="Email or Phone Number"
              className="p-2 border border-gray-300 rounded text-black"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="p-2 border border-gray-300 rounded text-black"
            />
            <button type="submit" className="bg-red-500 text-white p-2 rounded">
              Create Account
            </button>
          </form>
          <div className="mt-4">
            <button className="bg-white border border-gray-300 p-2 rounded flex items-center justify-center w-full text-black">
              <FcGoogle className="w-5 h-5 mr-2 " />
              Sign up with Google
            </button>
          </div>
          <p className="mt-4 text-center text-gray-500">
            Already have an account?{" "}
            <Link href="/login">
              <span className="text-gray-700 underline">Log in</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
