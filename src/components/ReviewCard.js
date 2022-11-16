import React from 'react'
import { useSelector } from "react-redux"
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'

function ReviewCard(props) {
    
const {t} = useTranslation();

const allReviews = useSelector(store => store.allReviews) 
const stars = []
const is = allReviews[props.index].rating

    for(let i=0;i<is;i++){
            stars.push(<div className="bg-[url('./img/fullStar.png')] bg-cover h-3 w-3"></div>)
        }
    for(let i=0;i<5-is;i++){
            stars.push(<div className="bg-[url('./img/emptyStar.png')] bg-cover h-3 w-3"></div>)
        }

  return (
    <div className="w-full bg-gray-600 bg-opacity-70 rounded-md px-3 py-2"   dir="ltr">
        <div className="flex display-row items-center gap-2">
            <h4 className="font-bold">{allReviews[props.index].firstName}</h4>
            <h4 className="font-bold">{allReviews[props.index].lastName}</h4>

            {i18next.language !== 'ar' ? 
            <h4 className="text-xs"><strong>{allReviews[props.index].age}</strong>{t('yo')}</h4>: 
            <h4 className="text-xs">{t('yo')}‎<strong>{allReviews[props.index].age}</strong></h4>}

            <h5 className="text-xs font-semibold"> {allReviews[props.index].country}</h5>
        </div>
        <div className="flex display-row">{stars}</div>
        <p className="text-sm">{allReviews[props.index].review}</p>
    </div>
  )

}

export default ReviewCard