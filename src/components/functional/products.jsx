import Product from './product';
import { useState } from 'react';

const Products= () => {
  const [products,setProducts] = useState([
    {id : 1 , count :1 , productName : 'phone'},
    {id : 2 , count :6 , productName : 'laptop'},
    {id : 3 , count :2 , productName : 'airpods'},
    {id : 4 , count :5 , productName : 'imac'},
    {id : 5 , count :0 , productName : 'iphone'},
])
    return ( 

        // <>
        // <Product className = 'laptop'/>
        // <Product className = 'imac'/>
        // <Product className = 'airpods'/>
        // </>
        <>
        {products.map((p,index) => (
            <Product onDelete={handleDelete} id={p.id} key={index} productName={p.productName} count={p.count}>
                <p>linkap </p>
            </Product>
        ))}
        </>
     );
    function handleDelete (productId) {
        const newProducts = products.filter(p => p.id !== productId);
        setProducts(newProducts);
        
    }
}
 
export default Products ;