

const Hero = () => {
    return (
        <div id="home" className="hero bg-base-200 min-h-screen justify-start">
            <div className="hero-content flex-col items-start text-left ml-16 lg:ml-32">
                <div>
                    <h1 className="text-5xl font-bold">Rohb Paloma</h1>
                    <p className="py-6 text-xl font-light">
                        | Fullstack Developer |
                    </p>
                    <a  href="#contacts" className="btn bg-[#6366f1] text-white hover:bg-[#8b5cf6]">
                        Contact Me
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Hero;