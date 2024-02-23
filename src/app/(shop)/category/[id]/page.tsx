export const revalidate = 60; //mantener cache 60 segundos

import { getPaginatedProductsWithImages } from "@/actions";
import { Pagination, ProductGrid } from "@/components";
import { Title } from "@/components/ui/title/Title";
import { Gender } from "@prisma/client";

interface Props {
  params: {
    id: string;
  };
  searchParams: {
    page?: string;
  };
}

const CategoryPage = async ({ params, searchParams }: Props) => {
  const { id: gender } = params;

  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const { products, totalPages } = await getPaginatedProductsWithImages({
    page,
    gender: gender as Gender,
  });

  const labels: Record<string, string> = {
    men: "para hombres",
    women: "para mujeres",
    kid: "para niños",
    unisex: "para todos",
  };

  // if (products.length === 0) redirect("/");

  // if (id === "kids") {
  //   notFound();
  // }

  return (
    <>
      <Title
        title={`Artículos de ${labels[gender]}`}
        subtitle="Todos los productos"
        className="mb-2"
      />

      <ProductGrid products={products} />

      <Pagination totalPages={totalPages || 0} />
    </>
  );
};

export default CategoryPage;
