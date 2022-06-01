import React, { useState } from 'react'

const RecyclerForm = (props, state) => {


    const [recycler, setRecycler] = useState({
        name: "",
        company: "",
        location: "",
        phone: "",
    })

    const submitRecycler = (e) => {
        // e.preventDefault();

        const myForm = new FormData();
    }

    return (
        <div
            className='container p-4 '
        >
            <input
                name='name'
                placeholder='Recycler name'
                className='form-control mb-4'
                type='text'
            />
            <input
                name='company'
                placeholder='Company name'
                className='form-control mb-4'
                type='text'
            />
            <input
                name='location'
                placeholder='Location'
                className='form-control p-3 mb-4'
                type='text'
            />

            <input
                name='phone'
                placeholder='Contact Number'
                className='form-control mb-4'
                type='number'
            />

            <button
                type='submit'
                className='btn btn-success'
                onClick={submitRecycler()}
            >
                Submit
            </button>
        </div>)
}

export default RecyclerForm