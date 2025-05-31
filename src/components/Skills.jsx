import { useEffect, useState, useRef } from 'react'
import skillsdb from "../skills.json"

const Skills = () => {
    const [isVisible, setIsVisible] = useState(false)
    const skillsRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
            setIsVisible(true)
            observer.disconnect()
            }
        },
        {
            threshold: 0.2, 
            rootMargin: '0px 0px -50px 0px' 
        }
        )

        if (skillsRef.current) {
        observer.observe(skillsRef.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <div ref={skillsRef} className="flex flex-wrap justify-center gap-4 mt-12">
        {skillsdb.skills.map((skill, index) => (
            <span
            key={skill}
            className={`px-4 py-2 border border-gray-300 text-gray-600 text-sm cursor-pointer
                        hover:border-indigo-500 hover:text-white hover:bg-indigo-500 hover:scale-105 hover:shadow-md
                        transition-[border-color,color,background-color,box-shadow] duration-200
                        ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{
                transform: isVisible ? 'translateY(0px)' : 'translateY(32px)',
                transition: `opacity 500ms ease ${isVisible ? `${index * 100}ms` : '0ms'}, 
                           transform 500ms ease ${isVisible ? `${index * 100}ms` : '0ms'},
                           border-color 200ms ease 0ms,
                           color 200ms ease 0ms,
                           background-color 200ms ease 0ms,
                           box-shadow 200ms ease 0ms`
            }}
            >
            {skill}
            </span>
        ))}
        </div>
    );
};

export default Skills;