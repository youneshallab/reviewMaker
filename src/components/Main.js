import React from 'react'
import Forms from './Forms'
import Reviews from './Reviews'

function Main() {
  const m = "i'm fixed"
  return (
    <div className="absolute inset-0 h-screen flex  justify-evenly items-center bg-[url('./img/reviewsbg.png')] bg-cover">
      
      <Forms m={m}/>
      <Reviews/>
    </div>
  )
}

export default Main