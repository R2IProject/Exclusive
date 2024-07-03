import { AllButton, BestProduct, CateIma, Category, Crousel, FlashSales, Line } from "@/components/Item";

export default function Home() {
  return (
    <main className="min-h-screen flex-col justify-between px-24 py-8">
      <Crousel />
      <FlashSales />
      <AllButton />
      <Line />
      <Category />
      <Line />
      <BestProduct />
      <CateIma />
    </main>
  );
}
