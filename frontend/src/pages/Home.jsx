import React from 'react'
import info from "../info.json"
import bookpostpic from "../assets/bookpost.jpg"
import sajamslam2pic from "../assets/sajamslam2.png"

const Home = () => {
  return (
    <div className='p-4 mt-5 max-w-xl min-h-72 mx-auto border-x-[0.1px] border-gray-800 font-mono'>
      <div className='p-4 bg-slate-800 -ml-4 mr-2'>
        <h3 className='text-emerald-400 font-mono'>About</h3>
        <div className='p-2'>
          <p>{info.about}</p>
        </div>
      </div>

      <div className='p-4 bg-slate-800 ml-2 -mr-4 mt-10'>
        <h2 className='text-emerald-400'>Education</h2>
        <div className='p-2'>
          <p className='flex justify-between'>
            <span>{info.education.school}</span>
            <span>[2019-2024]</span>
          </p>
          <p>{info.education.degree}</p>

          <h3 className='text-emerald-400 mt-2'>Relevant Courses</h3>
          <ul>
            {info.education.courses.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
        </div>

      </div>

      <div className='p-4 bg-slate-800 -ml-4 mr-2 mt-10'>
        <h3 className='text-emerald-400'>Experience</h3>
        <div className='p-2'>

          <p className='flex justify-between'>
            <span>{info.experience.company}</span>
            <span>[2022-2023]</span>

          </p>
          <p>{info.experience.title}</p>
          <h3 className='text-emerald-400 mt-2'>Responsibilities</h3>
          <ul className='space-y-4'>
            {info.experience.tasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className='p-4 bg-slate-800 ml-2 -mr-4 mt-10'>
        <h3 className='text-emerald-400 font-mono'>Projects</h3>
        <div className='p-2'>
          <p className='text-emerald-400'>{info.projects.project1}</p>
          <ul className='space-y-2 px-2 mb-2'>
            {info.projects.p1desc.map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
          </ul>

          <p className='text-emerald-400'>{info.projects.project2}</p>
          <ul className='space-y-2 px-2 mb-2'>
            {info.projects.p2desc.map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
          </ul>

          <p className='text-emerald-400'>{info.projects.project3}</p>
          <p className='px-2'>{info.projects.p3desc}</p>
        </div>
      </div>

      <div className='p-4 bg-slate-800 mt-10'>
        <h2 className='text-emerald-400'>My Work</h2>
        <div className='p-2 grid grid-cols-2 gap-x-4'>
          <a href={info.links.bookpost} target="_blank" rel="noopener noreferrer">
            <div className='transition duration-300 hover:-translate-y-2 hover:shadow-xl'>
              <h3>BookPost</h3>
              <img src={bookpostpic} className='h-[155px]' />
            </div>
          </a>

          <a href={info.links.sajamslam2} target="_blank" rel="noopener noreferrer">
            <div className='transition duration-300 hover:-translate-y-2 hover:shadow-xl'>
              <h3>Sajam Slam 2</h3>
              <img src={sajamslam2pic} className='h-[155px]' />
            </div>
          </a>
        </div>
      </div>
    </div>


  )
}

export default Home