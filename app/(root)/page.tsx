import sampleData from "@/db/sample-data";
import ProductList from "@/components/shared/product/productList";

export const metadata = {
  title: "Home",
};

const Homepage = () => {
  return (
    <>
      <ProductList data={sampleData.products} title="Newest Arrivals" />
    </>
  );
};

export default Homepage;
