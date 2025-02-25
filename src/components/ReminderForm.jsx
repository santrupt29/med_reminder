const ReminderForm = ({ medicine, setMedicine, time, setTime, dosage, setDosage, category, setCategory, categories, setReminder }) => (
    <div className="rounded-lg shadow-md bg-gray-800">
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-lg font-medium text-white">Add Reminder</h2>
      </div>
      <div className="p-4 space-y-4">
        <input
          type="text"
          value={medicine}
          onChange={(e) => setMedicine(e.target.value)}
          placeholder="Medicine Name"
          className="w-full p-2 rounded-md bg-gray-700 text-white"
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full p-2 rounded-md bg-gray-700 text-white"
        />
        <input
          type="text"
          value={dosage}
          onChange={(e) => setDosage(e.target.value)}
          placeholder="Dosage"
          className="w-full p-2 rounded-md bg-gray-700 text-white"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 rounded-md bg-gray-700 text-white"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <button
          onClick={setReminder}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md"
        >
          Add Reminder
        </button>
      </div>
    </div>
  );
  
  export default ReminderForm;