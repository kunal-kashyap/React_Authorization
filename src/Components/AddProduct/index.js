import React, { Component } from 'react'
import axios from '../../axios'

import Input from '../common/Input'
import Button from '../common/Button'


class AddProduct extends Component {

    state = {
        productName: null,
        productPrice: null,
        productId: null,
    }

    saveForm = () => {
        const {productName, productPrice, productId} = this.state;

        let params = {
            name: productName,
            price: productPrice,
            id: productId
        }

        axios.post(`/products`, params)
             .then((resp) => {
                    if(resp.status === 201) {
                        alert('Product Added Succesfully!')
                        this.props.history.push('/')
                    }
             })
             .catch(err => console.log("Error Occurred", err))
    }

    changeHandler = (name, value) => {
        this.setState({[name]: value})
    }

    render() {
        let {productName, productPrice, productId} = this.state;
        return(
            <form className="form">
                    <h3>Add Product</h3>
                    <div className="form-block">
                        <Input type="text" name="productName" value={productName} label="Product Name" changeHandler={this.changeHandler} />
                        <Input type="text" name="productPrice" value={productPrice} label="Product Price" changeHandler={this.changeHandler} />
                        <Input type="text" name="productId" value={productId} label="Product Id" changeHandler={this.changeHandler} />

                        <Button type="button" clickHandler={this.saveForm} value="Add Product"/>
                    </div>
                </form>
        )
    }
}

export default AddProduct