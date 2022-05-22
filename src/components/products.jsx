import React, { Component } from 'react';
import Product from './product';



class Products extends Component {
    state = { 
        products : [
            {id : 1 , count :1 , productName : 'phone'},
            {id : 2 , count :6 , productName : 'laptop'},
            {id : 3 , count :2 , productName : 'airpods'},
            {id : 4 , count :5 , productName : 'imac'},
            {id : 5 , count :0 , productName : 'iphone'},
        ]
     } 
    render() { 
        return (
            <>
           {this.state.products.map((p,index) => (
               <Product onDelete={this.handleDelete} id={p.id } key = {index} productName ={p.productName} count ={p.count}>LINKAP</Product>
           ))}
            </>
          
        );
    }
    handleDelete = (productId) => {
     const newProducts = this.state.products.filter(p => p.id !== productId)
        this.setState({products : newProducts});
    }
}
 
export default Products;