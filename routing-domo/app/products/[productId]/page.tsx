import { Metadata } from "next";
//dynamic metadata configuration
type Props = {
  params: {
    productId: string;
  };
};

export const generateMetadata = async ({
  params
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${params.productId} metadata`);
    }, 100);
  });
  return {
    title: `Product ${title}`,
    description: `View product details for ${params.productId}`
  };
};

export default function Products({ params }: Props) {
  return <h1>Product {params.productId} details</h1>;
}
