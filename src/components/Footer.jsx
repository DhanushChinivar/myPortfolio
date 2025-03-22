import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const Footer = () => {
  return (
    <footer className="bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-t border-white/10 shadow-inner mt-20">
      <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-center md:text-left font-mono text-white text-sm md:text-base">
          &copy; {new Date().getFullYear()}
          <span className="text-blue-500"> Dhanush Chinivar</span>. All rights reserved.
        </div>

        <div className="flex space-x-6 text-gray-300 text-xl">
          <a
            href="mailto:dhanushchinivar@gmail.com"
            className="hover:text-white transition-colors"
            aria-label="Email"
          >
            <MdEmail />
          </a>
          <a
            href="https://www.linkedin.com/in/dhanush-chinivar/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/DhanushChinivar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};
