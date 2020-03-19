import React from 'react'

const Product = (props) => {
    return (
        <div className="col-md-3 product card">
            <h4>{props.details.id}</h4>
            <p>{props.details.name}</p>
            <div>${props.details.price}</div>
            <div className="form-group">
                <span className="btn btn-small btn-primary" onClick={() => props.editProductHandler(props.details.id)}>Edit</span>
                <span className="btn btn-small btn-danger" onClick={() => props.deleteProductHandler(props.details.id)}>Delete</span>
            </div>
        </div>
    )
}

export default Product