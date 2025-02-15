import type { Category as CategoryType } from "../data/menuData";
import MenuItem from "./MenuItem";

export default function Category({ category }: { category: CategoryType }) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl text-black font-bold mb-4">{category.name}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {category.items.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
