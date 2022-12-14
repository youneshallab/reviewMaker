import React from 'react'
import { useEffect} from 'react'
import {useSelector,useDispatch} from "react-redux"
import {update,add,addreview} from "../store/actions"
import { useTranslation } from 'react-i18next'
import reviewsbad from './reviewsbad.json'
import reviewsok from './reviewsok.json'
import reviewsgood from './reviewsgood.json'

export default function Forms(props) {
  const { t } = useTranslation()

  const dispatch = useDispatch()
  const counter = useSelector(store => store.counter)
  const randomReview = useSelector(store => store.randomReview)
  const allReviews = useSelector(store => store.allReviews)

  async function getRandomUser(){
    let response = await fetch("https://randomuser.me/api/")
    let data = await response.json()
    return data
  }

  function getRandomReviewBasedOnStar(star){
    if(star === 0 || star === 1){
      return reviewsbad[`${Math.floor(Math.random()*reviewsbad.length)}`].completion
    }else{
      if(star === 2 || star === 3){
        return reviewsok[`${Math.floor(Math.random()*reviewsok.length)}`].completion
      }else{
        return reviewsgood[`${Math.floor(Math.random()*reviewsgood.length)}`].completion
      }
    }
  }

  
  useEffect(()=>{
    let nos = Math.floor(Math.random()*6);
    let rev = getRandomReviewBasedOnStar(nos);
    getRandomUser().then(data=>{
      dispatch(update({
      firstName: data.results["0"].name.first,
      lastName: data.results["0"].name.last,
      country: data.results["0"].location.country,
      age: data.results["0"].dob.age,
      rating: nos,
      review: rev,
      }))
    })
  },[dispatch, counter])


  const handleChange = (event) => {
    dispatch(update({
      ...randomReview,
      [event.target.name]: event.target.value
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
          <h1 className='font-bold text-lg'>{t('reviewform')}</h1>
          <h2 className='text-xs mb-4'>{t('instruction.firstpart')}
          <strong className='cursor-pointer'  onClick={() => dispatch(add())}>{t('instruction.clickherepart')}</strong>
          {t('instruction.lastpart')}
          </h2>
          {/* <h2 className='text-xs mb-4'>{t('instruction')}</h2> */}
          <div className='flex flex-row justify-between'>
            <div className='flex flex-col'>
              <h3 className='font-bold text-sm'>{t('firstname')}</h3>
              <input className='w-32 border border-gray-400 ps-1'
                type= 'text'
                name='firstName'
                value={randomReview.firstName}
                onChange={handleChange}
              />
            </div>
            <div className='flex flex-col'>
              <h3 className='font-bold text-sm'>{t('lastname')}</h3>
              <input className='w-32 border border-gray-400 ps-1'
                type= 'text'
                name='lastName'
                value={randomReview.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='flex flex-row justify-between'>
            <div className='flex flex-col'>
            <h3 className='font-bold text-sm'>{t('country')}</h3>
              <input className='w-32 border border-gray-400 ps-1'
                type= 'text'
                name='country'
                value={randomReview.country}
                onChange={handleChange}
              />
            </div>
            <div className='flex flex-col w-32'>
            <h3 className='font-bold text-sm'>{t('age')}</h3>
              <input className='w-10 border border-gray-400 ps-1'
                type='text'
                name='age'
                value={randomReview.age}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <h3 className='font-bold text-sm'>{t('comment')}</h3>
            <textarea className='w-full h-20 resize-none  border border-gray-400 ps-1'
              type= 'text'
              name='review'
              value={randomReview.review}
              onChange={handleChange}
            />
          </div>
          <div>
            <h3 className='font-bold text-sm'>{t('rating')}</h3>
            <div className='flex flex-row'>
              <select className='w-10  border border-gray-400 pl-1 me-1'
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
              <h2 className='text-sm font-semibold flex self-center'>{t('star', {count: parseInt(randomReview.rating)} )}</h2>
            </div>
          </div>
          <button 
          className="btn-primary w-40 mt-4 self-end"
          >
            {t('uploadreview')}
          </button>
        </form>
    </div>
  )
}
