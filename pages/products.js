export default function products() {
  return <></>;
}
export function getStaticProps() {
  const products = getProduct();

  return {
    props: {products}
      

  };
}
 export default function({products}) {
     return (
         <>
         <h1>Products</h1>
         <ProductGrid products={product} />
         </>
     );
 }