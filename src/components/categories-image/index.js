import React from 'react';
import Image from 'next/image';

const EnhanceMusicExperience = () => {
  return (
    <div className="flex items-center justify-center py-20 bg-black">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between ">
        <div className="text-white text-center md:text-left">
          <p className="text-green-400 mb-9">Categories</p>
          <h1 className="text-5xl font-bold mb-4">Enhance Your</h1>
          <h1 className="text-5xl font-bold mb-8">Music Experience</h1>
          <div className="flex justify-center md:justify-start space-x-4 mb-6">
            <div className="text-center text-black rounded-full px-5 py-4 bg-white">
              <p className="text-xl font-bold">23</p>
              <p className="text-sm">Hours</p>
            </div>
            <div className="text-center text-black rounded-full px-6 py-4 bg-white">
              <p className="text-xl font-bold">05</p>
              <p className="text-sm">Days</p>
            </div>
            <div className="text-center text-black rounded-full p-4 bg-white">
              <p className="text-xl font-bold">59</p>
              <p className="text-sm">Minutes</p>
            </div>
            <div className="text-center text-black rounded-full px-3 py-4 bg-white">
              <p className="text-xl font-bold">35</p>
              <p className="text-sm">Seconds</p>
            </div>
          </div>
          <button className="bg-green-600 text-white py-2 px-6 mt-6 rounded-sm hover:bg-green-700">Buy Now!</button>
        </div>
        <div className="mt-8 md:mt-0">
          <Image src="/images/microphone.png" alt="Speaker" width={600} height={400} />
        </div>
      </div>
    </div>
  );
};

export default EnhanceMusicExperience;
