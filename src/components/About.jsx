import Skills from "./Skills";



const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-4xl font-light text-center mb-12">About</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-600 mb-8">
            I'm a <span className="font-bold text-[#6366f1]">Computer Engineering </span> 
            student passionate about turning ideas into working applications.
            <br/>I prefer working on backend development because 
            I enjoy solving problems server-side, but 
            I’m comfortable handling frontend tasks as well.
            </p>
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default About;