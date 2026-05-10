// components/FilterSection.jsx
export default function FilterSection() {
  const selectStyles =
    'w-full p-4 border-none bg-transparent text-gray-500 uppercase text-xs font-bold focus:outline-none cursor-pointer';

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-gray-200 rounded-lg mb-8 bg-white shadow-sm">
      <div className="border-b md:border-b-0 md:border-r border-gray-200">
        <select className={selectStyles}>
          <option>Category</option>
          <option>Adventure</option>
          <option>Relaxation</option>
        </select>
      </div>
      <div className="border-b md:border-b-0 md:border-r border-gray-200">
        <select className={selectStyles}>
          <option>Price Range</option>
          <option>$1000 - $3000</option>
          <option>$3000+</option>
        </select>
      </div>
      <div>
        <select className={selectStyles}>
          <option>Sort By</option>
          <option>Latest</option>
          <option>Price: Low to High</option>
        </select>
      </div>
    </div>
  );
}
