import React from 'react'
import profilepic from '../assets/profile-pic.jpg'
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import info from "../info.json"

const HeroBar = () => {
  return (
    <div className="p-4 flex flex-col items-center justify-center max-w-auto mx-auto">
      <div className='mr-36'>
        <div className="text-3xl font-mono text-emerald-300 self-start">
          Zeshan Zaki
        </div>
        <div className="text-md font-mono text-emerald-300 mb-4 ">
          Software Engineer
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center sm:items-start mt-4">
        <div className="flex flex-col items-center">
          <img src={profilepic} className="h-36 border-[0.5px] border-emerald-300" />
          <div className="flex text-2xl text-emerald-300 gap-1 justify-center mt-2">
            <a href={info.links.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin className='hover:text-emerald-500 transition duration-150' />
            </a>

            <a href={info.links.github} target="_blank" rel="noopener noreferrer">
              <FaGithubSquare className='hover:text-emerald-500 transition duration-150' />
            </a>

            <a href={`mailto:${info.links.email}?subject=Hi NAME!`} target="_blank" rel="noopener noreferrer">
              <IoMdMail className='hover:text-emerald-500 transition duration-150'/>
            </a>
          </div>
        </div>

        <div className="bg-slate-800 h-auto w-80 border-[0.5px] rounded-xs border-emerald-400 p-3 mt-4 sm:mt-0 sm:self-start sm:ml-10">
          <h3 className="text-emerald-400 font-mono">Skills</h3>
          <div className='grid grid-cols-2 gap-x-2 ml-2'>
            <div>
              <h4 className="text-emerald-400 font-mono p-2">Languages</h4>
              <ul className='font-mono ml-2 -mt-2'>
                {info.skills.languages.map((language, index) => (
                  <li key={index}>{language}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-emerald-400 font-mono p-2">Frameworks</h4>
              <ul className='font-mono ml-2 -mt-2 mb-1'>
                {info.skills.frameworks.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default HeroBar