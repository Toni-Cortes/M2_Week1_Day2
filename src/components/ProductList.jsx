function ProductList(props) {
  return (
    <div>
      <div className="product">
        <h2>{props.title}</h2>
        <img src={props.imgLink} alt='' />
        <p>{props.price}</p>
      </div>
    </div>
  );
}

export default ProductList;