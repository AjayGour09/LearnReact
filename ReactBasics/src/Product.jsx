import "./Product.css"
function Product({title,price}){
    return(
       <div className="Product">
        <h1>{title}</h1>
        <h2>price :{price}</h2>
        <p>{title}</p>
       </div>
    )
}

export default Product;