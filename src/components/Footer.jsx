// ./components/Footer.jsx
export const Footer = () => {
    return (
      <footer className="bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-t border-white/10 shadow-inner mt-20">
        <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left font-mono text-white text-sm md:text-base">
            &copy; {new Date().getFullYear()} dhanush
            <span className="text-blue-500">.Portfolio</span>. All rights reserved.
          </div>
  
          <div className="flex space-x-6 font-mono text-gray-300 text-sm md:text-base">
            <a
              href="mailto:dhanushchinivar@gmail.com"
              className="hover:text-white transition-colors"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/dhanush-chinivar/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/DhanushChinivar"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    );
  };
  