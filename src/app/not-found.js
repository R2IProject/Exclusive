import Link from "next/link"

export default function NotFound() {
  return (
    <main className="px-24 py-16">
      <p className="text-gray-500">Home / <span className="text-black">404 Error</span></p>
      <div className="flex flex-col justify-center items-center text-black">
        <h1 className="mt-40 text-8xl">404 Not Found</h1>
        <p className="mt-10">Your visited page not found. You may go home page.</p>
        <Link href='/'>
          <button className="mt-20 border rounded-lg py-5 px-16 bg-red-600 text-white">Back to home page</button>
        </Link>
      </div>
    </main>
  )
}