import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import "./About.css"
const About = () => {
  return (
    <div>
      <Header />
      <div className='container holder'>
        <h4 className="  text-center bg-light p-4 mb-2">About</h4>
        <span className='card about-card'>
          Mr. Bin is a dynamic web application which serves as a medium of increasing the reusability of commodities that are left unused at households. Through this app, a user can exchange a commodity with other users. The most common unused items are old Books, clothes, plastic Items, electronics, glassware etc.
          A certain item can be sold or recycled based on its current physical conditions. A buyer can bid on a product and can make contact with the seller regarding confirmation, If the seller opts to recycle, then an estimated value will be generated against the product, and a recycler will be informed to collect the product against the generated price.
          Furthermore, a user can donate items like clothes, books to libraries, NGOs through our app.
          Based on selling, recycling & donations, a user will get loyalty points which can be further availed to get discount from collaborated brands.

        </span>
      </div>
      <Footer />
    </div>
  )
}

export default About