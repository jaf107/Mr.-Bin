import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import "./Donate.css";

const Donate = () => {
  const {organizations} = useSelector((state) => state.organization)
  return (
    <div>
      <Header />
      <h4 className="  text-center bg-light p-4 mb-2">DONATE</h4>

      <div className='container donate' style={{ height: "300px" }} >
        <div className=" row counterRowD text-center align-items-center text-white">
          <div className="col-md-4">
            <h6>Total Organizations</h6>
            <h1>100</h1>
          </div>
          <div className="col-md-4">
            <h6>Total Items Donated</h6>
            <h1>11,000</h1>
          </div>
          <div className="col-md-4">
            <h6>Total Users</h6>
            <h1>300</h1>
          </div>
        </div>
      </div>
      <div className='container donate'>
        <Link
          className="btn border-info btn-lg fw-bold mt-5 p-4 middle "
          to={'/donation/form'}
        >
          Donate An Item
        </Link>
      </div>

      <div className='container wheat p-4 mb-4'>
        <h2 className='center'>List of our enlisted Organizations</h2>
        <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Organization Name</th>
                <th scope="col">Type</th>
                {/* <th scope="col">Company</th> */}
                <th scope="col">Location</th>
                <th scope="col">Contact No.</th>

              </tr>
            </thead>
            <tbody>
              {organizations.map((organization, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{organization.name}</td>
                  <td>{organization.type}</td>
                  <td>{organization.location}</td>
                  <td>{organization.phone}</td>
                  
                </tr>
              ))}
            </tbody>
          </table>
      </div>
      <Footer />
    </div>
  )
}

export default Donate