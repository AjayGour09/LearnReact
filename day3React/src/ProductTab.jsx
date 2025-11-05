import Product from "./Product";
function ProductTab(){
    let option = ["Ajay","Nitesh" , "Anurag"]
    return(
        <div>
            <Product title="Phone" price="30000"  features ={option}/>
            <Product title="Laptop" price="30000" />
            <Product title="Charge" price="30000" />
        </div>
    );
}
export default ProductTab