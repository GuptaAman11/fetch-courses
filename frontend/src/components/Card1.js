import React from 'react'

const Card1 = ({allCourses}) => {

  return (
    <div className='w-[300px] flex flex-wrap overflow-hidden border-2 border-black '>
      <div>
        <img src={allCourses.image.url} />
      </div>
      <div>
        <h1>{allCourses.title}</h1>
        <p>{allCourses.description}</p>
      </div>
    </div>
  )
}

export default Card1
