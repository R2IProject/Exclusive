'use client'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.status === 201) {
        router.push('/login');
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex">
      <div className="w-1/2 flex items-center justify-center bg-gray-100">
        <Image src="/images/signin.png" width={500} height={500} alt="Shopping" />
      </div>
      <div className="w-1/2 flex flex-col justify-center p-8">
        <h2 className="text-3xl font-semibold mb-6">Create an account</h2>
        <p className="mb-4 text-gray-600">Enter your details below</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email or Phone Number"
            value={form.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {error && <p className="text-red-500">{error}</p>}
          <button type="submit" className="w-full bg-red-500 text-white p-2 rounded">
            Create Account
          </button>
        </form>
        <div className="mt-4">
          <button className="w-full bg-white border border-gray-300 p-2 rounded flex items-center justify-center">
            <img src="/google-icon.png" alt="Google Icon" className="w-5 h-5 mr-2" />
            Sign up with Google
          </button>
        </div>
        <p className="mt-4 text-center">
          Already have an account?{" "}
          <Link href="/login">
            <a className="text-blue-600">Log in</a>
          </Link>
        </p>
      </div>
    </div>
  );
}
