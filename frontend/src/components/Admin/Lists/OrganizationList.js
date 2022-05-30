import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import "./OrganizationList.css"
const OrganizationList = () => {

  const dispatch = useDispatch();

  const [form, setForm] = useState(true);

  return (
    <div>
      <div className='container'>
        <button className='btn btn-danger'
          onClick={() => setForm(false)}>
          Form
        </button>
        <button className='btn btn-warning m-4'
          onClick={() => setForm(true)}>
          List
        </button>
      </div>
      {form && (
        <div className='m-4 p4'>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Recycler Name</th>
                <th scope="col">Company</th>
                <th scope="col">Location</th>
                <th scope="col">Contact No.</th>

                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>


            </tbody>
          </table>
        </div>)}

      {!form && (
        <div
          className='container p-4 '
        >
          <input
            placeholder='Organization name'
            className='form-control mb-4'
            type='text'
          />
          <input
            placeholder='Company name'
            className='form-control mb-4'
            type='text'
          />

          <label className='mb-2'>Organization Type: </label>
          <select
            name='organization-type'
            className='select-type form-control mb-4'
            
          >
            <option>NGO</option>
            <option>Library</option>
          </select>

          <input
            placeholder='Location'
            className='form-control p-3 mb-4'
            type='text'
          />

          <input
            placeholder='Contact Number'
            className='form-control mb-4'
            type='number'
          />

          <button type='submit' className='btn btn-success'>Submit</button>
        </div>
      )}
    </div>
  )
}

export default OrganizationList