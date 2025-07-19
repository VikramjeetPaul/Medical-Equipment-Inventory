interface TotalCardProps {
  label: string;
  value: string;
}

export default function TotalCard({ label, value }: TotalCardProps) {
  return (
    <div className="bg-gradient-to-br from-blue-100 to-blue15 p-6 rounded-xl shadow-md flex flex-col items-center">
      <p className="text-gray-900 font-semibold text-lg">{label}</p>
      <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
    </div>
  );
}
