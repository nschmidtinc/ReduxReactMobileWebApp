import React, { Component } from "react";
import { Route } from "react-router-dom";
import CheckOut from "../../components/Burger/CheckOut/checkOut";
import ContactData from "./ContactData/ContactData";


class CheckOutComp extends Component {
  state = {
    ingredients: {
      meat: 1,
      cheese: 1,
      salad: 1
    }
  };

  componentWillMount () {
    const query = new URLSearchParams( this.props.location.search );
    const ingredients = {};
    let price = 0;
    for ( let param of query.entries() ) {
        // ['salad', '1']
        if (param[0] === 'price') {
            price = param[1];
        } else {
            ingredients[param[0]] = +param[1];
        }
    }
    this.setState( { ingredients: ingredients, totalPrice: price } );
}

checkoutCancelledHandler = () => {
    this.props.history.goBack();
}

checkoutContinuedHandler = () => {
    this.props.history.replace( '/checkout/contact-data' );
}

render () {
        return (
            <div>
                <CheckOut
                    ingredients={this.state.ingredients}
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler} />
                <Route 
                    path={this.props.match.path + '/contact-data'} 
                    render={(props) => (<ContactData ingredients={this.state.ingredients} price={this.state.totalPrice} {...props} />)} />
            </div>
        );
    }
}

export default CheckOutComp
