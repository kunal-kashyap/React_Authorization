import React from 'react'
import axios from '../../axios'
import get from 'lodash/get'

const DeleteProduct = (props) => {
    
    const deleteProduct = () => {
        axios.delete(`/products/${get(props,'location.state.productDetail.id')}`)
             .then((resp) => {
                    if(resp.status === 200) {
                        alert('Product deleted succesfully!')
                        props.history.push('/show-product')
                    }
             })
             .catch(err => console.log("Error Occurred", err))
    }

    const redirectToHomePage = () => {
        props.history.push('/show-product')
    }

    return(
        <React.Fragment>
            <div className="col-md-12">
                <p>Product Name : {get(props,'location.state.productDetail.name')}</p>
                <p>Product Price : ${get(props,'location.state.productDetail.price')}</p>
            </div>
            <h2>Are you Sure, you want to delete this product?</h2>
            <div className="btn-group">
                <button className="btn btn-success" onClick={deleteProduct}>Yes</button>
                <button className="btn btn-warning"  onClick={redirectToHomePage}>No</button>
            </div>
        </React.Fragment>
    )
}

export default DeleteProduct