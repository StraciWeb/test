import { IProduct } from "./models"

interface ProductProps {
    product: IProduct
}

export function Product (props : ProductProps) {
    return (
  
            <div className="product__cart">
                <p>{props.product.title}</p>
                <img src={props.product.image} alt={props.product.title} />
                <p>{props.product.description}</p>
                <p>Pretul: {props.product.price}</p>
                <button>Remove from cart</button>
            </div>

    )
}