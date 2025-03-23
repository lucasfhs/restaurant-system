import { Dialog } from '@mui/material'
import React from 'react'

const About = () => {
  return (
    <div className="flex flex-col items-center container mx-auto max-w-5xl lg:flex-row gap-12 py-16">
      <div className="flex flex-col text-center justify-center lg:h-96 max-w-xl">
        <h1 className="mb-10 text-3xl font-bold ">Quem somos</h1>
        <p className="text-center text-gray-300 mx-auto overflow-hidden">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil optio natus commodi ducimus et doloribus error alias mollitia quod eaque hic, vitae fuga nemo totam nesciunt possimus earum consectetur impedit nam! A qui deleniti explicabo facilis officia unde dolorum odit quaerat sint ipsum quisquam velit, reiciendis placeat. At incidunt, sequi distinctio quibusdam corrupti asperiores earum natus cum deleniti aliquam sit architecto unde in itaque ratione aliquid tempore iusto autem optio.
        </p>
      </div>
      <div className='flex flex-wrap max-w-xl lg:inline lg:w-fit gap-8 justify-around w-full'>
        <img
          src="/dishes/sample1.jpg"
          alt="Sample Image 1"
          className="w-48 rounded-lg shadow-lg"
        />
        <img
          src="/dishes/sample2.jpg"
          alt="Sample Image 1"
          className="w-48 rounded-lg shadow-lg lg:ml-36 lg:-mt-48"
        />
      </div>
    </div>
  );
}

export default About