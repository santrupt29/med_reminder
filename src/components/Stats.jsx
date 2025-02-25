const Stats = ({ stats }) => (
    <div className="max-w-6xl mx-auto mb-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 rounded-lg shadow-md bg-gray-800">
        {Object.entries(stats).map(([key, value]) => (
          <div key={key} className="p-4 rounded-md bg-blue-50 border border-blue-100">
            <h3 className="font-medium text-slate-700">{key.charAt(0).toUpperCase() + key.slice(1)}</h3>
            <p className="text-2xl font-semibold text-blue-600">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
  
  export default Stats;