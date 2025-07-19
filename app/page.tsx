import Image from "next/image";
import { fetchResources } from "@/lib/resources";
import ResourceTable from "@/components/ResourceTable";
import Charts from "@/components/ui/Charts";
import TotalCard from "@/components/ui/TotalCard";
import AddEquipmentForm from "@/components/AddEquipmentForm";
import AIChat from "@/components/AIChat";

export default async function HomePage() {
  const resources = await fetchResources();

  const totalItems = resources.reduce((sum, item) => sum + item.quantity, 0);
  const totalValue = resources.reduce(
    (sum, item) => sum + item.itemValue * item.quantity,
    0
  );

  const averageQuantity = totalItems / (resources.length || 1);
  const distinctProducts = new Set(resources.map((item) => item.productName)).size;

  return (
    <main className="container mx-auto px-4 py-8 space-y-8 max-w-7xl">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex-1 space-y-2">
          <h1 className="text-3xl font-extrabold text-gray-900">
            Medical Equipment Dashboard
          </h1>
          <p className="text-gray-900">
            Track and manage your equipment inventory efficiently.
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src="/illustrations/hero-medical.svg"
            alt="Hero Illustration"
            width={300}
            height={300}
            priority
          />
        </div>
      </section>

      {/* Summary Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <TotalCard label="Total Items" value={totalItems.toString()} />
        <TotalCard label="Total Value" value={`$${totalValue.toFixed(2)}`} />
        <TotalCard label="Average Quantity" value={averageQuantity.toFixed(2)} />
        <TotalCard label="Distinct Products" value={distinctProducts.toString()} />
      </section>

      {/* Add Equipment Form - full width */}
      <section>
        <AddEquipmentForm />
      </section>

      {/* AI Chat Section - full width, matches Add Equipment */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        </h2>
        <AIChat />
      </section>

      {/* Equipment Table */}
      <section>
        <ResourceTable data={resources} />
      </section>

      {/* Charts */}
      <section>
        <Charts data={resources} />
      </section>
    </main>
  );
}
