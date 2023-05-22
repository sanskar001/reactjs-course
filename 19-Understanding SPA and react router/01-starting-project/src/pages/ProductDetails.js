import { useParams } from "react-router-dom";

// - "useParams" => Returns an object of the params for the route rendered.

const ProductDetails = () => {
  const params = useParams();

  console.log(params.productId);

  return (
    <section>
      <h1>Product Detail</h1>
      <p>{params.productId}</p>
    </section>
  );
};

export default ProductDetails;
