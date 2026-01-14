import { useEffect, useState } from "react";
import api from "../services/api";

export default function ApiData() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("products/")
      .then((res) => {
        console.log(res.data); // see response
        setProducts(res.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <h1>Products</h1>

      {products.map((p) => (
        <div key={p.id}>
          <p>{p.name}</p>
          <p>₹ {p.price}</p>
        </div>
      ))}
    </div>
  );
}
