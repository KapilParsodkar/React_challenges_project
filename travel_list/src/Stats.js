export default function Stats({ items }) {
  if (items.length === 0) {
    return (
      <p className="stats">
        <em>Start adding items to your packing list 💼</em>
      </p>
    );
  }
  const numitems = items.length;
  const numpacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numpacked / numitems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "you got everything ready to go ✈️"
          : ` 💼You have ${numitems} items on your list,a nd you already packed
        ${numpacked}(${percentage}%)`}
      </em>
    </footer>
  );
}
