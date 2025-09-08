import React from 'react';
import Image from 'next/image';
import resume from '../../../public/RishiResume-1.jpg';

const ResumePage = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="w-full max-w-5xl p-4">
                <Image
                    src={resume}
                    alt="Rishi Gadhia's Resume"
                    className="w-full h-auto border-2 rounded-lg shadow-lg"
                    priority
                />
            </div>
            <a
                href="/Rishi_Gadhia.pdf"
                download="Rishi_Gadhia.pdf"
                className="mt-4 px-6 py-2 bg-base-300 text-base font-semibold rounded-lg shadow-md hover:bg-accent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
                Download Resume
            </a>
        </div>
    );
};

export default ResumePage;
