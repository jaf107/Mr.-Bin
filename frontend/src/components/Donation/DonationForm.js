import React from 'react'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const DonationForm = () => {

  const sendDonatioNRequest = () => {
    console.log("Request is sent")
  }

  return (
    <div>
      <Header />
      <div className='container'>
        <h2>Donation Form</h2>
      </div>

      <div className='container'>

        <input
          name='name'
          placeholder='Product name'
          className='form-control mb-4'
          type='text'
        />
        
        <label className='mb-2'>Choose Product Type </label>
        <select
          name='organization-type'
          className='select-type form-control mb-4'

        >
          
          <option>Clothes</option>
          <option>Books</option>
          <option>Toys</option>
          <option>Kitchen Utensils</option>
        </select>
        <label className='mb-2'>Choose Organization </label>
        <select
          name='organization-type'
          className='select-type form-control mb-4'

        >
          <option>NGO</option>
          <option>Library</option>
        </select>

        <input
          name='phone'
          placeholder='Contact Number'
          className='form-control mb-4'
          type='number'
        />

        <button
          type='submit'
          className='btn btn-success'
          onClick={sendDonatioNRequest()}
        >
          Submit
        </button>
      </div>
      <Footer />
    </div>
  )
}

export default DonationForm;