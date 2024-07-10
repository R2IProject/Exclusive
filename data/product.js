import { RiComputerLine } from "react-icons/ri";
import { CiCamera } from "react-icons/ci";
import { IoWatchOutline } from "react-icons/io5";
import { LuGamepad } from "react-icons/lu";
import { FiHeadphones, FiSmartphone } from "react-icons/fi";

const products = [
  {
    type: 'flash',
    src: '/images/HAVIT HV-G92 Gamepad.png',
    alt: 'HAVIT HV-G92 Gamepad',
    discount: '-40%',
    price: '$160',
    discounted: '$120',
    star: '(99)',
    description: 'HAVIT HV-G92 Gamepad',
  },
  {
    type: 'flash',
    src: '/images/AK-900 Wired Keyboard.png',
    alt: 'AK-900 Wired Keyboard',
    discount: '-35%',
    price: '$960',
    discounted: '$1160',
    star: '(75)',
    description: 'AK-900 Wired Keyboard',
  },
  {
    type: 'flash',
    src: '/images/IPS LCD Gaming Monitor.png',
    alt: 'IPS LCD Gaming Monitor',
    discount: '-30%',
    price: '$370',
    discounted: '$400',
    star: '(99)',
    description: 'IPS LCD Gaming Monitor',
  },
  {
    type: 'flash',
    src: '/images/S-Series Comfort Chair.png',
    alt: 'S-Series Comfort Chair',
    discount: '-25%',
    price: '$400',
    discounted: '$375',
    star: '(99)',
    description: 'S-Series Comfort Chair',
  },
  {
    type: 'best-selling',
    src: '/images/The north coat.png',
    alt: 'The north coat',
    price: '$360',
    discounted: '$260',
    star: '(65)',
    description: 'The north coat',
  },
  {
    type: 'best-selling',
    src: '/images/Gucci duffle bag.png',
    alt: 'Gucci duffle bag',
    price: '$1160',
    discounted: '$960',
    star: '(99)',
    description: 'Gucci duffle bag',
  },
  {
    type: 'best-selling',
    src: '/images/RGB Liquid CPU Cooler.png',
    alt: 'RGB Liquid CPU Cooler',
    price: '$170',
    discounted: '$160',
    star: '(65)',
    description: 'RGB Liquid CPU Cooler',
  },
  {
    type: 'best-selling',
    src: '/images/Small BookSelf.png',
    alt: 'Small BookSelf',
    price: '$360',
    star: '(65)',
    description: 'Small BookSelf',
  },
  {
    type: 'explore',
    src: '/images/Breed Dry Dog Food.png',
    alt: 'Breed Dry Dog Food',
    price: '$100',
    star: '(35)',
    description: 'Breed Dry Dog Food',
  },
  {
    type: 'explore',
    src: '/images/Kids Electric Car.png',
    alt: 'Kids Electric Car',
    price: '$960',
    star: '(65)',
    description: 'Kids Electric Car',
  },
  {
    type: 'explore',
    src: '/images/CANON EOS DSLR Camera.png',
    alt: 'CANON EOS DSLR Camera',
    price: '$360',
    star: '(65)',
    description: 'CANON EOS DSLR Camera',
  },
  {
    type: 'explore',
    src: '/images/Jr. Zoom Soccer Cleats.png',
    alt: 'Jr. Zoom Soccer Cleats',
    price: '$1160',
    star: '(35)',
    description: 'Jr. Zoom Soccer Cleats',
  },
  {
    type: 'explore',
    src: '/images/ASUS FHD Gaming Laptop.png',
    alt: 'ASUS FHD Gaming Laptop',
    price: '$700',
    star: '(325)',
    description: 'ASUS FHD Gaming Laptop',
  },
  {
    type: 'explore',
    src: '/images/GP11 Shooter USB Gamepad.png',
    alt: 'GP11 Shooter USB Gamepad',
    price: '$660',
    star: '(55)',
    description: 'GP11 Shooter USB Gamepad',
  },
  {
    type: 'explore',
    src: '/images/Curology Product Set.png',
    alt: 'Curology Product Set',
    price: '$500',
    star: '(145)',
    description: 'Curology Product Set',
  },
  {
    type: 'explore',
    src: '/images/Quilted Satin Jacket.png',
    alt: 'Quilted Satin Jacket',
    price: '$660',
    star: '(55)',
    description: 'Quilted Satin Jacket',
  },
  {
    type: 'explore',
    src: '/images/Curology Product Set.png',
    alt: 'Curology Product Set',
    price: '$500',
    star: '(145)',
    description: 'Curology Product Set',
  },
  {
    type: 'explore',
    src: '/images/Quilted Satin Jacket.png',
    alt: 'Quilted Satin Jacket',
    price: '$660',
    star: '(55)',
    description: 'Quilted Satin Jacket',
  },
  {
    type: 'explore',
    src: '/images/Curology Product Set.png',
    alt: 'Curology Product Set',
    price: '$500',
    star: '(145)',
    description: 'Curology Product Set',
  },
  {
    type: 'explore',
    src: '/images/Quilted Satin Jacket.png',
    alt: 'Quilted Satin Jacket',
    price: '$660',
    star: '(55)',
    description: 'Quilted Satin Jacket',
  },
  {
    type: 'featured',
    src: '/images/(dashboard)/featured-product/PlayStation5.png',
    name: 'PlayStation 5',
    alt: 'PlayStation 5',
    description: 'Black and White version of the PS5',
    description1: 'coming out on sale.',
    link: '#',
    span: 2,
    rowSpan: 2
  },
  {
    type: 'featured',
    name: 'Womens Collections',
    description: 'Featured women collections',
    description1: ' that give you another vibe.',
    src: '/images/(dashboard)/featured-product/Womens Collections.png',
    alt: 'Womens Collections',
    link: '#'
  },
  {
    type: 'featured',
    name: 'Perfume',
    description: 'GUCCI INTENSE OUD EDP',
    src: '/images/(dashboard)/featured-product/Perfume.png',
    alt: 'Perfume',
    link: '#'
  },
  {
    type: 'featured',
    name: 'Speakers',
    description: 'Amazon wireless speakers.',
    src: '/images/(dashboard)/featured-product/Speakers.png',
    alt: 'Speakers',
    link: '#'
  },
  {
    wish: 'wish',
    discount: '-35%',
    src: '/images/Gucci duffle bag.png',
    alt: 'Gucci duffle bag',
    price: '$960',
    discounted: '$1160',
    description: 'Gucci duffle bag',
  },
  {
    wish: 'wish',
    src: '/images/RGB Liquid CPU Cooler.png',
    alt: 'RGB Liquid CPU Cooler',
    price: '$1960',
    description: 'RGB Liquid CPU Cooler',
  },
  {
    wish: 'wish',
    src: '/images/GP11 Shooter USB Gamepad.png',
    alt: 'GP11 Shooter USB Gamepad',
    price: '$550',
    description: 'GP11 Shooter USB Gamepad',
  },
  {
    wish: 'wish',
    src: '/images/Quilted Satin Jacket.png',
    alt: 'Quilted Satin Jacket',
    price: '$750',
    description: 'Quilted Satin Jacket',
  },
  {
    just: 'just',
    src: '/images/ASUS FHD Gaming Laptop.png',
    alt: 'ASUS FHD Gaming Laptop',
    discount: '-35%',
    price: '$960',
    discounted: '$1160',
    star: '(65)',
    description: 'ASUS FHD Gaming Laptop',
  },
  {
    just: 'just',
    src: '/images/IPS LCD Gaming Monitor.png',
    alt: 'IPS LCD Gaming Monitor',
    price: '$370',
    discounted: '$400',
    star: '(65)',
    description: 'IPS LCD Gaming Monitor',
  },
  {
    just: 'just',
    src: '/images/HAVIT HV-G92 Gamepad.png',
    alt: 'HAVIT HV-G92 Gamepad',
    new: 'NEW',
    price: '$560',
    star: '(65)',
    description: 'HAVIT HV-G92 Gamepad',
  },
  {
    just: 'just',
    src: '/images/AK-900 Wired Keyboard.png',
    alt: 'AK-900 Wired Keyboard',
    price: '$200',
    star: '(65)',
    description: 'AK-900 Wired Keyboard',
  },

  // Add more products here.
];

const categories = [
  { icon: <FiSmartphone className="text-4xl text-black" />, name: 'Phones' },
  { icon: <RiComputerLine className="text-4xl text-black" />, name: 'Computers' },
  { icon: <IoWatchOutline className="text-4xl text-black" />, name: 'Smart Watch' },
  { icon: <CiCamera className="text-4xl text-white" />, name: 'Camera', bgClass: 'bg-red-500', textClass: 'text-white' },
  { icon: <FiHeadphones className="text-4xl text-black" />, name: 'Headphones' },
  { icon: <LuGamepad className="text-4xl text-black" />, name: 'Gaming' },
];

export {categories};
export default products
