import { Children, Component } from 'react';

import './products.css';

class Product extends Component {
   state = {
    count : this.props.count,
}
    render() { 
        const {productName} = this.props; 
        return (
            <div>
           
            <span className='m-2 , text-info ,text text-dark'>{productName}</span>
            <span className='m-2 , badge bg-primary'>{this.format()}</span>
            <button onClick={this.handleIncrement}  className='m-2 , badge bg-success'>+</button>
            <button onClick={this.handleDecrement}  className='m-2 , badge bg-warning'>-</button>
            <button onClick={this.handleDelete}  className='m-2 , badge btn-large btn-danger'>delete</button>
            <p>{this.props.children}</p>
            </div>
    ); }

    handleIncrement = ()=>{
        const {count} = this.state; 
        console.log('increment');
        this.setState({count: count +1});
    }

    handleDecrement = ()=>{
        const {count} = this.state; 
        console.log('decrement');
        this.setState({count:count -1});
    }

    handleDelete = ()=>{
    this.props.onDelete(this.props.id);
        
    }

    format(){
        if (this.state.count === 0){
            return 'zero';
        }else{
            return this.state.count;
        }
        }
    }

export default Product;
