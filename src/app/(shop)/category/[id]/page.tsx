import { ProductGrid, Title } from "@/components";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

interface Props {
  params: { id: string };
}
const productsSeed = initialData.products;
export default function CategoryPage({ params }: Props) {
  const { id } = params;
  const products = productsSeed.filter((prod) => prod.gender == id);
  
  if (id != "kid" && id != "women" && id != "men") {
    notFound();
  }
  let label = {
    title: "",
    subtitle: "",
  };
  switch (id) {
    case "kid":
      label.title = "Niños";
      label.subtitle = "Productos para niños";
      break;
    case "men":
      label.title = "Hombres";
      label.subtitle = "Productos para Hombres";
      break;
    case "women":
      label.title = "Mujeres";
      label.subtitle = "Productos para Mujeres";
      break;

    default:
      break;
  }
  return (
    <div>
      <>
        <Title title={label.title} subtitle={label.subtitle}></Title>
        <ProductGrid products={products}></ProductGrid>
      </>
    </div>
  );
}
