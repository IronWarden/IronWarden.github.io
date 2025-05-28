'use client';

import Image from 'next/image';
import Head from 'next/head';
import { FaBeer } from 'react-icons/fa';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { BsFillSunFill } from 'react-icons/bs';
import { BsSun } from 'react-icons/bs';
import { AiFillLinkedin, AiFillGithub, AiFillMail } from 'react-icons/ai';
import rishi from '../../public/rishi.png';
import platformer from '../../public/platformer.png';
import gamereview from '../../public/Gamereview.png';
import React from 'react';
import { useState } from 'react';
import keys from '@/app/Keys/main.json';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const images = [platformer, gamereview];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [backgroundImage, setbackgroundImage] = useState(images[0]);

  // handles left transiton of image
  const handleLeftArrowClick = () => {
    const nextIndex =
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(nextIndex);
    setbackgroundImage(images[currentImageIndex]);
  };

  //handles right transition
  const handleRightArrowClick = () => {
    setCurrentImageIndex((currentImageIndex + 1) % 2);
    setbackgroundImage(images[currentImageIndex]);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>My Portfolio</title>
      </Head>
      <main className="bg-polarLight overflow-hidden px-10 md:px-20 lg:px-40 dark:bg-polarBlack">
        <section>
          <nav className="py-10 mb-8 flex justify-between">
            <h1 className="md:text-2xl lg:text-3xl text-xl font-burton text-polarBlack dark:text-polarLight">
              Developed by Rishi Gadhia
            </h1>
            <ul>
              <li>
                {darkMode ? (
                  <BsSun
                    className="cursor-pointer text-3xl text-polarLight dark:text-yellow"
                    onClick={() => setDarkMode(!darkMode)}
                  />
                ) : (
                  <BsFillMoonStarsFill
                    className="cursor-pointer text-2xl text-polarBlack dark:text-white"
                    onClick={() => setDarkMode(!darkMode)}
                  />
                )}
              </li>
            </ul>
          </nav>
          <div className="text-center">
            <h2
              className="text-5xl py-2 font-medium md:text-7xl font-burton
           bg-frostSky text-transparent bg-clip-text">
              Rishi Gadhia
            </h2>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white">
            <a href="https://github.com/IronWarden" target="_blank">
              <AiFillGithub className="text-polarBlack dark:text-polarLight" />
            </a>
            <a
              href="https://www.linkedin.com/in/rishi-gadhia-296843285/"
              target="_blank">
              <AiFillLinkedin className="text-polarBlack dark:text-polarLight" />
            </a>
            <a href="mailto:gadhiarishi@gmail.com" target="_blank">
              <AiFillMail className="text-polarBlack dark:text-polarLight" />
            </a>
          </div>

          <div className="relative mx-auto bg-gradient-to-b from to-emerald-500 rounded-full mt-10 overflow-hidden md:h-96 md:w-96 h-60 w-60">
            <Image src={rishi} layout="fill" objectFit="cover" />
          </div>
        </section>
        <section className="my-12">
          <div className="flex justify-center">
            <div className="container max-w-screen-lg jusitify-center items-center">
              <h2 className="text-4xl text-center text-frostSky font-burton">
                About Me
              </h2>
              <p className="lg:text-xl sm:text-lg md:text-lg font-hack py-5 leading-8 text-polarBlack  dark:text-polarLight whitespace-normal overflow-ellipsis">{keys.intro}</p>
            </div>
          </div>
        </section>
        <section className="flex justify-center max-w-screen-lg"></section>
        <section>
          <div className="py-4">
            <h3
              className="text-3xl bg-frostSky text-transparent bg-clip-text 
            font-burton text-center">
              Projects
            </h3>
          </div>

          <div className="flex justify-center">
            <a
              href="https://github.com/nstuhldreher1/GameReview"
              className="text-frostSky font-serif underline"
              target="_blank">
              GitHub
            </a>
          </div>
          <div className="flex justify-center text-center py-1">
            <Image src={gamereview} className="w-full max-w-screen-md" />
          </div>

          <div className="flex justify-center py-3">
            <a
              href="https://github.com/IronWarden/2DPlatformer"
              className="text-frostSky font-serif underline"
              target="_blank">
              GitHub
            </a>
          </div>
          <div className="flex justify-center text-center ">
            <Image src={platformer} className="w-full max-w-screen-md" />
          </div>
          <div className="flex justify-center py-3">
            <a
              href="https://github.com/IronWarden/2DPlatformer"
              className="text-frostSky font-serif underline"
              target="_blank">
              View All On GitHub
            </a>
          </div>

          {/* <div className='bg-fixed bg-cover bg-center' >
            <div className='flex items-center justify-center '>
            <li >
            <AiOutlineLeft className='text-polarBlack text-3xl cursor-pointer dark:text-polarLight ' onClick={handleLeftArrowClick}/>
            </li>

            <Image src={backgroundImage} style={{backgroundImage: `url(${backgroundImage})`, transition:'5s'}} />
            <li>
            <AiOutlineRight className='text-polarBlack text-3xl cursor-pointer dark:text-polarLight' onClick={handleRightArrowClick}/>
            </li>
            </div>
   
          </div> */}
        </section>
      </main>
    </div>
  );
}
