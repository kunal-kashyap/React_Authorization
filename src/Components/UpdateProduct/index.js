import React, { Component } from 'react'
import axios from '../../axios'

import Input from '../common/Input'
import Button from '../common/Button'
import get from 'lodash/get'


class EditProduct extends Component {

    state = {
        productName: undefined,
        productPrice: undefined,
        productId: undefined,
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return { 
            productName: get(prevState,'productName', get(nextProps,'location.state.productDetail.name')),
            productPrice: get(prevState,'productPrice', get(nextProps,'location.state.productDetail.price')),
            productId: get(prevState,'productId', get(nextProps,'location.state.productDetail.id')),
        }
    }

    saveForm = () => {
        const {productName, productPrice, productId} = this.state;

        let params = {
            name: productName,
            price: productPrice
        }

        axios.patch(`/products/${productId}`, params)
             .then((resp) => {
                    if(resp.status === 200) {
                        alert('Update succesfull!')
                        this.props.history.push('/')
                    }
             })
             .catch(err => console.log("Error Occurred", err))
    }

    changeHandler = (name, value) => {
        this.setState({[name]: value})
    }

    render() {
        let {productName, productPrice} = this.state;
        return(
            <form className="form">
                    <h3>Edit Product</h3>
                    <div className="form-block">
                        <Input type="text" name="productName" value={productName} label="Product Name" changeHandler={this.changeHandler} />
                        
                        <Input type="text" name="productPrice" value={productPrice} label="Product Price" changeHandler={this.changeHandler} />

                        <Button type="button" clickHandler={this.saveForm} value="Save Product"/>
                    </div>
                </form>
        )
    }
}

export default EditProduct