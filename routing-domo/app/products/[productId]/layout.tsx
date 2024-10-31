export default function ProductDetailsLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <h1>Feature product</h1>
    </>
  );
}
