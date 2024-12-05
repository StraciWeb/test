import { IProduct } from "./models"

interface ProductProps {
    product: IProduct
}

export function Product (props : ProductProps) {
    return (
  
            <div className="product">
                <p>{props.product.title}</p>
                <img src={props.product.image} alt={props.product.title} />
                <p>{props.product.description}</p>
                <p>Pretul: {props.product.price}</p>
                <button>Add to cart</button>
            </div>

    )
}