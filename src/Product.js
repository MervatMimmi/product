import React, {Component} from 'react';

class Product extends Component {
    constructor(props){
        super(props);
        this.state = {qty: 0};

        this.buy = this.buy.bind(this);
        this.show = this.show.bind(this);
    }

    buy(){
        this.setState({qty: this.state.qty +1});
        this.props.handleTotal(this.props.price);
    }

    show(){
        this.props.handleShow(this.props.name);
    }

    render() {
        return (
            <div>
                <p>{this.props.name} - ${this.props.price}</p>
                <button onClick = {this.buy}>Buy</button>
                <button onClick = {this.show}>Show</button>
                <h3>Qty: {this.state.qty} item</h3>
                <hr/>
            </div>
        )
    }
}

export default Product;