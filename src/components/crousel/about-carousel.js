import React from 'react';
import Image from 'next/image';
import { BiLogoInstagram, BiLogoLinkedin } from "react-icons/bi";
import { RiLinkedinLine } from "react-icons/ri";
import { FiTwitter } from "react-icons/fi";
import '../../app/globals.css'

const teamMembers = [
    {
        name: "Tom Cruise",
        title: "Founder & Chairman",
        image: "/images/image 46.png",
        social: {
            twitter: "#",
            instagram: "#",
            linkedin: "#"
        }
    },
    {
        name: "Emma Watson",
        title: "Managing Director",
        image: "/images/image 51.png",
        social: {
            twitter: "#",
            instagram: "#",
            linkedin: "#"
        }
    },
    {
        name: "Will Smith",
        title: "Product Designer",
        image: "/images/image 47.png",
        social: {
            twitter: "#",
            instagram: "#",
            linkedin: "#"
        }
    },
];

const AboutGrid = () => {
    return (
        <div className="pr-24">
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {teamMembers.slice(0, 3).map((member, index) => (
                        <div key={index} className="rounded flex flex-col overflow-hidden bg-gray-1 pt-10">
                            <div className="mx-auto relative w-[300px] h-[363px]">
                                <Image src={member.image} alt={member.name} fill objectFit="contain" />
                            </div>
                            <div className='bg-white'>
                                <h3 className="text-4xl mt-4 mb-2 text-black font-medium">{member.name}</h3>
                                <p className="text-lg mb-2 text-black">{member.title}</p>
                                <div className="flex gap-4 mt-4">
                                    <FiTwitter href={member.social.twitter} className="fab fa-twitter text-xl text-black" />
                                    <BiLogoInstagram href={member.social.instagram} className="fab fa-instagram text-xl text-black" />
                                    <RiLinkedinLine href={member.social.linkedin} className="fab fa-linkedin text-xl text-black" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center mt-4 space-x-2">
                <button className="w-3 h-3 rounded-full bg-gray-300" />
                <button className="w-3 h-3 rounded-full bg-gray-300" />
                <button className="w-3 h-3 rounded-full bg-red-500" />
                <button className="w-3 h-3 rounded-full bg-gray-300" />
                <button className="w-3 h-3 rounded-full bg-gray-300" />
            </div>
        </div>
    );
};

export default AboutGrid;
