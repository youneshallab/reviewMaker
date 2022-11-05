import React from 'react'
import { useEffect} from 'react'
import {useSelector,useDispatch} from "react-redux"
import {update,add,addreview} from "../store/actions"

export default function Forms(props) {

  const dispatch = useDispatch()
  const counter = useSelector(store => store.counter)
  const defaultComment = useSelector(store => store.defaultComment)
  const randomReview = useSelector(store => store.randomReview)
  const allReviews = useSelector(store => store.allReviews)
  
  useEffect(() =>{
    fetch("https://randomuser.me/api/")
      .then(response =>{
        if(response.ok){
          return response.json()
        }
        throw response
      })
    
      .then(data => {
        if(data){
          dispatch(update({
            firstName: data.results["0"].name.first,
            lastName: data.results["0"].name.last,
            country: data.results["0"].location.country,
            age: data.results["0"].dob.age,
            review: defaultComment.slice(0,Math.floor(Math.random()*113+2)),
            rating: Math.floor(Math.random()*6),
            }))
          }
      })
      .catch(error => {
        console.error("There was an error :", error)
      })
  },
  [counter,defaultComment,dispatch])

  const handleChange = (event) => {
    dispatch(update({
      ...randomReview,
      [event.target.name]: parseInt(event.target.value)
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(addreview(randomReview))
    dispatch(add())
  }

  console.log(allReviews)
  return (
    <div>
        <form className='flex flex-col w-[500px] bg-gray-100 bg-opacity-40 px-16 py-6 gap-2'
              onSubmit={handleSubmit}>
          <h1 className='font-bold text-lg'>Review Form</h1>
          <h2 className='text-xs mb-4'>A random user is generated after each upload, but you 
            can <strong className='cursor-pointer'  onClick={() => dispatch(add())}>Click here</strong> to change it before upload.
          </h2>
          <div className='flex flex-row justify-between'>
            <div className='flex flex-col'>
              <h3 className='font-bold text-sm'>First Name</h3>
              <input className='w-32 border border-gray-400 pl-1'
                type= 'text'
                name='firstName'
                value={randomReview.firstName}
                onChange={handleChange}
              />
            </div>
            <div className='flex flex-col'>
              <h3 className='font-bold text-sm'>Last Name</h3>
              <input className='w-32 border border-gray-400 pl-1'
                type= 'text'
                name='lastName'
                value={randomReview.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='flex flex-row justify-between'>
            <div className='flex flex-col'>
            <h3 className='font-bold text-sm'>Country</h3>
              <input className='w-32 border border-gray-400 pl-1'
                type= 'text'
                name='country'
                value={randomReview.country}
                onChange={handleChange}
              />
            </div>
            <div className='flex flex-col'>
            <h3 className='font-bold text-sm'>Age</h3>
              <input className='w-10 mr-[5.5rem] border border-gray-400 pl-1'
                type= 'text'
                name='age'
                value={randomReview.age}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <h3 className='font-bold text-sm'>Comments</h3>
            <textarea className='w-full h-20 resize-none  border border-gray-400 pl-1'
              type= 'text'
              name='comment'
              value={randomReview.review}
              onChange={handleChange}
            />
          </div>
          <div>
            <h3 className='font-bold text-sm'>Product Rating</h3>
            <div className='flex flex-row'>
              <select className='w-10  border border-gray-400 pl-1 mr-1'
                  id="rating" 
                  name="rating"
                  value={randomReview.rating ? randomReview.rating : 0}
                  onChange={handleChange}
              >
                  <option value={0}>0</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
              </select>
              <h2 className='text-sm font-semibold flex self-center'>Star{(randomReview.rating !== 1)? "s" : ""}</h2>
            </div>
            
          </div>
          <button 
          className="btn-primary w-40 mt-4 self-end"
          >
            Upload Review
          </button>
        </form>
    </div>
  )
}
