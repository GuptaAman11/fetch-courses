import React from 'react'
import Card1 from './Card1'

const Cards = ({course}) => {
    // first the api response had different diff array and has value 
    // first data has arry of five type
    //five type  has array of contain values
    // convert that value into single array

    const getCourseIntoSingleArray = () => {
        let allCourses = [];
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
    <div>
      <div>
        {
            getCourseValue.map((allCoures ,index)=>(
                <Card1 key={index} allCoures = {allCoures} />
            )
            )
        }
      </div>
    </div>
  )
}

export default Cards
