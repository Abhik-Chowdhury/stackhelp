import React, { useEffect, useState } from 'react'
import './css/index.css'
import Sidebar from './Sidebar'
import Main from './Main'
import axios from 'axios'
import { result } from '../Header/Header'
function Index() {
  const [questions,setQuestions] = useState([])
  console.log(result)
  useEffect(()=>{
   async function getQuestion(){
    await axios.get('https://stackhelp-api.onrender.com/api/question').then((res)=>{
      console.log(res.data)
      setQuestions(res.data.reverse())
    }).catch((err)=>{
      console.log(err)
    })
   }
   getQuestion()
   
   
  },[])
  
  return (
    <div className='stack-index'>
        <div className='stack-index-content'>
            <Sidebar/>
            <Main questions={questions}/>
        </div>
    </div>
  )
}

export default Index