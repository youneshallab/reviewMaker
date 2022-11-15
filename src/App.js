import Header from "./components/Header"
import Main from "./components/Main"
import React from "react"
import i18next from 'i18next'

export default function App() {
  if (i18next.language === 'ar') {
    document.body.dir = 'rtl'
  }else{
    document.body.dir = 'ltr'
  }

  return (
    <div className="flex flex-col h-screen bg-[url('./img/reviewsbg.png')] bg-cover">
        <Header className=""/>
        <Main />
    </div>
  );
}
