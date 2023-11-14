import React, { useEffect, useState } from 'react'
import {Value} from './Value'
import Cards from './Cards'
import Spinner from './Spinner'

const Fillter = () => {


    const [course ,setCourse] = useState()
    const [loading ,setLoading]  = useState(true)

    // calling the api through getcousre function
        const getCourse =async()=>{
            setLoading(true)
            try {
                const response = await fetch('https://codehelp-apis.vercel.app/api/get-top-courses')
                if (response.ok) {

                    const responseData = await response.json()
                    setCourse(responseData)

                    console.log("this is the response Data", responseData)
                    // console.log("fsdhfsdjhs" ,course)

                    
                }
                else {
                    console.log("i am really sorry")
                }
                setLoading(false)
            } catch (error) {
               console.log(error) 
            }
        }
        useEffect(()=>{
              getCourse();
        },[])
  return (

    <div className=' w-11/12 flex-col mx-auto mt-[15px]'>

        {/* map the value and convert them into button */}
        <div className='pt-[15px] space-x-5 flex justify-center'>
        {
            Value.map((value ,index)=>(
                <button key={index} className = 'text-white border-2 rounded-md text-lg bg-black'>
                    {value.title}
                </button>
            ))
        }

        </div>
        {
            loading ? (<Spinner/>):(<div>
                <Cards course = {course}/>
        
                </div>)
        }
    </div>
  )
}

export default Fillter
