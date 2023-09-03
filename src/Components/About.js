import React from 'react'

export default function About() {



    return (
        <section id="About" className="py-12 bg-white min-h-screen" 
        style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/wall2.svg)`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        }}>
            <div className="flex flex-col justify-end py-12 mx-auto max-w-3xl">

                <div className='mx-5'>
                    <h1 className="text-4xl font-bold mb-4">
                        <span className="bg-gradient-to-r text-transparent text-white text-5xl inline-block">
                            What We Do!
                        </span>
                        <svg className="w-10 h-10 mb-2 ml-2 inline-block" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path clip-rule="evenodd" fill-rule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"></path>
                        </svg>
                    </h1>
                    <div className="bg-black rounded-lg p-6 mb-6">
                        <p className="first-letter:text-7xl first-letter:font-bold first-letter:mr-3 first-letter:float-left text-lg text-white leading-relaxed ">
                            <span>
                                Welcome to my website! As a passionate software engineer, I am dedicated to crafting innovative solutions that enhance user experiences. With a deep curiosity for emerging technologies and a drive to tackle complex challenges, I am excited to contribute my skills and knowledge to a dynamic and rewarding software engineering role. Through this website, I aim to showcase my projects, skills, and achievements, providing insights into my professional journey and demonstrating my commitment to delivering excellence in software development. </span>
                        </p>
                    </div>
                </div>
                

            </div>
        </section>
    )

}

