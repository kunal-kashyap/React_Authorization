import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'

import './Header/style.css'
import ShowProduct from '../ShowProducts'

const Header = (props) => {
    return (
        <div className="header">
            <nav className="navbar navbar-default">
                <ul className="list-group">
                    <Link className="list-group-item" to="/">Show Products</Link>
                    <Link className="list-group-item" to="/add-product">Add Product</Link>
                </ul>
            </nav>

            <Switch>
                <Route path="/" component={ShowProduct}/>
                <Route path="/" component={ShowProduct}/>
                <Route path="/" component={ShowProduct}/>
                <Route path="/" component={ShowProduct}/>
            </Switch>
        </div>
    )
}

export default Header