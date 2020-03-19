import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'

import './style.css'
import ShowProduct from '../../ShowProducts'
import EditProduct from '../../UpdateProduct'
import AddProduct from '../../AddProduct'

const Header = (props) => {
    return (
        <div className="header">
            <nav className="navbar navbar-default">
                <ul className="list-group">
                    <Link className="list-group-item" to="/show-product">Show Products</Link>
                    <Link className="list-group-item" to="/add-product">Add Product</Link>
                </ul>
            </nav>

            <Switch>
                <Route path="/show-product" exact component={ShowProduct}/>
                <Route path="/edit-product" exact component={EditProduct}/>
                <Route path="/add-product" exact component={AddProduct}/>
            </Switch>
        </div>
    )
}

export default Header