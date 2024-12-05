import { useState, useEffect } from "react";
import { Product } from "./Product-cart";
import { IProduct } from "./models";


function ShopCart() {

    const [products, setProducts] = useState<IProduct[]>([])

    async function getProducts ()  {
        let res =  await fetch('https://fakestoreapi.com/products?limit=5');
        let result = await res.json();
        setProducts(result); 
    }

    useEffect(() => {
        getProducts();
      }, []);

      let productPrices : number[] = [];
      products.forEach(item => productPrices.push(item.price));

        const initialValue = 0;
        const sumWithInitial = productPrices.reduce(
            (accumulator, currentValue) => accumulator + currentValue, initialValue,
        );


    return(
        <div>
            <h2>ShopCart</h2>
            <div className="cart__rproducts-wrapper">
                <div className="cart__product">
                    {products.map(item =>  <Product product = {item}  key={item.id}/>)}
                </div>
                <p>Suma Totala: {sumWithInitial}</p>
            </div>
        </div>
    )
}

export default ShopCart;