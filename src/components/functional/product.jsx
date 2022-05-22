import {useState} from 'react';


const Product = ({productName,count :propCount ,onDelete,id }) => {

    const [count,setCount] = useState(propCount);
    
    return (
        <div>
       
        <span className='m-2 , text-info ,text text-dark'>{productName}</span>
        <span className='m-2 , badge bg-primary'>{format()}</span>
        <button onClick={handleIncrement}  className='m-2 , badge bg-success'>+</button>
        <button onClick={handleDecrement}  className='m-2 , badge bg-warning'>-</button>
        <button onClick={handleDelete}  className='m-2 , badge btn-large btn-danger'>delete</button>
     
        </div>

    );
    function handleIncrement (){
   
        console.log('increment');
        setCount(count +1);
    }

    function handleDecrement (){
   
        console.log('decrement');
        setCount(count -1);
    }

    function handleDelete (){
      onDelete(id);
        
    }






 function format(){
        if (count === 0){
            return 'zero';
        }else{
            return count;
        }
        }
}
 
export default Product;