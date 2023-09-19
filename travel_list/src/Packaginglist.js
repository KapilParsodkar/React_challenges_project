import { useState } from "react";
import Item from "./Item";

export default function Packaginglist(props) {
  const [sorted, setsort] = useState("input");

  let sorteditems;
  if (sorted === "input") {
    sorteditems = props.items;
  }

  if (sorted === "description") {
    sorteditems = props.items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }

  if (sorted === "packed") {
    sorteditems = props.items
      .slice()
      .sort((a, b) => Number(b.packed) - Number(a.packed));
  }
  return (
    <diV className="list">
      <ul>
        {sorteditems.map((item) => (
          <Item
            item={item}
            ondelete={props.ondelete}
            ontoggle={props.ontoggle}
            key={item.id}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sorted} onChange={(e) => setsort(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description order</option>
          <option value="packed">Sort by packed order</option>
        </select>
        <button onClick={props.Clearlist}>Clear List</button>
      </div>
    </diV>
  );
}
