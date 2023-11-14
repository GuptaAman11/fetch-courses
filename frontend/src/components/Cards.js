import React from 'react'
import Card1 from './Card1'

const Cards = ({course}) => {
    // first the api response had different diff array and has value 
    // first data has arry of five type
    //five type  has array of contain values
    // convert that value into single array

    const getCourseIntoSingleArray = () => {
        let allCourses = [];
        console.log("allcousre", allCourses)
        if (course) {
          Object.values(course.data).forEach((array) => {
            array.forEach((courseValue) => {
              allCourses.push(courseValue);
            });
          });
        }
        return allCourses;
      };
    const getCourseValue = getCourseIntoSingleArray()
  return (
    <div className='flex mt-[15px] bg-yellow-300 '>
      <div className='flex overflow-auto flex-wrap space-x-5 space-y-4 mt-2 justify-center'>
        <div></div>
        {
            getCourseValue.map((allCourses ,index)=>(
                <Card1 key={index}  allCourses = {allCourses} />

            )
            )
        }
      </div>
    </div>
  )
}

export default Cards
