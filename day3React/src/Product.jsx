import App from "./ProductTab";
function Product({title,price,fea}) {
  return (
    <div className="Product">
      <h1>{title}</h1>
      <p>price = {price} </p>
      <p>features = {features}</p>
    </div>
  );
}
export default Product;
