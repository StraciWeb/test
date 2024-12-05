import { useState, useEffect } from "react";
import { Product } from "./product";
import { IProduct } from "./models";
import {AxiosError} from "axios";


function MainContent() {

    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [filter, setFilter] = useState<IProduct[]>([]);

    async function getProducts ()  {

        try {
            setError('');
            setLoading(true);
            let res =  await fetch('https://fakestoreapi.com/products');
            let result = await res.json();
            setProducts(result);
            setFilter(result); 
            setLoading(false);
        } catch (e : unknown) {
            const error = e as AxiosError;
            setLoading(false);
            setError(error.message);
        }
     
    }
   
    useEffect(() => {
        getProducts();
      }, []);

    return(  
       <div>
            <div className="main">
                {loading && <p>Incarcare produse....</p>}
                {error && <p>{error}</p>}
                <h2>Lista Produselor</h2>
                <div className="filters">
                    <h3>Filtreaza</h3>
                <button  onClick={() => {setProducts(filter.filter((item) => item.category === "men's clothing"))} }>Filtreaza Barbati</button>
                <button  onClick={() => {setProducts(filter.filter((item) => item.category === "women's clothing"))} }>Filtreaza Femei</button>
                <button  onClick={() => {setProducts(filter.filter((item) => item.category === "jewelery"))}}>Filtreaza Bijuterii</button>
                <button  onClick={() => {setProducts(filter.filter((item) => item.category === "electronics"))}}>Electrocasnice</button>
                <button  onClick={() => {setProducts(filter) }}>Toate</button>
                </div>
                    <div className="products__wrapper">
                        {products.map(item =>  <Product product = {item} key={item.id} />)}
                </div>
            </div>
       </div>
    )
}

export default MainContent;