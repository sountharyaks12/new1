import React, { useState } from 'react';
import resume from '../assets/Sountharya_Resume_(1).pdf';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
// import { IoCloudDownload } from 'react-icons/io5';
import { Link } from 'react-scroll';
import { GrLinkBottom } from 'react-icons/gr';
import { motion } from 'framer-motion';
import '../index.css'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const text = "Sountharya K S";

  const navItems = [
    { to: "about", label: "About" },
    { to: "skills", label: "Skills" },
    { to: "projects", label: "Projects" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <>
      {/* Navbar */}
      <div className="flex justify-between items-center text-white px-4 bg-[#5F4E4A] h-16">

        <motion.h1 className="text-xl font-bold">
          {text.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, x: 10 }}

              whileInView={{
                opacity: 1,
                x: 0, transition: {
                  delay: index * 0.1,
                  duration: 0.6,
                  type: 'spring',
                  stiffness: 100,
                  damping: 5,
                }
              }}

            >
              {char}
            </motion.span>
          ))}
        </motion.h1>

        <div className="hidden md:flex space-x-6">
          {/* <Link   to="about" smooth={true} duration={500} className="cursor-pointer">About</Link>
          <Link to="skills" smooth={true} duration={500} className="cursor-pointer">Skills</Link>
          <Link to="projects" smooth={true} duration={500} className="cursor-pointer">Projects</Link>
          <Link to="contact" smooth={true} duration={500} className="cursor-pointer">Contact</Link> */}

          <nav className="flex justify-center p-4 gap-7">
            {navItems.map((item, index) => (
              <motion.div
                key={item.to}
                initial={{ x: 200, opacity: 0 }}
                animate={{
                  x: 0, opacity: 1,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: index * 0.2,
                  }
                }} className="cursor-pointer  "
              >
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  className="text-white txt-bold "
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>
          <button className="text-white font-medium active:scale-95 hover:scale-105">
            <motion.a initial={{ opacity: 0, x: 200 }} whileInView={{
              opacity: 1, x: 0,
              transition: { type: "spring", stiffness: 100, damping: 10 }
            }}
              href={resume} className='text-white' download='resume' >Download CV</motion.a>
          </button>

        </div>
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </div>
      </div>

      {/* sm */}
      <div className={`md:hidden bg-[#5F4E4A] text-white ${isOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col space-y-4 p-4">
          <Link to="home" smooth={true} duration={500} className="cursor-pointer" onClick={toggleMenu}>Home</Link>
          <Link to="about" smooth={true} duration={500} className="cursor-pointer" onClick={toggleMenu}>About</Link>
          <Link to="skills" smooth={true} duration={500} className="cursor-pointer" onClick={toggleMenu}>Skills</Link>
          <Link to="projects" smooth={true} duration={500} className="cursor-pointer" onClick={toggleMenu}>Projects</Link>
          <Link to="contact" smooth={true} duration={500} className="cursor-pointer" onClick={toggleMenu}>Contact</Link>
          <button className="bg-[#42c15e] flex items-center justify-between text-[#ffffff] font-medium py-2 px-3 rounded-lg w-fit ml-0">
            <GrLinkBottom className="mr-1" />
            <a href={resume} download='resume' >Resume</a>
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center h-[85vh] bg-">
        <div id="home" className="w-full px-6 bg-[#d6d0ca]">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-8 w-full leading-loose text-center lg:text-left">

            <div className="lg:w-1/2 animate-slideLeft">
              <h1 className="text-4xl font-bold text-gray-800 mb-4 animate-bounce">Hi, I'm Sountharya</h1>
              <p className="text-xl font-semibold text-gray-800 mb-4 animate-bounce">I'm a Full Stack Developer</p>
              <p className="text-lg text-gray-700 mb-6">
                Aspiring MERN Full-Stack Developer | Passionate About Creating Dynamic Websites
              </p>
              <div className="flex justify-center lg:justify-start gap-4">
                <motion.a
                  href="https://github.com/sountharyaks12"
                  aria-label="GitHub"
                  target='_blank'
                  className="p-4 bg-gray-200 text-black rounded-full text-3xl shadow-lg hover:bg-indigo-950 hover:text-white transition-all"
                >
                  <FaGithub />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/sountharya-k-s-604a9b282/"
                  aria-label="LinkedIn"
                  target='_blank'
                  className="p-4 bg-gray-200 text-black rounded-full text-3xl shadow-lg hover:bg-indigo-950 hover:text-white transition-all"
                >
                  <FaLinkedin />
                </motion.a>
                <motion.a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=ssountharya71@gmail.com"
                  aria-label="Email"
                  target='_blank'
                  className="p-4 bg-gray-200 text-black rounded-full text-3xl shadow-lg hover:bg-indigo-950 hover:text-white transition-all"
                >
                  <IoMdMail />
                </motion.a>
              </div>
            </div>

            <div className="lg:w-1/3 flex justify-center items-center animate-fadeInUp">
              <img
                src="i.JPG"
                alt="Sountharya"
                className="rounded-full w-44 h-44 lg:w-52 lg:h-52 object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
