import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

const About = () => {
  return (
    <div>
        <Header/>
            <div className='container' style={ {height:"300px"}} >
                <h1>About</h1>
            </div>
        <Footer/>
    </div>
  )
}

export default About