import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router'

function Github() {
    const data=useLoaderData()
    // const [data,setData]=useState([])
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/Sunil-2056")
    //     .then(response=>response.json())
    //     .then(data=>{
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])

  return (
    <div className='text-center m-4 bg-white text-black'>Github Link:{data.html_url}
    <img width={300} src={data.avatar_url}  alt="Git picture" />
    </div>
  )
}

export default Github

export const githubInfoloader= async ()=> {
const response=await fetch('https://api.github.com/users/Sunil-1-dev')
return response.json()
}