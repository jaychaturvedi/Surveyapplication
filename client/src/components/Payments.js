import StripeCheckout from 'react-stripe-checkout'
import React , {Component } from 'react'
import {connect} from "react-redux";
import * as actions from '../actions'

class Payments extends Component {
    render(){
        return (
        <StripeCheckout 
            name = "SURVEY CREDIT"
            description = "5$ for 5 credit"
            amount ={500}
            token = {token => {
                console.log("in paymnt",token)
                this.props.handleToken(token)
                }
                
            }
            
                
            stripeKey = {process.env.REACT_APP_STRIPE_KEY}
        >
            <button className = "btn">Add credit</button>
        </StripeCheckout>
        )
    }
}

export default connect(null,actions)(Payments);