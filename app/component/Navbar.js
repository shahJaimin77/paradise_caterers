'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="websiteNavbar bg-transparent fixed w-full z-20 top-0 start-0">
            <div className="max-w-screen flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://flowbite.com/" className="">
                    <Image src={'/images/logo.svg'} alt='Logo' className='img' width={29} height={40} />
                </a>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <Link
                        href={'/'}
                        className="button b-transparent b-black"
                    >
                        Get started
                    </Link>
                    <button
                        onClick={toggleMenu}
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-sticky"
                        aria-expanded={isMenuOpen ? 'true' : 'false'}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                </div>
                <div
                    className={`items-center justify-between hidden w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? 'block' : 'hidden'}`}
                    id="navbar-sticky"
                >
                    <ul className="flex flex-col gap-[40px] p-4 md:p-0 mt-4 font-medium border md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
                        <li>
                            <a
                                href="#"
                                className="text-black"
                                aria-current="page"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-black"
                            >
                                Venue
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-black"
                            >
                                Gallery
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
