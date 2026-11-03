'use client';

import dynamic from 'next/dynamic';

const Typewriter = dynamic(() => import('typewriter-effect'), {
    ssr: false,
});

const TypewriterText = () => (
    <Typewriter
        component="span"
        aria-label="Frontend & UI/UX Specialist"
        options={{
            strings: ['Frontend & UI/UX Specialist'],
            autoStart: true,
            delay: 75,
            keepLastString: true,
        }}
    />
);

export default TypewriterText;
