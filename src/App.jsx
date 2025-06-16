import Hero from './components/Hero'

function App() {
  return (
    <>
      <div className="font-sans">
        {/* Navbar */}
        <nav className="bg-gray-900 text-white py-4 px-4 md:px-6 flex flex-col md:flex-row justify-between items-center shadow-md sticky top-0 z-50 space-y-4 md:space-y-0">
          <h1 className="text-2xl font-bold">Md. Tamim</h1>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#skills" className="hover:text-blue-400">Skills</a>
            <a href="#projects" className="hover:text-blue-400">Projects</a>
            <a href="#experience" className="hover:text-blue-400">Experience</a>
            <a href="#education" className="hover:text-blue-400">Education</a>
            <a href="#achievements" className="hover:text-blue-400">Achievements</a>
            <a href="#contact" className="hover:text-blue-400">Contact</a>
          </div>
        </nav>

        {/* Hero Section */}
        <header>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://c4.wallpaperflare.com/wallpaper/632/34/549/technology-monitor-alpha-coders-binary-wallpaper-preview.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <img
                  src="https://i.ibb.co/0R6CRJCN/myImage.jpg"
                  alt="Md. Tamim"
                  className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mx-auto mb-6 border-4 border-white"
                />
                <h1 className="mb-3 text-4xl font-bold">Hi, I'm Md. Tamim</h1>
                <p className="mb-5 text-lg">
                  Frontend Developer | CSE Student
                </p>
                <a
                  href="/src/Resume of Md. Tamim.pdf"  // <-- replace this with your actual file path
                  download="Md-Tamim-Resume.pdf"
                >
                  <button className="btn btn-primary">Download Resume</button>
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Skills Section */}
        <section id="skills" className="px-4 md:px-6 py-12 bg-gray-100">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold">Front-End Development</h3>
              <ul className="list-disc list-inside">
                <li>HTML5, CSS3</li>
                <li>JavaScript</li>
                <li>React.js, React Router</li>
                <li>Tailwind CSS, DaisyUI</li>
                <li>Firebase Authentication</li>
                <li>Git & GitHub</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Tools & Technologies</h3>
              <ul className="list-disc list-inside">
                <li>VS Code, Chrome DevTools</li>
                <li>REST API Integration</li>
                <li>LocalStorage & React Context API</li>
                <li>Deployment: Vercel, Netlify</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Soft Skills</h3>
              <ul className="list-disc list-inside">
                <li>Strong Communication & Collaboration</li>
                <li>Time Management</li>
                <li>Problem Solving</li>
                <li>Adaptability</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="px-4 md:px-6 py-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Projects</h2>
          <div className="space-y-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-xl font-semibold">Recipe Book</h3>
              <p>A personal recipe manager with add, edit, delete, like, and filter features.</p>
              <p className="text-sm">Tech Stack: HTML, Tailwind CSS, DaisyUI, React, Firebase, Node.js, Express.js, MongoDB</p>
              <a href="https://assignment-10-72e11.web.app/" className="text-blue-500">Live</a> | <a href="https://github.com/tamim-111/assignment_10" className="text-blue-500">Code</a>
            </div>
            <div>
              <h3 className="text-xl font-semibold">PayKash</h3>
              <p>A bill payment app using React Context for real-time updates.</p>
              <p className="text-sm">Tech Stack: HTML, Tailwind CSS, DaisyUI, React, Firebase</p>
              <a href="https://assignment-9-bfdb7.web.app/" className="text-blue-500">Live</a> | <a href="https://github.com/tamim-111/assignment-9" className="text-blue-500">Code</a>
            </div>
            <div>
              <h3 className="text-xl font-semibold">LawBd</h3>
              <p>A lawyer directory with search, filter, and authentication features.</p>
              <p className="text-sm">Tech Stack: HTML, Tailwind CSS, DaisyUI, React, Firebase</p>
              <a href="https://tamim-111-a8-lawbd.surge.sh/" className="text-blue-500">Live</a> | <a href="https://github.com/tamim-111/assignment-8" className="text-blue-500">Code</a>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="px-4 md:px-6 py-12 bg-gray-100 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Experience</h2>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Team Member at Chatime Bangladesh (Oct 2023 – Jul 2024)</h3>
            <a href="https://drive.google.com/drive/folders/1YxeIn4MOeR8qGx-ZuwNziC6Rq9NTNQ_b" className="text-blue-500">Experience Details</a>
            <ul className="list-disc list-inside mt-2">
              <li>Brewing teas and preparing drinks</li>
              <li>Provided excellent customer service</li>
              <li>Collaborated effectively with team members</li>
              <li>Managed inventory and COGS efficiently</li>
              <li>Checked stocked products daily for safety</li>
              <li>Handled cash with integrity</li>
            </ul>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="px-4 md:px-6 py-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Education</h2>
          <ul className="list-disc list-inside">
            <li>BSc in CSE, Uttara University (Ongoing)</li>
            <li>HSC in Science, Govt. Shaheed Suhrawardy College (2022)</li>
            <li>SSC in Science, Pogose Laboratory School and College (2020)</li>
          </ul>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="px-4 md:px-6 py-12 bg-gray-100 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Achievements & Certifications</h2>
          <ul className="list-disc list-inside">
            <li>Collaborated on 6 Chatime video projects, one gained 3.1M views
              <br />
              <a href="https://www.facebook.com/reel/896260478430005" className="text-blue-500">3.1M Views Video</a> | <a href="https://drive.google.com/drive/folders/1Q1JLjhTEeaJVlpSi4kLuyLYM9eTtFoF7?usp=drive_link" className="text-blue-500">All Videos</a>
            </li>
            <li>Best Effort Award – Robotics Tournament at University of Scholars
              <br />
              <a href="https://drive.google.com/drive/folders/14VliENWl9LDwZNM9rj70JYqfcIPKwBNW" className="text-blue-500">Award Details</a>
            </li>
            <li>Typing Speed Certificate: <a href="https://www.typing.com/apiv1/student/tests/317214108/140474380/certificate?language=en" className="text-blue-500">View Certificate</a></li>
            <li>Robotics Tournament Certificate: <a href="https://drive.google.com/file/d/1RN1cMmOWsNxAvPdmuSC9IpNKgjQi0gl-/view?usp=sharing" className="text-blue-500">View Certificate</a></li>
          </ul>
        </section>

        {/* Contact Section */}
        <footer id="contact" className="bg-gray-900 text-white px-4 py-8 text-center">
          <p className="break-words">Phone: 01308414889 | Email: contact2tamim@gmail.com</p>
          <p><a href="https://www.linkedin.com/in/tamim-muhammad/" className="text-blue-400">LinkedIn</a></p>
          <p className="mt-4 font-semibold">References:</p>
          <p className="break-words">Nabin Uhhan – R&D Manager, Chatime Bangladesh | Email: nabinuhhan1884@gmail.com</p>
          <p className="break-words">Professor Dr. Mirza Golam Rabbani – Dean, Uttara University | Email: rabbani@uttara.ac.bd</p>
          <p className="break-words">Dr Mohammad Amanul Islam – Chairman, Uttara University | Email: amanul.islam@uttarauniversity.edu.bd</p>
          <p className="text-sm mt-4">© {new Date().getFullYear()} Md. Tamim. All rights reserved.</p>
        </footer>
      </div>
    </>
  )
}

export default App
