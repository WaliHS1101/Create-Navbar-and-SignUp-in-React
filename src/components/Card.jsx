import React from 'react'

function Card(props) {
    return (
        <div className="card mt-3" style={{ width: "18rem" }} >
            <img src={props.img} alt="" className='card-img-top ' style={{ height: "200px" }} />
            <div className="card-body">
                <h4 className='card-title '>{props.name}</h4>
                <h5 className='card-title '>{props.price}</h5>
                <p className='card-footer '>{props.dec}
                </p>
                <button className='btn btn-success'>See More</button>
            </div>
        </div>
    )
}

export default Card