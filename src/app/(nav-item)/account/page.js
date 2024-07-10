export default function AccountPage() {
    return (
        <main className="text-black p-24 mb-32">
            <div className="flex justify-between">
                <p className="text-gray-400 mb-20">Home / <span className="text-black">My Account</span></p>
                <p>Welcome! <span className="text-red-500">Md Rimel</span></p>
            </div>
            <div className="flex">
                <div className="flex flex-col w-1/4">
                    <div>
                        <p className="font-semibold">Manage My Account</p>
                        <p className="ml-5 mt-3 text-red-500">My Profile</p>
                        <p className="ml-5 mt-2 text-gray-400">Address Book</p>
                        <p className="ml-5 mt-2 text-gray-400">My Payment Options</p>
                    </div>
                    <div className="mt-5">
                        <p className="font-semibold">My Orders</p>
                        <p className="ml-5 mt-2 text-gray-400">My Returns</p>
                        <p className="ml-5 mt-2 text-gray-400">My Cancellations</p>
                    </div>
                    <div className="mt-5">
                        <p className="font-semibold">My WishList</p>
                    </div>
                </div>
                <div className="flex flex-col w-3/4 ml-16 shadow-lg px-16 py-14">
                    <h1 className="text-red-500 mb-6 text-xl font-semibold">Edit Your Profile</h1>
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <p>First Name</p>
                            <input type="text" placeholder="Md" className="w-full bg-gray-100 rounded border border-gray-100 text-gray-500 p-2" />
                        </div>
                        <div>
                            <p>Last Name</p>
                            <input type="text" placeholder="Rimel" className="w-full bg-gray-100 rounded border border-gray-100 text-gray-500 p-2" />
                        </div>
                        <div>
                            <p>Email</p>
                            <input type="text" placeholder="rimel1111@gmail.com" className="w-full bg-gray-100 rounded border border-gray-100 text-gray-500 p-2" />
                        </div>
                        <div>
                            <p>Address</p>
                            <input type="text" placeholder="Kingston, 5236, United State" className="w-full bg-gray-100 rounded border border-gray-100 text-gray-500 p-2" />
                        </div>
                    </div>
                    <div className="mt-6">
                        <p>Password Changes</p>
                        <input type="password" placeholder="Current Password" className="w-full bg-gray-100 rounded border border-gray-100 text-gray-500 p-2 mt-4" />
                        <input type="password" placeholder="New Password" className="w-full bg-gray-100 rounded border border-gray-100 text-gray-500 p-2 mt-4" />
                        <input type="password" placeholder="Confirm New Password" className="w-full bg-gray-100 rounded border border-gray-100 text-gray-500 p-2 mt-4" />
                    </div>
                    <div className="flex justify-end mt-6">
                        <button className="text-red-500 mr-4">Cancel</button>
                        <button className="bg-red-500 text-white px-4 py-2 rounded">Save Changes</button>
                    </div>
                </div>
            </div>
        </main>
    )
}
