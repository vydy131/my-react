import { useState } from "react"
import { IProduct } from "../models"

interface ProductProps {
    product : IProduct
}

export function Product (props: ProductProps){
    const [details, setDetails] = useState(false)

    const btnClassName = details ? "bg-purple-400" : "bg-yellow-400"
    const btnClasses = ['py-2 px-4 border', btnClassName]

    return (
        <div
        className="border py-2 px-4 rounded flex flex-col items-center mb-2">
            <img src = {props.product.image} className="w-1/6" alt={props.product.title}/>
            {props.product.title}
            <span className="font-bold">{props.product.price}</span>
            {/* <button 
            className="py-2 px-4 border bg-yellow-400"
            onClick={() => details === false? setDetails(true) : setDetails (false)}>
                Show Details </button> */}
            {/* <button 
            className="py-2 px-4 border bg-yellow-400"
            onClick={() => setDetails(true)}>
                Show Details </button>
                <button 
            className="py-2 px-4 border bg-purple-400"
            onClick={() => setDetails(false)}>
                Hide Details </button> */}
            <button 
            className={btnClasses.join(' ')}
            onClick={() => setDetails(prev => !prev)}>
                {details ? 'Hide details':'Show details'} </button>
            {details && <div>
                <p>{props.product.description}</p>
                <p>Rate <span style={{fontWeight: 'bold'}}>{props.product.rating.rate}</span></p>
                </div>}
        </div>
    )
}