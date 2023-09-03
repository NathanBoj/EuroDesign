import React from 'react';

function Navbar() {
    const handleClick = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const top = element.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({ top, behavior: 'smooth' });
        } else {
            console.warn(`Element with id ${id} not found.`);
        }
    };

    return (
        <nav className="bg-black bg-opacity-80 backdrop-blur-lg text-white py-4 px-8 flex justify-between items-center fixed top-0 w-full z-50 border-b-4 border-red-600">
            <svg
                className="w-6 h-6 mr-4 "
                fill="none" stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                onClick={() => handleClick('Section1')}>
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"></path>
            </svg>
            <div className="text-xl font-bold" onClick={() => handleClick('Home')}>EURODESIGN</div>
            <ul className="hidden md:flex justify-end items-right ml-auto">
                <li className=" mr-4 cursor-pointer hover:text-red-500" onClick={() => handleClick('Home')}>Home</li>
                <li className=" mr-4 cursor-pointer hover:text-red-500" onClick={() => handleClick('About')}>About</li>
                <li className="mr-4 cursor-pointer hover:text-red-500" onClick={() => handleClick('Contact')}>Contact</li>
            </ul>



            <button
                type="button"
                onClick={() => window.open(`tel:${'+14161111111'}`)}
                data-te-ripple-init
                data-te-ripple-color="light"
                className="bg-green-500 hidden md:inline-block hover:opacity-70 mr-4 mb-2 rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
            >
                <svg fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className='h-h w-4'>
                    <path clip-rule="evenodd" fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"></path>
                </svg>
            </button>

            <button
                type="button"
                onClick={() => window.open(`mailto:andrewbojczuk@gmail.com `, '_blank')}
                data-te-ripple-init
                data-te-ripple-color="light"
                className="bg-blue hidden md:inline-block hover:opacity-70 mr-4 mb-2 rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
            >
                <svg fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className='h-h w-4'>
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"></path>
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"></path>
                </svg>
            </button>
        </nav>
    );
}

export default Navbar;
