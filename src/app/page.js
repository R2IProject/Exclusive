import {
  AllButton,
  BestProduct,
  CategoryImage,
  Category,
  Crousel,
  FlashSales,
  Line,
  ExploreProduct,
  FeaturedProduct,
  Footer
} from "@/components/Item";

export default function Home() {
  return (
    <>
      <main className="min-h-screen flex-col justify-between px-24 py-8">
        <Crousel />
        <FlashSales />
        <AllButton />
        <Line />
        <Category />
        <Line />
        <BestProduct />
        <CategoryImage />
        <ExploreProduct />
        <AllButton />
        <FeaturedProduct />
      </main>
      
    </>
  );
}
