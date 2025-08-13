import { Link } from "wouter";
import { PageTransition } from "../components/PixelElements";
import { experience } from "../data/resume";

export default function Experience() {
  return (
    <PageTransition>
      <section className="min-h-screen py-10">
        <div className="container mx-auto px-4">
          {/* Main heading */}
          <h1 className="text-7xl font-medieval text-[#c0971a] dark:text-[#e2a42c] text-center mb-8 drop-shadow-lg">
            Experience
          </h1>

          {/* Subheading */}
          <h2 className="text-4xl font-medieval text-[#c0971a] dark:text-[#e2a42c] text-center mb-8 drop-shadow-lg">
            Trials of the Realms
          </h2>

          {/* Experience list */}
          <div className="max-w-4xl mx-auto space-y-8">
            {experience.map((exp) => (
              <Link key={exp.id} href={`/experience/${exp.id}`}>
                <div className="bg-white/60 dark:bg-black/60 rounded-lg pixel-border p-8 mb-4 hover-scale cursor-pointer group">
                  <div className="flex items-start space-x-6">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-[#c0971a]/20 dark:bg-[#e2a42c]/20 rounded-lg pixel-art flex items-center justify-center text-3xl text-[#c0971a] dark:text-[#e2a42c]">
                      {exp.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      {/* Title */}
                      <h3 className="text-2xl font-cinzel text-[#c0971a] dark:text-[#e2a42c] mb-2">
                        {exp.title}
                      </h3>

                      {/* Company */}
                      <p className="text-gray-800 dark:text-gray-300 font-semibold mb-2">
                        {exp.company}
                      </p>

                      {/* Period & Location */}
                      <p className="text-gray-700 dark:text-gray-400 mb-4">
                        {exp.period} | {exp.location}
                      </p>

                      {/* Description */}
                      <div className="space-y-2">
                        {exp.description.map((desc, index) => (
                          <div key={index} className="flex items-start space-x-2">
                            <span className="text-[#c0971a] dark:text-[#e2a42c]">⚔️</span>
                            <p className="text-gray-800 dark:text-gray-300">{desc}</p>
                          </div>
                        ))}
                      </div>

                      {/* Skills */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-sm bg-[#c0971a]/20 dark:bg-[#e2a42c]/20 text-[#c0971a] dark:text-[#e2a42c] px-2 py-1 rounded"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
