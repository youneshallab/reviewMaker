import React from 'react'
import Forms from './Forms'
import Reviews from './Reviews'

function Main() {
  const m = "i'm fixed"
  return (
    <div className="w-screen flex justify-evenly items-center">
      <Forms m={m}/>
      <Reviews/>
    </div>
  )
}

export default Main