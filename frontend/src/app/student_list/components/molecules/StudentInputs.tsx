export default function StudentInputs() {
  return (
    <form action="" className="flex gap-3">
      <label className="flex items-center gap-3 cursor-pointer">
        <span className="text-blue-800 font-medium">¿Asistio?</span>
        <input
          type="checkbox"
          className="w-5 h-5 text-blue-700 accent-blue-700 focus:ring-2 focus:ring-blue-700 rounded"
        />
      </label>
      <input
        type="number"
        className="w-40 px-4 py-2 text-base text-gray-800 bg-gray-100 border-2 border-blue-500 rounded-lg focus:outline-none focus:border-blue-700 no-spinner"
        placeholder="Nota"
      />
    </form>
  );
}
