import React from 'react';
import Image from 'next/image';

const EnhanceMusicExperience = () => {
  return (
    <main className='px-5'>
      <div className="flex items-center justify-center py-10 xl:py-20 bg-black">
        <div className="container mx-auto flex flex-col items-center lg:flex-row xl:items-stretch justify-between">
          <div className="text-white text-center xl:text-left mb-6 xl:mb-0">
            <p className="text-green-400 mb-3 xl:mb-6">Categories</p>
            <h1 className="text-3xl xl:text-5xl font-bold mb-3 xl:mb-4">Enhance Your</h1>
            <h1 className="text-3xl xl:text-5xl font-bold mb-4 xl:mb-8">Music Experience</h1>
            <div className="flex justify-center xl:justify-start space-x-2 xl:space-x-4 mb-4 xl:mb-6">
              <div className="text-center text-black rounded-full px-3 py-2 xl:px-5 xl:py-4 bg-white">
                <p className="text-lg xl:text-xl font-bold">23</p>
                <p className="text-xs xl:text-sm">Hours</p>
              </div>
              <div className="text-center text-black rounded-full px-4 py-2 xl:px-6 xl:py-4 bg-white">
                <p className="text-lg xl:text-xl font-bold">05</p>
                <p className="text-xs xl:text-sm">Days</p>
              </div>
              <div className="text-center text-black rounded-full px-2 py-2 xl:p-4 bg-white">
                <p className="text-lg xl:text-xl font-bold">59</p>
                <p className="text-xs xl:text-sm">Minutes</p>
              </div>
              <div className="text-center text-black rounded-full px-2 py-2 xl:px-3 xl:py-4 bg-white">
                <p className="text-lg xl:text-xl font-bold">35</p>
                <p className="text-xs xl:text-sm">Seconds</p>
              </div>
            </div>
            <button className="bg-green-600 text-white py-2 px-4 xl:py-2 xl:px-6 mt-4 xl:mt-6 rounded-sm hover:bg-green-700">Buy Now!</button>
          </div>
          <div className="w-[300px] h-400 mt-5 lg:w-auto flex justify-center">
            <Image src="/images/microphone.png" alt="Speaker" width={600} height={400} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default EnhanceMusicExperience;
