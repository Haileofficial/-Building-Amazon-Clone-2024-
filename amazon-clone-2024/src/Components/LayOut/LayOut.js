import React from 'react'
import Header from "../Header/Header";
// import LowerHeader from "../Header/LowerHeader"
import Footer from '../Footer/Footer';
const LayOut = ({children}) => {
    return (
        <div>
            <Header/>
            {/* <LowerHeader/> */}
            {children}
            <Footer/>
        </div>
    )
}

export default LayOut