import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import OrganizationForm from '../Forms/OrganizationForm';
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
                <th scope="col">Organization Name</th>
                <th scope="col">Type</th>
                <th scope="col">Location</th>
                <th scope="col">Contact No.</th>

                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>


            </tbody>
          </table>
        </div>)}

      {!form && <OrganizationForm/>}
    </div>
  )
}

export default OrganizationList