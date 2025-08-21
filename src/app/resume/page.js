import React from 'react';

const ResumePage = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="w-full max-w-5xl p-4">
                <img
                    src="/RishiResume-1.jpg"
                    alt="Rishi Gadhia's Resume"
                    className="w-full h-auto border-2 rounded-lg shadow-lg"
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
