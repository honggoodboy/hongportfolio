export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", level: 3},
        { name: "Java", level: 3 },
        { name: "Python", level: 4 },
        { name: "C", level: 2 },
      ],
    },
    {
      title: "Front-End Technologies",
      skills: [
        { name: "React", level: 4 },
        { name: "HTML", level: 5 },
        { name: "CSS", level: 4 },
        { name: "Tailwind CSS", level: 3 },
      ],
    },
    {
      title: "Back-End Technologies",
      skills: [
        { name: "Node.js", level: 3 },
        { name: "Express.js", level: 3 },
        { name: "REST APIs", level: 4 },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", level: 3 },
        { name: "MySQL", level: 3 },
      ],
    },
    {
      title: "Development Tools",
      icon: "",
      skills: [
        { name: "Git & GitHub", level: 4 },
        { name: "VS Code", level: 5 },
        { name: "Postman", level: 2 },
      ],
    },
    {
      title: "Software Engineering",
      skills: [
        { name: "OOP", level: 3 },
        { name: "SDLC", level: 2},
        { name: "Agile", level: 2},
        { name: "System Design", level: 3 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-center mb-4">
          Technical Skills
        </h1>

        <div className="w-24 h-1 bg-[#E6A100] mx-auto mb-12"></div>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
          A collection of technical skills developed through academic
          projects, personal learning, and hands-on software development
          experience.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-xl font-bold text-[#000000]">
                  {category.title}
                </h2>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-700">
                        {skill.name}
                      </span>

                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((dot) => (
                          <div
                            key={dot}
                            className={`w-3 h-3 rounded-full ${
                              dot <= skill.level
                                ? "bg-[#deb149]"
                                : "bg-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}