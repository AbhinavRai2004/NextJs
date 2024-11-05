import { Metadata } from "next";
//dynamic metadata configuration
type Props = {
  params: {
    productId: string;
  };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Product Details - ${params.productId}`,
    description: `View product details for ${params.productId}`
  };
};

export default function Products({ params }: Props) {
  return <h1>Product {params.productId} details</h1>;
}
