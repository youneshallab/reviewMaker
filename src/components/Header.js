import i18next from 'i18next'
import React from 'react'
import { useTranslation } from 'react-i18next'
import  LNGS  from '../i18n/languages'

function Header() {
  const { t } = useTranslation()
  const [onLanguageSelection, setOnLanguageSelection] = React.useState(false)
  
  function handleClick(){
    setOnLanguageSelection(prevOnLanguageSelection => !prevOnLanguageSelection)
  }

  function changeSelectedLanguage(language){
    if (language === 'ar') {
      document.body.dir = 'rtl'
    }else{
      document.body.dir = 'ltr'
    }
    i18next.changeLanguage(language)
    setOnLanguageSelection(prevOnLanguageSelection => !prevOnLanguageSelection)
  }

  return (
    <div className='h-10 w-screen bg-gray-500 mb-8 bg-opacity-20 flex justify-between'>
      <h1 className='ms-32 text-2xl txt-shadow text-gray-300 font-bold self-center'>{t('reviewmaker')}</h1>
      <div>
        <div className={!onLanguageSelection ? "w-16 me-12 px-1 mt-1  flex justify-between items-center bg-white bg-opacity-100 bg-opacity-80 rounded-md" : "w-16 me-12 px-1 mt-1  flex justify-between items-center bg-white bg-opacity-100 rounded-t-md"} >
          <img src={LNGS[`${i18next.language}`].flag} alt={LNGS[`${i18next.language}`].nativeName}/>
          { !onLanguageSelection &&
            <img className='w-3 h-3 me-1 cursor-pointer' 
               src="https://img.icons8.com/offices/30/null/expand-arrow.png" 
               alt="More"
               onClick={()=> handleClick()}/>}
          { onLanguageSelection &&
            <img className='w-3 h-3 me-1 cursor-pointer' 
               src="https://img.icons8.com/offices/30/null/collapse-arrow.png" 
               alt="More"
               onClick={()=> handleClick()}/>}
        </div>
        {
          onLanguageSelection &&
          <div className='w-26 z-50 relative bg-white bg-opacity-100 rounded-e-md rounded-bs-md'>
            <div className='flex  hover:bg-gray-200 hover:rounded-te-md cursor-pointer ms-1'
               key={'ar'} onClick={() => changeSelectedLanguage('ar')}>
              <img className='me-1' src="https://img.icons8.com/offices/30/null/morocco.png" alt="Morocco"/>
              <p>العربية</p>
            </div>
            <div className='flex  hover:bg-gray-200 cursor-pointer ms-1'
                 key={'fr'} onClick={() => changeSelectedLanguage('fr')}>
              <img className='me-1' src="https://img.icons8.com/offices/30/null/france.png" alt="France"/>
              <p>Français</p>
            </div>
            <div className='flex hover:bg-gray-200 hover:rounded-b-md cursor-pointer ms-1'
                 key={'en'} onClick={() => changeSelectedLanguage('en')}>
              <img className='me-1' src="https://img.icons8.com/offices/30/null/great-britain.png" alt="Great Britain"/>
              <p>English</p>
            </div>
          </div>
        }
        
      </div>
    </div>
  )
}

export default Header