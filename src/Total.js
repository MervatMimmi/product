import React, {Component} from 'react';
import Product from './Product';

class Total extends Component{
    render(){
        return (
            <div>
                <h3>Total Cash: {this.props.total}</h3>
            </div>
        );
    }
}

export default Total;