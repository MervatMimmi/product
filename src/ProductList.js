import React, {Component} from 'react';
import Product from './Product';
import Total from './Total';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {total : 0};
        this.calculateTotal = this.calculateTotal.bind(this);
    }

    showProduct(name){
        alert('You selected ' + name );
    }

    calculateTotal(price){
        this.setState({total: this.state.total + price});
        alert(this.state.total);
    }

    render(){
        return(
            <div>
                <Product 
                    name = 'Android' 
                    price = {121} 
                    handleShow = {this.showProduct}
                    handleTotal = {this.calculateTotal}/>
                <Product 
                    name = 'Apple' 
                    price= {123}
                    handleShow = {this.showProduct}
                    handleTotal = {this.calculateTotal}/>
                <Product 
                    name = 'Nokia' 
                    price= {65}
                    handleShow = {this.showProduct}
                    handleTotal = {this.calculateTotal}/>
                <Total total = {this.state.total} />
            </div>
        )
    }
}

export default ProductList