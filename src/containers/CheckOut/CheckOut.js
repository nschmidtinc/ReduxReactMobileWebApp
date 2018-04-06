import React, { Component } from "react";

import CheckOut from "../../components/Burger/CheckOut/checkOut";

class CheckOutComp extends Component {
  state = {
    ingredients: {
      meat: 1,
      cheese: 1,
      salad: 1
    }
  };
  render() {
    return (
      <div>
        <CheckOut
          ingredients={this.props}
          checkoutCanceled={this.props.checkoutCanceled}
          checkoutContinued={this.props.checkoutContinued}
        />
      </div>
    );
  }
}

export default CheckOutComp;
