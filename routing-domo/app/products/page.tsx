import Link from "next/link";

export default function Products() {
  const productId = 100;
  return (
    <>
      <div className="products">
        <h1>Product List</h1>
        <h2>
          <Link href="products/1">Product 1</Link>
        </h2>
        <h2>
          <Link href="products/2">Product 2</Link>
        </h2>
        <h2>
          <Link href="products/3">Product 3</Link>
        </h2>
        <h2>
          <Link href={`products/${productId}`}>Product {productId}</Link>
        </h2>
      </div>
    </>
  );
}
