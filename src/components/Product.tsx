import { IProduct } from "../models"

interface ProductProps {
    product : IProduct
}

export function Product (props: ProductProps){
    console.log(props)
    return (
        <div
        className="border py-2 px-4 rounded flex flex-col items-center mb-2">
            <img src = {props.product.image} className="w-1/6" alt={props.product.title}/>
            {props.product.title}
            <span className="font-bold">{props.product.price}</span>
            <p>{props.product.description}</p>
        </div>
    )
}