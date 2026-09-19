import React from 'react';
import FunFacts from '@/app/components/FunFacts.js';
import keys from '@/app/Keys/main.json';

export const metadata = {
    title: `${keys.funFacts.title} · Rishi Gadhia`,
};

export default function Fun() {
    return (
        <main className="text-base-content">
            <FunFacts />
        </main>
    );
}
