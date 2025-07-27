export default function JobTrendCard({ data }) {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h3 className="text-lg font-semibold text-black mb-2">{data.title}</h3>
      <p className="text-sm text-gray-700 mb-1">Lokasi: {data.location}</p>
      <p className="text-sm text-green-600 font-medium">
        Pertumbuhan: {data.growth}
      </p>
    </div>
  );
}
