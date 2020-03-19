import React, { Component } from 'react'
import axios from '../../axios'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';

import { fetchProducts } from './APIs/action'
import Product from './Product'

class ShowProduct extends Component{

    state={
        productsList: []
    }

    componentDidMount() {
        this.loadhandler();
    }

    loadhandler = () => {
        const {fetchProducts} = this.props;
        axios.get('/products')
             .then((resp) => {
                 resp.status === 200 && fetchProducts(get(resp,'data',[]))
             })
             .catch(err => console.log("Error Occurred", err))
    }

    editProductHandler = (productId) => {
        const {productsList} = this.props;

        let productDetail = productsList.find((item) => item.id === productId)

        this.props.history.push('/edit-product', {productDetail})
    }
    
    deleteProductHandler = (productId) => {

        const {productsList} = this.props;

        let productDetail = productsList.find((item) => item.id === productId)

        this.props.history.push('/delete-product', {productDetail})

        
    }

    render() {
        const {productsList} = this.props;

        let Products = !isEmpty(productsList) && productsList.map((product) => {
            return (
                <Product key={product.id} details={product} editProductHandler={this.editProductHandler} deleteProductHandler={this.deleteProductHandler} />
            )
        })

        return(
            <div className="products-list">
                <div className="container">
                    {Products}
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return { productsList: get(state, 'ProductsReducer.productsList') };
};

const mapDispatchToProps = dispatch => {
    return {
        ...bindActionCreators({
            fetchProducts
        }, dispatch),
    }
};

export default (connect(mapStateToProps, mapDispatchToProps)(ShowProduct))