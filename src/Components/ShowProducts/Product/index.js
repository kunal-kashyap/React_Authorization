import React from 'react'

const Product = (props) => {
    return (
        <div className="col-md-3 product">
            <h4>{props.details.id}</h4>
            <p>{props.details.name}</p>
            <div>{props.details.price}</div>
            <div>
                <span>Edit</span>
                <span>Delete</span>
            </div>
        </div>
    )
}

export default Product