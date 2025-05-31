import skillsdb from "../skills.json"


const Skills = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-12">
      {skillsdb.skills.map((skill) => (
        <span
          key={skill}
          className="px-4 py-2 border border-gray-300 text-gray-600 text-sm 
                     transition-colors duration-300 cursor-pointer
                     hover:border-indigo-500 hover:text-white hover:bg-indigo-500"
        >
          {skill}
        </span>
      ))}
    </div>
  );
};

export default Skills;
