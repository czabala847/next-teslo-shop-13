import { ProductGrid } from "@/components";
import { Title } from "@/components/ui/title/Title";
import { Category } from "@/interfaces";
import { initialData } from "@/seed/seed";

const seedProducts = initialData.products;

interface Props {
  params: {
    id: Category;
  };
}

const CategoryPage = ({ params }: Props) => {
  const { id } = params;

  const products = seedProducts.filter((product) => product.gender === id);

  const labels: Record<Category, string> = {
    men: "para hombres",
    women: "para mujeres",
    kid: "para niños",
    unisex: "para todos",
  };

  // if (id === "kids") {
  //   notFound();
  // }

  return (
    <>
      <Title
        title={`Artículos de ${labels[id]}`}
        subtitle="Todos los productos"
        className="mb-2"
      />

      <ProductGrid products={products} />
    </>
  );
};

export default CategoryPage;
