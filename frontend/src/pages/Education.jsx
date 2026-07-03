export default function Education() {
  const education = [
    {
      degree: "Bachelor of Software Engineering",
      institution: "CamTech University",
      period: "2024 - Present",
      description:
        "Currently studying software engineering with a focus on web development, software design, databases, and modern application development.",
    },
  ];

  const courses = [
    "Web Development",
    "Software Design",
    "Database Systems",
    "Data Structures & Algorithms",
    "Research Method",
    "Object-Oriented Programming",
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-slate-800 mb-8">
        Education & Experience
      </h1>

      {/* Education Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-6">
          Education
        </h2>

        {education.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 border"
          >
            <h3 className="text-xl font-bold text-blue-600">
              {item.degree}
            </h3>

            <p className="text-gray-700 mt-2">
              {item.institution}
            </p>

            <p className="text-gray-500">
              {item.period}
            </p>

            <p className="mt-4 text-gray-700">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Relevant Courses */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-6">
          Relevant Courses
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          {courses.map((course) => (
            <div
              key={course}
              className="bg-slate-100 rounded-lg p-4 text-center font-medium"
            >
              {course}
            </div>
          ))}
        </div>
      </div>

      {/* Academic Projects */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">
          Academic Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-lg p-5">
            <h3 className="font-bold text-lg">
              SaveEat
            </h3>

            <p className="mt-3 text-gray-600">
              Food waste reduction platform connecting
              restaurants and customers.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-5">
            <h3 className="font-bold text-lg">
              Reachsei Badminton Store
            </h3>

            <p className="mt-3 text-gray-600">
              Platform for selling badminton equipment and supplies.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-5">
            <h3 className="font-bold text-lg">
              Portfolio Website
            </h3>

            <p className="mt-3 text-gray-600">
              Full-stack personal portfolio website built
              with React, Express, and MongoDB.
            </p>
          </div>
        </div>
      </div>
      {/* Volunteer Experience */}
<div className="mt-12">
  <h2 className="text-2xl font-semibold mb-6">
    Volunteer Experience
  </h2>

  <div className="bg-white shadow-md rounded-lg p-6 border">
    <h3 className="text-xl font-bold text-[#E6A100]">
      Event Volunteer & Design Team Lead
    </h3>

    <p className="text-gray-700 mt-1">
      Samdach Ov High School Khmer New Year Celebration
    </p>

    <p className="text-gray-500">
      April 2024
    </p>

    <ul className="list-disc ml-5 mt-4 space-y-2 text-gray-700">
      <li>
        Led the planning and structural arrangement of traditional Khmer New Year booths and activity areas.
      </li>
      <li>
        Designed the event layout and infrastructure to ensure smooth visitor flow and participation.
      </li>
      <li>
        Coordinated with fellow volunteers to prepare decorations, equipment, and event facilities.
      </li>
      <li>
        Assisted in organizing cultural activities and maintaining event operations throughout the celebration.
      </li>
      <li>
        Developed leadership, teamwork, communication, and event management skills.
      </li>
    </ul>
  </div>
</div>

{/* Competitions & Achievements */}
<div className="mt-12">
  <h2 className="text-2xl font-semibold mb-6">
    Competitions & Achievements
  </h2>

  <div className="bg-white shadow-md rounded-lg p-6 border">
    <div className="flex justify-between items-start flex-wrap gap-2">
      <div>
        <h3 className="text-xl font-bold text-[#E6A100]">
          Angkor Mathematics Competition
        </h3>

        <p className="text-gray-700">
          Candidate
        </p>
      </div>

      <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">
        Gold Medal 
      </span>
    </div>

    <p className="text-gray-500 mt-2">
      2023
    </p>

    <ul className="list-disc ml-5 mt-4 space-y-2 text-gray-700">
      <li>
        Demonstrated strong mathematical reasoning and analytical thinking skills.
      </li>
      <li>
        Applied logical problem-solving techniques to solve complex mathematical challenges.
      </li>
      <li>
        Competed with students from various schools in a highly competitive academic environment.
      </li>
      <li>
        Strengthened critical thinking, logical reasoning, and quantitative analysis abilities.
      </li>
    </ul>
  </div>
</div>
    </div>
  );
}