import React from 'react'
import ReviewCard from './ReviewCard'
import {useSelector} from "react-redux"

export default function Reviews() {

  const allReviews = useSelector(store => store.allReviews)
  
  const listOfReviews = []
  for (let i=0;i<allReviews.length;i++){
    listOfReviews.unshift(<ReviewCard index={i}/>)
  }

  return (
    <div className='flex flex-col w-[500px] h-[500px] overflow-y-scroll overscroll-contain min-h-[300px] bg-gray-100 bg-opacity-40 px-16 py-6 gap-2'>
        <h3 className='font-bold text-lg'>Reviews</h3>
        {allReviews.length && listOfReviews} 
    </div>
  )
}