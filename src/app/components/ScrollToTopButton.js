'use client';

import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className="fixed bottom-[30vh] right-[5vw] xl:right-[20vw] z-50 lg:hidden">
            {isVisible && (
                <button onClick={scrollToTop} className="btn btn-circle btn-accent">
                    <i className='bx bx-up-arrow-alt text-2xl'></i>
                </button>
            )}
        </div>
    );
};

export default ScrollToTopButton;
