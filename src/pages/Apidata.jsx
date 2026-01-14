import { useEffect, useState } from "react";
import api from "../services/api";

export default function ApiData() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api.get("products/")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data.data);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load products");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h3>Loading products...</h3>;
  }

  if (error) {
    return <h3 style={{ color: "red" }}>{error}</h3>;
  }

  return (
    <div>
      <h1>Products</h1>

      {products.length === 0 ? (
        <p>No products found</p>
      ) : (
        products.map((p) => (
          <div key={p.id} style={{ borderBottom: "1px solid #ccc", padding: "10px" }}>
            <p>{p.name}</p>
            <p>₹ {p.price}</p>
          </div>
        ))
      )}
    </div>
  );
}
