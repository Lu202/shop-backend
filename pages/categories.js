import getCategories from "../src/services/get-categories";
import CategoryGrid from "../src/components/CategoryGrid";

export function getStaticProps() {
  const categories = getCategories();
  return {
    props: { category },
  };
}

export default function Categories({ category }) {
  return (
    <>
      <h1>Kategorie</h1>
      <CategoryGrid categories={category} />
    </>
  );
}
