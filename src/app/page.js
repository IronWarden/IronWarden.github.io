"use client";

import Image from 'next/image'
import Head from 'next/head';
import {FaBeer} from 'react-icons/fa'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import { BsFillSunFill } from 'react-icons/bs';
import { BsSun } from 'react-icons/bs';
import {AiFillLinkedin, AiFillGithub, AiFillMail} from 'react-icons/ai'
import rishi from '../../public/rishi.png'
import c from '../../public/c.png'
import php from '../../public/php.png'
import js from '../../public/js.png'
import python from '../../public/python.png'
import mongodb from '../../public/mongodb.png'
import typescript from '../../public/typescript.png'
import mysql from '../../public/mysql.png'
import java from '../../public/java.png'
import aws from '../../public/aws.png'
import platformer from '../../public/platformer.png'
import gamereview from "../../public/Gamereview.png"
import { Carousel } from 'flowbite-react';
import { AiOutlineLeft } from 'react-icons/ai';
import { AiOutlineRight } from 'react-icons/ai';




import {useState, useEffect } from 'react' 



export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const images = [
    platformer,
    gamereview
  ]
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [backgroundImage, setbackgroundImage] = useState(images[0])
 

  // useEffect (() => {
  //   let currentIndex = currentImageIndex
  //   const changeBackgroundImage = () => {
  //     currentIndex = (currentIndex + 1) % images.length
  //     setbackgroundImage(images[currentIndex]) 
  //   } 
  //   const interval = setInterval(changeBackgroundImage, 5000)

  //   return () => {
  //     clearInterval(interval)
  //   }
  // })

  // handles left transiton of image
  const handleLeftArrowClick = () => {
    const nextIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(nextIndex)
    setbackgroundImage(images[currentImageIndex])

  }

  //handles right transition
  const handleRightArrowClick = () => {
    setCurrentImageIndex((currentImageIndex + 1) % 2)
    setbackgroundImage(images[currentImageIndex])
  }


  return (
    <div className={darkMode ? "dark" :  ""}>
      <Head>
        <title>My Portfolio</title>

      </Head>
      <main className='bg-platinum overflow-hidden px-10 md:px-20 lg:px-40 dark:bg-black'>
        <section className=' min-h-screen'>
        <nav className='py-10 mb-12 flex justify-between'>
          <h1 className='text-xl font-burton text-black dark:text-platinum'>Developed by Rishi Gadhia</h1>
          <ul>
          <li>
          {darkMode ? (
            <BsSun
              className="cursor-pointer text-3xl text-platinum dark:text-yellow"
              onClick={() => setDarkMode(!darkMode)}
            />
          ) : (
            <BsFillMoonStarsFill
              className="cursor-pointer text-2xl text-black dark:text-white"
              onClick={() => setDarkMode(!darkMode)}
            />
          )}</li>
        

          </ul>
        </nav>
        <div className='text-center p-10'>
          <h2 className='text-5xl py-2 font-medium md:text-7xl font-burton
           bg-gradient-to-r from-black via-glaucous to-black text-transparent bg-clip-text'>Rishi Gadhia</h2>
    
          <p className='text-md font-serif py-5 leading-8 text-black  dark:text-platinum md:text-xlwhitespace-normal overflow-ellipsis'>
            I am a Senior Year CS student looking for jobs/internships as Software Engineer. <br/>
            I am very eager to learn new things and am a fast learner. <br/>
            I am well-focused, self-reliant, and have good communication skills.
          </p>
        </div>
        <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white'>
          <a href='https://github.com/IronWarden' target='_blank'>
            <AiFillGithub className='text-black dark:text-platinum'/>
          </a>
          <a href='https://www.linkedin.com/in/rishi-gadhia-296843285/' target='_blank'>
            <AiFillLinkedin className='text-black dark:text-platinum'/>
          </a>
          <a href='mailto:gadhiarishi@gmail.com' target='_blank'>
            <AiFillMail className='text-black dark:text-platinum'/>
          </a>
        </div>
        <div className='relative mx-auto bg-gradient-to-b from to-emerald-500 rounded-full w-40 h-40 mt-10 overflow-hidden md:h-96 md:w-96'>
          <Image src={rishi} layout="fill" objectFit='cover' />

        </div>

        </section>
        <section>
          <div>
            <h3 className=' text-center font-burton py-10
             bg-gradient-to-r from-black via-glaucous to-black text-transparent bg-clip-text text-4xl '> Skills</h3>
            <p className='text-md py-2 leading-8 text-gray-800'>

            </p>
          </div>
          <div className='flex justify-between' >
            <div className='px-0 rounded-xl my-10' >
              <Image src={java} width={70} height={70} />
            </div>
            <div className='p-0 rounded-xl my-10 '>
              <Image src={c}  width={70} height={70} />
            </div>
            <div className='p-0 rounded-xl my-10 '>
              <Image src={python}  width={70} height={70} />
            </div>
            <div className='`p-0 rounded-xl my-10 '>
              <Image src={mysql}  width={70} height={70} />
            </div>

            </div>
            
            <div className='flex justify-between'>
            <div className='p-0 rounded-xl my-10 '>
              <Image src={js}  width={70} height={70} />
            </div>
            <div className=' p-0 rounded-xl my-10 '>
              <Image src={typescript}  width={70} height={70} />
            </div>
            <div className=' p-0 rounded-xl my-12 bg-platinum'>
              <Image src={mongodb}  width={70} height={70} />
            </div>
            <div className=' p-0 rounded-xl my-10 '>
              <Image src={php}  width={70} height={70} />
            </div>

          </div>
        
        </section>
        <section className='bg-gradient-to-r from-black via-glaucous to-black  rounded-xl'>
          <div className='flex justify-center'>
            <h3 className='text-3xl py-2 text-platinum font-burton text-center'>Certifications</h3>
            
            <p></p>
          </div>
            <div className=' flex justify-center py-8'>
            <Image src={aws} width={100} height={100} />
            </div>
        </section>
        <section >
          <div>
            <h3 className='text-3xl bg-gradient-to-r from-black via-glaucous to-black text-transparent bg-clip-text 
            font-burton text-center py-10'>Projects</h3>

          </div>
          
         <div className='flex justify-center'>
         <a href='https://github.com/nstuhldreher1/GameReview' className='text-glaucous font-serif underline' target="_blank">GitHub</a>
         </div>
          <div className='flex justify-center text-center py-1'>
            <Image src={gamereview} className='w-full max-w-screen-md' />
          </div>

          <div className='flex justify-center py-3'>
            <a href='https://github.com/IronWarden/2DPlatformer' className='text-glaucous font-serif underline' target="_blank">GitHub</a>
         </div>
          <div  className='flex justify-center text-center '>
            <Image src={platformer} className='w-full max-w-screen-md' />
          </div>
          <div className='flex justify-center py-3'>
            <a href='https://github.com/IronWarden/2DPlatformer' className='text-glaucous font-serif underline' target="_blank">View All On GitHub</a>
         </div>

     
        
          {/* <div className='bg-fixed bg-cover bg-center' >
            <div className='flex items-center justify-center '>
            <li >
            <AiOutlineLeft className='text-black text-3xl cursor-pointer dark:text-platinum ' onClick={handleLeftArrowClick}/>
            </li>

            <Image src={backgroundImage} style={{backgroundImage: `url(${backgroundImage})`, transition:'5s'}} />
            <li>
            <AiOutlineRight className='text-black text-3xl cursor-pointer dark:text-platinum' onClick={handleRightArrowClick}/>
            </li>
            </div>
   
          </div> */}
        </section>
        <section className='my-20'>
          <div className='bg-gradient-to-r from-black via-glaucous to-black  my-10 rounded-xl overflow-hidden break-words whitespace-normal flex-wrap  p-4 sm:p-6 md:p-8 lg:p-10'>
            <h3 className='md:text-3xl sm:text-xl text-center font-burton py-4 text-platinum '>Work/Volunteer History</h3>
            <div className='justify-center flex-wrap'>
              <h1 className='text-center   md:text-xl sm:text-lg lg-text-xl text-base font-burton text-platinum '>Advanced Data Associates</h1>
              <p className='text-center md:text-lg sm:text-lg p-5 text-base text-platinum'>
              I worked full-time at Advanced Data Associates as a salesmen during the summer of 2021. 
              I was tasked with handling calls on a daily basis and directing our customers to products 
              made by our buisness partners. During this time I was regarded as a top salesmen and 
              respected by my co-workers.
              </p>
            </div>
            <div className='justify-center flex-wrap '>
            <h1 className='text-center font-burton md:text-xl sm:text-lg text-base text-platinum '>Suncoast Hospice</h1>
            <p className='text-center md:text-lg sm:text-lg lg-text-xl text-base  p-8 text-platinum '>
            I volunteered as a cheer team member for Suncoast Hospice during July 2018 - February 2020. 
            I worked as part of a team to visit and cheer elderly under empath care.
            </p>
            </div>

          </div>
        </section>
      </main>
    </div>
 
  );
}

