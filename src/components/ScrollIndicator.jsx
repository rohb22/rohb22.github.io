import { useEffect, useState } from "react";


const ScrollIndicator = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        setScrollProgress(scrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div 
        className="fixed top-0 left-0 h-0.5 z-1000 transition-all duration-100"
        style={{ 
            width: `${scrollProgress}%`,
            background: 'linear-gradient(90deg, #6366f1, #8b5cf6)'
        }}
        />
    );
};

export default ScrollIndicator;