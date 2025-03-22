import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "Vue",
    "TypeScript",
    "JavaScript",
    "TailwindCSS",
  ];

  const backendSkills = ["Node.js", "Python", "AWS", "MongoDB", "GraphQL"];

  const securitySkills = ["compTIA Security+ certified"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate security focused developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Security</h3>
                <div className="flex flex-wrap gap-2">
                  {securitySkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> M.S. in Inforation Technology </strong> - Deakin University
                  (2016-2020)
                </li>
                <li>
                Pursuing Master's in Information Technology with a focus on Software Development and CyberSecurity, 
                gaining expertise in new trends and technologies.
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Application Developer Intern at Nubevest (January 2025 - Present){" "}
                  </h4>
                  <p>

                    <li> Developed custom CRM solutions, e-commerce app, and payment platform for small businesses to accommodate
                    growing user bases.</li>
                    <li>Contributed to designing and optimizing user interfaces for web applications using .NET, Laravel, and PHP
ensuring a seamless user experience.</li>
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Software Engineer at Microchip Technology (2022 - 2024){" "}
                  </h4>
                  <p>
                    <li>
                    Adopted Evolutionary Prototyping SDLC for developing software libraries for 16-bit dsPIC devices for MPLAB®
Code Configurator (MCC). </li>
<li>
  Collaborated with framework engineers to implement new features for a plugin, manipulate JSON data and
develop a fully robust user interface with backend integration.
</li>
 <li>Single-handedly developed an ADC module that included GUI creation, interface communication, backend data
handling, unit test case and integration testing, documented release work, business report, created release tags in
the Jenkins pipeline, and released the beta version to customers within just 6 weeks.
</li>

<li> Implemented Automated Batch Scripts to complete the tasks which economized the development time by 85%.
</li>
<li>Revamped and optimized the user interface for three key modules: ADC, Pin Manager, and PTG. Each module
enjoyed an impressive average of over 300 downloads per week, signifying a 200 % boost.
</li>
                    
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};