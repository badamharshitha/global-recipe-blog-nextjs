import { useState } from "react";
import { recipes } from "../../data/recipes";
import Link from "next/link";

export default function RecipesPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const filtered = recipes.filter((recipe) => {
    const matchesSearch = recipe.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "all" || recipe.slug.includes(category);

    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <h1>All Recipes</h1>

      <input
        data-testid="search-input"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        data-testid="category-filter"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="all">All</option>
        <option value="paella">Paella</option>
        <option value="croissant">Croissant</option>
      </select>

      <div>
        {filtered.map((recipe) => (
          <div key={recipe.slug} data-testid="recipe-card">
            <Link href={`/recipes/${recipe.slug}`}>
              {recipe.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
