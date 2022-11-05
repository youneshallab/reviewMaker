import Header from "./components/Header"
import Main from "./components/Main"
import React from "react"


export default function App() {



  return (
    <div className="bg-[url('./img/reviewsbg.png')] bg-cover">
        <Header className="z-10"/>
        <Main />
    </div>
  );
}
