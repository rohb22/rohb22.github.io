import {useEffect, useState} from 'react'

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    return (
        <div id="home" className="hero bg-base-200 min-h-screen justify-start">
            <div className="hero-content flex-col items-start text-left ml-4 sm:ml-16 lg:ml-32">
                <div>
                    <h1 
                        className={`text-5xl font-bold leading-tight transition-all duration-1000 ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                        style={{ transitionDelay: '0.2s' }}
                    >
                        Rohb Paloma
                    </h1>
                    <p 
                        className={`py-6 text-xl font-light transition-all duration-1000 ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                        style={{ transitionDelay: '0.4s' }}
                    >
                        | Fullstack Developer |
                    </p>
                    <a
                        href="#contacts"
                        className={`btn bg-indigo-500 text-white hover:bg-purple-500 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-500 ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                        style={{ transitionDelay: '0.8s' }}
                    >
                        Contact Me
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Hero;