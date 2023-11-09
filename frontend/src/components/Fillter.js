import React, { useEffect, useState } from 'react'
import {Value} from './Value'
import Cards from './Cards'
const Fillter = () => {


    const [course ,setCourse] = useState(null)

    // calling the api through getcousre function
        const getCourse =async()=>{
            try {
                const response = await fetch('https://codehelp-apis.vercel.app/api/get-top-courses')
                if (response.ok) {

                    const responseData = await response.json()
                    setCourse(responseData)

                    // console.log("this is the response Data", responseData)
                    // console.log("fsdhfsdjhs" ,course)

                    
                }
                else {
                    console.log("i am really sorry")
                }
            } catch (error) {
               console.log(error) 
            }
        }
        useEffect(()=>{
              getCourse();
        },[])
  return (

    <div>

        {/* map the value and convert them into button */}
        <div>
        {
            Value.map((value ,index)=>(
                <button key={index}>
                    {value.title}
                </button>
            ))
        }

        </div>
        <Cards course = {course}/>
    </div>
  )
}

export default Fillter
