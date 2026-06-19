import sampleData from "@/db/sample-data";
import ProductList from "@/components/shared/product/productList";
import { getLatestProducts } from "@/lib/actions/product.actions";

export const metadata = {
  title: "Home",
};

const Homepage = async () => {
  const latestProducts = await getLatestProducts();

  return (
    <>
      <ProductList data={latestProducts} title="Newest Arrivals" />
    </>
  );
};

export default Homepage;
