
// Filter movies function
function Filter({
  searchTitle,
  setSearchTitle,
  searchRating,
  setSearchRating,
}) {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      <input
        type="text"
        placeholder="Search by title"
        value={searchTitle}
        onChange={(e) => setSearchTitle(e.target.value)}
        className="border outline-none px-4 py-2 rounded w-full"
      />
      <select
        value={searchRating}
        onChange={(e) => setSearchRating(Number(e.target.value))}
        className="border px-4 py-2 rounded w-full md:w-1/3"
      >
        <option value={0}>All Ratings</option>
        {[1, 2, 3, 4, 5].map((rate) => (
          <option key={rate} value={rate}>
            {rate} Star{rate > 1 && "s"}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filter;
