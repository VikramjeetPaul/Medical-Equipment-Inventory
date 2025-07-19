import { Card, CardContent } from "../components/ui/card";

export default function SummaryCards({ data }: { data: any[] }) {
  const totalItems = data.length;
  const totalQuantity = data.reduce((sum, item) => sum + item.quantity, 0);
  const totalValue = data.reduce((sum, item) => sum + item.itemValue * item.quantity, 0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card><CardContent className="p-4"><p className="text-sm">Total Items</p><h2 className="text-xl font-bold">{totalItems}</h2></CardContent></Card>
      <Card><CardContent className="p-4"><p className="text-sm">Total Quantity</p><h2 className="text-xl font-bold">{totalQuantity}</h2></CardContent></Card>
      <Card><CardContent className="p-4"><p className="text-sm">Total Value</p><h2 className="text-xl font-bold">${totalValue.toFixed(2)}</h2></CardContent></Card>
    </div>
  );
}
