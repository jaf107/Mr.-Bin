import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const OrganizationForm = () => {

    const dispatch = useDispatch();
    const [organization, setOrganization] = useState({
        name: "",
        type: "",
        location: "",
        phone: "",
    })

    const {name, type, location, phone} = organization
    const submitOrganization = (e)=>{
        e.preventDefault()
        const myForm = new FormData();
        myForm.set("name", name);
        myForm.set("type", type);
        myForm.set("phone", phone);
        myForm.set("location", location);
        console.log(myForm)
        dispatch((myForm))
    }

    return (
        <div>
            <div
                className='container p-4 '
            >
                <input
                    placeholder='Organization name'
                    className='form-control mb-4'
                    type='text'
                />
                {/* <input
            placeholder='Company name'
            className='form-control mb-4'
            type='text'
          /> */}

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
        </div>
    )
}

export default OrganizationForm