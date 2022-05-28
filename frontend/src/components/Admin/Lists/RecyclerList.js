import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRecyclers } from '../../../actions/recyclerActions';

const RecyclerList = () => {

  const dispatch = useDispatch();
  const { recyclers } = useSelector((state) => state.recyclers);

  useEffect(() => {
    dispatch(getRecyclers());
  }, [dispatch]);


  return (
    <div>
      <div className='container'>
        <button className='btn btn-danger'>
          Add Recycler
        </button>
      </div>
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
            {recyclers.map((recycler, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{recycler.name}</td>
                <td>{recycler.company}</td>
                <td>{recycler.location}</td>
                <td>{recycler.phone}</td>
                <td><button className='btn btn-danger '> Delete </button></td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default RecyclerList