import Header from "../Header/Header";


import './Recycle.css';
function Recycle(params) {
    return(
        <div className="recycle">
            <Header/>
            <div className="container">
                <div className=" row counterRow text-center align-items-center text-white">
                    <div className="col-md-4">
                        <h6>Total Recyclers</h6>
                        <h1>100</h1>
                    </div>
                    <div className="col-md-4">
                    <h6>Total Items Recycled</h6>
                        <h1>11,000</h1>
                    </div>
                    <div className="col-md-4">
                    <h6>Total Users</h6>
                        <h1>300</h1>
                    </div>
                </div>
                <div className=" row h-100">

                </div>
                <div className=" row">
                    <div className="col-md-12">
                        <img src={require('../../assets/recycleBottom.png')} className="img-fluid img-cover" width={1300} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Recycle;