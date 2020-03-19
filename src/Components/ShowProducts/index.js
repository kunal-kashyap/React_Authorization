import React, { Component } from 'react'
import axios from '../../axios'

class ShowProduct extends Component{

    componentDidMount() {
        this.loadhandler();
    }

    loadhandler = () => {
        axios.get('/products')
             .then((resp) => {console.log(resp.data)})
    }

    render() {
        return(
            <div className="products-list">
                <div className="container">
                    <div className="col-md-3 product">
                        <h4>IUYw87</h4>
                        <p>phone</p>
                        <div>8000</div>
                        <div>
                            <span>Edit</span>
                            <span>Delete</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default ShowProduct