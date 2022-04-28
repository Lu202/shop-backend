import Product from "./Category";

export default function CategoryGrid({ kategories }) {
  return (
    <>
      {kategories.map((category) => {
        return (
          <li key={category.id}>
            <Product name={category.name} description={category.discription} />
          </li>
        );
      })}
    </>
  );
}
